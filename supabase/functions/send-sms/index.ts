import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const NOTIFICATIONAPI_CLIENT_ID = 'gg28cit19i2udm80g3ir1cgf9j';
const NOTIFICATIONAPI_CLIENT_SECRET = '7t29kkvylbgi8x5x4w5g43deo49ytndgaxnq57u0f5zu12zk2ae2xpaden';
const NOTIFICATIONAPI_BASE_URL = 'https://api.ca.notificationapi.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, projectType, message }: ContactFormData = await req.json();
    
    console.log('Received contact form:', { name, email, phone, projectType });

    // Send SMS notification using NotificationAPI REST API
    const smsMessage = `New Contact Form Submission!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nMessage: ${message}`;
    
    const notificationPayload = {
      notificationId: 'welcome_notification',
      user: {
        id: 'mattbegley224@gmail.com',
        number: '+19023027711'
      },
      mergeTags: {
        message: smsMessage
      }
    };

    const response = await fetch(`${NOTIFICATIONAPI_BASE_URL}/sender`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${NOTIFICATIONAPI_CLIENT_ID}:${NOTIFICATIONAPI_CLIENT_SECRET}`)}`
      },
      body: JSON.stringify(notificationPayload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NotificationAPI error:', errorText);
      throw new Error(`Failed to send SMS: ${errorText}`);
    }
    
    console.log('SMS sent successfully');

    return new Response(JSON.stringify({
      success: true
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  } catch (error: any) {
    console.error('Error sending SMS:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
});
