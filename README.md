# robonxt - The Brand & Design System

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

1. Reference the stylesheets in your HTML:
   ```html
   <link rel="stylesheet" href="design-system/tokens.css">
   <link rel="stylesheet" href="design-system/components.css">
   ```

2. Set the theme on the root element:
   ```html
   <html data-theme="light">
   ```

3. Use design tokens and component classes in your markup. See the [live examples](public/index.html) for implementation details.

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
*   Avatar sizes: 32px, 48px, 64px (configurable via `--avatar-size-sm`, `--avatar-size-md`, `--avatar-size-lg`)
*   Icon sizes: 16px, 24px, 32px (configurable via `--icon-size-sm`, `--icon-size-md`, `--icon-size-lg`)
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
*   **Easing:** Standard easing is `cubic-bezier(0.4, 0, 0.2, 1)`. Decelerate easing is `cubic-bezier(0, 0, 0.2, 1)`.

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

## 3. Components & Interactions

Components are the reusable building blocks of our user interface. Each component section includes both its visual structure and interactive behavior.

### 3.1. Core Interaction Principles
*   **Immediate Feedback:** All interactions must provide visual feedback within `duration-quick` (150ms).
*   **Smooth Transitions:** State changes use `duration-medium` (300ms) as the default. Use `duration-quick` for micro-interactions and `duration-slow` (500ms) for major UI changes.
*   **Predictable Motion:** All animations use the standard easing function `cubic-bezier(0.4, 0, 0.2, 1)`.
*   **Accessibility:** All interactive elements must be keyboard accessible and provide appropriate ARIA attributes.
*   **Touch Targets:** On touch devices, ensure touch targets are at least 48px × 48px (using `--touch-target`).

### 3.2. Iconography
*   **Library:** **Material Symbols**
*   **Style:** **Rounded** (exclusively)
*   **Sizing:** Must use the 8-point grid (`16px`, `24px`, `32px`, `48px`, etc.). `24px` is the default.
*   **Color:** Icons should inherit the color of the surrounding text (`currentColor`).

### 3.3. Buttons

#### Structure
*   **Primary:** Solid fill using `color-primary`. For the most important action.
*   **Secondary:** Solid fill using `color-accent`. For alternative, high-emphasis actions.
*   **Outline:** Transparent with a `color-border-default` border. For medium-emphasis actions.
*   **Ghost:** Transparent with no border. For low-emphasis actions.
*   **Danger:** Solid fill using `color-error`. For destructive actions.
*   **Icon Buttons:** Square button (48px × 48px) for icon-only actions. Supports all variants (`.btn-icon.btn-primary`, `.btn-icon.btn-secondary`, `.btn-icon.btn-outline`, `.btn-icon.btn-danger`). Default icon button (`.btn-icon` alone) has transparent background with no border and uses `color-text-medium`.

#### Interactions
*   **Hover:** Background color transitions to hover state using `duration-quick`.
*   **Active/Press:** Immediate visual change (darker color or brightness adjustment).
*   **Focus:** `stroke-md` outline in `color-border-focus` with 2px offset.
*   **Disabled:** Opacity reduced to 0.5, cursor changes to `not-allowed`, no hover effects.
*   **Default Icon Button Hover:** Background transitions to `color-surface-hover`, color changes to `color-primary` using `duration-quick`.
*   **Variant Icon Button Hover:** Follows the same hover behavior as the corresponding button variant.

### 3.4. Input Fields

#### Structure
*   **Primitives:** Use `radius-md` and `stroke-sm`.
*   **Spacing:** Label is `space-xs` from the container; internal padding is `space-sm`.
*   **States:** Default, Focus, Error, Disabled.

#### Interactions
*   **Focus:** Border width changes from `stroke-sm` to `stroke-md` and color changes to `color-border-focus` using `duration-quick`.
*   **Error State:** Border color changes to `color-error`. Label and helper text also adopt error color.
*   **Hover:** Border color transitions to `color-text-medium` using `duration-quick`.
*   **Disabled:** Background changes to `color-text-low`, cursor changes to `not-allowed`, opacity 0.7.

### 3.5. Alerts

#### Structure
*   **Components:** Icon + Title/Description + Optional Close Button.
*   **Types:** Must use the semantic functional colors (`color-success`, `color-warning`, `color-error`) and a neutral `Info` style.
*   **Spacing:** Internal padding is `space-sm`, gap between elements is `space-sm`.

#### Interactions
*   **Close Button:** Uses icon button interaction pattern (hover to `color-primary`).
*   **Dismissal:** Fades out using `duration-medium` when close button is clicked.

### 3.6. Modals

#### Structure
*   **Components:** `.modal-backdrop` (overlay) and `.modal-dialog` (content container).
*   **Primitives:** Use `radius-lg` and `shadow-lg`.
*   **Spacing:** All internal spacing uses `space-sm`.
*   **Layout:**
    *   **Header (Required):** Contains title and close button. Optional `.modal-titlebar` groups image (optional) + title. Separated by bottom border using `stroke-sm`.
    *   **Body (Required):** Scrollable content area. Supports rich typography (headings, lists, code blocks).
    *   **Footer (Optional):** When present, contains action buttons. Optional `.has-credit` variant uses grid layout for attribution text + actions.
