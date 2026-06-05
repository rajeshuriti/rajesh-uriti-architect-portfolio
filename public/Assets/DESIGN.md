---
name: The Curious Developer
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00a572'
  on-tertiary-container: '#00311f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  quote:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '300'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  section-gap: 128px
  story-sidebar: 45%
---

## Brand & Style
The design system is built for a narrative-driven portfolio that prioritizes intellectual humility and technical depth. The brand personality is that of a "thoughtful craftsman"—professional yet deeply human, blending the precision of high-end engineering tools like Linear with the immersive, spatial storytelling found in modern OS environments.

The visual style is **Modern / Corporate** with a heavy emphasis on **Glassmorphism** and **Tactile** details. It uses a "depth-first" approach where the UI feels like layered glass sheets suspended in a dark, expansive space. The aesthetic rejects flashy trends in favor of high-quality typography, intentional whitespace, and "digital sketches" that humanize technical concepts through hand-drawn annotations and architectural overlays.

## Colors
The palette is rooted in a "Deep Space" dark mode. The background utilizes a Soft Black for the foundation, while Deep Navy and Dark Slate provide tonal variance for containers and sectional transitions. 

- **Primary (Electric Blue):** Used for focus states, primary actions, and key narrative milestones.
- **Secondary (Soft Purple):** Reserved for technical insights, architecture labels, and decorative gradients.
- **Highlight (Emerald Green):** Indicates successful outcomes, "Lessons Learned," and active status markers in timelines.
- **Surface Layering:** Use semi-transparent overlays of the neutral slate to create "glass" containers that sit above the deep navy background.

## Typography
The typography system balances the technical precision of a developer's environment with the editorial elegance of a premium journal. 

**Hanken Grotesk** provides a sharp, contemporary look for headings, feeling both established and modern. **Geist** is used for body copy to ensure maximum readability and a distinct "engineered" feel. **JetBrains Mono** is utilized for metadata, technical annotations, and labels, reinforcing the developer's persona.

For large storytelling sections, use `display-lg` with tight tracking to create a cinematic impact. For long-form reading, `body-lg` is preferred with a generous line height to reduce cognitive load.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for content readability, centered within a wide viewport. Storytelling sections utilize a "Cinematic Split" layout where imagery or interactive sketches occupy 40-50% of the horizontal width, pinned either to the left or right to create a rhythmic zig-zag flow during scrolling.

- **Desktop:** 12-column grid, 32px gutters, 64px side margins.
- **Tablet:** 8-column grid, 24px gutters, 32px side margins.
- **Mobile:** 4-column grid, 16px gutters, 20px side margins.

Large vertical gaps (128px+) are used between major narrative chapters to allow the "Deep Navy" background to breathe, creating a sense of transition and focus.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Glassmorphism** rather than traditional drop shadows.

1.  **Level 0 (Floor):** Soft Black (#020617) — The base of the "stage."
2.  **Level 1 (Sub-surface):** Deep Navy (#0B1120) — Primary content sections and sections backgrounds.
3.  **Level 2 (Float):** Dark Slate (#1E293B) at 60% opacity with a 20px backdrop blur — Used for cards, navigation bars, and "hovering" annotations.
4.  **Level 3 (Interactive):** Same as Level 2 but with a 1px inner border (Stroke: #FFFFFF, Opacity: 10%) to catch light, mimicking the edge of a glass pane.

Avoid heavy black shadows. If a shadow is necessary for legibility, use a highly diffused (40px+) shadow tinted with the primary blue color at 10% opacity.

## Shapes
The design system uses a **Rounded** (Level 2) shape language to maintain a friendly, human feel amidst the technical dark palette.

- **Standard Buttons & Inputs:** 0.5rem (8px).
- **Cards & Story Containers:** 1rem (16px).
- **Interactive Sketches/Overlays:** 1.5rem (24px) to distinguish them from standard UI components.

Architectural sketches and "whiteboard" diagrams should use slightly irregular, hand-drawn vector paths for lines to contrast with the perfect geometric precision of the UI containers.

## Components
### Storytelling Sections
These are the primary building blocks. They consist of a text block (50% width) and a "Cinematic Asset" (50% width). The asset may be a high-fidelity render or an interactive "Sketch Overlay"—a technical diagram that appears to be drawn in real-time over the image using the secondary purple color.

### Interactive Timelines & Maps
Evolution timelines use a thin 2px vertical line in Dark Slate. Milestones are marked by small Primary Blue circles that expand into detailed cards on hover. Learning maps use a nodes-and-links visualization, employing a technical "schematic" aesthetic.

### Buttons & Controls
- **Primary:** Glass-styled button with a subtle Electric Blue gradient and white text.
- **Secondary:** Transparent background with a 1px border of Dark Slate.
- **Labels:** Small caps JetBrains Mono text for high-level categorization.

### Engineering Sketches
Components designed to look like "work in progress." These use white or primary-blue "ink" lines on a transparent background, often featuring handwritten-style annotations (using a secondary font or stylized vector) to explain complex logic or architectural decisions.

### Input Fields
Dark Slate background with a 0.5rem radius. The focus state uses a 1px Electric Blue border and a soft blue outer glow.