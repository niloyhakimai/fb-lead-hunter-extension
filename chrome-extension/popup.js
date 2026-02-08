document.addEventListener('DOMContentLoaded', () => {
  // Load saved data
  chrome.storage.local.get(['telegramId', 'keywords', 'groupLinks'], (result) => {
    if (result.telegramId) document.getElementById('telegramId').value = result.telegramId;
    if (result.keywords) document.getElementById('keywords').value = result.keywords.join(', ');
    if (result.groupLinks) document.getElementById('groupLinks').value = result.groupLinks.join(', ');
  });

  document.getElementById('saveBtn').addEventListener('click', () => {
    const telegramId = document.getElementById('telegramId').value.trim();
    
    // Keywords Array
    const keywords = document.getElementById('keywords').value
      .split(',')
      .map(k => k.trim().toLowerCase())
      .filter(k => k);

    // Group Links Array
    const groupLinks = document.getElementById('groupLinks').value
      .split(',')
      .map(k => k.trim()) // লিংক lowerCase করবেন না, কারণ URL Case Sensitive হতে পারে
      .filter(k => k);

    // Save to Chrome Storage
    chrome.storage.local.set({ telegramId, keywords, groupLinks }, () => {
      const status = document.getElementById('status');
      status.textContent = '✅ Settings Saved Successfully!';
      status.classList.add('success');
      
      setTimeout(() => status.textContent = '', 2000);
      
      // Notify background/content script
      chrome.runtime.sendMessage({ type: 'SETTINGS_UPDATED' });
    });
  });
});