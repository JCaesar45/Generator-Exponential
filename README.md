# VelourX Interface

A deliberately over-engineered front-end surface built to test aesthetic control, event-driven UI, and perception of polish under minimal dependencies.

## Build Philosophy

No frameworks. No crutches. Just raw DOM orchestration.

The structure leans on semantic HTML. CSS handles depth through layered gradients, glassmorphism, and subtle motion transforms. JavaScript stays event-centric—no state library, just direct mutation where it makes sense.

I intentionally avoided component abstraction. This isn’t about scalability. It’s about control.

## System Notes

- Cursor tracking uses direct transform injection. No requestAnimationFrame needed here—latency stays under perceptual threshold.
- Hover amplification modifies transform string inline. Slightly hacky, but avoids state bookkeeping.
- Layout grid uses auto-fit to remove breakpoint micromanagement.
- Blur layering relies on backdrop-filter. Falls back cleanly if unsupported.

## Interaction Model

- Entry CTA scrolls with native smooth behavior.
- Cards lift with transform instead of box-shadow inflation. GPU handles it better.
- Form submission is intercepted at the DOM level. No network layer attached by design.

## Sources

Norman, D. A. (2013). *The Design of Everyday Things*. Basic Books.  
Krug, S. (2014). *Don’t Make Me Think, Revisited*. New Riders.  
Mozilla Developer Network. (2024). CSS backdrop-filter. https://developer.mozilla.org/  
