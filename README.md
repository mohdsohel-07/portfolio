# 🌐 Mohd Sohel | Personal Portfolio Website

A responsive and modern personal portfolio website built using HTML, CSS, JavaScript, and Node.js. This project showcases personal information, featured projects, and includes a contact form that sends emails using NodeMailer.

---

## 📁 Project Structure

```
/project-root
│
├── index.html         # Main HTML structure
├── style.css          # Styling for the website
├── script.js          # Client-side JavaScript (interactivity & form handling)
├── server.js          # Backend server using Node.js and Express
├── resume.pdf         # Resume available for download (optional)
```

---

## 🚀 Features

- **Responsive Design:** Optimized for desktops and mobile devices.
- **Portfolio Projects Section:** Highlights your major works like LetGreen and Phishing Detector.
- **Dark Mode Friendly:** Includes basic support for dark mode.
- **Contact Form:** Sends email messages directly using a Node.js backend and NodeMailer.
- **Interactive UI:** Smooth scrolling, modals, and project previews.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Email Service:** NodeMailer
- **Styling:** Pure CSS with media queries
- **Hosting (optional):** Can be hosted on GitHub Pages (frontend) + Render/Heroku (backend)

---

## 📩 Contact Form Setup

The backend (`server.js`) uses Gmail for sending emails.

> ⚠️ **Important:** Update the following values in `server.js`:
```js
auth: {
  user: 'your.email@gmail.com', // replace with your Gmail
  pass: 'your_app_password',    // use App Password if 2FA is enabled
}
```

Also, set the recipient email in:
```js
to: 'zaiduroy@gmail.com' // recipient address
```

---

## 🔧 Installation & Usage

### Prerequisites:
- Node.js installed
- Internet connection (for Gmail SMTP)

### Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm install express cors body-parser nodemailer
   ```

3. **Start the Server:**
   ```bash
   node server.js
   ```

4. **Open the `index.html` file** in your browser to view the site locally.

---

## 🌱 Project Highlights

- **LetGreen:** A green initiative using Node.js and Firebase to promote plant protection.
- **Phishing Website Detector:** Detects malicious websites using Machine Learning.

---

## 📄 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🙋‍♂️ Author

**Mohd Sohel**  
*Full Stack Developer | AI Enthusiast*  
