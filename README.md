# The "robonxt" Brand & Design System Guide

This document outlines the complete brand identity and design system for "robonxt". It provides a set of rules and guidelines to ensure consistency, professionalism, and a unique brand personality across all projects and platforms.



# Table of Contents

- [1. The Core Philosophy: The Pragmatic Professional](#1-the-core-philosophy-the-pragmatic-professional)
- [2. Color System](#2-color-system)
- [3. Typography System](#3-typography-system)
- [4. Layout & Spacing](#4-layout--spacing)
- [5. Component Design](#5-component-design)
- [6. Voice & Tone](#6-voice--tone)




## 1. The Core Philosophy: The Pragmatic Professional

The "robonxt" brand is built on a single, core persona: **The Pragmatic Professional.**

This persona is a confident, expert guide that is so good at its job that it can afford to be a little clever. It values efficiency and clarity above all else, but has a witty, human touch.

-   **Personality:** Semi-minimalist, parts professional and parts playful.
-   **Golden Rule:** **Clarity first, always.** Personality and humor must never sacrifice the user's ability to understand.

---

## 2. Color System

The color system is designed for clarity and accessibility in both light and dark modes.

### Primary & Accent Colors

| Role      | Color Name | Hex       | Use Case                                   |
| :-------- | :--------- | :-------- | :----------------------------------------- |
| **Primary** | Teal       | `#14B8A6` | Main interactive elements, CTAs, active states. |
| **Accent**  | Crimson    | `#D94452` | Secondary actions, destructive actions, errors. |

### Neutrals

| Name         | Hex       | Light Mode Use                 | Dark Mode Use                      |
| :----------- | :-------- | :----------------------------- | :--------------------------------- |
| Paper        | `#F5F7FA` | Main page background           | High-emphasis text                 |
| Light Gray   | `#E1E5EA` | Borders, dividers              | -                                  |
| Medium Gray  | `#8A94A6` | Medium-emphasis text           | Medium-emphasis text               |
| Slate        | `#343F4B` | High-emphasis text             | Borders, dividers                  |
| Onyx         | `#1F2933` | -                              | Component background (Surface/Container) |
| Deep Onyx    | `#161F27` | -                              | Main page background               |

### Functional Colors

| Role      | Color Name | Hex       | Use Case                               |
| :-------- | :--------- | :-------- | :------------------------------------- |
| **Success** | Green      | `#22C55E` | Success messages, confirmations.       |
| **Warning** | Amber      | `#F59E0B` | Warnings, non-critical alerts.         |
| **Error**   | Crimson    | `#D94452` | Error messages, destructive actions.   |

---

## 3. Typography System

The system uses a single, highly-legible font family to ensure consistency.

-   **Font Family:** `Inter`

### Typographic Scale

| Role          | Size (rem/px)     | Weight      | Use Case                                       |
| :------------ | :---------------- | :---------- | :--------------------------------------------- |
| **Jumbo**     | `10rem` / 160px   | Black (900) | Ultra-impactful, single words or numbers.      |
| **Display XL**| `6rem` / 96px     | Bold (700)  | Marketing hero headlines.                      |
| **Heading 1** | `2.25rem` / 36px  | Bold (700)  | Primary page titles.                           |
| **Heading 2** | `1.5rem` / 24px   | Semi-Bold (600) | Section titles.                              |
| **Heading 3** | `1.25rem` / 20px  | Semi-Bold (600) | Sub-sections, component titles.              |
| **Body (Lead)**| `1.125rem` / 18px | Regular (400) | Introductory paragraphs.                       |
| **Body (Base)**| `1rem` / 16px     | Regular (400) | **Default text.** All main content.          |
| **Label**     | `0.875rem` / 14px | Medium (500)  | Buttons, form labels, navigation.              |
| **Caption**   | `0.875rem` / 14px | Regular (400) | Helper text, metadata.                         |
| **Micro**     | `0.75rem` / 12px  | Regular (400) | Timestamps, secondary details.                 |
| **Fine Print**| `0.625rem` / 10px | Regular (400) | **Legal disclaimers only.** High contrast required. |

### Readability Rules
-   **Line Height:** `1.6` for body text, `1.3` for headings.
-   **Letter Spacing:** `-1%` for headings.

---

## 4. Layout & Spacing

The architectural foundation of the brand.

### The 8-Point Grid System
All spacing values (margins, padding, gaps) **must be a multiple of 8px.**

| Token      | Value | Use Case                                       |
| :--------- | :---- | :--------------------------------------------- |
| `space-xs` | 8px   | Between small, related elements (icon & text). |
| `space-sm` | 16px  | Padding in buttons, gaps between list items.   |
| `space-md` | 24px  | Content padding inside components (cards, modals). |
| `space-lg` | 32px  | Separation between distinct component groups.  |
| `space-xl` | 48px  | Margin between major page sections.            |
| `space-2xl`| 64px  | Page-level padding for significant breathing room. |

### Responsive Breakpoints
All designs must be **Mobile First.**

| Token | Value  | Target Devices           |
| :---- | :----- | :----------------------- |
| `sm`  | 640px  | Large phones, small tablets. |
| `md`  | 768px  | Tablets, small laptops.  |
| `lg`  | 1024px | Standard desktops.       |
| `xl`  | 1280px | Large desktops.          |

### Layout Primitives
-   **Section:** A semantic wrapper with no visual style. Its only job is to create vertical margin (`space-xl` or `space-2xl`) between groups of content on a page.
-   **Surface (Container):** A non-interactive, static "canvas" for the main content of a page. It has a background, border, and radius, but **no animation or shadow.**
-   **Interactive Card:** An interactive element used for summaries or links. It uses the "lift" animation on hover and can have brand accents like a top border or contextual icon.

---

## 5. Component Design

The tangible, interactive elements of the brand.

### Iconography
-   **Library:** **Material Symbols**
-   **Style:** **Rounded** (exclusively)
-   **Sizing:** Must use the 8-point grid (`16px`, `24px`, `32px`, `48px`). `24px` is the default.
-   **Color:** Icons should always be set to `currentColor` to inherit the color of the surrounding text.

### Corner Radius
| Token         | Value  | Use Case                                       |
| :------------ | :----- | :--------------------------------------------- |
| `radius-sm`   | 4px    | Small elements like checkboxes.                |
| `radius-md`   | 8px    | **Default.** Buttons, inputs.                  |
| `radius-lg`   | 16px   | Larger components: Surfaces, Cards, Modals.  |
| `radius-full` | 9999px | Circular elements: Pills, Toggles, Avatars.    |

### Motion System
-   **Easing:** All animations use `cubic-bezier(0.4, 0, 0.2, 1)` for a responsive, natural feel.
-   **Duration:**
    -   `150ms`: For quick feedback (hover effects).
    -   `300ms`: **Default.** For state changes (toggle switches).
    -   `500ms`: For large transitions (modals appearing).

---

## 6. Voice & Tone

The brand's personality in written communication.

-   **Persona:** **The Pragmatic Professional**
-   **Default Tone (95% of content):** Casual, clear, concise, and helpful. Uses simple language and contractions. The goal is to be an approachable expert.
-   **The Clever Aside (5% of content):** In low-stakes moments (success messages, empty states), the brand can use witty, context-aware humor (puns, dad jokes).
-   **The Golden Rule:** Never use a joke if it gets in the way of clarity. For critical information like error messages, the tone is **100% professional and direct.**