import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import notificationapi from 'https://esm.sh/notificationapi-node-server-sdk@0.20.0';

notificationapi.init(
  'gg28cit19i2udm80g3ir1cgf9j',
  '7t29kkvylbgi8x5x4w5g43deo49ytndgaxnq57u0f5zu12zk2ae2xpaden',{
    baseURL: 'https://api.ca.notificationapi.com'
  }
);

serve(async (req) => {
  await notificationapi.send({
    notificationId: 'welcome_notification',
    user: {
      id: 'mattbegley224@gmail.com',
      number: '+19023027711' // Replace with your phone number, use format [+][country code][area code][local number]
    },
    mergeTags: {
      "comment": "testComment"
    }
  });
  
  return new Response(JSON.stringify({
    success: true
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
});
