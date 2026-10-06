# Design and Code Guidelines for Agents

Paste this into `AGENTS.md`, `CLAUDE.md`, `.cursor/rules` or your agent's system prompt.
Fill in the **Project facts** section first. Everything below it is general.

## Project facts (fill in)

- Product and audience: _who uses this and for what_
- Tone: _e.g. calm and professional, playful, dense and technical_
- Fonts: _names, or "none chosen yet, pick per rule 3"_
- Colors: _brand color, neutral family, or "use the tokens in globals.css"_
- Existing components to reuse: _list, or "check /components"_

## 0. The core rule

Defaults are the enemy. When a choice is made because it is the most common option (purple gradient, Inter, three feature cards, rounded-2xl everywhere), stop and decide again based on the product. Every visual choice should have a reason you can say in one sentence.

Before writing UI, write 3 lines: who it is for, what feeling it should give, and the one thing someone should remember about it. Design to those lines.

## 1. Color

- Pick **one neutral family** and **one accent**. That is the whole palette. Add a status color (red, amber, green) only for real states.
- Tint your neutrals slightly toward the accent hue instead of pure gray.
- **No gradients by default.** Use solid colors and create hierarchy with value, spacing and weight.
- If a gradient is truly needed, it must be subtle, use two close hues (not purple to blue, not blue to cyan), and serve a purpose such as depth on one hero surface.
- Never use: gradient text, gradient buttons, blurry glowing blobs behind content, rainbow borders, neon glows, "glassmorphism" on everything.
- Define colors once as tokens (CSS variables). Never scatter hex values through components.
- Check contrast: body text at least 4.5:1, large text and icons at least 3:1. Test dark mode separately, do not just invert.

## 2. Layout and spacing

- Do not default to the landing page template: centered headline, subtext, two buttons, three icon cards, testimonial row, CTA band. Design the layout around the actual content.
- Use a spacing scale (4, 8, 12, 16, 24, 32, 48, 64) and stay on it. Group related things closely and separate unrelated things clearly.
- Not everything is a card. Use plain sections, dividers and whitespace. Never put a card inside a card.
- Align to a grid. Left-align body text. Center only short headings and empty states.
- Use one radius scale (for example 6 / 10 / 16) and apply it by element type, not at random.
- Allow density where users work (tables, lists, dashboards). Big empty padding everywhere reads as filler.
- Test at 360px, 768px and 1440px. Nothing may scroll sideways.

## 3. Typography

- Do not default to Inter, Roboto or Arial everywhere. Choose a deliberate pairing (a heading face with character plus a clean text face), or one family used with strong weight contrast.
- Maximum two families. Use weight and size for hierarchy before using color.
- Use a type scale (for example 12 / 14 / 16 / 20 / 28 / 40). Body 14 to 16px, line height 1.5 to 1.7. Headings tighter, 1.1 to 1.3.
- Tighten letter spacing slightly on large headings. Use tabular numbers for tables and metrics.
- Limit line length to about 60 to 75 characters.
- Avoid all-caps labels except small section labels, and give them letter spacing.

## 4. Components and states

- Use **one icon set** with one stroke width. No emoji as icons.
- Do not put every icon in a colored circle or rounded square. Use that treatment once, where it carries meaning.
- Every interactive element needs: hover, `focus-visible`, active, disabled. Data views need loading (skeletons), empty, error and populated states. Design the empty state properly.
- Buttons: one primary action per view. Label with a specific verb ("Save changes", "Invite teammate"), not "Submit" or "Click here".
- Use native semantics first: `button` for actions, `a` for navigation, real `label`s on inputs.
- Show feedback for every action (toast, inline message, disabled-with-spinner). Never leave a click silent.

## 5. Motion

- Animate only to explain a change: something appearing, moving or confirming.
- 150 to 250ms, ease-out. No bounce, no spring on everything, no staggered fade-up on every section.
- Respect `prefers-reduced-motion`.
- Do not add scroll animations, floating shapes or looping background effects unless asked.

## 6. Content and copy

- No lorem ipsum. Write real copy for the real product.
- Banned words and phrases: "seamless", "unlock", "elevate", "empower", "revolutionize", "supercharge", "cutting-edge", "next-level", "game-changer", "Welcome to ...", "Say goodbye to ...".
- Avoid em dashes in UI text and avoid the pattern "It's not X, it's Y".
- Use sentence case for headings and buttons.
- Never invent testimonials, logos, user counts or statistics. Use clearly marked placeholders if real ones do not exist.
- Sample data should look real: varied names, uneven numbers (4,127 not 1,234), believable dates, different text lengths.

## 7. Code that does not read as machine-written

- **Match the project first.** Read nearby files and copy their conventions: naming, folder layout, import style, component patterns, how they handle data and errors. Reuse existing components and tokens before writing new ones.
- Keep diffs small and focused. Do not refactor, rename or reformat code that was not part of the task.
- Do not add dependencies for something a few lines can do. Ask before adding any.
- Comments explain why, never what. Delete comments like `// Import React` or `// Render the button`. Leave no commented-out code, stray `console.log`, or `TODO` placeholders.
- Do not wrap everything in `try/catch`, optional chaining or fallbacks "just in case". Handle errors where they can actually happen and say what the user should see.
- No premature abstraction. Extract a component or hook when it is used twice, not before.
- Avoid `any`, magic numbers, and repeated long class strings. Name constants and extract repeated UI into one component.
- Prefer clear names over clever ones. A function name should say what it returns or does.
- Keep files small and single-purpose. Split a 400-line component.
- Accessibility is part of "done": semantic HTML, alt text, keyboard reachability, visible focus.

## 8. Process

1. Read the existing code and design system. Look at any reference the user supplied.
2. State the direction (the 3 lines from section 0) before building.
3. Build the real states, not only the happy path.
4. Review the result as a skeptical designer: squint at it, check hierarchy (is it obvious what matters most?), check spacing rhythm, check it on mobile.
5. Remove before adding. If a section, border, shadow or animation does not help, delete it.

## 9. Final checklist

- [ ] Could this screen belong to any product? If yes, make one decision specific to this one.
- [ ] Palette is one neutral plus one accent, no default gradient.
- [ ] Fonts chosen on purpose, two families at most.
- [ ] Everything sits on the spacing scale and one radius scale.
- [ ] All interactive elements have hover, focus and disabled states.
- [ ] Loading, empty and error states exist.
- [ ] Copy is real and free of banned phrases. No fake stats.
- [ ] Works at 360px and 1440px, and in light and dark mode.
- [ ] No unused imports, debug logs, dead code or needless comments.
- [ ] The diff touches only what the task needed.
