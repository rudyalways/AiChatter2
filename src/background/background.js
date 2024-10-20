


const getModelId = (languageModel, mediaType) => {
    if (languageModel === "1.5-flash") {
      return "gemini-1.5-flash";
    } else if (mediaType === "text") {
      return "gemini-1.5-flash";
    } else {
      return "gemini-1.0-pro";
    }
  };

const getSystemPrompt = async () => {
    const prompt = 'Please act as the model and chat with the user.'
    return prompt
}


const modelId = getModelId('', 'text');
const prompt = getSystemPrompt()

const tryJsonParse = (text) => {
  try {
    return JSON.parse(text);
  } catch {
    return { error: { message: text } };
  }
};


chrome.runtime.onMessage.addListener( (request, _sender, sendResponse) => {
    ( async () => {

    let contents = [];


    request.chatHistory.forEach( (d) =>{
        contents.push(
            {
                role: d[0],
                parts: [{text :  d[1]}]
            }

        )
    })


    const tcontents =  [
        {
          role: "user",
          parts: [{ text: "Hello, I have 2 dogs in my house." }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ];

    //sendResponse(JSON.stringify( modelId) )
    

    if (request.message == 'generate') {

        const apiKey = 'AIzaSyBZ2WWXCEGU5S1bT9PUMQXdoE2rfDL0I8A'
        const modelId='gemini-1.5-flash'


        try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-goog-api-key": apiKey,
            },
            body: JSON.stringify({
              contents: contents,
              safetySettings: [{
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_NONE"
              }]
            })
          });
          const responseData = {
            ok: response.ok,
            status: response.status,
            body: tryJsonParse(await response.text())
          };
  
  
          sendResponse(responseData);
        } catch (error) {
          sendResponse(error.stack);
        }

        
    }
    sendResponse('not generate')
    

    //sendResponse(chrome.runtime.getManifest().version);
    //sendResponse([1,'Hi,'])
})();

return true
});


  
