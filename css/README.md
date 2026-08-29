# CSS Architecture Documentation

## Overview
The CSS files are organized in a modular, scalable structure that follows industry best practices. Each file has a specific purpose and can be maintained independently.

## File Structure

### 1. **variables.css**
**Purpose:** Design tokens and CSS custom properties
- Color palette (primary, backgrounds, text colors)
- Spacing system (xs through 6xl)
- Border radius values
- Typography sizes and weights
- Transitions and animations
- Shadows and effects

**Usage:** Import first - all other files depend on these variables.

---

### 2. **base.css**
**Purpose:** Global baseline styles
- HTML reset/normalization
- Body and typography defaults
- Base link and button styles
- No component-specific styles

**When to modify:** 
- Changing global font family
- Adjusting default line heights
- Base color inheritance

---

### 3. **layout.css**
**Purpose:** Page layout and structure
- Navigation styles (`.nav`, `.nav ul`, nav links and states)
- Container and spacing
- Hero section (`.hero`, `.hero-left`, `.hero-right`)
- Section blocks (`.section-block`, `.section-title`)
- Header styles (`.booking-header`)

**When to modify:** 
- Changing page grid structure
- Adjusting navigation positioning
- Modifying hero section layout

---

### 4. **components.css**
**Purpose:** Reusable UI components
- Buttons (`.cta-button`, `.submit-btn`)
- Feature cards (`.feature-card`)
- Status elements (`.status-badge`, `.status-dot`)
- Card styling and hover effects
- Animations (`.pulse-glow`)

**When to modify:** 
- Changing button appearance
- Adding new card styles
- Creating new interactive components

---

### 5. **forms.css**
**Purpose:** Form elements and styling
- Form wrapper and layout (`.form-wrapper`, `.booking-form`)
- Input fields (text, email, number, select, datetime)
- Form groups and labels
- Focus and valid states
- Radio and checkbox styling

**When to modify:** 
- Adjusting form field appearance
- Changing input validation styles
- Modifying form layout grid

---

### 6. **tables.css**
**Purpose:** Table and data display styles
- Table structure (`.telemetrytable`)
- Header and cell styling
- Hover effects and alternating rows
- Status indicators (`.status-ready`, `.status-warn`)

**When to modify:** 
- Changing table appearance
- Adding new status types
- Adjusting row heights/padding

---

### 7. **gallery-faq.css**
**Purpose:** Gallery and FAQ section styles
- Gallery grid (`.gallery-grid`, `.gallery-card`)
- Image styling
- FAQ container and items (`.faq-container`, `.faq-item`)
- Details/summary styling
- Hover effects

**When to modify:** 
- Changing gallery layout
- Adjusting card sizes
- Modifying FAQ styling

---

## Import Order in HTML

Always import CSS files in this order:
```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<!-- Import only what your page needs from: -->
<link rel="stylesheet" href="css/forms.css">      <!-- For book.html -->
<link rel="stylesheet" href="css/tables.css">     <!-- For terminals.html -->
<link rel="stylesheet" href="css/gallery-faq.css"> <!-- For terminals.html -->
```

---

## CSS Variables (Design Tokens)

### Colors
```css
--color-primary: #00f0ff              /* Neon cyan - primary accent */
--color-bg-dark: #0b0f19              /* Dark background */
--color-bg-black: black               /* Pure black for containers */
--color-text-white: #ffffff           /* Primary text */
--color-text-light: #cbd5e1           /* Secondary text */
--color-text-muted: #94a3b8           /* Tertiary text */
```

### Spacing
Values follow a consistent scale: `--spacing-xs` (4px) through `--spacing-6xl` (48px)

### Other Variables
- `--font-size-*`: Typography scale
- `--radius-*`: Border radius options
- `--transition-*`: Animation timing
- `--shadow-glow-*`: Glow effects
- `--backdrop-blur`: Glass morphism effect

---

## Best Practices

1. **Use CSS Variables:** Always reference variables instead of hardcoding values
2. **Component Isolation:** Keep component styles in their appropriate files
3. **Mobile First:** Write mobile styles first, then add media queries
4. **Naming Conventions:** Use BEM-like naming for clarity (e.g., `.button-primary`)
5. **DRY Principle:** Avoid repeating similar values; extract to variables

---

## Examples

### Adding a New Component
1. Create styles in `components.css`
2. Use CSS variables for all values
3. Include hover/focus/active states
4. Test in relevant HTML files

### Creating a New Page
1. Import required CSS files based on page content
2. Always include: `variables.css`, `base.css`, `layout.css`
3. Add specialized files as needed

### Modifying a Style
1. Find the class in the appropriate CSS file
2. Use find/replace to check for duplicate definitions
3. Update all related states (hover, focus, active)
4. Verify consistency across all pages

---

## File Dependencies

```
variables.css
    ↓
base.css → layout.css → components.css
    ↓           ↓
    └── forms.css
    └── tables.css
    └── gallery-faq.css
```

All files depend on `variables.css` for design tokens.
