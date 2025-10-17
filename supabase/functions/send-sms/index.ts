import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import notificationapi from 'https://esm.sh/notificationapi-node-server-sdk@0.20.0';

const CLIENT_ID = Deno.env.get('NOTIFICATIONAPI_CLIENT_ID')?.trim();
const CLIENT_SECRET = Deno.env.get('NOTIFICATIONAPI_CLIENT_SECRET')?.trim();

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing NotificationAPI credentials');
  throw new Error('Missing NotificationAPI credentials');
}

notificationapi.init(
  CLIENT_ID,
  CLIENT_SECRET,
  {
    baseURL: 'https://api.ca.notificationapi.com'
  }
);

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

    await notificationapi.send({
      type: 'welcome_notification',
      to: {
        id: 'mattbegley224@gmail.com',
        number: '+19023027711'
      },
      parameters: {
        comment: message || 'testComment'
      },
      templateId: 'sms1'
    });
    
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
