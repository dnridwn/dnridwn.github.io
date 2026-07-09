# Privacy Policy for LLM Client

**Effective Date:** [Insert Today's Date]

This Privacy Policy explains how the "LLM Client" extension (the "Extension", "we", "us", or "our") handles and protects your information. Our primary goal is to provide a standalone communication tool that strictly prioritizes your privacy.

### 1. Data Collection and Storage
We deeply respect your privacy. **The Extension does not collect, does not store on our servers, and does not transmit your personal data to us in any way.**
All data generated or configured through the Extension-including API keys, Base URL configurations, MCP tool server lists, chat histories, and uploaded files-is stored persistently and exclusively on your local device using the browser's built-in local storage API (`chrome.storage.local`).

### 2. How Your Data is Used
Any information you input into the Extension is used solely in the following ways:
- **Direct Communication with Your Chosen Servers:** Chat messages and file attachments are sent directly from your browser to the custom API endpoints or Model Context Protocol (MCP) servers that **you manually configure**.
- The developers of this Extension do not have access to your conversations, files, or API keys. All network requests (HTTP/SSE) are executed locally from your browser straight to your intended destination.

### 3. Usage of Chrome Permissions
The Extension requires specific browser permissions to function properly. These are used solely to operate core features:
- **`storage`**: Used to save your preferences and chat history directly to your browser's local storage.
- **`sidePanel`**: Used to load the Extension's interface in the browser's side panel, allowing you to use the chat feature while browsing other web pages.
- **`tabs`**: Used exclusively to intercept links within the chat interface (e.g., links in AI responses) and open them safely in a new browser tab, preventing unintended navigation within the narrow side panel.
- **`host_permissions` / `<all_urls>`**: Because this Extension operates on a "bring-your-own-endpoint" model, open network permissions are required to prevent the browser's built-in CORS mechanism from blocking communication. This permission is used purely to communicate with the specific API and MCP endpoints you have registered in the settings.

### 4. Third-Party Tracking & Analytics
The Extension **does not** use any third-party analytics tools (such as Google Analytics, Mixpanel, etc.), and **does not** track your behavior, browsing history, or interaction patterns inside or outside the Extension interface.

### 5. Data Sharing and Selling
Because we never collect your data on our servers, **we do not (and will never) sell, rent, or share your user data** with advertisers, data brokers, or any other third parties.

### 6. Changes to this Privacy Policy
We may update this Privacy Policy from time to time to reflect technical updates or to comply with Chrome Web Store regulations. Any changes will be reflected immediately on this page.

### 7. Contact Us
If you have any questions regarding this Privacy Policy, the Extension's features, or our local data processing practices, please feel free to contact the developer at: denridwan123@gmail.com.