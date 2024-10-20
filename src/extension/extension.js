

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
    // Get the element containing the list of messages
    const messageWrapperList = document.querySelectorAll(".b-chat__item-message");

    // Create an empty array to hold all the child elements
    const allChildElements = [];
    
    messageWrapperList.forEach((mw) => {
        // Convert the HTMLCollection (children) into an array and append to the allChildElements array
        const childArray = Array.from(mw.children);
        allChildElements.push(...childArray); // Spread the array to append the individual elements
    });
    const childrenData = []
    allChildElements.forEach( (child) => {
        const imgElement = child.querySelector('img[src]');
        if (imgElement) {
            //childrenData.push(imgElement.src)
        }

        if (child.classList.contains('m-from-me')){
            childrenData.push(['model', child.textContent])
        } else {
            childrenData.push(['user', child.textContent])
        }
    })





    chatHistory = ''
    newMessage = ''
    childrenData.forEach( (d) =>{
        chatHistory+=d[0]+':' + d[1] + '\n'
        newMessage = d[1]
    })

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


        alert('res'+JSON.stringify(response))
        //const aireply = response.body.candidates[0].content.parts[0].text
        // 
        const aireply = 'aireply'
        alert(aireply)
        
        //alert("message from AI!!!!\nmessage from AI!!!!\n\n" + aireply)


        //const inputBox = document.querySelector('.b-make-post.textarea-wrapper textarea');
        //inputBox.value = "hi, how are you"
        const inputBox = document.querySelector('.tiptap.ProseMirror.b-text-editor.js-text-editor.m-native-custom-scrollbar.m-scrollbar-y.m-scroll-behavior-auto.m-overscroll-behavior-auto');
        //alert(inputBox)
        if (inputBox) {
          const newMessage = aireply;
          inputBox.innerHTML = newMessage;
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