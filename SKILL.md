---
name: speedi-design
description: Use this skill to generate well-branded interfaces and assets for Speedi (bilingual EN/AR grocery delivery app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts: primary red #DD2A1F (pressed #B91F16), green #1EA13C, page bg #F6F6F4, ink #262626/#8C8C8C, hairline #EBEBE8; Hanken Grotesk (EN) / Alexandria (AR); campaign accents gold #F5A800, violet #6C3BD4, blue #2D6BFF, pink #E5387E; radius 8 controls / 12 cards / 100 pills; flat (no shadows); prices use the riyal symbol ⃁ (U+20C1, never "SR" text) + Western digits, red ExtraBold, decimals at 62%; motion 120/200/320ms cubic-bezier(0.2,0,0,1), celebration easing for campaigns only. Slogans: AR «الكل يوصّلك، بس حنا نوفّر عليك» / EN "You save. We Deliver." Components live in components/core (ProductCard is the only product card — use it on every listing surface); app screens in ui_kits/app.
