# The "robonxt" Brand & Design System Guide

This document outlines the complete brand identity and design system for "robonxt". It provides a set of rules and guidelines to ensure consistency, professionalism, and a unique brand personality across all projects and platforms.

# Table of Contents

- [1. The Core Philosophy: The Pragmatic Professional](#1-the-core-philosophy-the-pragmatic-professional)
- [2. Color System](#2-color-system)
- [3. Typography System](#3-typography-system)
- [4. Layout & Spacing](#4-layout--spacing)
- [5. Core Primitives (Shadows, Borders, Radius)](#5-core-primitives-shadows-borders-radius)
- [6. Motion System](#6-motion-system)
- [7. Component Design](#7-component-design)
- [8. Theming System](#8-theming-system)

## 1. The Core Philosophy: The Pragmatic Professional

The "robonxt" brand is built on a single, core persona: **The Pragmatic Professional.**

This persona is a confident, expert guide that is so good at its job that it can afford to be a little clever. It values efficiency and clarity above all else, but has a witty, human touch.

-   **Personality:** Semi-minimalist, parts professional and parts playful.
-   **Golden Rule:** **Clarity first, always.** Personality and humor must never sacrifice the user's ability to understand.

### Voice & Tone

The brand's voice is the direct expression of its persona.

-   **Default Tone (90% of content):** Casual, clear, concise, and helpful. Uses simple language and contractions. The goal is to be an approachable expert.
-   **The Clever Aside (10% of content):** In low-stakes moments (success messages, empty states), the brand can use witty, context-aware humor (puns, dad jokes).
-   **The Golden Rule for Voice:** Never use a joke if it gets in the way of clarity. For critical information like error messages, the tone is **100% professional and direct.**

---

## 2. Color System

The color system is designed for clarity and accessibility in both light and dark modes.

### Primary & Accent Colors

| Role | Color Name | Hex | Use Case |
| :--- | :--- | :--- | :--- |
| **Primary** | Teal | `#14B8A6` | Main interactive elements, CTAs, active states. |
| **Primary (Alt)** | Soft Green | `#6EE7B7` | Alternative primary for softer, more organic contexts. |
| **Accent** | Bold Red | `#B91C1C` | Secondary actions, destructive actions, errors. |

### Neutrals

| Name | Hex | Light Mode Use | Dark Mode Use |
| :--- | :--- | :--- | :--- |
| Paper | `#F5F7FA` | Main page background | High-emphasis text |
| Light Gray | `#E1E5EA` | Borders, dividers | - |
| Medium Gray | `#8A94A6` | Medium-emphasis text | Medium-emphasis text |
| Slate | `#343F4B` | High-emphasis text | Borders, dividers |
| Onyx | `#1F2933` | - | Component background (Surface/Container) |
| Deep Onyx | `#161F27` | - | Main page background |

### Functional Colors

| Role | Color Name | Hex | Use Case |
| :--- | :--- | :--- | :--- |
| **Success** | Green | `#22C55E` | Success messages, confirmations. |
| **Warning** | Amber | `#F59E0B` | Warnings, non-critical alerts. |
| **Error** | Bold Red | `#B91C1C` | Error messages, destructive actions. |

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

### Layout Primitives
-   **Section:** A semantic wrapper with no visual style. Its only job is to create vertical margin (`space-xl` or `space-2xl`) between groups of content on a page.
-   **Surface (Container):** A non-interactive, static "canvas" for the main content of a page. It has a background, border, and radius, but **no animation or shadow.**
-   **Interactive Card:** An interactive element used for summaries or links. It uses the "lift" animation on hover and can have brand accents like a top border or contextual icon.

---

## 5. Core Primitives (Shadows, Borders, Radius)

These tokens define the physical properties of components.

### Elevation (Shadows)
A system for creating depth and hierarchy.

| Token       | Use Case                                       |
| :---------- | :--------------------------------------------- |
| `shadow-sm` | Subtle shadow for interactive elements on hover. |
| `shadow-md` | **Default.** Standard shadow for Cards and Popovers. |
| `shadow-lg` | Prominent shadow for critical overlays like Modals. |

### Borders
| Token       | Value | Use Case                               |
| :---------- | :---- | :------------------------------------- |
| `stroke-sm` | 1px   | **Default.** Borders, dividers.        |
| `stroke-md` | 2px   | Focus rings, active state indicators.  |

### Corner Radius
| Token         | Value  | Use Case                                       |
| :------------ | :----- | :--------------------------------------------- |
| `radius-sm`   | 4px    | Small elements like checkboxes, tooltips.      |
| `radius-md`   | 8px    | **Default.** Buttons, inputs.                  |
| `radius-lg`   | 16px   | Larger components: Surfaces, Cards, Modals.  |
| `radius-full` | 9999px | Circular elements: Pills, Toggles, Avatars.    |

---

## 6. Motion System

Motion provides feedback and guides the user's attention.

-   **Easing:** All animations use `cubic-bezier(0.4, 0, 0.2, 1)` for a responsive, natural feel.

| Token             | Value | Use Case                                       |
| :---------------- | :---- | :--------------------------------------------- |
| `duration-quick`  | 150ms | For quick feedback (hover effects on color/shadow). |
| `duration-medium` | 300ms | **Default.** For state changes (toggles, accordions). |
| `duration-slow`   | 500ms | For large transitions (modals appearing/disappearing). |

---

## 7. Component Design

The tangible, interactive elements of the brand.

### Iconography
-   **Library:** **Material Symbols**
-   **Style:** **Rounded** (exclusively)
-   **Sizing:** Must use the 8-point grid (`16px`, `24px`, `32px`, `48px`). `24px` is the default.
-   **Color:** Icons should always be set to `currentColor` to inherit the color of the surrounding text.

### Buttons
Buttons have defined variants and states to cover all use cases.
-   **Variants:**
    -   `Primary`: Solid fill for the most important action.
    -   `Secondary`: Solid fill with the accent color for destructive or alternative actions.
    -   `Outline`: Transparent with a border for medium-emphasis actions.
    -   `Ghost`: Transparent with no border for low-emphasis actions.
-   **States:** All variants must have styles for `default`, `hover`, `focus-visible`, and `disabled`.

### Alerts
Alerts provide persistent, contextual feedback about a system state.
-   **Structure:** Icon + Title/Description + Optional Close Button.
-   **Types:** Must use the functional colors (`Success`, `Warning`, `Error`) and a neutral `Info` style.

### Tooltips
Tooltips provide concise, non-essential information on hover or focus.
-   **Style:** Small, dark, with `radius-sm`.
-   **Behavior:** Should not be used for critical information. Appears after a short delay.

### Input Fields

Text inputs are the foundation of forms and user interaction. They follow the core principles of clarity and pragmatic feedback.

-   **Structure:**
    -   **Label:** Uses the `Label` typography style.
    -   **Input Container:** The main box holding the text.
    -   **Input Text:** Uses the `Body (Base)` typography style.
    -   **Helper/Error Text:** Sits below the input, using the `Caption` style.
-   **Spacing:**
    -   The label should be `space-xs` (8px) below the input container.
    -   Padding inside the input container is `space-sm` (16px).
    -   Helper text is `space-xs` (8px) below the input container.
-   **Primitives:**
    -   **Corner Radius:** `radius-md` (8px).
    -   **Border:** `stroke-sm` (1px) for the default state.

#### States

| State           | Border Color           | Label Color       | Helper/Error Text Color | Notes                                                                   |
| :-------------- | :--------------------- | :---------------- | :---------------------- | :---------------------------------------------------------------------- |
| **Default**     | `color-border-default` | `color-text-high` | `color-text-medium`     | The standard, inactive state.                                           |
| **Hover**       | `color-text-medium`    | `color-text-high` | `color-text-medium`     | The border darkens slightly to indicate interactivity.                  |
| **Focus**       | `color-primary`        | `color-primary`   | `color-text-medium`     | Uses a `stroke-md` (2px) border to meet accessibility standards.        |
| **Error**       | `color-error`          | `color-error`     | `color-error`           | The entire component re-colors to signal a critical issue.              |
| **Disabled**    | `color-border-default` | `color-text-low`  | `color-text-low`        | The component should have a muted background and non-interactive cursor. |

### Selection Controls (Switches & Toggles)

Selection controls allow users to make choices or change settings.

#### Switches

Used for binary on/off states that apply instantly.

-   **Anatomy:** A "track" and a "thumb".
-   **Primitives:** `radius-full` for both track and thumb.
-   **Motion:** The thumb animates between states using `duration-quick` (150ms).

| State      | Track Color            | Thumb Color | Notes                                        |
| :--------- | :--------------------- | :---------- | :------------------------------------------- |
| **Off**    | `color-border-default` | `Paper`     | The default, inactive state.                 |
| **On**     | `color-primary`        | `Paper`     | Clearly indicates the "on" state.            |
| **Hover**  | (Slightly darker)      | `Paper`     | Provides feedback before interaction.        |
| **Disabled** | `color-text-low`       | `Light Gray`  | Visibly non-interactive.                     |

#### Toggle Buttons (Button Groups)

Used when a user needs to select one option from a small, mutually exclusive set (e.g., text alignment).

-   **Structure:** A set of `Button` components visually grouped together in a single container. The container uses `radius-md`.
-   **Styling:**
    -   **Selected Option:** Uses the `Primary` button style (solid fill) to clearly indicate the active choice.
    -   **Unselected Options:** Use the `Ghost` button style to de-emphasize them while keeping them interactive.
    -   The container itself should have a single `stroke-sm` border around the entire group.

### Modals

Modals are overlays that disable the main content to require an interaction. They are used for critical tasks, confirmations, or focused content.

-   **Structure:**
    -   **Backdrop:** A semi-transparent layer covering the page to focus attention.
    -   **Surface:** The main modal container. Uses `color-surface` for its background.
    -   **Header:** Contains the `Heading 3` title and an 'X' close icon (`Ghost` button).
    -   **Body:** The main content of the modal.
    -   **Footer:** Contains the action buttons (e.g., a `Primary` "Confirm" and an `Outline` "Cancel").
-   **Primitives:**
    -   **Elevation:** `shadow-lg` to lift it far above the page content.
    -   **Corner Radius:** `radius-lg` (16px).
-   **Layout & Spacing:**
    -   Padding inside the modal (header, body, footer) should be `space-md` (24px).
    -   The gap between the Header, Body, and Footer should be `space-md` (24px).
    -   The gap between buttons in the footer should be `space-sm` (16px).
-   **Motion:**
    -   The modal and backdrop should fade and scale in/out using `duration-slow` (500ms) for a smooth, non-jarring transition.

### Dropdowns

Dropdowns provide a list of actions or options in a temporary menu that appears when a user interacts with a button or trigger.

-   **Structure**:
    -   **Trigger:** A `Button` component (typically `Outline` or `Ghost`) that toggles the menu's visibility.
    -   **Menu:** The main container that holds the list of items. Uses `color-surface`.
    -   **Menu Item:** An interactive element within the menu, often including an icon and text.
    -   **Divider:** A horizontal rule (`stroke-sm`) used to group related menu items.
-   **Primitives**:
    -   **Elevation:** `shadow-md`.
    -   **Corner Radius:** `radius-lg` (16px) for the menu, `radius-md` (8px) for the items inside.
    -   **Border:** `stroke-sm` (1px) around the menu.
-   **Layout & Spacing**:
    -   The menu should appear `space-xs` (8px) away from its trigger.
    -   The menu itself has `space-xs` (8px) of internal padding.
    -   Menu items have `space-xs` (8px) vertical and `space-sm` (16px) horizontal padding.
-   **Motion**:
    -   The menu should fade and translate into view using `duration-medium` (300ms) for a smooth appearance.

### Pill Selector (Tab Navigation)

A primary navigation component used to switch between a small, mutually exclusive set of views. It provides clear visual feedback with a sliding "pill" indicator that animates smoothly between the active and inactive states.

-   **Structure:**
    -   **Track (`.tab-list`):** A container with a `radius-full` background that acts as the track for the slider.
    -   **Pill Slider (`.tab-slider`):** An absolutely positioned element with a background, `radius-full`, and `shadow-sm`. Its width and position are controlled by JavaScript to align with the active tab.
    -   **Tab Button (`.tab-button`):** The individual, clickable navigation items. The active tab receives a distinct text color.
-   **Primitives:**
    -   **Corner Radius:** `radius-full` for both the track and the sliding pill.
    -   **Elevation:** `shadow-sm` on the pill slider to lift it slightly off the track.
-   **Layout & Spacing:**
    -   Internal padding on the track provides space around the buttons.
    -   Buttons use `space-sm` for horizontal padding.
-   **Motion:**
    -   The pill slider animates its `transform` and `width` properties using `duration-medium` and the standard easing curve for a fluid, responsive feel as the user clicks between tabs.
-   **Behavior (JavaScript-driven):**
    -   The component's state is managed via the URL hash (`#home`, `#about`), enabling deep linking and browser history support.
    -   JavaScript calculates the size and position of the active tab button on click or page load and animates the pill slider to match.
    -   The slider position is recalculated on window resize to ensure it remains correctly aligned in responsive layouts.

---

## 8. Theming System

While the color system defines the palette, the theming system defines its application. By using semantic tokens (or aliases), we can ensure that components adapt correctly to different themes, such as the default light and dark modes. This abstracts the specific hex codes from the components themselves.

### Semantic Color Tokens

Components should reference these tokens, not the raw color names, to support theming.

| Semantic Token | Light Mode Value | Dark Mode Value | Use Case |
| :--- | :--- | :--- | :--- |
| `color-primary` | `Teal` | `Teal` | Main interactive elements, CTAs, active states. |
| `color-accent` | `Bold Red` | `Bold Red` | Destructive actions, errors. |
| `color-background` | `Paper` | `Deep Onyx` | The main page background. |
| `color-surface` | `Paper` | `Onyx` | Component backgrounds (Cards, Modals). |
| `color-text-high` | `Slate` | `Paper` | High-emphasis text (Headings, body). |
| `color-text-medium` | `Medium Gray` | `Medium Gray` | Medium-emphasis text (Labels, helper text). |
| `color-text-low` | `Light Gray` | `Slate` | Low-emphasis text, disabled states. |
| `color-border-default` | `Light Gray` | `Slate` | Default borders and dividers. |
| `color-border-focus` | `Teal` | `Teal` | Focus rings on interactive elements. |
| `color-success` | `Green` | `Green` | Success states and messaging. |
| `color-warning` | `Amber` | `Amber` | Warning states and messaging. |
| `color-error` | `Bold Red` | `Bold Red` | Error states and messaging. |