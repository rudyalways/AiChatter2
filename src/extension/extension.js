

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


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log("Start");
  
  await sleep(2000);  // Pauses for 2 seconds (2000 milliseconds)
  
  console.log("End after 2 seconds");
}



const checkForNewMessagesAndReply = async() =>{
    lastMessage = '######';

    //alert('myinstagrammessage1')
    const inputBox = document.querySelectorAll('.html-div.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1gslohp.x11i5rnm.x12nagc.x1mh8g0r.x1yc453h.x126k92a.x18lvrbx, .html-div.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1gslohp.x11i5rnm.x12nagc.x1mh8g0r.x1yc453h.x126k92a.xyk4ms5');
    //alert(inputBox.length)
    chatHistory = ''

    newMessage = ''

    const childrenData0 = []
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
          childrenData0.push(['assistant', element.textContent])
        } else {
          chatHistory += ('incoming:' + element.textContent+'\n')
          childrenData0.push(['user', element.textContent])
        }
    }

    const childrenData =  childrenData0.slice(-10)
    
    childrenData.forEach( (d) =>{
        newMessage = d[1]
    })
    //alert(chatHistory)


    response = 'empty'
    if (newMessage.includes('check out')) { 
        prompt('','Hi, Yes, we do have some Video course.\n Please check out course HeyGen link: https://app.heygen.com/share/ad387a9998b34f5e825290e0288100f7')



    }
    else if (response =='empty') {
        alert('call ai model:\n' + chatHistory)

        // call ai model
        response = await chrome.runtime.sendMessage({
            message: 'generateAIML',
            chatHistory: childrenData
          });
          //alert(response)
          //alert(response)


        //alert('res'+JSON.stringify(response))
        const aireply =  response
        //const aireply = 'aireply'
        //alert(aireply)
        prompt('copied to clipboard:', aireply)


        //await sleep(2000)

     
        
        //alert("message from AI!!!!\nmessage from AI!!!!\n\n" + aireply)


        //const inputBox = document.querySelector('.b-make-post.textarea-wrapper textarea');
        //inputBox.value = "hi, how are you"
        // const inputBox = document.querySelector('.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw.x1iyjqo2.x1gh3ibb.xisnujt.xeuugli.x1odjw0f.notranslate');
        const inputBox  = document.querySelector('div[role="textbox"]');
        const newSpan = document.createElement('span');

        inputBox.children[0].classList.add('xdpxx8g')

        // Add content to the span
        newSpan.innerText = "This is Paris";
        
        // Optionally, add classes or attributes to the span if needed
        newSpan.classList.add('x3jgonx');
        
        // Append the new span after the existing input box content (after the <p> tag)
        inputBox.children[0].appendChild(newSpan);

        parentElement = inputBox.children[0]

        // Find the specific <br> element you want to replace
const brElement = parentElement.querySelector('br');

// Create a new <span> element

// Set the text content or any attributes for the new span
newSpan.innerText = 'This is a replacement for <br>';

if (brElement) {
  parentElement.replaceChild(newSpan, brElement);
} else {
  console.error('No <br> element found in the specified parent');
}

       // alert(inputBox)

        //alert(inputBox.children[0].classList)
        /*
        inputBox.textContent = '###############';
        inputBox.innerText = '###############';

        
        for (let i = 0; i < inputBox.children.length; i++) {
          inputBox.children[i].textContent = '###############';
          inputBox.children[i].innerText = '###############';
          if (inputBox.children[i].length) {
            for (let j = 0; j < inputBox.children[i].length; j++) {
              inputBox.children[i].children[j].textContent = '###############';
              inputBox.children[i].children[j].innerText = '###############';

            }
          }

        }
        */
        
        if (inputBox) {
          const newMessage = aireply;
          inputBox.textContent = '###############';
          inputBox.innerText = 'innerText'
        } else {
          alert('Input box not found.');
        }
        const submitButton = document.querySelector('.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.xdl72j9.x2lah0s.xe8uvvx.xdj266r.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x1f6kntn.xwhw2v2.xl56j7k.x17ydfre.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.x1i0vuye.xjbqb8w.xm3z3ea.x1x8b98j.x131883w.x16mih1h.x972fbf.xcfux6l.x1qhh985.xm0m39n.xt0psk2.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x1n5bzlp.x173jzuc.x1yc6y37.xfs2ol5');
        //alert(submitButton)
        submitButton.click()
        submitButton.click()
        submitButton.click()
        //alert(submitButton)


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