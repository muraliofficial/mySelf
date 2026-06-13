# 🌌 Murali A | Full-Stack Developer Portfolio

A sleek, high-performance, and data-driven personal portfolio website built to showcase my projects, skills, and experience. Engineered with React and Tailwind CSS v4, featuring a modern dark-mode aesthetic, glassmorphic UI elements, and fluid animations.

## ✨ Features

- **Data-Driven Architecture**: All portfolio content (bio, skills, projects, experience) is centralized in a single `portfolioData.js` file for effortless updates without touching UI components.
- **Premium UI/UX**: Designed with deep purples, neon accents, and glassmorphism. Includes custom hover physics, gradient spinning rings, and smooth scroll reveals.
- **Fully Responsive**: Flawless layout scaling across mobile, tablet, and desktop viewports.
- **Functional Contact Form**: Integrated with EmailJS to send real-time emails directly from the browser, complete with form validation and a `mailto:` fallback.
- **Dark Mode**: Configured out-of-the-box for a developer-friendly dark aesthetic.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS v4 & Custom CSS-in-JS
- **Icons & Typography**: Custom SVG Icons, Nunito Font
- **Form Handling**: EmailJS (Serverless email delivery)
- **Deployment**: Vercel / Netlify (Recommended)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muraliofficial/murali-portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd murali-portfolio
   ```
3. Install NPM packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` (or the port specified in your terminal) in your browser.

## ⚙️ Configuration

### Updating Content
To update the portfolio with your own information, simply edit the `src/data/portfolioData.js` file. No need to dig through React components!

### Setting up EmailJS
To make the contact form send emails to your inbox:
1. Create a free account at EmailJS.
2. Add a new Email Service (e.g., Gmail) and copy the **Service ID**.
3. Create a new Email Template and copy the **Template ID**.
4. Open `src/components/sections/Contact.jsx` and replace the placeholder values:
   ```javascript
   const SERVICE_ID  = "YOUR_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   ```
5. Ensure your **Public Key** is added to your root `index.html` file as an EmailJS script, or initialized in your app entry.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

### 📬 Let's Connect

- **LinkedIn**: Murali A
- **GitHub**: @muraliofficial
- **Portfolio**: my-self-murali.vercel.app

*Designed & Built with ❤️ by Murali A.*