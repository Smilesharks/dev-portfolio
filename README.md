## Print-friendly portfolio CV

![preview](https://github.com/user-attachments/assets/44c47034-06e4-412a-b9dd-014593b32215)

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)
![GitHub stars](https://img.shields.io/github/stars/Smilesharks/dev-portfolio)
![GitHub issues](https://img.shields.io/github/issues/Smilesharks/dev-portfolio)
![GitHub forks](https://img.shields.io/github/forks/Smilesharks/dev-portfolio)
![GitHub PRs](https://img.shields.io/github/issues-pr/Smilesharks/dev-portfolio)

## ✨ Features

- **Print-friendly** - Optimised layout for PDF export and printing
- **Dark/Light mode** - System preference detection with manual override
- **5 Colour themes** - Default, blue, red, green, and cyber themes
- **Keyboard shortcuts** - Command palette with `Cmd/Ctrl + K`
- **Responsive design** - Mobile-first approach with Tailwind CSS 4
- **JSON-based content** - Easy content management via `cv.json`

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The next-gen web framework.
- [**Tailwind CSS 4**](https://tailwindcss.com/) - A utility-first CSS framework with CSS-first configuration.
- [**Alpine.js**](https://alpinejs.dev/) - Lightweight JavaScript framework for composing behaviour.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with type syntax.
- [**HotKeyPad**](https://github.com/nicosommi/hotkeypad) - Command palette with keyboard shortcuts.

## 🚀 Getting Started

### 1. Use this Repo as an Astro Project Template

- I use [pnpm](https://pnpm.io/installation) as my package manager.

```bash
# Enable pnpm on MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate
```

# Initialize the project
```bash
pnpm create astro@latest -- --template Smilesharks/dev-portfolio
```

### 2. Add Your Content:

Edit the `cv.json` file to create your own printable Portfolio/CV.

### 3. Launch the Development Server:

```bash
# Enjoy the results
pnpm dev
```
1. Open [**http://localhost:4321**](http://localhost:4321/) in your browser to view the result 🚀

### 4. Customisable colours:

Change the `theme` property in `cv.json` and choose one of the available colour themes:

| Theme | Description |
|-------|-------------|
| `default` | Orange accent (default) |
| `blue` | Blue/slate accent |
| `red` | Red/stone accent |
| `green` | Lime/green accent |
| `cyber` | Yellow/cyan cyberpunk style |

Each theme includes light and dark mode variants. The theme selector dropdown allows users to switch between light, dark, and system preference.

**Creating custom themes:**

Edit `src/styles/global.css` and add your theme variables under the appropriate selectors (`:root [data-theme="your-theme"]` for light mode, `.dark [data-theme="your-theme"]` for dark mode).

## 🧞 Commands

|     | Command         | Action                                                                       |
| :-- | :-------------- | :--------------------------------------------------------------------------- |
| ⚙️  | `dev` o `start` | Launches a local development server at `localhost:4321`.                   |
| ⚙️  | `build`         | Checks for errors and creates a production build in `./dist/`. |
| ⚙️  | `preview`       | Local preview at `localhost:4321`                                       |

Wiki: [dev-portfolio](https://deepwiki.com/Smilesharks/dev-portfolio)

CV JSON schema from [**jsonresume.org**](https://jsonresume.org/schema/)

Based on [**Bartosz Jarocki - Print-friendly, minimalist CV page**](https://github.com/BartoszJarocki/cv) and [**Miguel Ángel Durán - minimalist-portfolio-json**](https://github.com/midudev/minimalist-portfolio-json)
