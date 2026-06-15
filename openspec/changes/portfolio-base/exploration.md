## Exploration: portfolio-base (Cyberpunk Radial)

### Current State
Project initialized with Vite + React + TS + Tailwind v4.

### Affected Areas
- `src/` — New structure creation.
- `src/index.css` — Theme definition.

### Approaches
1. **Hybrid Styling (Tailwind + CSS Vars)**
   - Pros: Industry standard (Tailwind) + Full creative control (Vars).
   - Cons: Slight overhead in managing both.
   - Effort: Medium.

### Recommendation
Use Tailwind v4 for layout/spacing and CSS Variables for neon/glow and radial math.

### Risks
- Complexity in radial positioning on small screens.
- Balancing visual impact with LCP performance.

### Ready for Proposal
Yes.
