exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyu81_jvRxwr3xVFXEH_7W914InpSLeJrkVtpZv5CDXtRKq6-5PjBLrzcEhnTUVKMUFlg/exec';

  try {
    const data = JSON.parse(event.body || '{}');
    
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?endpoint=new-drivers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: data, endpoint: 'new-drivers' })
    });

    const result = await response.json();
    
    return {
      statusCode: response.ok ? 200 : 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error('Error forwarding to Google Apps Script:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: false,
        message: 'Internal server error',
        error: error.message
      })
    };
  }
};


