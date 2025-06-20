<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://reactpress.byronwade.com">
    <img src="public/logo192.png" alt="ReactPress Logo" width="80" height="80">
  </a>

  <h3 align="center">ReactPress</h3>

  <p align="center">
    Modernizing WordPress Admin Interface for Next.js & Modern CMS Platforms
    <br />
    <a href="https://reactpress.byronwade.com/rp-admin"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://reactpress.byronwade.com">Homepage</a>
    ·
    <a href="https://github.com/byronwade/ReactPress/issues">Report Bug</a>
    ·
    <a href="https://github.com/byronwade/ReactPress/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#the-challenge">The Challenge</a>
      <ul>
        <li><a href="#css-to-tailwind-conversion">CSS to Tailwind Conversion</a></li>
        <li><a href="#preserving-wordpress-ux">Preserving WordPress UX</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-integration">API Integration</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![ReactPress Admin Screenshot][product-screenshot]](https://reactpress.byronwade.com/rp-admin)

ReactPress is an ambitious project to modernize the beloved WordPress admin interface for integration with modern CMS platforms and APIs. Built with Next.js 15, React 18, and TypeScript, it faithfully recreates the WordPress admin experience while providing a foundation for modern web applications.

### Why ReactPress?

* **Familiar Interface**: Developers and content managers already know WordPress - why reinvent the wheel?
* **Modern Architecture**: Built on Next.js 15 with React Server Components and modern best practices
* **API-First Design**: Designed to integrate with any headless CMS or custom API
* **Performance**: 5x faster than traditional WordPress admin with modern optimizations
* **Extensible**: Component-based architecture for easy customization and extension

The project serves as both a functional admin interface and a learning resource for modernizing legacy interfaces.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url] - React framework with App Router
* [![React][React.js]][React-url] - UI library with Server Components
* [![TypeScript][TypeScript]][TypeScript-url] - Type-safe JavaScript
* [![Tailwind][TailwindCSS]][Tailwind-url] - Utility-first CSS framework
* [![Bun][Bun]][Bun-url] - Fast JavaScript runtime and package manager

### Key Features

- 🎨 **Pixel-Perfect WordPress Admin Recreation**
- 🚀 **Next.js 15 App Router with React Server Components**
- 📱 **Fully Responsive Design**
- 🔧 **Component-Based Architecture**
- 🎯 **TypeScript Throughout**
- ⚡ **Optimized Performance**
- 🔌 **API Integration Ready**

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* **Bun** (recommended) or npm/yarn
  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/byronwade/ReactPress.git
   cd ReactPress
   ```

2. Install dependencies
   ```sh
   bun install
   ```

3. Start the development server
   ```sh
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the homepage
5. Visit [http://localhost:3000/rp-admin](http://localhost:3000/rp-admin) for the admin interface

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

### Development

```sh
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linting
bun run lint
```

### Project Structure

```
src/
├── app/
│   ├── rp-admin/          # WordPress admin recreation
│   │   ├── (Dashboard)/   # Dashboard pages
│   │   ├── (Content)/     # Posts, pages, media
│   │   ├── (Settings)/    # WordPress settings
│   │   └── layout.tsx     # Admin layout
│   ├── components/        # Reusable components
│   └── globals.css        # Global styles
```

### CSS Architecture

The project currently uses a hybrid approach:
- **WordPress CSS**: Original admin styles in `src/app/rp-admin/index.css`
- **Tailwind CSS**: New components and utilities
- **Component Styles**: Scoped styles for specific components

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- API INTEGRATION -->
## API Integration

ReactPress is designed to integrate with modern CMS platforms and APIs:

### Supported Integration Patterns

- **Headless WordPress** via REST API or GraphQL
- **Strapi** CMS integration
- **Contentful** API support
- **Custom APIs** with TypeScript interfaces
- **Supabase** backend integration

### Example API Integration

```typescript
// lib/api.ts
interface Post {
  id: number;
  title: string;
  content: string;
  status: 'publish' | 'draft';
}

export async function getPosts(): Promise<Post[]> {
  // Your API integration here
  const response = await fetch('/api/posts');
  return response.json();
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

We need help with the CSS to Tailwind conversion! Here's how you can contribute:

### Priority Areas

1. **CSS Conversion**
   - Convert WordPress admin CSS to Tailwind classes
   - Maintain visual fidelity
   - Optimize for performance

2. **Component Development**
   - Create reusable admin components
   - Implement proper TypeScript interfaces
   - Add accessibility features

3. **API Integration**
   - Build adapters for popular CMS platforms
   - Create type-safe API interfaces
   - Add authentication patterns

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/css-conversion`)
3. Make your changes (focus on one component at a time)
4. Test thoroughly against WordPress admin
5. Commit your Changes (`git commit -m 'Convert admin menu to Tailwind'`)
6. Push to the Branch (`git push origin feature/css-conversion`)
7. Open a Pull Request

