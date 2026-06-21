{
  "brand": {
    "name": "Kotzinons",
    "positioning": "Playful kids sci‑fi cartoon IP with premium animation-studio credibility.",
    "brand_attributes": [
      "Cinematic",
      "Toyetic (collectible)",
      "Bold silhouettes",
      "Playful + premium",
      "High-contrast, readable",
      "Motion-led storytelling"
    ],
    "visual_metaphors": [
      "Armored warriors on a black bodysuit base",
      "Spiked armor as UI ‘edges’ (chips, borders, dividers)",
      "Glass dome helmet = glossy highlights + subtle reflections",
      "Globe + comet trail = orbit lines, arcs, and ‘streak’ micro-animations"
    ]
  },

  "inspiration_refs": {
    "motion_and_storytelling": [
      {
        "title": "DesignRush – Best Animated Websites (Wimpy Kid example)",
        "url": "https://www.designrush.com/best-designs/websites/trends/best-animated-websites",
        "takeaways": [
          "Use playful character animations + hover-triggered reactions",
          "Use dynamic section transitions that feel like comic ‘splash pages’",
          "Tie motion to brand metaphor (paths/orbits/trails)"
        ]
      }
    ],
    "mascot_branding": [
      {
        "title": "Design4Users – Mascots in Branding/UI",
        "url": "https://design4users.com/how-to-use-mascots-in-design/",
        "takeaways": [
          "Mascots improve communication and memorability",
          "Design for scalability (looks good at many sizes)",
          "Use expression/pose variations to guide users",
          "Avoid overload: mascot should clarify, not distract"
        ]
      }
    ]
  },

  "design_style": {
    "fusion_style": "Bento-grid layout + comic-book accents + premium studio polish (clean typography, controlled color, cinematic lighting).",
    "layout_principles": [
      "Mobile-first, generous whitespace (2–3x more than feels comfortable)",
      "Use black/near-black as the ‘stage’ (solid, not gradient) to make armor colors pop",
      "Use bright colors as accents and character theming, not as full-page fills",
      "Use subtle textures (grain/halftone) in backgrounds only"
    ],
    "do_not": [
      "Do not use purple gradients (restricted).",
      "Do not center-align the entire app container.",
      "Do not use transition: all.",
      "Do not apply gradients to text-heavy areas or small UI elements (<100px)."
    ]
  },

  "typography": {
    "google_fonts": {
      "display": {
        "family": "Bebas Neue",
        "usage": "H1 hero title, big section headers (cinematic punch)."
      },
      "body": {
        "family": "Manrope",
        "usage": "Body, UI labels, forms, navigation (high readability)."
      },
      "mono_accent": {
        "family": "IBM Plex Mono",
        "usage": "Character stats, weapon specs, small ‘tech dossier’ labels."
      },
      "import_instruction": "Use Google Fonts in index.html or CSS @import; then set Tailwind fontFamily in tailwind.config.js (if present) or apply via className (font-[family])."
    },
    "type_scale_tailwind": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl font-[Bebas_Neue] tracking-wide",
      "h2": "text-base md:text-lg font-semibold",
      "body": "text-sm md:text-base leading-relaxed",
      "small": "text-xs md:text-sm text-muted-foreground"
    },
    "copy_tone": {
      "kids": "Short, energetic, action verbs.",
      "partners": "Clear, confident, production-ready language.",
      "rule": "Use dual-layer copy: playful headline + professional subcopy."
    }
  },

  "color_system": {
    "notes": [
      "Use solid near-black backgrounds for cinematic feel; keep gradients minimal and only as decorative overlays (<20% viewport).",
      "Character colors are accents; keep content surfaces light for readability (cards on light surfaces) OR dark cards with strong contrast.",
      "Avoid purple/pink gradients entirely per restriction."
    ],
    "tokens_css_variables": {
      "instruction": "Replace :root tokens in /app/frontend/src/index.css with these HSL values (keep shadcn structure).",
      "light": {
        "--background": "40 33% 98%",
        "--foreground": "222 47% 11%",
        "--card": "0 0% 100%",
        "--card-foreground": "222 47% 11%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222 47% 11%",

        "--primary": "222 47% 11%",
        "--primary-foreground": "40 33% 98%",

        "--secondary": "210 40% 96%",
        "--secondary-foreground": "222 47% 11%",

        "--muted": "210 40% 96%",
        "--muted-foreground": "215 16% 47%",

        "--accent": "190 95% 35%",
        "--accent-foreground": "40 33% 98%",

        "--destructive": "0 84% 55%",
        "--destructive-foreground": "40 33% 98%",

        "--border": "214 32% 91%",
        "--input": "214 32% 91%",
        "--ring": "190 95% 35%",

        "--radius": "0.9rem",

        "--kotz-red": "0 84% 55%",
        "--kotz-blue": "210 95% 50%",
        "--kotz-gold": "43 96% 56%",
        "--kotz-green": "152 62% 40%",
        "--kotz-ink": "222 47% 11%",
        "--kotz-ink-2": "220 20% 18%",
        "--kotz-glass": "200 30% 96%"
      },
      "dark": {
        "--background": "222 47% 7%",
        "--foreground": "40 33% 98%",
        "--card": "222 47% 9%",
        "--card-foreground": "40 33% 98%",
        "--popover": "222 47% 9%",
        "--popover-foreground": "40 33% 98%",

        "--primary": "40 33% 98%",
        "--primary-foreground": "222 47% 11%",

        "--secondary": "220 20% 16%",
        "--secondary-foreground": "40 33% 98%",

        "--muted": "220 20% 16%",
        "--muted-foreground": "215 20% 70%",

        "--accent": "190 95% 45%",
        "--accent-foreground": "222 47% 7%",

        "--destructive": "0 70% 45%",
        "--destructive-foreground": "40 33% 98%",

        "--border": "220 20% 18%",
        "--input": "220 20% 18%",
        "--ring": "190 95% 45%",

        "--radius": "0.9rem"
      }
    },
    "character_theme_classes": {
      "instruction": "Use these Tailwind utility recipes on character cards/badges; keep text readable.",
      "red": {
        "ring": "ring-2 ring-[hsl(var(--kotz-red))]/40",
        "badge": "bg-[hsl(var(--kotz-red))]/10 text-[hsl(var(--kotz-red))] border-[hsl(var(--kotz-red))]/30",
        "glow": "shadow-[0_0_0_1px_hsl(var(--kotz-red))/25,0_18px_60px_-30px_hsl(var(--kotz-red))/55]"
      },
      "blue": {
        "ring": "ring-2 ring-[hsl(var(--kotz-blue))]/40",
        "badge": "bg-[hsl(var(--kotz-blue))]/10 text-[hsl(var(--kotz-blue))] border-[hsl(var(--kotz-blue))]/30",
        "glow": "shadow-[0_0_0_1px_hsl(var(--kotz-blue))/25,0_18px_60px_-30px_hsl(var(--kotz-blue))/55]"
      },
      "gold": {
        "ring": "ring-2 ring-[hsl(var(--kotz-gold))]/40",
        "badge": "bg-[hsl(var(--kotz-gold))]/12 text-[hsl(var(--kotz-ink))] border-[hsl(var(--kotz-gold))]/35",
        "glow": "shadow-[0_0_0_1px_hsl(var(--kotz-gold))/25,0_18px_60px_-30px_hsl(var(--kotz-gold))/55]"
      },
      "green": {
        "ring": "ring-2 ring-[hsl(var(--kotz-green))]/40",
        "badge": "bg-[hsl(var(--kotz-green))]/10 text-[hsl(var(--kotz-green))] border-[hsl(var(--kotz-green))]/30",
        "glow": "shadow-[0_0_0_1px_hsl(var(--kotz-green))/25,0_18px_60px_-30px_hsl(var(--kotz-green))/55]"
      }
    },
    "allowed_gradients": {
      "rule": "Gradients only as decorative overlays or hero header background; never exceed 20% viewport; never on text-heavy areas; never on small elements.",
      "hero_overlay_examples": [
        "bg-[radial-gradient(60%_60%_at_20%_10%,rgba(0,180,200,0.18)_0%,rgba(0,0,0,0)_60%)]",
        "bg-[radial-gradient(50%_50%_at_80%_20%,rgba(255,196,61,0.14)_0%,rgba(0,0,0,0)_60%)]"
      ]
    }
  },

  "grid_and_layout": {
    "container": "max-w-6xl mx-auto px-4 sm:px-6",
    "section_spacing": "py-14 sm:py-18",
    "bento_rules": [
      "Use 12-col grid on desktop, 4-col on mobile",
      "Hero: 2-column split on lg (logo/story left, character render right)",
      "Characters: 2-up on mobile, 3-up on md, 5-up ‘lineup’ on xl",
      "Gallery: masonry-like using CSS columns or responsive grid with varied row spans"
    ],
    "page_templates": {
      "home": [
        "Hero (logo + tagline + primary CTA + orbit accents)",
        "Featured Characters (bento lineup)",
        "Featured Animation (YouTube embed in cinematic frame)",
        "Journey Timeline (drawing → toy → 3D → animation)",
        "Team Preview",
        "CTA band (Contact + Newsletter)"
      ],
      "characters": [
        "Filter chips (All, Red, Blue, Gold, Green)",
        "Character grid",
        "Detail modal/page with ‘dossier’ layout"
      ],
      "gallery": [
        "Category tabs",
        "Masonry grid",
        "Lightbox dialog"
      ],
      "animations": [
        "Hero header",
        "YouTube embeds list",
        "Animation team highlight"
      ],
      "about": [
        "Story header",
        "Timeline",
        "Behind-the-scenes gallery strip"
      ],
      "team": [
        "Team grid",
        "Roles + responsibilities",
        "Partner CTA"
      ],
      "contact": [
        "Contact form",
        "Inquiry type select",
        "Newsletter signup",
        "Social links"
      ]
    }
  },

  "components": {
    "component_path": {
      "shadcn_primary": "/app/frontend/src/components/ui/",
      "use_components": [
        { "name": "button", "path": "button.jsx" },
        { "name": "navigation-menu", "path": "navigation-menu.jsx" },
        { "name": "sheet", "path": "sheet.jsx" },
        { "name": "card", "path": "card.jsx" },
        { "name": "badge", "path": "badge.jsx" },
        { "name": "tabs", "path": "tabs.jsx" },
        { "name": "dialog", "path": "dialog.jsx" },
        { "name": "carousel", "path": "carousel.jsx" },
        { "name": "aspect-ratio", "path": "aspect-ratio.jsx" },
        { "name": "form", "path": "form.jsx" },
        { "name": "input", "path": "input.jsx" },
        { "name": "textarea", "path": "textarea.jsx" },
        { "name": "select", "path": "select.jsx" },
        { "name": "sonner", "path": "sonner.jsx" },
        { "name": "tooltip", "path": "tooltip.jsx" },
        { "name": "skeleton", "path": "skeleton.jsx" },
        { "name": "separator", "path": "separator.jsx" }
      ]
    },
    "custom_components_to_build": [
      {
        "name": "OrbitBackground",
        "purpose": "Decorative orbit lines + comet streaks behind hero/section headers.",
        "implementation": "Pure CSS + optional canvas; keep under 20% viewport coverage.",
        "data_testid": "orbit-background"
      },
      {
        "name": "CharacterCard",
        "purpose": "Themed card per warrior color with spiked corners + glass helmet highlight.",
        "data_testid": "character-card"
      },
      {
        "name": "CharacterDossierDialog",
        "purpose": "Dialog with dossier layout: stats, weapon, origin snippet, gallery strip.",
        "data_testid": "character-dossier-dialog"
      },
      {
        "name": "MasonryGallery",
        "purpose": "Categorized gallery with lazy-loaded images + lightbox dialog.",
        "data_testid": "masonry-gallery"
      },
      {
        "name": "YouTubeFrame",
        "purpose": "Premium embed frame with ‘glass dome’ highlight and safe aspect ratio.",
        "data_testid": "youtube-frame"
      },
      {
        "name": "JourneyTimeline",
        "purpose": "Story timeline with 4 steps (drawing→toy→3D→animation).",
        "data_testid": "journey-timeline"
      }
    ]
  },

  "component_recipes": {
    "nav_mobile": {
      "pattern": "Desktop NavigationMenu + Mobile Sheet",
      "desktop": {
        "component": "navigation-menu",
        "classes": "hidden lg:flex",
        "data_testid": "site-nav-desktop"
      },
      "mobile": {
        "component": "sheet",
        "trigger": "Button variant=ghost size=icon",
        "classes": "lg:hidden",
        "data_testid": "site-nav-mobile"
      }
    },

    "hero": {
      "structure": [
        "Left: logo + title + tagline + CTAs",
        "Right: character render/toy photo in a ‘glass dome’ frame",
        "Background: orbit lines + subtle grain"
      ],
      "cta_buttons": {
        "primary": {
          "component": "button",
          "variant": "default",
          "classes": "rounded-xl px-5 py-6 text-base font-semibold shadow-[0_18px_60px_-35px_rgba(0,0,0,0.55)] hover:shadow-[0_22px_70px_-35px_rgba(0,0,0,0.65)]",
          "data_testid": "hero-primary-cta"
        },
        "secondary": {
          "component": "button",
          "variant": "secondary",
          "classes": "rounded-xl px-5 py-6",
          "data_testid": "hero-secondary-cta"
        }
      },
      "micro_interactions": [
        "CTA hover: slight translate-y-[-1px] + shadow deepen (transition-shadow, transition-colors only)",
        "Logo hover: comet trail shimmer (CSS background-position animation)",
        "Scroll cue: bouncing ‘orbit dot’ (respect prefers-reduced-motion)"
      ]
    },

    "character_card": {
      "base": {
        "component": "card",
        "classes": "group relative overflow-hidden rounded-2xl border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60",
        "inner": "p-5",
        "data_testid": "character-card"
      },
      "spiked_corner_accent": {
        "implementation": "Use ::before with clip-path polygon to create a small ‘spike’ in top-right; keep subtle.",
        "classes": "before:absolute before:right-0 before:top-0 before:h-10 before:w-10 before:bg-foreground/5 before:[clip-path:polygon(0_0,100%_0,100%_100%,70%_70%)]"
      },
      "glass_dome_highlight": {
        "implementation": "Add a soft diagonal highlight overlay.",
        "classes": "after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_35%)] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity"
      },
      "hover": {
        "classes": "hover:-translate-y-0.5 transition-[box-shadow,background-color,border-color] duration-200",
        "note": "Do NOT use transition-all."
      }
    },

    "gallery": {
      "tabs": {
        "component": "tabs",
        "data_testid": "gallery-category-tabs"
      },
      "masonry": {
        "implementation": "Mobile: grid 2 cols; md+: CSS columns (columns-2 md:columns-3 lg:columns-4) with break-inside-avoid.",
        "image": "Use <img loading='lazy' decoding='async' className='w-full rounded-xl' />",
        "lightbox": "Use Dialog for full image view + caption + next/prev buttons.",
        "data_testid": "gallery-masonry-grid"
      }
    },

    "youtube_embed": {
      "component": "aspect-ratio",
      "ratio": "16/9",
      "frame_classes": "rounded-2xl border bg-black/90 overflow-hidden shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)]",
      "data_testid": "youtube-embed"
    },

    "team_cards": {
      "component": "card",
      "layout": "Avatar + name + role + short responsibilities",
      "data_testid": "team-member-card",
      "note": "Do not identify real people from photos; use provided names/roles only."
    },

    "contact_form": {
      "components": ["form", "input", "textarea", "select", "button"],
      "required_fields": ["name", "email", "inquiryType", "message"],
      "data_testids": {
        "form": "contact-form",
        "name": "contact-form-name-input",
        "email": "contact-form-email-input",
        "inquiry": "contact-form-inquiry-select",
        "message": "contact-form-message-textarea",
        "submit": "contact-form-submit-button"
      },
      "success_toast": "Use sonner toast with a short confirmation message."
    },

    "newsletter": {
      "pattern": "Inline input + button",
      "data_testids": {
        "email": "newsletter-email-input",
        "submit": "newsletter-submit-button"
      }
    }
  },

  "motion": {
    "libraries": {
      "framer_motion": {
        "use_case": "Scroll-triggered entrances, hover micro-interactions, modal transitions.",
        "install": "npm i framer-motion",
        "usage_notes": [
          "Respect prefers-reduced-motion",
          "Use small distances (y: 8–14) and short durations (0.25–0.45s)"
        ]
      }
    },
    "principles": [
      "Motion must reinforce story: orbit lines, comet streaks, ‘armor’ reveals",
      "Use staggered entrances for character lineup",
      "Hover: glow + highlight, not big scaling",
      "Scrolling: subtle parallax on background orbits only"
    ],
    "micro_interactions": {
      "buttons": "hover: brightness-105 + shadow deepen; active: scale-[0.98] (transition-[box-shadow,filter,background-color])",
      "cards": "hover: translate-y-[-2px] + highlight overlay fade-in",
      "tabs": "active indicator slides (Framer Motion layoutId)",
      "gallery": "image hover: show caption gradient strip (solid overlay, not gradient-heavy)"
    }
  },

  "imagery": {
    "image_urls": {
      "textures": [
        {
          "category": "background-texture",
          "description": "Halftone/polka texture for subtle comic grain overlay (use opacity 0.06–0.10).",
          "url": "https://images.unsplash.com/photo-1561714813-4f3b8e4c7f77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwyfHxjb21pYyUyMGhhbGZ0b25lJTIwdGV4dHVyZSUyMHBhcGVyJTIwZ3JhaW4lMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc4MjA3ODE3Nnww&ixlib=rb-4.1.0&q=85"
        }
      ],
      "toy_photos_placeholders": [
        {
          "category": "hero-right-media",
          "description": "Toy/figure photography placeholder (replace with real Kotzinons toy photos).",
          "url": "https://images.unsplash.com/photo-1781550438468-67bbe3059727?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxraWRzJTIwc2NpLWZpJTIwY2hhcmFjdGVyJTIwdG95JTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MHx8fHwxNzgyMDc4MTY0fDA&ixlib=rb-4.1.0&q=85"
        },
        {
          "category": "gallery-placeholder",
          "description": "Display shelf / collectible vibe placeholder.",
          "url": "https://images.pexels.com/photos/5795420/pexels-photo-5795420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ],
      "team_placeholders": [
        {
          "category": "team-section",
          "description": "Creative team in office placeholder (replace with real team photos if available).",
          "url": "https://images.pexels.com/photos/7675029/pexels-photo-7675029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    },
    "image_rules": [
      "Prefer WebP/AVIF; use responsive sizes; lazy-load below the fold",
      "Always include alt text (kids-friendly + descriptive)",
      "Avoid heavy filters; keep colors true to character armor",
      "Do not attempt to identify people in photos; use captions only"
    ]
  },

  "accessibility": {
    "wcag": "AA",
    "rules": [
      "Maintain contrast: bright armor colors must be paired with ink/white appropriately",
      "Focus rings: visible (ring-2 ring-[hsl(var(--ring))])",
      "Keyboard navigation for menus, dialogs, tabs",
      "Respect prefers-reduced-motion: disable parallax and large entrance animations"
    ]
  },

  "seo": {
    "rules": [
      "Use semantic headings (one H1 per page)",
      "Add descriptive meta titles/descriptions per page",
      "Use OpenGraph images (logo + character lineup)",
      "Image alt text should include ‘Kotzinons’ + character name when applicable"
    ]
  },

  "instructions_to_main_agent": {
    "global_css": [
      "Update /app/frontend/src/index.css :root and .dark tokens to match the provided HSL system.",
      "Remove reliance on /app/frontend/src/App.css default CRA header styles; keep App.css minimal or unused.",
      "Add a subtle noise/halftone overlay utility class (background-image) but keep opacity low."
    ],
    "implementation_notes": [
      "Use shadcn components from /app/frontend/src/components/ui only (no raw HTML dropdowns/calendars/toasts).",
      "All interactive + key informational elements must include data-testid in kebab-case.",
      "Use Dialog for character detail and gallery lightbox.",
      "Use AspectRatio for YouTube embeds.",
      "Use Tabs for gallery categories.",
      "Use Sonner for toasts (success/error)."
    ],
    "performance": [
      "Lazy-load gallery images; use Skeleton placeholders while loading.",
      "Defer heavy motion assets; keep hero motion CSS-first where possible.",
      "Keep gradients decorative and limited (<20% viewport)."
    ]
  },

  "General UI UX Design Guidelines": "- You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals."
}
