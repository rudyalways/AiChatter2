

const GET_RESPONSE_BUTTON = document.getElementById('get-response');
let counter = 0;

GET_RESPONSE_BUTTON.addEventListener('click', async () => {
  const response = await chrome.runtime.sendMessage('ping');

  if (response) {
    const element = document.createElement('p');
    element.id = `response-${counter}`;
    element.innerText = `Response ${counter}: ${response}`;
    document.body.appendChild(element);

    counter++;
  }
});





const checkForNewMessagesAndReply = async() =>{
    lastMessage = '######';

    alert('myinstagrammessage1')
    const inputBox = document.querySelectorAll('.html-div.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1gslohp.x11i5rnm.x12nagc.x1mh8g0r.x1yc453h.x126k92a.x18lvrbx, .html-div.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1gslohp.x11i5rnm.x12nagc.x1mh8g0r.x1yc453h.x126k92a.xyk4ms5');
    //alert(inputBox.length)
    chatHistory = ''

    const childrenData = []
    for (let element of inputBox) {

        // outgoing
        if (element.classList.contains('html-div') &&
        element.classList.contains('xexx8yu') &&
        element.classList.contains('x4uap5') &&
        element.classList.contains('x18d9i69') &&
        element.classList.contains('xkhd6sd') &&
        element.classList.contains('x1gslohp') &&
        element.classList.contains('x11i5rnm') &&
        element.classList.contains('x12nagc') &&
        element.classList.contains('x1mh8g0r') &&
        element.classList.contains('x1yc453h') &&
        element.classList.contains('x126k92a') &&
        element.classList.contains('xyk4ms5')) {
          chatHistory += ('outgoing:' + element.textContent+'\n')
          childrenData.push(['model', element.textContent])
        } else {
          chatHistory += ('incoming:' + element.textContent+'\n')
          childrenData.push(['user', element.textContent])
        }
    }
    childrenData.forEach( (d) =>{
        newMessage = d[1]
    })
    //alert(chatHistory)


    response = 'empty'
    if (response =='empty') {
        alert('call ai model' + chatHistory)

        // call ai model
        response = await chrome.runtime.sendMessage({
            message: 'generateAIML',
            chatHistory: childrenData
          });
          alert(response)
          //alert(response)


        //alert('res'+JSON.stringify(response))
        const aireply = response.body.candidates[0].content.parts[0].text
        // 
        //const aireply = 'aireply'
        alert(aireply)
        
        //alert("message from AI!!!!\nmessage from AI!!!!\n\n" + aireply)


        //const inputBox = document.querySelector('.b-make-post.textarea-wrapper textarea');
        //inputBox.value = "hi, how are you"
        alert('myinstagrammessage2')
        const inputBox = document.querySelector('.x3jgonx')
        alert(inputBox)
        if (inputBox) {
          const newMessage = aireply;
          inputBox.innerHTML = '###############';
        } else {
          alert('Input box not found.');
        }
        const submitButton = document.querySelector('.g-btn.m-rounded.b-chat__btn-submit');
        //alert(submitButton)
        submitButton.click()
        submitButton.click()
        submitButton.click()
        //alert(submitButton)
        alert('button logic')


        lastMessage=newMessage
    } else {
        alert('nothing')
        // do nothing
    }

}

document.getElementById("options").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
  });

  const main = async () => {
    //alert('ok1')
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Get the selected text
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: checkForNewMessagesAndReply
    })

  }
  main()
//alert(document.getElementById("options"))