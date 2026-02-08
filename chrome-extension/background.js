chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'NEW_LEAD') {
    
    // স্টোরেজ থেকে চ্যাট আইডি নেওয়া
    chrome.storage.local.get(['telegramId'], (result) => {
      const telegramId = result.telegramId;

      if (!telegramId) {
        console.log("No Telegram ID set.");
        return;
      }

      // API তে ডাটা পাঠানো
      fetch('http://localhost:3000/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telegramId: telegramId,
          keyword: message.data.keyword,
          postText: message.data.postText,
          postUrl: message.data.postUrl
        })
      })
      .then(response => response.json())
      .then(data => console.log('✅ API Success:', data))
      .catch(error => console.error('❌ API Error:', error));
    });
  }
});