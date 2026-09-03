const fs = require('fs');

const wtBooksPath = './src/app/pages/casestudies/WTBooksCaseStudy.tsx';
let wtBooks = fs.readFileSync(wtBooksPath, 'utf8');

// Replacements for GT Colour Mixer
let gtMixer = wtBooks
  .replace(/WTBooksCaseStudy/g, 'GTColorMixerCaseStudy')
  .replace(/WT Books Banner/g, 'GT Colour Mixer Banner')
  .replace(/WT Books Screen/g, 'GT Colour Mixer Screen')
  .replace(/WT Books/g, 'GT Colour Mixing')
  .replace(/A UX\/UI Case Study/g, 'Virtual Paint Mixing')
  .replace(/Millions of small business owners - hardware stores, building material suppliers, home-service vendors still run their credit and cash transactions through a paper \(ledger book\). Digital cashbook apps like CashBook solved the basic problem of moving that ledger onto a phone, but in doing so introduced new friction:/g, "Beginner artists don't know what colours to mix to reach a target shade. Colour theory in practice is unintuitive without experience, leaving new artists guessing.")
  .replace(/Flat, list-only records/g, "Trial-and-error mixing wastes real materials.")
  .replace(/Existing apps show transactions as a plain chronological list with no visual sense of business health an owner has to manually add things up to know if a month was good or bad./g, "Every failed attempt at a target colour uses up actual paint that can't be recovered.")
  .replace(/Manual data entry errors/g, "Existing apps restrict users to preset libraries.")
  .replace(/When typing fast on a mobile keyboard in a busy shop, users frequently added an extra zero or swapped digits. Without immediate visual feedback, these errors compounded over time./g, "Artists can't enter or use the specific paint colours they actually own, and there is no reliable way to capture a real-world reference colour.")
  .replace(/Competitive Analysis/g, "Competitive Analysis")
  .replace(/Primary competitors \(CashBook, Khatabook\) relied heavily on text-heavy ledgers. We identified a gap for a tool that combined the simplicity of a ledger with the visual insight of a basic financial dashboard./g, "Benchmarked against existing digital colour-mixing tools. The clearest gap across competitor reviews was the inability to bring a real-world colour into the app — a recurring wish list request.")
  .replace(/Key Findings/g, "Key Findings")
  .replace(/Shop owners think in terms of "Cash In" and "Cash Out", not "Credit" and "Debit"./g, "Fixed colour libraries are the dominant limitation across every competitor reviewed.")
  .replace(/Seeing a daily balance trend is more important than viewing individual transactions for quickly assessing business health./g, "Image-based colour picking is a validated, unmet demand.")
  .replace(/Speed of entry is critical — users often record transactions while the customer is still standing at the counter./g, "Artists think about colour differently — some by named palette, some relationally, some by fine-tuning within a hue.")
  .replace(/User Personas/g, "User Personas")
  .replace(/Persona 1 — The Hardware Store Owner/g, "Persona 1 — Beginner Hobbyist Painter")
  .replace(/Needs to quickly log cash transactions while managing multiple customers at once./g, "Frequently sees a colour she wants to reproduce but doesn't know the mixing ratio.")
  .replace(/Relies on mental math for daily totals; doesn't trust complex accounting software./g, "Has wasted paint experimenting blindly and finds it discouraging as a beginner.")
  .replace(/Persona 2 — The Freelance Service Provider/g, "Persona 2 — Art Student")
  .replace(/Needs to track pending payments from clients over weeks or months./g, "Wants to understand colour relationships as he mixes, not just get an end result.")
  .replace(/Wants a professional way to send payment reminders without sounding aggressive./g, "Owns a specific set of paint tubes and wants to work within that real palette.")
  .replace(/User Flow/g, "User Flow")
  .replace(/Home Dashboard \u2192 Add Transaction \(Cash In\/Out\) \u2192 Enter Details \u2192 Save \u2192 View Updated Ledger/g, "Pick Colour (palette / wheel / scale / image) \u2192 Set Ratio \u2192 Preview Result \u2192 Save / Favourite")
  .replace(/The flow was designed to minimize taps. Instead of navigating through menus, the primary actions \(Cash In \/ Cash Out\) are persistently available on the home screen./g, "Grouping saved mixes under individual 'Work' projects mirrors how artists actually think about their practice: colour discoveries belong to a specific piece, not a generic log.")
  .replace(/Low Fidelity/g, "Low Fidelity")
  .replace(/Three core low-fidelity screens established the structural foundation before visual design began:/g, "Three core low-fidelity screens established the foundation before visual design began:")
  .replace(/Home Screen \(lo-fi\)/g, "Colour Palette (lo-fi)")
  .replace(/Business Detail wireframe/g, "Mixing Canvas (lo-fi)")
  .replace(/Add Transaction wireframe/g, "My Work / Work Detail (lo-fi)")
  // Design System palette replacements ONLY for the cards
  .replace(/#0A57E7/g, "#5E6AD2")
  .replace(/#F8F9FA/g, "#F5F5F7")
  .replace(/#212529/g, "#1D1D1F")
  .replace(/#6C757D/g, "#86868B")
  .replace(/Poppins/g, "Inter");

fs.writeFileSync('./src/app/pages/casestudies/GTColorMixerCaseStudy.tsx', gtMixer);

// Replacements for XION
let xion = wtBooks
  .replace(/WTBooksCaseStudy/g, 'XionGroceryCaseStudy')
  .replace(/WT Books Banner/g, 'XION Banner')
  .replace(/WT Books Screen/g, 'XION Screen')
  .replace(/WT Books/g, 'XION')
  .replace(/A UX\/UI Case Study/g, 'Groceries, delivered exactly when you say.')
  .replace(/Millions of small business owners - hardware stores, building material suppliers, home-service vendors still run their credit and cash transactions through a paper \(ledger book\). Digital cashbook apps like CashBook solved the basic problem of moving that ledger onto a phone, but in doing so introduced new friction:/g, "Instant-delivery apps don't let users choose a delivery time. Dubai's quick-commerce apps prioritise speed but give users no control over exactly when the order arrives.")
  .replace(/Flat, list-only records/g, "Limited product ranges")
  .replace(/Existing apps show transactions as a plain chronological list with no visual sense of business health an owner has to manually add things up to know if a month was good or bad./g, "Fast, dark-store-based apps typically stock a curated convenience range, not a full day-to-day grocery basket.")
  .replace(/Manual data entry errors/g, "Unreliable delivery windows")
  .replace(/When typing fast on a mobile keyboard in a busy shop, users frequently added an extra zero or swapped digits. Without immediate visual feedback, these errors compounded over time./g, "Even where a rough window is given, actual arrival time frequently doesn't match, disrupting users' plans around it.")
  .replace(/Primary competitors \(CashBook, Khatabook\) relied heavily on text-heavy ledgers. We identified a gap for a tool that combined the simplicity of a ledger with the visual insight of a basic financial dashboard./g, "No major player in the market combines quick-commerce speed with full user control over delivery timing — apps are either fast with no scheduling flexibility, or scheduled but noticeably slower.")
  .replace(/Shop owners think in terms of "Cash In" and "Cash Out", not "Credit" and "Debit"./g, "Speed and control are currently mutually exclusive in the market.")
  .replace(/Seeing a daily balance trend is more important than viewing individual transactions for quickly assessing business health./g, "Convenience-range apps don't cover full daily grocery needs.")
  .replace(/Speed of entry is critical — users often record transactions while the customer is still standing at the counter./g, "Stock visibility is a trust issue, discovering an out-of-stock item post-checkout is a recurring friction point.")
  .replace(/Persona 1 — The Hardware Store Owner/g, "Persona 1 — Working Professional")
  .replace(/Needs to quickly log cash transactions while managing multiple customers at once./g, "Can't commit to being home for a delivery that 'arrives whenever' — needs to know exactly when to expect it.")
  .replace(/Relies on mental math for daily totals; doesn't trust complex accounting software./g, "Shops for full daily groceries, not just quick top-ups, so a limited convenience range doesn't cover her needs.")
  .replace(/Persona 2 — The Freelance Service Provider/g, "Persona 2 — Parent Managing a Household")
  .replace(/Needs to track pending payments from clients over weeks or months./g, "Frustrated by apps that show an item as available, only to find it substituted or missing after checkout.")
  .replace(/Wants a professional way to send payment reminders without sounding aggressive./g, "Splits shopping across multiple apps today — one for fast top-ups, another for full weekly stock.")
  .replace(/Home Dashboard \u2192 Add Transaction \(Cash In\/Out\) \u2192 Enter Details \u2192 Save \u2192 View Updated Ledger/g, "Browse Categories \u2192 Add to Cart \u2192 Review Order \u2192 Select Delivery Time \u2192 Checkout \u2192 Track Delivery")
  .replace(/The flow was designed to minimize taps. Instead of navigating through menus, the primary actions \(Cash In \/ Cash Out\) are persistently available on the home screen./g, "Delivery time selection is placed as a distinct, deliberate step in the flow — not a default or afterthought.")
  .replace(/Home Screen \(lo-fi\)/g, "Home Screen (lo-fi)")
  .replace(/Business Detail wireframe/g, "Review Your Order Screen (lo-fi)")
  .replace(/Add Transaction wireframe/g, "Profile Screen (lo-fi)")
  .replace(/#0A57E7/g, "#5EB547")
  .replace(/#F8F9FA/g, "#F4F3ED")
  .replace(/#212529/g, "#071709")
  .replace(/#6C757D/g, "#1A5C38")
  .replace(/Poppins/g, "Involve");

fs.writeFileSync('./src/app/pages/casestudies/XionGroceryCaseStudy.tsx', xion);
