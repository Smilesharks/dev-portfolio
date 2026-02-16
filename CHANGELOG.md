# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Alpine.js dropdown for theme selector with animated icons (sun/moon/computer)
- Dynamic theme system with 5 colour themes (default, blue, red, green, cyber)
- Light and dark mode variants for each theme
- System theme detection with live updates
- CSS-first theme configuration using `@theme inline` directive

### Changed

- Upgraded from Tailwind CSS v3 to v4
- Replaced JavaScript-based `tailwind.config.mjs` with CSS-first configuration in `global.css`
- Replaced native `<select>` with custom Alpine.js dropdown for theme selection
- Moved Alpine.js initialisation to Layout for global availability

### Fixed

- Layout breaking issue caused by hotkeypad reset.css overriding Tailwind utilities
- Experience timeline opacity and gradient colours using correct skin tokens

### Removed

- `tailwind.config.mjs` (replaced by CSS-first configuration)
- `public/themes/themes.css` (consolidated into `global.css`)
- `hotkeypad/reset.css` import (caused conflicts with Tailwind v4 @layer)
