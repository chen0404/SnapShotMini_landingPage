---
name: SnapShotMini Comparison Stage
description: Five deliberately separate visual worlds for one evidence-led B2B cooperation landing page.
colors:
  shared-switcher-bg: "rgba(15, 15, 15, 0.94)"
  shared-switcher-text: "#ffffff"
  shared-switcher-muted: "rgba(255, 255, 255, 0.62)"
  v1-ink: "#101928"
  v1-cobalt: "#1836d6"
  v1-signal: "#ff5a34"
  v1-ice: "#edf3ff"
  v2-ink: "#111111"
  v2-safety-red: "#e5342a"
  v2-photo-paper: "#eeeade"
  v3-civic-blue: "#0057b8"
  v3-route-red: "#e7473c"
  v3-transfer-yellow: "#ffd43b"
  v3-operation-green: "#168a62"
  v3-ink: "#17212e"
  v4-register-blue: "#1647ff"
  v4-thermal-paper: "#fffdf2"
  v4-ink: "#151515"
  v5-toxic-purple: "#7b2ce8"
  v5-radio-lime: "#caff21"
  v5-spike-pink: "#ff3d91"
  v5-electric-cyan: "#00c8ee"
  v5-burst-yellow: "#ffe238"
  v5-bone-paper: "#fff9e9"
  v5-ink: "#101010"
