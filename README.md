# robonxt - The Brand & Design System (Revised)

Welcome to the official guide for the "robonxt" brand identity and design system. This document is the single source of truth for our visual and interactive language. Its purpose is to ensure all products are consistent, accessible, and feel like "robonxt".

---

## Using the Design System

This repository provides two canonical stylesheets that implement the entire design system:

*   **`tokens.css`** — Design tokens (colors, typography, spacing, motion, etc.)
*   **`components.css`** — Reusable component implementations (buttons, inputs, modals, etc.)

### Installation

Add this repository as a Git submodule to your project:

```bash
git submodule add https://github.com/robonxt/robonxt-visual-branding-guidelines.git design-system
git submodule init
```

### Usage

Reference the stylesheets in your HTML:

```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
<link rel="stylesheet" href="your-app-styles.css">
```

Set the theme on the root element:

```html
<html data-theme="light">
```

Use design tokens and component classes in your markup:

```html
<button class="btn btn-primary">Primary Action</button>
<div class="alert alert-success">
    <span class="material-symbols-rounded">check_circle</span>
    <div class="alert-content">
        <div class="alert-title">Success</div>
        <p class="alert-description">Your changes have been saved.</p>
    </div>
</div>
```

### Updating the Design System

Pull the latest changes:

```bash
cd design-system
git pull origin main
cd ..
git add design-system
git commit -m "Update design system"
```

Pin to a specific version for stability:

```bash
cd design-system
git checkout v1.0.0
cd ..
git add design-system
git commit -m "Pin design system to v1.0.0"
```

---

## 1. Foundations

Foundations are the core philosophies and universal rules that govern the entire design language.

### 1.1. Core Philosophy: The Pragmatic Professional
The "robonxt" brand persona is a confident, efficient expert with a witty, human touch.
*   **Golden Rule:** **Clarity first, always.**

#### Voice & Tone
*   **Default Tone:** Casual, clear, concise, and helpful. Uses simple language and contractions. The goal is to be an approachable expert.
*   **The Clever Aside:** In low-stakes moments (success messages, empty states), the brand can use witty, context-aware humor.
*   **The Golden Rule for Voice:** Never use a joke if it gets in the way of clarity. For critical information like error messages, the tone is professional and direct.

### 1.2. Typography
The system uses a single, highly-legible font family to ensure consistency and readability.

*   **Font Family:** `Inter`
*   **Line Height:** `1.6` for body text, `1.3` for headings.
*   **Letter Spacing:** `-1%` for headings.

| Role | Size (rem/px) | Weight |
| :--- | :--- | :--- |
| **Heading 1** | `2.25rem` / 36px | Bold (700) |
| **Heading 2** | `1.5rem` / 24px | Semi-Bold (600) |
| **Heading 3** | `1.25rem` / 20px | Semi-Bold (600) |
| **Body (Base)**| `1rem` / 16px | Regular (400) |
| **Label** | `0.875rem` / 14px | Medium (500) |
| **Caption** | `0.875rem` / 14px | Regular (400) |

### 1.3. Layout & Motion
These are the rules for spacing, shape, and animation that create a consistent physical structure and feel.

#### Spacing & Sizing
All spacing and component sizing values are based on an **8-Point Grid System**. This applies to padding, margins, gaps, and all component dimensions (width, height, etc.).

| Token | Value | Use Case |
| :--- | :--- | :--- |
| `space-xs` | 8px | Gaps between icon and text. |
| `space-sm` | 16px | Padding in buttons, gaps in lists. |
| `space-md` | 24px | Padding inside components (cards, modals). |
| `space-lg` | 32px | Separation between component groups. |
| `space-xl` | 48px | Margin between major page sections. |

**Component Sizing Examples:**
*   Avatar sizes: 32px, 48px, 64px
*   Icon sizes: 16px, 24px, 32px
*   Progress bar height: 8px
*   Switch track: 44px × 24px
*   Scrollbar width: 8px

#### Corner Radius
| Token | Value | Use Case |
| :--- | :--- | :--- |
| `radius-sm` | 4px | Small elements (tooltips). |
| `radius-md` | 8px | **Default.** Buttons, inputs. |
| `radius-lg` | 16px | Larger components (Cards, Modals). |
| `radius-full` | 9999px | Circular elements (Pills, Toggles). |

#### Borders
| Token | Value | Use Case |
| :--- | :--- | :--- |
| `stroke-sm` | 1.5px | **Default.** Borders, dividers. |
| `stroke-md` | 3px | Focus rings, active state indicators. |

