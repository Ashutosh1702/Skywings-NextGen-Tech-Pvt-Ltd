# 🚀 Skywings NextGen Tech - Frontend

Welcome to the **Skywings NextGen Tech** frontend repository! This project is a premium, modern web application designed for an IT consultancy, featuring stunning animations, 3D effects, and a seamless user conversion flow.

## ✨ Key Features

- **🎨 Premium UI/UX:** Built with sleek dark mode aesthetics, glassmorphism, and responsive design.
- **🌀 Advanced Animations:** Powered by **Framer Motion** for smooth transitions, 3D button presses, and levitation effects.
- **🧭 Discovery Flow:** A "Micro-Decision" popup (`DiscoveryModal`) guides users to select their project interest (Website, App, SaaS, Cloud).
- **📅 Smart Booking:** Integrated `ConsultationModal` that carries over user context (Service Type) and handles scheduling.
- **📧 Automated Emails:** Real-time booking notifications sent via **EmailJS**.

---

## 📂 Project Structure

Here's an overview of how the project is organized:

```
src/
├── 🧩 components/
│   ├── 🛠️ common/            # Reusable core components
│   │   ├── Button.jsx       # Premium 3D & Glow Buttons
│   │   └── ConsultationModal.jsx # Booking Logic & EmailJS Integration
│   ├── 🏠 home/              # Homepage specific sections
│   │   ├── Hero.jsx         # Main landing with Discovery trigger
│   │   ├── DiscoveryModal.jsx # "What to build?" selection popup
│   │   ├── Portfolio.jsx    # Project showcase carousel
│   │   └── ...              # Other sections (Services, About, etc.)
│   └── 📐 layout/            # Global layout components
│       ├── Navbar.jsx
│       └── Footer.jsx
├── 📄 pages/
│   └── Home.jsx             # Main landing page assembly
└── 🎨 index.css             # Global styles & Tailwind directives
```

---

## 📧 Email Integration (EmailJS)

This project uses **EmailJS** to send booking details directly to the admin team.
When a user books a consultation, the email includes:
- **Name & Email**
- **Selected Date & Time**
- **Service Interest** (e.g., "Mobile App", "SaaS Platform")
- **Custom Notes**

### Configuration
The email keys are securely stored in the `.env` file:

```env
VITE_EMAILJS_SERVICEID=...
VITE_EMAILJS_TEMPLATEID=...
VITE_EMAILJS_PUBLICKEY=...
```

---

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

---

Made with 💙 by **Skywings NextGen Tech Team**
