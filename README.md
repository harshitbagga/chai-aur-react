# Antarya Interiors

![Antarya Interiors][https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FSurat%2FAntarya-Interiors-Anand-Mahal-Road%2F0261PX261-X261-190204193427-I3I9_BZDET&psig=AOvVaw1Q_MAROcTJD7JiyflfCN_V&ust=1744033805224000&source=images&cd=vfe&opi=89978449&ved=0CBUQjhxqFwoTCMjXkrzGw4wDFQAAAAAdAAAAABAE]

A beautiful, responsive website for Antarya Interiors - an interior design agency offering various design services including free consultations, blueprint designs, and complete interior design solutions.

## Features

- **Modern Design**: Clean, elegant interface with subtle animations
- **Responsive Layout**: Optimized for all device sizes
- **Service Showcase**: Highlighting different service tiers
- **Booking System**: Easy-to-use form for scheduling consultations
- **Testimonials**: Client reviews and success stories
- **Contact Information**: Multiple ways to get in touch

## Technology Stack

This project is built with:

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd antarya-interiors
   ```

2. Install dependencies
   ```bash
   npm install
   # or with yarn
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or with yarn
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── ui/         # UI components from shadcn
│   │   └── ...         # Custom components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
└── ...                 # Config files
```

## Building for Production

To build the project for production, run:

```bash
npm run build
# or with yarn
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

The project can be deployed to any static site hosting service like Netlify, Vercel, or GitHub Pages.

## Customization

### Colors and Theme

The website uses a custom color palette defined in `tailwind.config.ts`. To modify the color scheme, update the colors in the `theme.extend.colors` section.

### Content

Most of the website content can be modified by updating the respective component files in the `src/components/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries about this project, please contact:
- Email: harshitbagga10@gmail.com
- Phone: +91-7777932774

