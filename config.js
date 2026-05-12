// ═══════════════════════════════════════════════════════════════════
//  Baby Registry — Configuration
//  Edit ONLY this file. Never need to touch index.html again.
//  Elida 004
// ═══════════════════════════════════════════════════════════════════

const CONFIG = {

  // ── Google Sheets (your product list) ──────────────────────────
  // File → Share → Publish to web → Sheet1 → Tab-separated values
  SHEET_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRXdDYHy2jEIvM8Mp4_iUlobZVf3uUP6XyFeyHW-fWsh0XbxG4PcynqFvYJh1O3O0Ej9VTTjOrieij7/pub?output=tsv',

  // ── Amazon Wish List URL (shown as a link in the notice text) ──
  AMAZON_WISHLIST_URL: 'https://www.amazon.de/baby-reg/pollyana-santos-juli-2026-hamburg/1O4Z1UYBAPZEA',

  // ── PayPal.me ───────────────────────────────────────────────────
  PAYPAL_ME:    'https://paypal.me/EMDreer',

 // ── Bank Transfer (leave iban empty '' to hide this option) ────
  BANK: {
    name: 'Pollyana Ferreira dos Santos',          // e.g. 'Ana Silva'
    iban: 'DE02 1001 1001 2627 1299 30', // your IBAN
    bic:  'NTSBDEB1XXX',        // N26 BIC
    bank: 'N26 Bank',
  },

  // ── Due date shown in hero ──────────────────────────────────────
  DUE_DATE:     '25. Jul 2026',

  // ── Baby shower event details (shown in the event frame) ───────
  EVENT: {
    date:     'Saturday, 30 May 2026',
    time:     '15:30 Uhr',
    location: 'Your address here',
    desc_en:  "We're so happy to be surrounded by the people we love. Whether you join us in person or from afar — thank you for being part of this journey.",
    desc_de:  "Wir freuen uns so sehr, von den Menschen umgeben zu sein, die wir lieben. Ob du persönlich dabei bist oder aus der Ferne — danke, dass du Teil dieser Reise bist.",
  },


  // ── EmailJS — see EMAILJS_SETUP.md for instructions ───────────
  // Free at emailjs.com · 200 emails/month
  EMAIL: {
    service_id:  'service_r76eiue',   // e.g. 'service_abc123'
    template_id: 'template_a0dro0i',  // e.g. 'template_xyz789'
    public_key:  'HtZ3R0q6St_a8l76q',   // e.g. 'AbCdEfGhIjKlMnOp'
    to_email:    'pollyana_ferreiras@hotmail.com',    // where notifications go
  },


  // ── Google Apps Script URL (auto-reserve) ─────────────────────────
  // After deploying the Apps Script, paste the Web App URL here.
  // See APPS_SCRIPT_SETUP.md for instructions.
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzAtNEXcr5sMTK9qptpNq53aU9YR25O095ingyEzJSfwLaHeTzjLLqdNpdhJQ_ctiNL2g/exec',


  // ── Column order in your Google Sheet (do not change) ──────────
  // Columns N (13) and O (14) are optional: store_name and store_url
  // Add them to override the Amazon button with a different store for that item.
  // Example row: leave amazon_url empty, set store_name=dm, store_url=https://dm.de/...
  COLS: {
    id:0, name:1, name_de:2, category:3, emoji:4,
    price:5, priority:6, description:7, description_de:8,
    amazon_url:9, search_query:10, reserved:11, gifter_name:12,
    can_gift_used:13, store_name:14, store_url:15
  }


};
