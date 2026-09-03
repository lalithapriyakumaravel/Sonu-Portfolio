

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  role: string;
  platform: string;
  blurb: string;
  cover: string;
  tags: string[]; // for Tools
  metrics: { label: string; value: string }[];
  client: string;
  duration: string;
  overview: string;
  theProblem: string;
  userResearch: string[]; // 3 points
  painPoints: string[]; // 3 points
  wireframes: string[]; // images array
  uiDesign: {
    colorPalette: { name: string; hex: string }[];
    typography: string[];
  };
  designRationale: string;
  finalSolution: string;
  keyLearnings: string[]; // 3 points
  gallery: string[];
}

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAdjacent(id: string): Project {
  const i = projects.findIndex((p) => p.id === id);
  return projects[(i + 1) % projects.length];
}

export const projects: Project[] = [
  {
    id: "wt-books",
    index: "01",
    title: "WT Books",
    category: "Web Application",
    year: "2026",
    role: "Product Designer",
    platform: "Web",
    blurb: "A modern platform for managing and reading books.",
    cover: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma", "User Research", "Prototyping"],
    metrics: [{ label: "Screens", value: "20+" }, { label: "User Flows", value: "4" }, { label: "Success Rate", value: "98%" }],
    client: "Webtrendz Technologies",
    duration: "2 Months",
    overview: "WT Books is a digital library platform where users can easily browse, review, and organize their favorite literature.",
    theProblem: "Readers often lose track of their books and struggle to find a streamlined platform that offers both tracking and reading in one place.",
    userResearch: ["Interviewed readers", "Analyzed competitors", "Tested flows"],
    painPoints: ["Scattered libraries", "Poor discovery", "Cluttered UI"],
    wireframes: [
      "https://images.unsplash.com/photo-1782328479547-d4c0bb802143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
    ],
    uiDesign: {
      colorPalette: [
        { name: "Brand Red", hex: "#CF4A25" },
        { name: "Brand Brown", hex: "#7D7365" },
        { name: "Brand Dark", hex: "#1B1712" }
      ],
      typography: ["Manrope", "Fraunces"]
    },
    designRationale: "The design rationale focuses on a clean and immersive reading experience using specific brand accents.",
    finalSolution: "The final solution is a beautifully crafted web platform that merges utility with an editorial design style.",
    keyLearnings: ["Content-first design", "Editorial layouts", "High contrast accessibility"],
    gallery: [
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1759765299418-02dfc7a6ad75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
    ]
  },
  {
    id: "gt-colour-mixer",
    index: "02",
    title: "GT Colour Mixer",
    category: "Mobile Application",
    year: "2026",
    role: "Sole Product Designer",
    platform: "Mobile Application (iOS/Android)",
    blurb: "A mobile app that simulates paint colour mixing in real time — letting artists test ratios digitally before ever touching a brush.",
    cover: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma", "Color Theory", "Prototyping"],
    metrics: [{ label: "Screens", value: "20+" }, { label: "User Flows", value: "4" }, { label: "Success Rate", value: "98%" }],
    client: "Agency Project",
    duration: "1.5 Months",
    overview: "GT Colour Mixing lets artists virtually simulate the outcome of mixing paint colours in different ratios. Users can pick colours from a predefined palette, a colour wheel, a colour scale, or directly from a photo.",
    theProblem: "Beginner artists don't know what colours to mix to reach a target shade, leading to wasted paint and frustration through trial and error.",
    userResearch: [
      "Fixed colour libraries are the dominant limitation across competitors.",
      "Image-based colour picking is a validated, unmet demand.",
      "Artists think about colour differently from one another, needing multiple inputs."
    ],
    painPoints: [
      "Trial-and-error mixing wastes real materials.",
      "Existing colour-mixing apps restrict users to preset colour libraries.",
      "No reliable way to capture a real-world reference colour."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Background", hex: "#F5F5F7" },
        { name: "Surface", hex: "#FFFFFF" },
        { name: "Primary Text", hex: "#1D1D1F" },
        { name: "Accent", hex: "#5E6AD2" }
      ],
      typography: ["Inter"]
    },
    designRationale: "The UI stays deliberately minimal and neutral. Any strong colour, texture, or visual noise in the chrome would bias perception of the mixed result itself.",
    finalSolution: "Solved the single biggest unmet need in the category — real-world and image-based colour entry, and delivered four flexible colour-entry paths.",
    keyLearnings: [
      "Image-based extraction is critical",
      "Neutral UI is necessary for color tools",
      "Multiple entry paths support different mental models"
    ],
    gallery: []
  },
  {
    id: "xion-grocery",
    index: "03",
    title: "XION",
    category: "Mobile Application",
    year: "2026",
    role: "Product Designer",
    platform: "Mobile Application (iOS/Android)",
    blurb: "On-Demand Grocery Delivery — Mobile Application for Dubai combining quick-commerce convenience with user-chosen delivery times.",
    cover: "https://images.unsplash.com/photo-1782328479547-d4c0bb802143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma", "UX Research", "Prototyping"],
    metrics: [{ label: "Screens", value: "20+" }, { label: "User Flows", value: "4" }, { label: "Success Rate", value: "98%" }],
    client: "Agency Project",
    duration: "3 Months",
    overview: "XION is a day-to-day grocery delivery app serving Dubai, designed in the spirit of quick-commerce apps like Blinkit — but with one key difference: users choose their own convenient delivery time.",
    theProblem: "Instant-delivery apps don't let users choose a delivery time, forcing them to be available whenever it arrives. They also carry limited ranges and suffer from poor stock visibility.",
    userResearch: [
      "Speed and control are mutually exclusive in the current market.",
      "Convenience apps don't cover full daily grocery needs.",
      "Stock visibility is a trust issue."
    ],
    painPoints: [
      "Unreliable or inflexible delivery windows.",
      "Limited product ranges on quick apps.",
      "Discovering out-of-stock items post-checkout."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "App Background", hex: "#F4F3ED" },
        { name: "Primary Green", hex: "#5EB547" },
        { name: "Button Green", hex: "#1A5C38" },
        { name: "Cool Green", hex: "#B0DC41" }
      ],
      typography: ["Involve", "Inter"]
    },
    designRationale: "Time-slot picker presented as tappable chips. Category browsing uses icon-led grids. Layered green palette keeps the 'fresh grocery' association strong.",
    finalSolution: "Closed a genuine gap in Dubai's market by combining quick-commerce speed with user-controlled delivery timing built into the core checkout flow.",
    keyLearnings: [
      "Users value reliability over raw speed.",
      "Delivery time selection must be a core flow step.",
      "One app can serve both planned and top-up shopping."
    ],
    gallery: []
  },
  {
    id: "super-id-card-maker",
    index: "04",
    title: "Super ID Card Maker",
    category: "Desktop Application",
    year: "2026",
    role: "Product Designer",
    platform: "Desktop Application (Windows)",
    blurb: "A desktop application for designing and mass-printing ID cards built to import large data sets directly from Excel and auto-populate thousands of individual cards from a single design.",
    cover: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma"],
    metrics: [{ label: "Manual Data Entry", value: "0" }, { label: "Template Reusability", value: "100%" }, { label: "Pre-print Errors", value: "0" }],
    client: "Agency Project - Revamp",
    duration: "3 Months",
    overview: "Super ID Card Maker is a desktop tool for designing and bulk-printing ID cards. Instead of entering each person's details manually, users import data directly from an Excel sheet and map it onto a single card design generating thousands of individually populated, print-ready ID cards at once.",
    theProblem: "Manual data entry doesn't scale. Entering each person's details by hand for large batches is slow and highly error-prone. No reusable way to design once and apply at scale. Printer and layout compatibility issues lead to wasted material. No live preview before committing to print.",
    userResearch: [
      "Batch processing from Excel/CSV is the baseline expectation.",
      "Reusability of templates is a major time-saver for repeat use cases.",
      "Field mapping is where user error most often originates.",
      "A preview step before printing is essential risk mitigation."
    ],
    painPoints: [
      "Manual data entry is slow and error-prone.",
      "No reusable way to design once and apply at scale.",
      "Printer and layout compatibility issues.",
      "No live preview before committing to print."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Pearl White", hex: "#FFFEFC" },
        { name: "Grey (Surface)", hex: "#F8F8F8" },
        { name: "Black", hex: "#1D1D1D" },
        { name: "Outline", hex: "#313131" }
      ],
      typography: ["Inter"]
    },
    designRationale: "Drag-and-drop field mapping. Live data preview. Template-first structure. A restrained black/white/grey palette keeps focus on the card canvas itself.",
    finalSolution: "Removed manual data entry from the bulk-printing workflow entirely. Introduced a template system that supports repeat, recurring use cases. Reduced the risk of costly print errors at scale.",
    keyLearnings: [
      "Removed manual data entry from workflow",
      "Introduced a template system for reuse",
      "Reduced the risk of costly print errors"
    ],
    gallery: []
  },
  {
    id: "eat-circler",
    index: "05",
    title: "EatCircler",
    category: "Web Application",
    year: "2026",
    role: "Sole Product Designer",
    platform: "Web Application",
    blurb: "A web platform connecting food lovers with private chefs to hire a chef for an at-home meal, order specific dishes from a chef, or join a hosted potluck/supper club event.",
    cover: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma"],
    metrics: [{ label: "Unified Formats", value: "3" }, { label: "Relationship Layer", value: "Added" }, { label: "In-platform Logistics", value: "100%" }],
    client: "Agency Project",
    duration: "3 Months",
    overview: "EatCircler brings together three distinct dining experiences hiring a private chef to cook at home, ordering specific dishes from a chef, and joining a hosted potluck or supper-club event into a single platform. Beyond transactions, users can follow chefs, get updated on new dishes and events, and message chefs directly about food, timing, and logistics.",
    theProblem: "Private chef discovery and booking are typically transactional, not relational. No single platform combines all three dining formats. Communication with chefs about event specifics is fragmented. Users have no way to stay updated on chefs they like.",
    userResearch: [
      "Existing platforms are transactional by design.",
      "In-platform communication is a recurring pain point.",
      "The three dining formats serve genuinely different intents.",
      "Trust signals matter heavily in this category."
    ],
    painPoints: [
      "Discovery is typically transactional, not relational.",
      "No single platform combines all three dining formats.",
      "Communication about event specifics is fragmented.",
      "No way to stay updated on chefs they like."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Primary Orange", hex: "#CB481E" },
        { name: "Primary Text", hex: "#2D2D2D" },
        { name: "Primary White", hex: "#FFF3E6" },
        { name: "Secondary White", hex: "#FFE6DC" },
        { name: "Secondary Black", hex: "#1C1B1B" },
        { name: "App Background", hex: "#F9F7F2" },
        { name: "Accent", hex: "#E1A95F" }
      ],
      typography: ["Inter", "IBM Plex Sans"]
    },
    designRationale: "Warm, editorial, and food-forward dark sidebar navigation paired with a bright orange/red accent and warm hero illustration, evoking a premium food-community feel rather than a plain transactional marketplace.",
    finalSolution: "Unified three separate dining formats into one platform. Introduced a genuine relationship layer absent from existing competitors. Kept event logistics inside the platform.",
    keyLearnings: [
      "Unified three separate dining formats",
      "Introduced a genuine relationship layer",
      "Kept event logistics inside the platform"
    ],
    gallery: []
  },
  {
    id: "xion-admin",
    index: "06",
    title: "XION Admin Dashboard",
    category: "Web Application",
    year: "2026",
    role: "Product Designer",
    platform: "Web Application",
    blurb: "An operations dashboard built for XION's grocery admin team to track orders, manage daily product pricing and discounts, oversee customers, and push price-change notifications.",
    cover: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma"],
    metrics: [{ label: "Unified Operations", value: "100%" }, { label: "Price-to-Customer Updates", value: "Fast" }, { label: "Reduced Friction", value: "High" }],
    client: "Agency Project",
    duration: "3 Months",
    overview: "The XION Admin Dashboard is the operational control centre behind the XION grocery delivery app. It gives admins a real-time view of orders, product catalogue health, customer growth, and critically a fast way to update daily fluctuating prices and notify customers of those changes via WhatsApp.",
    theProblem: "Grocery prices fluctuate daily, and updating them manually across a catalogue is slow. Price changes need to reach customers quickly. Order, customer, and catalogue data were scattered. No quick-access path for high-frequency admin tasks.",
    userResearch: [
      "Price updates and communication are tightly coupled.",
      "Admins think in daily/weekly operational cycles.",
      "A small set of tasks account for most day-to-day admin activity.",
      "Category-level visibility helps admins spot demand shifts early."
    ],
    painPoints: [
      "Updating prices manually across a catalogue is slow.",
      "Manual outreach doesn't scale.",
      "Order, customer, and catalogue data were scattered.",
      "No quick-access path for high-frequency admin tasks."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Primary Green", hex: "#5EB547" },
        { name: "Button Green", hex: "#1A5C38" },
        { name: "Text Grey", hex: "#616161" },
        { name: "White", hex: "#F4F3ED" },
        { name: "Dark Charcoal", hex: "#071709" }
      ],
      typography: ["Inter"]
    },
    designRationale: "Colour-coded KPI cards, consistent table pattern, Quick Actions as a persistent panel, Sidebar grouped by Main vs. Management.",
    finalSolution: "Unified daily operations into a single dashboard view. Connected price updates directly to customer communication. Reduced friction on the highest-frequency admin actions.",
    keyLearnings: [
      "Unified daily operations into a single dashboard view",
      "Connected price updates directly to customer communication",
      "Reduced friction on the highest-frequency admin actions"
    ],
    gallery: []
  },
  {
    id: "daga-developers",
    index: "07",
    title: "Daga Developers",
    category: "Website Design",
    year: "2026",
    role: "Product Designer",
    platform: "Website",
    blurb: "A real estate website where prospective buyers can browse available plots, view complete plot details, and send a direct online enquiry.",
    cover: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma"],
    metrics: [{ label: "Enquiry Dilution", value: "Eliminated" }, { label: "Listing Transparency", value: "Raised" }, { label: "Plot-Specific Enquiries", value: "100%" }],
    client: "Agency Project Revamp",
    duration: "3 Months",
    overview: "Daga Developers is a real estate website built around plot listings. Users can browse available plots, view full details for each one, and submit an online enquiry directly designed to give a single developer's inventory the clarity and directness that large aggregator portals often lack.",
    theProblem: "Aggregator listing portals bury genuine details behind vague descriptions. Enquiries on large portals are diluted. No direct line from a specific plot to the developer. Buyers can't independently evaluate a plot without back-and-forth.",
    userResearch: [
      "Listing quality is a widely cited complaint on major portals.",
      "Enquiry dilution is a structural problem on aggregator platforms.",
      "End-consumers report receiving mostly broker interest rather than genuine buyer interest.",
      "Specificity drives better-quality enquiries."
    ],
    painPoints: [
      "Vague descriptions and unclear pricing on aggregator portals.",
      "Enquiries are diluted across multiple brokers.",
      "No direct line from a specific plot to the developer.",
      "Buyers are forced into repeated calls for basic facts."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Primary Red", hex: "#A01A37" },
        { name: "Charcoal Black", hex: "#1E1E1E" },
        { name: "Warm White", hex: "#FAF7F7" },
        { name: "Rose Mist", hex: "#F5C6C6" },
        { name: "Graphite Grey", hex: "#6A6A6A" },
        { name: "Gold", hex: "#C9A15D" },
        { name: "Pure White", hex: "#FFFFFF" }
      ],
      typography: ["Involve", "Switzer"]
    },
    designRationale: "Clean, trust-forward, and content-first. Every enquiry is plot-specific. Complete detail before contact. Single-source trust signal.",
    finalSolution: "Eliminated enquiry dilution by design. Raised listing transparency. Anchored every enquiry to a specific plot.",
    keyLearnings: [
      "Eliminated enquiry dilution by design",
      "Raised listing transparency",
      "Anchored every enquiry to a specific plot"
    ],
    gallery: []
  },
  {
    id: "london-waste-removal",
    index: "08",
    title: "London Waste Removal",
    category: "Website Design",
    year: "2026",
    role: "Product Designer",
    platform: "Website",
    blurb: "A waste removal service website where users can browse available clearance services, view full service details, and book directly online without needing to call for a quote.",
    cover: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma"],
    metrics: [{ label: "Phone Quotes", value: "Reduced" }, { label: "Pricing Trust", value: "High" }, { label: "Self-Service", value: "Enabled" }],
    client: "Agency Project",
    duration: "3 Months",
    overview: "London Waste Removal is a service website for domestic and commercial waste clearance across London. Users can view available services and their details, then book a collection slot entirely online.",
    theProblem: "Many competitors still push users toward a phone call instead of self-service booking. Pricing transparency is a widespread trust issue. Users don't know what's included in a service type before booking. No easy way to see and select a specific time slot online.",
    userResearch: [
      "\"No hidden charges\" functions as an industry-wide admission of a common problem.",
      "Online booking is common, but rarely the fully self-sufficient primary path.",
      "Service categorisation varies widely in specificity.",
      "Flexible, fast turnaround is a widely advertised strength, but clarity is the differentiator."
    ],
    painPoints: [
      "Competitors push users toward a phone call.",
      "Pricing transparency is a trust issue.",
      "Unclear service inclusions.",
      "No direct online calendar for slot selection."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Primary Green", hex: "#4E7B39" },
        { name: "Secondary Green", hex: "#96B281" },
        { name: "Background", hex: "#F7FFDA" },
        { name: "Dark Charcoal", hex: "#333333" },
        { name: "Lite Grey", hex: "#F5F5F5" }
      ],
      typography: ["Outfit"]
    },
    designRationale: "Pricing and inclusions visible before booking. Granular service categorisation. Booking is the primary path, not a fallback.",
    finalSolution: "Reduced reliance on phone-based quoting. Directly addressed the industry's recurring pricing-trust issue. Made service selection self-service.",
    keyLearnings: [
      "Reduced reliance on phone-based quoting",
      "Directly addressed the industry's recurring pricing-trust issue",
      "Made service selection self-service"
    ],
    gallery: []
  },
  {
    id: "nature-candy",
    index: "09",
    title: "Nature Candy",
    category: "Website Design",
    year: "2026",
    role: "Product Designer",
    platform: "Website",
    blurb: "A Dubai-based date candy company's website where customers can browse the full product range and place bulk orders online.",
    cover: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma"],
    metrics: [{ label: "Phone Dependency", value: "Removed" }, { label: "B2B Simplicity", value: "High" }, { label: "Bulk Demand", value: "Captured" }],
    client: "Agency Project",
    duration: "3 Months",
    overview: "Nature Candy makes date-based sweets and confectionery, based in Dubai. The website lets both individual and business customers view the full product range with details, and place bulk orders directly online without the back-and-forth phone calls and manual quoting typical of confectionery wholesale in the region.",
    theProblem: "Bulk/wholesale buying in this category is still largely phone- and spreadsheet-driven. Bulk buyers need product and packaging detail that consumer-facing candy sites don't always provide. No easy way to select bulk quantities directly on a product page. Trust and certification signals matter more for bulk buyers.",
    userResearch: [
      "B2B confectionery purchasing in the UAE is still commonly manual.",
      "Buyers evaluating bulk suppliers want visibility into packaging and carton details up front.",
      "Certifications and quality assurance are decision-relevant for bulk buyers.",
      "Demand for bulk confectionery purchasing has grown significantly in the UAE."
    ],
    painPoints: [
      "Phone and spreadsheet-driven bulk ordering.",
      "Consumer sites lack B2B product/packaging details.",
      "No bulk quantity selection on standard product pages.",
      "Missing trust and certification signals."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Primary Purple", hex: "#A22F74" },
        { name: "Cream", hex: "#FFFDE7" },
        { name: "Lemon Yellow", hex: "#FFEB3B" },
        { name: "Green", hex: "#4CAF50" },
        { name: "Accent", hex: "#DFE55F" }
      ],
      typography: ["Genty Demo", "Montserrat"]
    },
    designRationale: "Warm and natural, reflecting date-based confectionery. Bulk ordering built into the standard flow. Packaging and specification detail shown by default. One product experience serves both casual and bulk buyers.",
    finalSolution: "Removed the phone-call dependency from bulk ordering. Combined consumer-level simplicity with B2B-level product detail. Positioned Nature Candy to capture growing bulk demand.",
    keyLearnings: [
      "Removed the phone-call dependency from bulk ordering",
      "Combined consumer-level simplicity with B2B-level product detail",
      "Positioned Nature Candy to capture growing bulk demand"
    ],
    gallery: []
  },
  {
    id: "mindmax",
    index: "10",
    title: "Mindmax",
    category: "Website Design",
    year: "2026",
    role: "Product Designer",
    platform: "Website",
    blurb: "India's first Vegan DHA snacks for the mind, without compromise. Customers can browse the full product range and order in single pieces or bulk quantities.",
    cover: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    tags: ["Figma"],
    metrics: [{ label: "Category Trust", value: "Built" }, { label: "Unified Flow", value: "High" }, { label: "Appeal", value: "Balanced" }],
    client: "Agency Project",
    duration: "3 Months",
    overview: "Mindmax is a functional snacks brand built around a genuinely rare positioning: it's the only company in India making vegan DHA-fortified cookies, chocolates, and snacks. The website needed to communicate that scientific/nutritional credibility clearly, while remaining approachable enough for everyday snack buyers and support both single-piece purchases and bulk ordering in one flow.",
    theProblem: "Vegan DHA is a genuinely unfamiliar concept to most Indian consumers. No direct competitor exists in India to benchmark against or borrow trust signals from. The brand needed to serve two very different buying intents in one place. Functional/health credibility and everyday snackability needed to coexist.",
    userResearch: [
      "Vegan/algae-derived DHA is a fast-growing global category.",
      "Category education has to happen on the product and homepage itself.",
      "Indian D2C health-snack brands succeed by pairing a clear, singular health claim with genuinely appealing, everyday snack presentation.",
      "Supporting both single-item and bulk purchasing from the same catalogue is essential."
    ],
    painPoints: [
      "Unfamiliarity with vegan DHA.",
      "Lack of existing local competitors for trust signals.",
      "Fragmented buying experiences (single vs. bulk).",
      "Balancing clinical vs. snack framing."
    ],
    wireframes: [],
    uiDesign: {
      colorPalette: [
        { name: "Cocoa", hex: "#4E342E" },
        { name: "Cream", hex: "#FFF8E1" },
        { name: "Secondary Background", hex: "#F5BC72" },
        { name: "Stroke", hex: "#BD7430" },
        { name: "Text Grey", hex: "#404040" }
      ],
      typography: ["Fredoka", "Nunito"]
    },
    designRationale: "Education before conversion. One catalogue, two purchase paths. Credibility without clinical tone.",
    finalSolution: "Built category trust from zero, with no domestic competitor to lean on. Unified single-piece and bulk purchasing into one seamless catalogue experience. Balanced functional credibility with snack appeal.",
    keyLearnings: [
      "Built category trust from zero",
      "Unified single-piece and bulk purchasing",
      "Balanced functional credibility with snack appeal"
    ],
    gallery: []
  }
];