#### Elevation (Shadows)
| Token | Use Case |
| :--- | :--- |
| `shadow-sm` | Subtle shadow for interactive hover states. |
| `shadow-md` | **Default.** Cards and Popovers. |
| `shadow-lg` | Prominent shadow for critical overlays like Modals. |

#### Motion
*   **Easing:** All animations use `cubic-bezier(0.4, 0, 0.2, 1)`.

| Token | Value | Use Case |
| :--- | :--- | :--- |
| `duration-quick` | 150ms | Quick feedback (hover effects). |
| `duration-medium` | 300ms | **Default.** State changes (toggles). |
| `duration-slow` | 500ms | Large transitions (modals). |

---

## 2. Color System

Our color system is built for brand expression, accessibility, and clear communication. It is organized from foundational palettes to the semantic tokens used in development.

### 2.1. Palettes

#### 2.1.1. Logo Palette
Reserved for the official "robonxt" logo and core brand assets. **Do not use for interactive UI components** to maintain brand distinction.

| Color Name | Hex |
| :--- | :--- |
| Logo Teal | `#14B8A6`|
| Logo Red | `#B91C1C`|
| Logo Slate | `#343F4B`|
| Logo Ink | `#111827`|

#### 2.1.2. Brand Palette
Core interactive colors for the UI. The `500` or `600` shade is the default.

**Primary: Indigo** (Calls-to-action, links, active states)

| Token | Hex |
| :--- | :--- |
| `indigo-50` | `#EEF2FF` |
| `indigo-100` | `#E0E7FF` |
| `indigo-200` | `#C7D2FE` |
| `indigo-300` | `#A5B4FC` |
| `indigo-400` | `#818CF8` |
| `indigo-500` | `#6366F1` |
| `indigo-600` | `#4F46E5` |
| `indigo-700` | `#4338CA` |
| `indigo-800` | `#3730A3` |
| `indigo-900` | `#312E81` |

**Secondary: Fuchsia** (High-emphasis accent color for secondary actions)

| Token | Hex |
| :--- | :--- |
| `fuchsia-50` | `#FDF4FF` |
| `fuchsia-100` | `#FAE8FF` |
| `fuchsia-200` | `#F5D0FE` |
| `fuchsia-300` | `#F0ABFC` |
| `fuchsia-400` | `#E879F9` |
| `fuchsia-500` | `#D946EF` |
| `fuchsia-600` | `#C026D3` |
| `fuchsia-700` | `#A21CAF` |
| `fuchsia-800` | `#86198F` |
| `fuchsia-900` | `#701A75` |

**Accents** (Illustrations, highlights; not for primary interaction)

| Role | Color Name | Hex |
| :--- | :--- | :--- |
| **Positive** | Soft Green | `#6EE7B7` |
| **Neutral** | Cool Gray | `#64748B` |

#### 2.1.3. Neutrals Palette
Used for all core UI surfaces, text, and borders.

| Name | Hex | Light Mode Use | Dark Mode Use |
| :--- | :--- | :--- | :--- |
| **Surface** | `#FFFFFF` | Main Page & Component Background | *(Not Used)* |
| **Text (High)** | `#111827` | **Default text.** Headings, body copy. | High-emphasis text (`#FFFFFF`) |
| **Text (Medium)** | `#4B5563` | Sub-headings, labels, helper text. | Medium-emphasis text (`#D1D5DB`) |
| **Text (Low)** | `#9CA3AF` | Disabled text, decorative details. | Low-emphasis, disabled text (`#6B7280`) |
| **Border** | `#E5E7EB` | Dividers, default borders. | Borders, dividers (`#374151`) |
| **Night** | `#0F172A` | *(Not Used)* | Main page background |
| **Surface (Dark)** | `#1E293B`| *(Not Used)* | Component background (Cards, Modals) |

#### 2.1.4. Functional Palette
Used exclusively to communicate system status.

| Role | Color Name | Hex | Use Case |
| :--- | :--- | :--- | :--- |
| **Success** | Success Green | `#059669` | Success messages, confirmations. |
| **Warning** | Warning Amber | `#D97706` | Warnings, non-critical alerts. |
| **Danger** | Danger Red | `#DC2626` | Error messages, destructive actions. |

### 2.2. Semantic Color Tokens
Components should reference these semantic tokens, not raw color values, to support theming and interactive states.

