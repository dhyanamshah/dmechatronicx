# GOODSHOT Team Portfolio

A modern, responsive team portfolio website built with React and Tailwind CSS along with GSAP animations.

## 🚀 Features

- Responsive design that works on all devices
- Smooth scroll and animations powered by GSAP
- Animation sequences that trigger when scrolling
- Clean, modern UI with custom fonts and gradients

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher) or [yarn](https://yarnpkg.com/)

## 🔧 Installation

1. Clone the repository

```bash
git clone <repository-url>
cd goodshot
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3001` (or the port shown in your terminal)

## 📦 Dependencies

- React
- GSAP (GreenSock Animation Platform)
- TailwindCSS
- React Icons

## 🧰 Project Structure

```
goodshot/
├── public/            # Static assets
│   └── fonts/         # Custom fonts
├── src/               # Source code
│   ├── assets/        # Images and SVGs
│   ├── components/    # React components
│   ├── constant/      # Constants and configuration
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
└── README.md          # This file
```

## 🎨 Styling

The project uses TailwindCSS for styling with custom utility classes defined in `index.css`. Custom fonts are loaded from the `/public/fonts` directory.

## 🎬 Animations

Animations are powered by GSAP with the ScrollTrigger plugin. Key animations include:

1. **Hero Section**
2. **Navbar**
3. **About Section**
4. **Mission and Vision**

## 🔄 Scroll Behavior

The site features a scroll trigger animation sequence, which make the website components to be animated only when you scroll through the website.

## 🔍 Browser Compatibility

The website is compatible with all modern browsers (Chrome, Firefox, Safari, Edge).

## 🛠️ Customization

- To change the hero image: Replace `logo1.svg` in the `src/assets` directory
- To modify the color scheme: Edit the gradient values in `index.css`
- To update content: Modify the text in the respective component files

## 📱 Responsive Design

The website is fully responsive with specific styling for:

- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [GSAP Documentation](https://greensock.com/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
