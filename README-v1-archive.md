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

<!-- Modal Example (with optional footer) -->
<div class="modal-backdrop" id="my-modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
    <div class="modal-dialog" tabindex="-1">
        <div class="modal-header">
            <h2 id="modal-heading" class="modal-title">Modal Title</h2>
            <button class="btn btn-icon" aria-label="Close">
                <span class="material-symbols-rounded">close</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Modal content goes here.</p>
        </div>
        <!-- Footer is optional -->
        <div class="modal-footer">
            <button class="btn btn-outline">Cancel</button>
            <button class="btn btn-primary">Confirm</button>
        </div>
    </div>
</div>

<!-- Info Modal Example (no footer) -->
<div class="modal-backdrop" id="info-modal" role="dialog" aria-modal="true" aria-labelledby="info-heading">
    <div class="modal-dialog" tabindex="-1">
        <div class="modal-header">
            <h2 id="info-heading" class="modal-title">Information</h2>
            <button class="btn btn-icon" aria-label="Close">
                <span class="material-symbols-rounded">close</span>
            </button>
        </div>
        <div class="modal-body">
            <p>This modal has no footer, just informational content.</p>
        </div>
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
*   Touch target: minimum 48px (configurable via `--touch-target`)
*   Avatar sizes: 32px, 48px, 64px (configurable via `--avatar-size-xs`, `--avatar-size-sm`, `--avatar-size-md`)
*   Icon sizes: 16px, 24px, 32px (configurable via `--icon-size-xs`, `--icon-size-sm`, `--icon-size-md`)
*   Progress bar height: 8px (configurable via `--progress-height`)
*   Switch track: 44px × 24px (configurable via `--switch-track-width` and `--switch-track-height`)
*   Switch thumb: 16px (configurable via `--switch-thumb-size`)
*   Pill selector padding: 4px (configurable via `--pill-group-padding`)
*   Pill selector gap: 2px (configurable via `--pill-group-gap`)
*   Scrollbar width: 8px (configurable via `--scrollbar-width`)

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
| **Surface** | `#F9FAFB` | Component Background (Cards, Modals) | Component background (`slate-800`) |
| **Light** | `#F9F9F9` | Main page background | *(Not Used)* |
| **Night** | `#0F172A` | *(Not Used)* | Main page background |
| **Text (High)** | `#111827` | **Default text.** Headings, body copy. | High-emphasis text (`#FFFFFF`) |
| **Text (Medium)** | `#4B5563` | Sub-headings, labels, helper text. | Medium-emphasis text (`#D1D5DB`) |
| **Text (Low)** | `#9CA3AF` | Disabled text, decorative details. | Low-emphasis, disabled text (`#6B7280`) |
| **Border** | `#E5E7EB` | Dividers, default borders. | Borders, dividers (`#374151`) |

##### Slate Swatch
Subtle neutral scale used primarily in dark contexts. Mirrors standard slate (50–900).

| Token | Hex |
| :--- | :--- |
| `slate-50` | `#F8FAFC` |
| `slate-100` | `#F1F5F9` |
| `slate-200` | `#E2E8F0` |
| `slate-300` | `#CBD5E1` |
| `slate-400` | `#94A3B8` |
| `slate-500` | `#64748B` |
| `slate-600` | `#475569` |
| `slate-700` | `#334155` |
| `slate-800` | `#1E293B` |
| `slate-900` | `#0F172A` |

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
| `color-background` | `light` (`#F9F9F9`) | `night` (`#0F172A`) |
| `color-surface` | `gray-50` | `surface-dark` (`#1E293B`) |
| `color-surface-hover`| `gray-100` | `gray-800` |
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
*   **Sizing:** Must use the 8-point grid (`16px`, `24px`, `32px`, `48px`, etc.). `24px` is the default.
*   **Color:** Icons should inherit the color of the surrounding text (`currentColor`).

### 3.2. Buttons
*   **Primary:** Solid fill using `color-primary`. For the most important action.
*   **Secondary:** Solid fill using `color-accent`. For alternative, high-emphasis actions.
*   **Outline:** Transparent with a `color-border-default` border. For medium-emphasis actions.
*   **Ghost:** Transparent with no border. For low-emphasis actions.
*   **Icon:** Square button for icon-only actions. Transparent background with no border. Uses `color-text-medium` by default, transitions to `color-primary` on hover.

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
*   **Spacing:** Horizontal padding is `space-md` on desktop and `space-sm` on mobile.
*   **Separation:** A `stroke-sm` bottom border using `color-border-default` separates it from page content.
*   **Behavior:** Sticky to the top of the viewport.

