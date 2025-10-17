import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';


const NOTIFICATIONAPI_CLIENT_ID = 'gg28cit19i2udm80g3ir1cgf9j';
const NOTIFICATIONAPI_CLIENT_SECRET = '7t29kkvylbgi8x5x4w5g43deo49ytndgaxnq57u0f5zu12zk2ae2xpaden';
const NOTIFICATIONAPI_BASE_URL = 'https://api.ca.notificationapi.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}


serve(async (req) => {
  console.log('=== Edge Function Invoked ===');
  console.log('Method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log('Received request body:', JSON.stringify(body, null, 2));
    
    const { name, email, phone, projectType, message }: ContactFormData = body;
    
    console.log('Parsed contact form data:', { name, email, phone, projectType });

    // Build SMS message
    const smsMessage = `New Contact Form Submission!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nMessage: ${message}`;
    
    console.log('SMS message prepared:', smsMessage);
    
    // Prepare NotificationAPI payload
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

    console.log('Sending to NotificationAPI with payload:', JSON.stringify(notificationPayload, null, 2));

    const authBasic = 'Basic ' + btoa(`${NOTIFICATIONAPI_CLIENT_ID}:${NOTIFICATIONAPI_CLIENT_SECRET}`);
    const url = `${NOTIFICATIONAPI_BASE_URL}/${NOTIFICATIONAPI_CLIENT_ID}/sender`;

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': authBasic,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationPayload),
    });

    let respBody: any = null;
    try {
      respBody = await resp.json();
    } catch (_) {
      try { respBody = await resp.text(); } catch { respBody = null; }
    }

    console.log('NotificationAPI HTTP status:', resp.status);
    console.log('NotificationAPI response body:', respBody);

    if (!resp.ok && resp.status !== 202) {
      throw new Error(typeof respBody === 'string' ? respBody : JSON.stringify(respBody));
    }

    console.log('SMS sent successfully!');

    return new Response(JSON.stringify({
      success: true,
      message: 'SMS sent successfully',
      status: resp.status,
      response: respBody
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  } catch (error: any) {
    console.error('=== ERROR in Edge Function ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
      errorType: error.constructor.name,
      errorStack: error.stack
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
});
