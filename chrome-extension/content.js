let processedPosts = new Set();
let config = { keywords: [], groupLinks: [] };

// লোড কনফিগারেশন
function loadConfig() {
  chrome.storage.local.get(['keywords', 'groupLinks'], (result) => {
    config.keywords = result.keywords || [];
    config.groupLinks = result.groupLinks || [];
    console.log("⚙️ Config Loaded:", config);
  });
}
loadConfig();

// জাঙ্ক ফিল্টার (এগুলো থাকলে অ্যালার্ট দিবে না)
const JUNK_WORDS = ["suggested for you", "join group", "sponsored", "reels and short videos", "members"];

function scanPosts() {
  if (config.keywords.length === 0) return;


  const currentUrl = window.location.href;
  
  if (config.groupLinks.length > 0) {
    const isTargetPage = config.groupLinks.some(link => currentUrl.includes(link));
    if (!isTargetPage) {
      // console.log("Not a target group. Skipping..."); 
      return; 
    }
  }


  const posts = document.querySelectorAll('div[role="article"]');

  posts.forEach((post) => {
    const postText = post.innerText.toLowerCase();
    
   
    if (JUNK_WORDS.some(junk => postText.includes(junk))) return;

   
    const postSignature = postText.substring(0, 50);
    if (processedPosts.has(postSignature)) return;

   
    const matchedKeyword = config.keywords.find(keyword => postText.includes(keyword));

    if (matchedKeyword) {
      console.log(`🔥 Valid Lead Found! Keyword: "${matchedKeyword}"`);
      
      processedPosts.add(postSignature);
      
    
      let postLink = currentUrl;
      const linkElement = post.querySelector('a[href*="/posts/"], a[href*="/permalink/"]');
      if(linkElement) {
         postLink = linkElement.href;
      }

      chrome.runtime.sendMessage({
        type: 'NEW_LEAD',
        data: {
          keyword: matchedKeyword,
          postText: post.innerText,
          postUrl: postLink
        }
      });
    }
  });
}


setInterval(scanPosts, 2000);

// আপডেট লিসেনার
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'SETTINGS_UPDATED') loadConfig();
});