### 3.6. Dropdowns
*   **Purpose:** A menu that appears when a user interacts with a trigger element.
*   **Structure:** Composed of a trigger `button` and a menu container.
*   **Primitives:** The menu uses `radius-lg`, `shadow-md`, and a `stroke-sm` border.
*   **Spacing:** Padding within the menu is `space-xs`. Interactive items inside use `radius-md` with `space-xs` vertical and `space-sm` horizontal padding.
*   **Motion:** Fades and translates into view using `duration-medium`.

### 3.7. Modals
*   **Structure:** Composed of `.modal-backdrop` (overlay) and `.modal-dialog` (content container).
*   **Primitives:** Use `radius-lg` and `shadow-lg`.
*   **Spacing:** All internal spacing uses `space-sm`.
*   **Layout:**
    *   **Header (Required):** Contains title and close button. Optional `.modal-titlebar` groups image (optional) + title. Separated by bottom border using `stroke-sm`.
    *   **Body (Required):** Scrollable content area. Supports rich typography (headings, lists, code blocks).
    *   **Footer (Optional):** When present, contains action buttons. Optional `.has-credit` variant uses grid layout for attribution text + actions.
*   **Backdrop:** Semi-transparent overlay with `backdrop-filter: blur(2px)` for modern depth effect.
*   **Motion:** Backdrop fades in/out. Modal scales from 0.95 to 1.0 and fades using `duration-medium` with decelerate easing.
*   **Responsive:** Footer with credit stacks vertically on screens narrower than 480px.

### 3.8. Selection Controls
*   **Pill Selectors:** For selecting one option from a small, related set.
    *   **Structure:** Container uses `.pill-selector-group` class. Contains a `.pill-selector-slider` element followed by multiple `.btn-pill` button elements.
    *   **Classes:** `.pill-selector-group` (container), `.pill-selector-slider` (animated background), `.btn-pill` (individual options).
    *   **Slider:** The moving element has `radius-full` and uses `color-primary`.
    *   **Motion:** The slider animates its position and width using `duration-medium`.
    *   **Usage:** All pill selector implementations (navigation, filters, toggles) use these same classes for consistency.
*   **Switches:** For binary on/off states.
    *   **Structure:** Composed of a track and thumb, both with `radius-full`.
    *   **Motion:** The thumb animates with `duration-quick`.
*   **Sliders:** For selecting a value from a continuous range.
    *   **Default (`.slider`):** Standard slider with neutral track using `color-border-default`.
    *   **Filled (`.slider-filled`):** Variant with colored track showing the difference from the default/zero value. The filled portion uses `color-primary` to visualize the selected range.

---

## 4. Interactive Behavior

Interactive behavior defines how components respond to user input. These patterns ensure a consistent, predictable experience across all "robonxt" products.

### 4.1. Core Principles
*   **Immediate Feedback:** All interactions must provide visual feedback within `duration-quick` (150ms).
*   **Smooth Transitions:** State changes use `duration-medium` (300ms) as the default. Use `duration-quick` for micro-interactions and `duration-slow` (500ms) for major UI changes.
*   **Predictable Motion:** All animations use the standard easing function `cubic-bezier(0.4, 0, 0.2, 1)`.

### 4.2. Button Interactions
*   **Hover:** Background color transitions to hover state using `duration-quick`.
*   **Active/Press:** Immediate visual change (darker color or brightness adjustment).
*   **Focus:** `stroke-md` outline in `color-border-focus` with 2px offset.
*   **Disabled:** Opacity reduced to 0.5, cursor changes to `not-allowed`, no hover effects.

### 4.3. Form Controls

#### Input Fields
*   **Focus:** Border width changes from `stroke-sm` to `stroke-md` and color changes to `color-border-focus` using `duration-quick`.
*   **Error State:** Border color changes to `color-error`. Label and helper text also adopt error color.
*   **Hover:** Border color transitions to `color-text-medium` using `duration-quick`.

#### Switches
*   **Toggle:** Thumb translates horizontally using `duration-quick` with standard easing.
*   **State Change:** Track background color transitions from `color-border-default` to `color-primary` using `duration-quick`.
*   **Focus:** `stroke-md` outline in `color-border-focus` with 2px offset appears on the track.
*   **Calculation:** Thumb translation distance is calculated as: `track-width - thumb-size - (2 × thumb-offset)`.

#### Sliders
*   **Drag:** Value updates in real-time as the user drags the thumb.
*   **Hover:** Track opacity increases from 0.9 to 1.0.
*   **Filled Variant:** The colored portion of the track updates dynamically as the value changes, creating a visual representation of the selected range.

