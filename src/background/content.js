/* Add your event listeners here */
document.addEventListener('click', function(event) {
    //event.preventDefault();  // Prevents the default action of the click
    const clickedElement = event.target;
  
    // Get element's tag, id, and class (if present)
    let elementInfo = `Tag: ${clickedElement.tagName}`;
    
    if (clickedElement.id) {
      elementInfo += `, ID: #${clickedElement.id}`;
    }
    
  
    // Show the element's information in an alert popup
    // alert(`Clicked Element Info: ${elementInfo}`);
  }, true);

const checkForNewMessages = async() =>{
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
            childrenData.push(['system', child.textContent])
        }
    })

    chatHistory = ''
    childrenData.forEach( (d) =>{
        chatHistory+=d[0]+':' + d[1] + '\n'
    })
    response = [0, 'empty'];
 
    

    //alert('content.js:'+chatHistory)
    

    //alert('byselector' +  (messageList ? messageList.textContent:'null') )
    setTimeout(checkForNewMessages, 1000);
}


checkForNewMessages()
  // Start checking for new messages
  
document.addEventListener('DOMContentLoaded', function() {
    alert("loaded")
    checkForNewMessages();
});


function checkForNewMessages2() {
    const newMessage = document.querySelector("#app");
  
    if (newMessage) {
      // A new message has been received
      console.log("New message2:", newMessage.textContent);
      alert(newMessage.textContent)
  
      // Perform any necessary actions with the new message, such as updating the UI or processing the content
    } else {
        alert('no newMessage2')
    }
  
    // Schedule the next check
    //setTimeout(checkForNewMessages2, 1000); // Check every 1 second
}

//checkForNewMessages2()
  