typography:
  shared-body:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
  v1-display:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(3.8rem, 7vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  v2-display:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(3.6rem, 7.2vw, 6rem)"
    fontWeight: 780
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  v3-display:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(3.5rem, 6.4vw, 6rem)"
    fontWeight: 820
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  v4-display:
    fontFamily: "ui-monospace, SFMono-Regular, Cascadia Mono, PingFang TC, monospace"
    fontSize: "clamp(3.5rem, 8vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  v5-display:
    fontFamily: "Rampart One, Noto Sans TC, PingFang TC, sans-serif"
    fontSize: "clamp(3.8rem, 6.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.04em"
rounded:
  shared-switcher: "16px"
  shared-switcher-tab: "10px"
  v1-pill: "999px"
  v2-square: "0px"
  v3-square: "0px"
  v3-station: "999px"
  v4-square: "0px"
  v5-square: "0px"
spacing:
  shared-switcher-inset: "10px"
  v1-page-gutter: "clamp(24px, 6vw, 96px)"
  v2-page-gutter: "clamp(20px, 5vw, 80px)"
  v3-page-gutter: "clamp(20px, 5vw, 80px)"
  v4-receipt-section: "clamp(36px, 7vw, 84px)"
  v5-page-gutter: "clamp(20px, 5vw, 76px)"
components:
  shared-version-switcher:
    backgroundColor: "{colors.shared-switcher-bg}"
    textColor: "{colors.shared-switcher-text}"
    rounded: "{rounded.shared-switcher}"
    padding: "{spacing.shared-switcher-inset}"
  v1-button-primary:
    backgroundColor: "{colors.v1-signal}"
    textColor: "{colors.shared-switcher-text}"
    rounded: "{rounded.v1-pill}"
    padding: "15px 21px"
  v2-button-primary:
    backgroundColor: "{colors.v2-safety-red}"
    textColor: "{colors.shared-switcher-text}"
    rounded: "{rounded.v2-square}"
    padding: "14px 18px"
  v3-button-primary:
    backgroundColor: "{colors.v3-civic-blue}"
    textColor: "{colors.shared-switcher-text}"
    rounded: "{rounded.v3-square}"
    padding: "14px 18px"
  v4-button-primary:
    backgroundColor: "{colors.v4-register-blue}"
    textColor: "{colors.shared-switcher-text}"
    rounded: "{rounded.v4-square}"
    padding: "18px"
  v5-button-primary:
    backgroundColor: "{colors.v5-spike-pink}"
    textColor: "{colors.v5-ink}"
    rounded: "{rounded.v5-square}"
    padding: "15px 18px"
---

# Design System: SnapShotMini Comparison Stage

## Overview

**Creative North Star: "The Five-World Comparison Stage"**

This repository currently ships a comparison-stage landing page with five deliberately distinct visual worlds. It is not one brand system with five skins, and no single visual direction has been selected. The shared product story, evidence, content sequence, conversion goal, accessible controls, and lead-form behavior stay constant; the expressive layer changes completely at `/v1/` through `/v5/`.

Future work must choose one version before treating any route-specific token, component treatment, motif, or motion rule as authoritative. Until that decision is recorded, changes may preserve or refine an individual route, but must not average the routes into a hybrid. Never mix tokens or motifs across routes.

The conversion invariant is a B2B **合作詢問**, not checkout or a fixed-plan purchase. Every world leads from the compact `30 × 30 × 30 cm` machine and its complete拍貼流程 to the same inquiry form, while using only approved product facts and real company assets.

**Key Characteristics:**

- Five complete, route-scoped visual systems presented side by side for comparison.
- One shared product truth: compact countertop hardware, customizable brand touchpoints, six-step experience, and two operating contexts.
- One shared conversion truth: invite a cooperation inquiry without inventing price, client proof, performance, payment brands, or fixed terms.
- A persistent floating version switcher that is visually neutral to all five routes.
- Responsive layouts, visible keyboard focus, semantic native controls, and reduced-motion overrides across every world.

## Colors

All palette names are route-prefixed because color meaning is local to its world. A similarly shaped role in another route is not a license to reuse the color.

### Shared comparison chrome

- **Switcher Obsidian:** the translucent near-black panel keeps the comparison control legible over every route.
- **Switcher White:** active tabs, text, and focus treatment.
- **Switcher Mist:** secondary label text that remains subordinate to the selected route.

### V1 — Countertop gallery

- **Architectural Cobalt:** the hero field, inquiry field, measurement markers, and primary identity plane.
- **Signal Coral:** the only action-forward accent, used for primary CTAs and focus outlines.
- **Cold Ice:** measurement, scene, and supporting surfaces.
- **Blueprint Ink:** dark editorial sections and primary text.

### V2 — Photo-lab contact sheet

- **Safety Red:** lab-action CTAs, proof marks, selection, and scrollbar accents.
- **Warm Photo Paper:** the page ground, contact sheets, print borders, and form surface.
- **Darkroom Ink:** full black fields, hard rules, and primary type.

### V3 — Transit wayfinding

- **Civic Blue:** the main route, CTA, experience section, and station identity.
- **Route Red:** track loops, experience rails, and station markers.
- **Transfer Yellow:** hero map, contact section, and focus ring.
- **Operation Green:** the operating-context line and labels.
- **Wayfinding Ink:** dense dark text and footer ground.

### V4 — POS receipt narrative

- **Register Blue:** the environmental surround, primary action, focus treatment, and cool receipt insert.
- **Thermal Paper:** the continuous receipt surface and form fields.
- **Receipt Ink:** rules, itemization, barcode, typography, and black custom-content band.

### V5 — Character specification sheet

- **Toxic Purple:** the main grid field, selected view tab, and high-energy brand ground.
- **Radio Lime:** character-card header, selected callouts, and form submit action.
- **Spike Pink:** hero CTA, contact field, and graphic offset shadows.
- **Electric Cyan:** action-grid field, focus outline, and attribute swatches.
- **Burst Yellow:** sticker energy, action numbers, and operating-mode field.
- **Bone Paper:** cards, navigation, forms, and printed reference surfaces.
- **Hard Ink:** outlines, offset shadows, text shadows, and the black frame-gallery field.

### Named Rules

**The Route Boundary Rule.** A color token is valid only inside the route whose prefix it carries; never combine accents from two versions.

**The Evidence Color Rule.** Accent color may strengthen hierarchy, but it must never imply unconfirmed pricing, payment support, client proof, or performance claims.

## Typography

**Shared Body Font:** Noto Sans TC with PingFang TC and Microsoft JhengHei fallbacks.

**Character:** V1–V3 use the same highly legible Traditional Chinese sans-serif foundation but tune weight and structure to different systems. V4 replaces it with tabular receipt-like monospace. V5 uses imported Rampart One for display statements and the shared sans-serif stack for functional copy.

### Hierarchy

- **V1 Display:** dense, confident sans serif with a gallery-catalogue finish; the hero is very large, tightly tracked, and capped near ten characters per line.
- **V2 Display:** slightly lighter darkroom editorial type; oversized headlines sit against contact sheets and film labels.
- **V3 Display:** authoritative wayfinding type; route labels and bilingual microcopy use smaller, spaced text beside circular station marks.
- **V4 Display:** monospaced, tabular, and receipt-native; item labels, quantities, rules, and totals share one operational voice.
- **V5 Display:** Rampart One creates outlined character-poster energy; functional copy and controls stay in the shared sans-serif stack for legibility.
- **Body:** generally `18px` with generous line height around `1.65–1.7` for lead copy; smaller labels become denser and more strongly weighted inside each motif.

### Named Rules

**The Voice Stays Clear Rule.** Public-facing copy remains direct Traditional Chinese and uses approved product terminology even when a visual world introduces English micro-labels.

**The Type Belongs to the World Rule.** Do not bring V4 monospace or V5 Rampart One into V1–V3, and do not neutralize V4 or V5 with a generic shared display style.

## Layout

The application selects a complete page from the URL path and mounts one route at a time. `/v1/` is the default when no version path is present. Switching versions updates browser history, scrolls to the top, and leaves the route content independent.

The fixed version switcher sits at the bottom-right with a five-column tablist. At `640px` and below it expands to the viewport edges, hides descriptive labels, and keeps only the V1–V5 identifiers. It is comparison chrome, not part of any candidate design.

- **V1:** a full-bleed cobalt hero, offset product stage, two-column proof and custom sections, horizontal six-step gallery rail, paired scene panels, and large open section spacing. It collapses at `900px`; action stacking and single-column form behavior tighten at `560px`.
- **V2:** a darkroom hero with a rotated contact sheet, negative-style product proof, horizontal film strip, overlapping print stack, alternating full-width scenes, and red inquiry block. Major grids collapse at `900px`, with a denser mobile contact sheet at `560px`.
- **V3:** split hero, intersecting route loops, labeled transit lines, circular stations on a horizontal rail, and clean municipal grids. It becomes single-column at `900px` and reduces station cards to a viewport-width rail at `560px`.
- **V4:** a centered receipt no wider than `940px` inside a blue register surround. Content is one continuous vertical roll with itemized rows, dotted/dashed separators, a compact processing list, and barcode close. It simplifies at `760px` and uses narrow receipt gutters at `520px`.
- **V5:** purple grid hero, skewed character card, three-view specification board, dense three-column action cards, layered frame prints, and paired mode cards. Grids step down at `900px` and become single-column at `560px`.

**The Shared Story Rule.** Whatever the visual arrangement, retain the product proof, customization evidence, complete flow, two operating contexts, FAQ, and inquiry endpoint behavior.

## Elevation & Depth

Depth is part of each route's metaphor and cannot be standardized globally.

- **V1:** ambient gallery lighting, softened product glow, deep photographic stacks, and restrained floating plaques.
- **V2:** physical print depth through rotation, overlap, heavy darkroom shadow, white photo borders, and proof-mark layering.
- **V3:** mostly flat civic signage. Depth comes from color fields, rails, circular markers, and crisp stacking rather than decorative shadows.
- **V4:** one structural receipt shadow lifts the paper from the register surround; inside the receipt, hierarchy is carried by rules and tonal blocks.
- **V5:** hard offset black shadows create screen-printed physicality. Paper noise and slight rotation replace soft ambient realism.

### Named Rules

**The Material Fidelity Rule.** Use soft ambient depth only in V1, photographic print depth in V2, flat route layering in V3, receipt lift in V4, and hard offset shadows in V5.

## Shapes

- **V1:** pill CTAs, clipped product photography, rectangular plaques, and precise architectural rails.
- **V2:** square controls, rectangular photo paper, tilted contact prints, perforated film edges, and stamped proof graphics.
- **V3:** square signs balanced by circles, rings, pills, and continuous route tracks.
- **V4:** square receipt controls, torn paper edge, dotted and dashed dividers, itemized rows, and barcode geometry.
- **V5:** square cards with thick outlines, irregular clipped headers, burst stickers, slight rotation, grids, and hard-edged swatches.

**The Silhouette Rule.** Repeated geometry must reinforce the selected route's physical metaphor; never decorate one route with another route's signature silhouette.

## Components

### Version switcher

- **Purpose:** expose all five candidate directions without pretending the comparison control belongs to a candidate.
- **Structure:** fixed translucent panel, descriptive heading, five equal native buttons with `tablist`/`tab` semantics, `aria-selected`, hover state, strong focus ring, and white active tab.
- **Responsive:** hide direction names and the panel heading below `640px`; preserve all five targets.

### Navigation and CTAs

- **V1:** white navigation floats over cobalt; primary CTAs are coral pills and secondary actions are outlined pills.
- **V2:** ruled paper navigation gives way to red lab-action buttons and black rectangular utility controls.
- **V3:** crisp white wayfinding navigation uses civic-blue rectangular actions; circular station marks carry identity, not button chrome.
- **V4:** a white-on-blue register bar frames a receipt whose primary action is a full-width blue transaction line.
- **V5:** bone navigation and thick black outlines frame lime or pink controls with hard offset shadows.

### Product and process presentation

- **V1:** spotlighted product stage, dimension labels, specification rail, and gallery-strip process cards.
- **V2:** rotated contact sheet, monochrome negative proof, perforated film-strip process, and stacked prints.
- **V3:** product inside intersecting route circles, measured transfer track, and numbered circular stations.
- **V4:** product as a receipt line item, specifications as item rows, and process as checked transaction status.
- **V5:** interactive three-view character card, specification board, color swatches, and outlined action cards.

### Inquiry form

The field names, validation, submit label, state messages, and endpoint behavior are shared. The visual treatment is route-local: V1 uses understated underlines; V2 uses paper fields with black rules; V3 uses civic two-pixel boxes; V4 uses receipt fields; V5 uses thick comic outlines and an offset submit shadow. If `VITE_LEAD_FORM_ENDPOINT` is absent, show the implemented error and never fake success.

### FAQ

All routes use native `details` and `summary` controls. Borders, weight, and surrounding surface adopt the active route, while the approved questions and answers remain unchanged.

### Motion

Each route has one short entrance signature: V1 assembles the product stage, V2 drops the contact sheet and proof mark, V3 draws route/station arrivals, V4 feeds the receipt, and V5 snaps the character card with a restrained sticker wiggle. The shared reduced-motion media query collapses animations and transitions to effectively static behavior.

## Do's and Don'ts

### Do:

- **Do** choose V1, V2, V3, V4, or V5 explicitly before treating route-scoped tokens as authoritative.
- **Do** preserve the same approved product facts, assets, content sequence, form fields, error behavior, and cooperation-inquiry goal in every version.
- **Do** keep the version switcher visually neutral, keyboard accessible, and separate from candidate-world styling.
- **Do** preserve the prototype machine's proportions, screen, camera, and print-slot structure in every product image treatment.
- **Do** keep every route responsive and honor `prefers-reduced-motion`.

### Don't:

- **Don't** mix colors, typefaces, shadows, geometry, motifs, or motion signatures across routes.
- **Don't** describe this repository as having a selected visual direction; none has been selected yet.
- **Don't** turn the cooperation inquiry into checkout, purchase, a quotation request, or a fixed-package application.
- **Don't** fabricate pricing, client logos, testimonials, performance metrics, payment brands, operating terms, or implementation details.
- **Don't** make the comparison switcher disappear behind route content or absorb it into a candidate navigation system.