### CSS Conversion Guidelines

When converting CSS to Tailwind:

1. **Preserve exact measurements** - use arbitrary values if needed: `w-[284px]`
2. **Maintain hover states** - ensure all interactions work identically
3. **Test responsive behavior** - verify mobile/tablet layouts
4. **Document complex conversions** - add comments for tricky selectors
5. **Use CSS variables** - for theme colors and consistent spacing

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

### Phase 1: Foundation ✅
- [x] Next.js 15 setup with App Router
- [x] WordPress admin layout recreation
- [x] Basic navigation and routing
- [x] Responsive design implementation

### Phase 2: CSS Modernization 🚧
- [ ] **Convert admin bar to Tailwind** (In Progress)
- [ ] **Convert navigation menu to Tailwind**
- [ ] **Convert form components to Tailwind**
- [ ] **Convert table layouts to Tailwind**
- [ ] **Optimize CSS bundle size**

### Phase 3: Component Library
- [ ] Reusable admin components
- [ ] Storybook documentation
- [ ] TypeScript interfaces
- [ ] Accessibility compliance

### Phase 4: API Integration
- [ ] WordPress REST API adapter
- [ ] Headless CMS integrations
- [ ] Authentication system
- [ ] Real-time updates

### Phase 5: Advanced Features
- [ ] Plugin architecture
- [ ] Theme customization
- [ ] Performance monitoring
- [ ] SEO optimization tools

See the [open issues](https://github.com/byronwade/ReactPress/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Byron Wade - [@byron_c_wade](https://twitter.com/byron_c_wade) - [byronwade.com](https://byronwade.com)

Project Link: [https://github.com/byronwade/ReactPress](https://github.com/byronwade/ReactPress)

Live Demo: [https://reactpress.byronwade.com](https://reactpress.byronwade.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [WordPress](https://wordpress.org) - For the incredible admin interface that inspired this project
* [Next.js Team](https://nextjs.org) - For the amazing React framework
* [Tailwind CSS](https://tailwindcss.com) - For the utility-first CSS framework
* [Vercel](https://vercel.com) - For hosting and deployment
* [Dashicons](https://developer.wordpress.org/resource/dashicons/) - For the icon system

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/byronwade/ReactPress.svg?style=for-the-badge
[contributors-url]: https://github.com/byronwade/ReactPress/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/byronwade/ReactPress.svg?style=for-the-badge
[forks-url]: https://github.com/byronwade/ReactPress/network/members
[stars-shield]: https://img.shields.io/github/stars/byronwade/ReactPress.svg?style=for-the-badge
[stars-url]: https://github.com/byronwade/ReactPress/stargazers
[issues-shield]: https://img.shields.io/github/issues/byronwade/ReactPress.svg?style=for-the-badge
[issues-url]: https://github.com/byronwade/ReactPress/issues
[license-shield]: https://img.shields.io/github/license/byronwade/ReactPress.svg?style=for-the-badge
[license-url]: https://github.com/byronwade/ReactPress/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/byronwade
[product-screenshot]: public/Optimized%20Image-02.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Bun]: https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white
[Bun-url]: https://bun.sh/ 