*   **Backdrop:** Semi-transparent overlay (`rgba(0, 0, 0, 0.5)`) with `backdrop-filter: blur(2px)` for modern depth effect.
*   **Responsive:** Footer with credit stacks vertically on screens narrower than 480px.

#### Interactions
*   **Open:** Backdrop fades in with blur effect. Modal scales from 0.95 to 1.0 and fades in (opacity 0 to 1) using `duration-medium` with decelerate easing.
*   **Close:** Reverse animation—modal scales down and fades out, backdrop fades out using `duration-medium`.
*   **Dismissal (Default):** Clicking outside the modal or pressing `Escape` closes it. For critical actions or multi-step flows, disable dismissal and require explicit user action via buttons.
*   **Focus Trap:** Focus should remain within the modal while it's open.
*   **Scroll Lock:** Body scroll should be disabled when modal is open (add `.scroll-lock` class to body).

### 3.7. Dropdowns

#### Structure
*   **Purpose:** A menu that appears when a user interacts with a trigger element.
*   **Components:** Trigger `button` and menu container.
*   **Primitives:** The menu uses `radius-lg`, `shadow-md`, and a `stroke-sm` border.
*   **Spacing:** Padding within the menu is `space-xs`. Interactive items inside use `radius-md` with `space-xs` vertical and `space-sm` horizontal padding.

#### Interactions
*   **Open:** Menu fades in (opacity 0 to 1) and translates up (8px) using `duration-medium`.
*   **Close:** Reverse animation using `duration-medium`.
*   **Click Outside:** Clicking outside the dropdown closes it.
*   **Item Hover:** Background transitions to `color-surface-hover` using `duration-quick`.
*   **Keyboard Navigation:**
    *   `Arrow Down/Up`: Navigate through items.
    *   `Enter` or `Space`: Select the focused item.
    *   `Escape`: Close the dropdown.
    *   `Home/End`: Jump to first/last item.

### 3.8. Selection Controls

#### Pill Selectors

**Structure:**
*   **Purpose:** For selecting one option from a small, related set.
*   **Components:** Container (`.pill-selector-group`), slider (`.pill-selector-slider`), buttons (`.btn-pill`).
*   **Slider:** The moving element has `radius-full` and uses `color-primary`.
*   **Usage:** All pill selector implementations (navigation, filters, toggles) use these same classes for consistency.

**Interactions:**
*   **Click:** Active state changes immediately. The slider element animates to the new position and width using `duration-medium`.
*   **Slider Animation:** The background slider smoothly transitions its `left` and `width` properties to match the active button's position and dimensions.
*   **Hover (Non-Active):** Background color transitions to `color-surface-hover` using `duration-medium`.
*   **Active State:** Text color changes to `white`. The slider provides the `color-primary` background.
*   **Navigation:** When pill selectors control page sections, clicking a pill should smoothly scroll to the target section using `scroll-behavior: smooth`.

#### Switches

**Structure:**
*   **Purpose:** For binary on/off states.
*   **Components:** Track and thumb, both with `radius-full`.
*   **Sizing:** Track is 44px × 24px, thumb is 16px.

**Interactions:**
*   **Toggle:** Thumb translates horizontally using `duration-quick` with standard easing.
*   **State Change:** Track background color transitions from `color-border-default` to `color-primary` using `duration-quick`.
*   **Focus:** `stroke-md` outline in `color-border-focus` with 2px offset appears on the track.
*   **Calculation:** Thumb translation distance is calculated as: `track-width - thumb-size - (2 × thumb-offset)`.

#### Sliders

**Structure:**
*   **Purpose:** For selecting a value from a continuous range.
*   **Default (`.slider`):** Standard slider with neutral track using `color-border-default`.
*   **Filled (`.slider-filled`):** Variant with colored track showing the difference from the default/zero value. The filled portion uses `color-primary` to visualize the selected range.
*   **Height:** 8px (using `--progress-height`).

**Interactions:**
*   **Drag:** Value updates in real-time as the user drags the thumb.
*   **Hover:** Track opacity increases from 0.9 to 1.0 using `duration-quick`.
*   **Filled Variant:** The colored portion of the track updates dynamically as the value changes, creating a visual representation of the selected range.
*   **Focus:** Thumb receives `stroke-md` outline in `color-border-focus`.

#### Tabs

**Structure:**
*   **Purpose:** For switching between different content views.
*   **Components:** Tab list container, tab triggers, tab content panes.
*   **Active Indicator:** Underline or slider that animates to show active tab.

**Interactions:**
*   **Click:** Active state changes immediately. Content area updates without animation.
*   **Underline Animation:** The active indicator (underline or slider) animates using `duration-medium` to the new tab position.
*   **Scroll Sync:** When using scroll-based navigation, the active tab updates automatically as sections enter the viewport.
*   **Hover:** Tab color transitions to `color-text-high` using `duration-quick`.