| Semantic Token | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- |
| **Primary Interaction** | | |
| `color-primary` | `indigo-600` | `indigo-500` |
| `color-primary-hover` | `indigo-700` | `indigo-400` |
| `color-primary-active` | `indigo-800` | `indigo-300` |
| **Accent Interaction** | | |
| `color-accent` | `fuchsia-600` | `fuchsia-500` |
| `color-accent-hover` | `fuchsia-700` | `fuchsia-400` |
| **Surfaces** | | |
| `color-background` | `white` | `night` (`#0F172A`) |
| `color-surface` | `white` | `surface-dark` (`#1E293B`) |
| `color-surface-hover`| `gray-50` | `gray-800` |
| **Text** | | |
| `color-text-high` | `gray-900` | `white` |
| `color-text-medium`| `gray-600` | `gray-300` |
| `color-text-low` | `gray-400` | `gray-500` |
| **Borders** | | |
| `color-border-default`| `gray-200` | `gray-700` |
| `color-border-focus`| `indigo-500` | `indigo-400` |
| **Functional** | | |
| `color-success` | `Success Green` | `Success Green` |
| `color-warning` | `Warning Amber` | `Warning Amber` |
| `color-error` | `Danger Red` | `Danger Red` |

---

## 3. Components

Components are the reusable building blocks of our user interface, constructed from the foundations and systems defined above.

### 3.1. Iconography
*   **Library:** **Material Symbols**
*   **Style:** **Rounded** (exclusively)
*   **Sizing:** Must use the 8-point grid (`16px`, `24px`, `32px`). `24px` is the default.
*   **Color:** Icons should inherit the color of the surrounding text (`currentColor`).

### 3.2. Buttons
*   **Primary:** Solid fill using `color-primary`. For the most important action.
*   **Secondary:** Solid fill using `color-accent`. For alternative, high-emphasis actions.
*   **Outline:** Transparent with a `color-border-default` border. For medium-emphasis actions.
*   **Ghost:** Transparent with no border. For low-emphasis actions.

### 3.3. Input Fields
*   **Primitives:** Use `radius-md` and `stroke-sm`.
*   **States:** The label and border must re-color on `focus` (to `color-border-focus`) and `error` (to `color-error`). The focus state must use `stroke-md`.
*   **Spacing:** Label is `space-xs` from the container; internal padding is `space-sm`.

### 3.4. Alerts
*   **Structure:** Icon + Title/Description + Optional Close Button.
*   **Types:** Must use the semantic functional colors (`color-success`, `color-warning`, `color-error`) and a neutral `Info` style.

### 3.5. Header
*   **Purpose:** A persistent surface for global navigation and branding.
*   **Layout:** Uses Flexbox (`justify-content: space-between`) to align the logo left and actions right.
*   **Spacing:** Horizontal padding is `space-md` (24px) on desktop and `space-sm` (16px) on mobile.
*   **Separation:** A `stroke-sm` bottom border using `color-border-default` separates it from page content.
*   **Behavior:** Sticky to the top of the viewport.

### 3.6. Dropdowns
*   **Purpose:** A menu that appears when a user interacts with a trigger element.
*   **Structure:** Composed of a trigger `button` and a menu container.
*   **Primitives:** The menu uses `radius-lg`, `shadow-md`, and a `stroke-sm` border.
*   **Spacing:** Padding within the menu is `space-xs`. Interactive items inside use `radius-md` with `space-xs` vertical and `space-sm` horizontal padding.
*   **Motion:** Fades and translates into view using `duration-medium`.

### 3.7. Modals
*   **Primitives:** Use `radius-lg` and `shadow-lg`.
*   **Layout:** Content padding must be `space-md`. The footer should contain clear actions, like a `Primary` "Confirm" and an `Outline` "Cancel" button.
*   **Motion:** Modal and backdrop fade and scale in/out using `duration-slow`.

### 3.8. Selection Controls
*   **Pill Selectors:** For selecting one option from a small, related set.
    *   **Structure:** A container with `radius-full` holds multiple `button` elements. A single "slider" element moves behind the active button.
    *   **Slider:** The moving element has `radius-full` and uses `color-primary`.
    *   **Motion:** The slider animates its position and width using `duration-medium`.
*   **Switches:** For binary on/off states.
    *   **Structure:** Composed of a track and thumb, both with `radius-full`.
    *   **Motion:** The thumb animates with `duration-quick`.