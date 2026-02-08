# ⚡ FB Lead Hunter (Chrome Extension)

FB Lead Hunter is a lightweight, automated **lead generation Chrome Extension** built for **freelancers, agencies, and solo developers**. It monitors **Facebook Groups in real time** for high-intent keywords (e.g., *"Need Developer"*, *"Hiring"*) and instantly sends alerts to **Telegram**, so you never miss a potential client.

---

## 🚀 Key Features

* **Real-Time Monitoring**
  Continuously scans Facebook group feeds for newly published posts.

* **Smart Keyword Detection**
  Triggers alerts only when your defined keywords are matched.

* **Targeted Group Scanning**
  Monitor specific Facebook group URLs or run globally across groups.

* **Junk & Noise Filtering**
  Automatically ignores:

  * Sponsored posts
  * Suggested content
  * Reels / non-text posts

* **Auto-Pilot Mode**
  Periodically auto-reloads pages to fetch new posts—even when you’re inactive.

* **Telegram Notifications**
  Sends instant alerts with the **post link + matched keyword** directly to your phone.

* **Duplicate Protection**
  Uses `sessionStorage` to prevent sending the same post multiple times.

---

## 🛠 Installation (Developer Mode)

This extension is not yet published on the Chrome Web Store. Follow these steps to install it manually:

1. **Download or clone** this repository.
2. Open Google Chrome and go to:

   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked**.
5. Select the `chrome-extension` folder from this project.
6. The extension will appear in your browser toolbar.

---

## ⚙️ Configuration Guide

### 1️⃣ Get Your Telegram Chat ID

* Search for `@userinfobot` on Telegram and press **Start**.
* Copy your numeric **Chat ID** (example: `123456789`).

### 2️⃣ Create a Telegram Bot (Optional / Advanced)

* Open `@BotFather` on Telegram.
* Create a new bot and copy the **Bot Token**.
* This is required only if you are using a **custom backend**.

### 3️⃣ Configure the Extension

1. Click the **FB Lead Hunter** extension icon.
2. Enter your **Telegram Chat ID**.
3. Add **Keywords** (comma-separated):

   ```
   need developer, hiring, urgent, budget
   ```
4. *(Optional)* Add **Target Facebook Group Links**.
5. Click **Save Configuration**.

---

## ▶️ How to Use

1. Open a Facebook Group (or any configured target group).
2. The extension automatically starts scanning posts.
3. Pages auto-reload every few minutes.
4. When a keyword match is detected, you receive a **Telegram alert instantly**.

---

## 📂 Project Structure

```bash
chrome-extension/
├── manifest.json      # Chrome extension config & permissions
├── popup.html         # Extension popup UI
├── popup.js           # Settings & local storage logic
├── content.js         # Facebook DOM scanning logic
├── background.js      # Background tasks & Telegram API calls
└── icons/             # Extension icons
```

---

## ⚠️ Disclaimer

This tool is intended **for educational and personal productivity purposes only**.

* Automated scraping may violate Facebook’s **Terms of Service**.
* Use responsibly and at your **own risk**.
* The developer is **not responsible** for account bans, restrictions, or data loss.

---

## 🤝 Contributing

Contributions are welcome!

* Open an issue for bugs or feature requests
* Submit a pull request for improvements

---

## ❤️ Community

Built with passion for the **Bangladeshi Developer Community** 🇧🇩

If this tool helps you land clients faster—consider giving it a ⭐ on GitHub.