### 3.9. Progress Indicators

#### Structure
*   **Purpose:** To show task completion or loading state.
*   **Height:** 8px (using `--progress-height`).
*   **Track:** Uses `color-border-default`.
*   **Indicator:** Uses `color-primary`.
*   **Active State:** Add `.progress-indicator-active` class to show animated shimmer effect during active progress.

#### Interactions
*   **Determinate:** The progress bar's width updates smoothly as the value changes using `duration-medium` transition.
*   **Active Animation:** The `.progress-indicator-active` class adds a shimmer effect (white gradient overlay) that animates left-to-right continuously (2s duration) to indicate ongoing activity.
*   **Static Progress:** Use `.progress-indicator` alone for completed or paused progress without animation.

### 3.10. Interactive Cards

#### Structure
*   **Purpose:** Clickable surfaces that navigate or trigger actions.
*   **Primitives:** Use `radius-lg` and `shadow-md`.
*   **Spacing:** Internal padding uses `space-md`.

#### Interactions
*   **Hover:** Card translates up 4px (`translateY(-4px)`) and shadow transitions from `shadow-md` to `shadow-lg` using `duration-quick`.
*   **Click:** Card acts as a clickable surface, navigating to a new page or triggering an action.
*   **Focus:** `stroke-md` outline in `color-border-focus` with 2px offset.

### 3.11. Header

#### Structure
*   **Purpose:** A persistent surface for global navigation and branding.
*   **Layout:** Uses Flexbox (`justify-content: space-between`) to align the logo left and actions right.
*   **Spacing:** Horizontal padding is `space-md` on desktop and `space-sm` on mobile.
*   **Separation:** A `stroke-sm` bottom border using `color-border-default` separates it from page content.
*   **Behavior:** Sticky to the top of the viewport.

#### Interactions
*   **Scroll:** Background color and shadow can transition on scroll for visual feedback.
*   **Navigation Items:** Follow button or pill selector interaction patterns depending on implementation.

---

## 4. Responsive Behavior

### 4.1. Responsive Navigation
*   **Dynamic Adaptation:** Navigation automatically switches between pill selector and mobile menu based on available space, not fixed breakpoints.
*   **Overflow Detection:** JavaScript measures if the pill selector would cause horizontal overflow and toggles mobile mode accordingly.
*   **Mobile Mode:** When space is constrained, the pill selector hides and a hamburger menu appears with the current section title.
*   **Anchored Controls:** Theme switch and auxiliary controls remain anchored to the right side using `flex-shrink: 0`.
*   **Universal Compatibility:** Works on all screen sizes from small mobile devices (iPhone 4S) to ultrawide monitors without hardcoded breakpoints.

### 4.2. Touch Device Considerations
*   **Touch Targets:** Ensure all interactive elements are at least 48px × 48px (using `--touch-target`).
*   **Hover States:** Hover states may not apply on touch devices—ensure all functionality is accessible via tap/click.
*   **Gestures:** Support standard touch gestures where appropriate (swipe to dismiss, pinch to zoom, etc.).

### 4.3. Breakpoint Philosophy
*   **Prefer Content-Based:** Use JavaScript-based overflow detection over fixed breakpoints for truly responsive designs.
*   **When Fixed Breakpoints Are Needed:** Use logical breakpoints based on content needs, not device categories.
*   **Mobile-First:** Design for mobile first, then progressively enhance for larger screens.

---

## 5. Implementation Guidelines

### 5.1. Framework Agnostic
These patterns are intentionally described without prescribing specific JavaScript implementations. Implement them using your framework of choice (React, Vue, Svelte, vanilla JS, etc.).

### 5.2. Performance
*   **CSS Transitions:** Use CSS transitions and transforms for animations when possible.
*   **Avoid Layout Thrashing:** Avoid animating properties that trigger layout recalculations (e.g., `height`, `width` on non-absolute elements).
*   **Hardware Acceleration:** Use `transform` and `opacity` for animations to leverage GPU acceleration.

### 5.3. Accessibility
*   **Keyboard Navigation:** All interactive elements must be keyboard accessible.
*   **ARIA Attributes:** Provide appropriate ARIA attributes for screen readers.
*   **Focus Management:** Ensure logical focus order and visible focus indicators.
*   **Color Contrast:** Maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).

### 5.4. Browser Support
*   **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions).
*   **Progressive Enhancement:** Core functionality should work without JavaScript.
*   **Graceful Degradation:** Advanced features can degrade gracefully in older browsers.

---

## 6. Demo-Specific Components

### 6.1. Color Swatches
*   **Purpose:** Interactive color palette demonstration (not for production use).
*   **Click/Tap:** Copies the computed hex color value to the clipboard.
*   **Feedback:** The hex label text changes to "Copied #XXXXXX" with `color-primary` for 1200ms, then reverts.
*   **Hover:** Card translates up 4px and shadow transitions from `shadow-md` to `shadow-lg` using `duration-quick`.
*   **Keyboard:** `Enter` or `Space` triggers the copy action when focused.
