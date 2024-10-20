const restoreOptions = async () => {
    const options = await chrome.storage.local.get({
      apiKey: "AIzaSyBZ2WWXCEGU5S1bT9PUMQXdoE2rfDL0I8A"
    });
    document.getElementById("apiKey").value = options.apiKey;
  
  };
  


  const saveOptions = async () => {
    const options = {
      apiKey: document.getElementById("apiKey").value,
    };
  
    await chrome.storage.local.set(options);
    await chrome.storage.session.set({ taskCache: "", responseCache: {} });
    const status = document.getElementById("status");
    status.textContent = chrome.i18n.getMessage("options_saved");
    setTimeout(() => status.textContent = "", 1000);
  };
  
  const initialize = () => {
    // Set the text direction of the body
  
    restoreOptions();
  };
  
  document.addEventListener("DOMContentLoaded", initialize);
  document.getElementById("save").addEventListener("click", saveOptions);
  