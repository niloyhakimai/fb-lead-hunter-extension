# ⚡ FB Lead Hunter (Chrome Extension)

A powerful, automated lead generation tool designed for freelancers and agencies. This Chrome Extension monitors Facebook Groups in real-time for specific keywords (e.g., "Need Developer", "Hiring") and sends instant alerts to Telegram.

## 🚀 Features

- **Real-time Monitoring:** Scans Facebook feed and groups for new posts.
- **Smart Keyword Detection:** Alerts only when specific keywords match.
- **Targeted Group Scanning:** Option to monitor specific group links or run globally.
- **Junk Filtering:** Automatically ignores "Sponsored", "Suggested for you", and "Reels".
- **Auto-Pilot Mode:** Auto-reloads pages periodically to fetch new posts even when you are away.
- **Telegram Integration:** Sends instant notifications with the post link directly to your phone.
- **Duplicate Protection:** Prevents sending the same alert multiple times using Session Storage.

## 🛠 Installation (Developer Mode)

Since this extension is not yet in the Chrome Web Store, you need to load it manually:

1. Download or Clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right corner toggle).
4. Click **Load unpacked**.
5. Select the `chrome-extension` folder from this project.
6. The extension should now appear in your browser bar!

## ⚙️ Configuration

1. **Get Telegram Chat ID:**
   - Search for `@userinfobot` on Telegram and start it to get your numeric ID (e.g., `12345678`).
   - Create a new bot using `@BotFather` to get your Bot Token (Requires backend setup) or use the direct ID if using the public API version.

2. **Open Extension Settings:**
   - Click the extension icon in your browser.
   - Enter your **Telegram Chat ID**.
   - Add **Keywords** (comma-separated, e.g., `need developer, urgent, budget`).
   - (Optional) Add **Target Group Links** if you want to monitor specific pages.

3. **Start Hunting:**
   - Click **Save Configuration**.
   - Navigate to a Facebook Group.
   - The extension will automatically start scanning and auto-reload the page every few minutes to check for new leads.

## 📂 Project Structure

```bash
chrome-extension/
├── manifest.json      # Extension configuration and permissions
├── popup.html         # The user interface (UI)
├── popup.js           # Handles saving settings to Local Storage
├── content.js         # The main script that scans Facebook DOM
├── background.js      # Handles API calls and background tasks
└── icons/             # App icons



⚠️ Disclaimer
This tool is created for educational purposes only. Automated scraping of websites may violate their Terms of Service. Use this tool responsibly and at your own risk. The developer is not responsible for any account restrictions.

🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

Built with ❤️ for the Developer Community.