### 4.4. Selection Controls

#### Pill Selectors
*   **Click:** Active state changes immediately. The slider element animates to the new position and width using `duration-medium`.
*   **Slider Animation:** The background slider smoothly transitions its `left` and `width` properties to match the active button's position and dimensions.
*   **Hover (Non-Active):** Background color transitions to `color-surface-hover` using `duration-medium`.
*   **Active State:** Text color changes to `white`. The slider provides the `color-primary` background.
*   **Navigation:** When pill selectors control page sections, clicking a pill should smoothly scroll to the target section using `scroll-behavior: smooth`.

#### Tabs
*   **Click:** Active state changes immediately. Content area updates without animation.
*   **Underline Animation:** The active indicator (underline or slider) animates using `duration-medium` to the new tab position.
*   **Scroll Sync:** When using scroll-based navigation, the active tab updates automatically as sections enter the viewport.

### 4.5. Overlays & Modals
*   **Open:** Backdrop fades in with blur effect. Modal scales from 0.95 to 1.0 and fades in (opacity 0 to 1) using `duration-medium` with decelerate easing.
*   **Close:** Reverse animation—modal scales down and fades out, backdrop fades out using `duration-medium`.
*   **Dismissal (Default):** Clicking outside the modal or pressing `Escape` closes it. For critical actions or multi-step flows, disable dismissal and require explicit user action via buttons.
*   **Focus Trap:** Focus should remain within the modal while it's open.
*   **Scroll Lock:** Body scroll should be disabled when modal is open (add `.scroll-lock` class to body).

### 4.6. Dropdowns
*   **Open:** Menu fades in (opacity 0 to 1) and translates up (8px) using `duration-medium`.
*   **Close:** Reverse animation using `duration-medium`.
*   **Click Outside:** Clicking outside the dropdown closes it.
*   **Keyboard Navigation:**
    *   `Arrow Down/Up`: Navigate through items.
    *   `Enter` or `Space`: Select the focused item.
    *   `Escape`: Close the dropdown.
    *   `Home/End`: Jump to first/last item.

### 4.7. Interactive Cards
*   **Hover:** Card translates up 4px (`translateY(-4px)`) and shadow transitions from `shadow-md` to `shadow-lg` using `duration-quick`.
*   **Click:** Card acts as a clickable surface, navigating to a new page or triggering an action.

### 4.8. Progress Indicators
*   **Determinate:** The progress bar's width updates smoothly as the value changes. Use CSS transitions on the `width` property.
*   **Indeterminate:** For unknown durations, use a loading animation (not defined in this system—implement based on brand guidelines).

### 4.9. Color Swatches (Demo-Specific)
*   **Click/Tap:** Copies the computed hex color value to the clipboard.
*   **Feedback:** The hex label text changes to "Copied #XXXXXX" with `color-primary` for 1200ms, then reverts.
*   **Hover:** Card translates up 4px and shadow transitions from `shadow-md` to `shadow-lg` using `duration-quick`.
*   **Keyboard:** `Enter` or `Space` triggers the copy action when focused.

### 4.10. Responsive Navigation
*   **Dynamic Adaptation:** Navigation automatically switches between pill selector and mobile menu based on available space, not fixed breakpoints.
*   **Overflow Detection:** JavaScript measures if the pill selector would cause horizontal overflow and toggles mobile mode accordingly.
*   **Mobile Mode:** When space is constrained, the pill selector hides and a hamburger menu appears with the current section title.
*   **Anchored Controls:** Theme switch and auxiliary controls remain anchored to the right side using `flex-shrink: 0`.
*   **Universal Compatibility:** Works on all screen sizes from small mobile devices (iPhone 4S) to ultrawide monitors without hardcoded breakpoints.

### 4.11. Implementation Notes
*   **Framework Agnostic:** These behavior patterns are intentionally described without prescribing specific JavaScript implementations. Implement them using your framework of choice (React, Vue, Svelte, vanilla JS, etc.).
*   **Accessibility:** All interactive elements must be keyboard accessible and provide appropriate ARIA attributes.
*   **Performance:** Use CSS transitions and transforms for animations when possible. Avoid animating properties that trigger layout recalculations (e.g., `height`, `width` on non-absolute elements).
*   **Responsive Behavior:** On touch devices, ensure touch targets are at least 48px × 48px (using `--touch-target`). Hover states may not apply on touch devices—ensure all functionality is accessible via tap/click.
*   **Dynamic Layouts:** Prefer JavaScript-based overflow detection over fixed breakpoints for truly responsive designs that adapt to any device or viewport size.