---
trigger: always_on
---

When making changes to `README.md`, any new, updated, or removed design tokens or values MUST be synced/reflected in `tokens.css`
Any new design implementations made in `README.md`, any new, updated, or removed design implementations MUST be synced/reflected in `components.css`

There is also a sample/showcase website. It is located in the `public/` folder. Updates to the website, once confirmed by the user to be working, may need updates to said design token files.

Important files:
- <root>/README.md: the main single point of truth.
- <root>/tokens.css:  the design tokens that are processed from README.md
- <root>/components.css: the design implementations that are processed from README.md
- <root>/public/:  the folder for the sample/showcase website