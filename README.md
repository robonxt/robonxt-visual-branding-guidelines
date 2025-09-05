# robonxt - The Brand & Design System

Welcome to the official guide for the "robonxt" brand identity and design system. This document is the single source of truth for our visual and interactive language. Its purpose is to ensure all products are consistent, accessible, and feel like "robonxt".

## 1. Foundations

Foundations are the fundamental building blocks of our design language.

### 1.1. Core Philosophy: The Pragmatic Professional
The "robonxt" brand persona is a confident, efficient expert with a witty, human touch.
*   **Golden Rule:** **Clarity first, always.**

### 1.2. Color System
Our color system is built for brand expression and accessibility. It is divided into three distinct palettes.

#### 1.2.1. Brand Palette
These are the primary colors that define the brand's personality. They are used for interactive elements, logos, and high-emphasis marketing moments.

| Role | Color Name | Hex | Use Case |
| :--- | :--- | :--- | :--- |
| **Primary** | Brand Teal | `#14B8A6`| The main interactive color for CTAs, active states, and links. |
| **Secondary** | Brand Red | `#B91C1C`| A high-emphasis accent for secondary actions. **Not for errors.** |
| **Accent (Positive)** | Soft Green | `#6EE7B7`| For positive highlights, success illustrations, or gentle callouts. |
| **Accent (Neutral)** | Slate | `#343F4B` | For sophisticated, non-vibrant accents in illustrations or backgrounds. |

#### 1.2.2. Neutrals Palette
Our neutrals are split into two groups: a high-contrast set for core UI and an extended set for creative flexibility.

**UI Neutrals (High Contrast)**
**Use this palette for all core UI surfaces, text, and borders.** It is designed to guarantee accessibility and consistency in both light and dark modes.

| Name | Hex | Light Mode Use | Dark Mode Use |
| :--- | :--- | :--- | :--- |
| **Surface** | `#FFFFFF` | Main Page & Component Background | *(Not Used)* |
| **Text (High)** | `#111827` | **Default text.** Headings, body copy. | High-emphasis text (`#FFFFFF`) |
| **Text (Medium)** | `#4B5563` | Sub-headings, labels, helper text. | Medium-emphasis text (`#D1D5DB`) |
| **Text (Low)** | `#9CA3AF` | Disabled text, decorative details. | Low-emphasis, disabled text (`#6B7280`) |
| **Border** | `#E5E7EB` | Dividers, default borders. | Borders, dividers (`#374151`) |
| **Surface (Dark)** | `#111827` | *(Not Used)* | Main page background |
| **Surface Alt (Dark)** | `#1F2937`| *(Not Used)* | Component background (Cards, Modals) |

**Extended Neutrals**
Use this palette for marketing materials, backgrounds, illustrations, or decorative elements where high-contrast text is not directly applied.

| Name | Hex | Primary Use Case |
| :--- | :--- | :--- |
| Paper | `#F5F7FA` | Subtle, off-white backgrounds for web pages or sections. |
| Light Gray | `#E1E5EA` | Alternative, lighter border color. |
| Medium Gray| `#8A94A6` | Mid-tone accents in illustrations. |
| Onyx | `#1F2933` | Alternative dark surface for components in dark mode. |
| Deep Onyx | `#161F27` | Alternative dark background for dark mode. |

#### 1.2.3. Functional Palette
These colors communicate system status and must be used exclusively for that purpose.

| Role | Color Name | Hex | Use Case |
| :--- | :--- | :--- | :--- |
| **Success** | Success Green | `#059669` | Success messages, confirmations. |
| **Warning** | Warning Amber | `#D97706` | Warnings, non-critical alerts. |
| **Danger** | Danger Red | `#DC2626` | Error messages, destructive actions. |

### 1.3. Typography

The system uses a single, highly-legible font family, `Inter`, to ensure consistency.

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

### 1.4. Spacing

All spacing values are based on an **8-Point Grid System**. Use these tokens for all padding, margins, and gaps.

| Token | Value | Use Case |
| :--- | :--- | :--- |
| `space-xs` | 8px | Gaps between icon and text. |
| `space-sm` | 16px | Padding in buttons, gaps in lists. |
| `space-md` | 24px | Padding inside components (cards, modals). |
| `space-lg` | 32px | Separation between component groups. |
| `space-xl` | 48px | Margin between major page sections. |

---

## 2. Core Elements

Core Elements are the primitive building blocks that create the look and feel of our components.

### 2.1. Corner Radius

| Token | Value | Use Case |
| :--- | :--- | :--- |
| `radius-sm` | 4px | Small elements (tooltips). |
| `radius-md` | 8px | **Default.** Buttons, inputs. |
| `radius-lg` | 16px | Larger components (Cards, Modals). |
| `radius-full` | 9999px | Circular elements (Pills, Toggles). |

### 2.2. Borders

| Token | Value | Use Case |
| :--- | :--- | :--- |
| `stroke-sm` | 1.5px | **Default.** Borders, dividers. |
| `stroke-md` | 3px | Focus rings, active state indicators. |

### 2.3. Elevation (Shadows)

| Token | Use Case |
| :--- | :--- |
| `shadow-sm` | Subtle shadow for interactive hover states. |
| `shadow-md` | **Default.** Cards and Popovers. |
| `shadow-lg` | Prominent shadow for critical overlays like Modals. |

### 2.4. Motion

Motion provides feedback and guides the user's attention.

*   **Easing:** All animations use `cubic-bezier(0.4, 0, 0.2, 1)`.
*   **Default Duration:** `300ms` for standard state changes.

| Token | Value | Use Case |
| :--- | :--- | :--- |
| `duration-quick` | 150ms | Quick feedback (hover effects). |
| `duration-medium` | 300ms | **Default.** State changes (toggles). |
| `duration-slow` | 500ms | Large transitions (modals). |

---

## 3. Components

Components are the reusable, interactive elements of the user interface. They are built by combining Foundations and Core Elements.

### 3.1. Buttons

Buttons trigger actions. Their style indicates their level of importance.

*   **Primary:** Solid `Brand Teal` fill. For the most important action.
*   **Secondary:** Solid `Brand Red` fill. For alternative, high-emphasis actions.
*   **Outline:** Transparent with a border. For medium-emphasis actions.
*   **Ghost:** Transparent with no border. For low-emphasis actions.

### 3.2. Iconography

*   **Library:** **Material Symbols**
*   **Style:** **Rounded** (exclusively)
*   **Sizing:** Must use the 8-point grid (`16px`, `24px`, `32px`). `24px` is the default.
*   **Color:** Icons should inherit the color of the surrounding text (`currentColor`).

### 3.3. Input Fields

Inputs collect data from the user.

*   **Primitives:** Use `radius-md` and `stroke-sm`.
*   **States:** The label and border must re-color on `focus` (to `Brand Teal`) and `error` (to `Danger Red`) to provide clear feedback. The focus state must use `stroke-md` (2px).

### 3.4. Modals

Modals are overlays used for critical tasks or confirmations.

*   **Primitives:** Use `radius-lg` and `shadow-lg`.
*   **Layout:** Content padding must be `space-md` (24px). The footer should contain clear actions, like a `Primary` "Confirm" and an `Outline` "Cancel" button.