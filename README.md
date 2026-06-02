# Personal Portfolio Website

![Project Status](https://img.shields.io/badge/status-ready-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen)
![Theme](https://img.shields.io/badge/theme-dark%20%7C%20light-blue)

## Overview

A clean, modern portfolio website designed to showcase professional experience, technical skills, featured projects, and contact details. The site is built with React and Vite, and it delivers a polished, responsive experience across desktop, tablet, and mobile devices.

- Fully responsive layout
- Dark mode / light mode support
- Mobile-first navigation with a hamburger menu
- Smooth animations and modern UI design
- Organized sections for skills, projects, resume, and contact

[Live Demo](https://fiteh.netlify.com) 

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)


---

## Features

- Responsive design optimized for desktop, tablet, and mobile screens
- Dark mode and light mode toggle with theme persistence
- Smooth animations and transitions for a premium feel
- Skills showcase with technology highlights
- Project portfolio section with featured cards and links
- Contact section for visitors and potential clients
- Intuitive navigation with scroll-to-section behavior
- Clean, professional layout focused on readability and visual hierarchy

---

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | React |
| Build Tool | Vite |
| Styling | CSS Modules |
| State Management | React Context |
| Linting | ESLint |
| Deployment | GitHub Pages, Netlify, Vercel |

---

## Project Structure

```text
portfolio/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.css
│   │   ├── Resume/
│   │   │   ├── Resume.jsx
│   │   │   └── Resume.module.css
│   │   ├── ScrollToTop/
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── ScrollToTop.module.css
│   │   └── Skills/
│   │       ├── Skills.jsx
│   │       └── Skills.module.css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── vite.config.js
├── .gitignore
├── index.html
├── package.json
├── README.md
└── eslint.config.js
```

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Fiteh-21/Fiteh-portfolio.git
cd Fiteh-portfolio
npm install
```

---

## Setup

### Run Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the site.

### Build for Production

```bash
npm run build
```

The production-ready files are generated in the `dist` directory.

---

## Usage

- Use the navigation bar to move between sections.
- Toggle the theme switch to compare dark and light modes.
- Review the skills section to see focused technology strengths.
- Explore the project showcase for live demos and repository links.
- Visit the contact section to find outreach details.

---

## Customization

Update the portfolio content by editing the following files:

- **Personal information**: `src/components/Hero/Hero.jsx`, `src/components/About/About.jsx`
- **Projects**: `src/components/Projects/Projects.jsx`
- **Skills**: `src/components/Skills/Skills.jsx`
- **Social links**: `src/components/Navbar/Navbar.jsx`, `src/components/Contact/Contact.jsx`

For visual changes, update the CSS module files for each component.

---

## Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of `dist` to GitHub Pages.
3. Configure the repository publishing settings or use a GitHub Action.

### Netlify

1. Connect the repository to Netlify.
2. Set the build command to:
   ```bash
   npm run build
   ```
3. Set the publish directory to:
   ```text
   dist
   ```

### Vercel

1. Import the repository into Vercel.
2. Choose the Vite framework preset.
3. Use the build command:
   ```bash
   npm run build
   ```
4. Set the output directory to:
   ```text
   dist
   ```

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a pull request for review

---

