/* =========================================
   n8n_aivatika.com - Main Script
   ========================================= */

const CONFIG = {
  domain: 'aivatika.com',
  siteName: 'AIVATIKA - Enterprise AI Automation',
  heroTitle: 'AIVATIKA AI Automation Suite',
  heroSubtitle: 'Enterprise-grade autonomous AI workflows that save hundreds of manual hours every month.',
  contactEmail: 'contact@aivatika.com',
  whatsappNumber: '918050473346'
};

const AUTOMATIONS = [
  {
    id: 'dashboard',
    name: 'Daily Business Dashboard',
    tagline: 'Pulls sales, expenses, inventory and ads into one live executive dashboard with automatic anomaly alerts.',
    embed: 'automations/dashboard_workflow_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹49,000 (One-time) + Monthly Maintenance ₹9,900',
      setupRequired: [
        'Data source credentials (Sheets, CRM, Ads, Accounting)',
        'Email / Slack account for alerts',
        'Defined KPI calculation metrics & schedule'
      ]
    }
  },
  {
    id: 'tender',
    name: 'Tender / Opportunity Hunter',
    tagline: 'Scans government and listing sites daily and shows only the relevant tenders with deadlines and countdown alerts.',
    embed: 'automations/tender_workflow_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹39,000 (One-time) + Monthly Maintenance ₹7,500',
      setupRequired: [
        'Target portal keywords & category filters (GeM)',
        'Google Sheets or database for lead logging',
        'Slack, Telegram, or Email for real-time alerts',
        'Filter rules for budget ranges & locations'
      ]
    }
  },
  {
    id: 'email',
    name: 'Email Campaign Automator',
    tagline: 'Automates personalised email sequences with dynamic content, A/B testing and delivery analytics.',
    embed: 'automations/email_workflow_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹39,000 (One-time) + Monthly Maintenance ₹8,500',
      setupRequired: [
        'Email service provider (SES, Mailgun, Brevo, or SMTP)',
        'Verified sending domain (SPF, DKIM & DMARC)',
        'Audience contact list or CRM connection',
        'Email sequence copy templates & triggers'
      ]
    }
  },
  {
    id: 'lead',
    name: 'Lead Enrichment Pipeline',
    tagline: 'Enriches raw leads with company data, tech stack, funding info and decision-maker contacts.',
    embed: 'automations/lead_enrichment_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹59,000 (One-time) + Monthly Maintenance ₹9,500',
      setupRequired: [
        'Enrichment API key (Apollo, Hunter)',
        'Inbound lead intake (Web forms, webhook, or Sheet)',
        'Destination CRM or database for enriched contacts',
        'Field mapping requirements (revenue, team size)'
      ]
    }
  },
  {
    id: 'invoice',
    name: 'Invoice Processing Bot',
    tagline: 'Extracts, validates and routes invoices from email / PDF to your accounting system with human review queue.',
    embed: 'automations/invoice_bot_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹79,000 (One-time) + Monthly Maintenance ₹12,500',
      setupRequired: [
        'Dedicated invoice inbox (IMAP/Gmail) or Google Drive',
        'Document OCR / Vision API key',
        'Accounting software access (Zoho, QuickBooks, Tally bridge)',
        'PO & vendor matching validation rules'
      ]
    }
  },
  {
    id: 'support',
    name: 'Customer Support AI',
    tagline: 'Auto-categorises, prioritises and routes tickets with suggested replies from your knowledge base.',
    embed: 'automations/support_triage_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹69,000 (One-time) + Monthly Maintenance ₹12,500',
      setupRequired: [
        'Helpdesk API access (Zendesk, Intercom, Freshdesk)',
        'Company knowledge base / FAQ documentation',
        'AI model API key for answer generation',
        'Ticket escalation rules & routing tags'
      ]
    }
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Automation',
    tagline: 'Conversational AI booking, support, and sales follow-up directly on WhatsApp with official Cloud API.',
    embed: 'automations/whatsapp_workflow_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹59,000 (One-time) + Monthly Maintenance ₹9,500',
      setupRequired: [
        'Meta Business Manager account',
        'Dedicated phone number for WhatsApp Cloud API',
        'Booking calendar or product catalog data',
        'CRM webhook endpoint'
      ]
    }
  },
  {
    id: 'voice',
    name: 'AI Voice Receptionist',
    tagline: 'Human-like conversational voice AI that answers inbound phone calls 24/7, qualifies callers, and books meetings.',
    embed: 'automations/voice_workflow_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹1,49,000 (One-time) + Monthly Maintenance ₹24,900',
      setupRequired: [
        'Dedicated business phone number / SIP trunk / Twilio',
        'Receptionist call script & brand voice guidelines',
        'Calendar booking integration access'
      ]
    }
  },
  {
    id: 'sales',
    name: 'AI Sales Agent',
    tagline: 'Autonomous outbound & inbound AI sales pipeline: identifies target prospects, drafts bespoke outreach, and schedules demos.',
    embed: 'automations/sales_workflow_live.html',
    live: true,
    pricing: {
      price: 'Setup ₹1,99,000 (One-time) + Monthly Maintenance ₹29,900',
      setupRequired: [
        'ICP (Ideal Customer Profile) definition',
        'Sales playbooks and collateral',
        'Sales rep calendar links',
        'Outbound email/LinkedIn sending accounts'
      ]
    }
  }
];

const ICONS = {
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
};

/* Modal Controller */
const Modal = {
  modalEl: null,
  iframeEl: null,
  titleEl: null,
  extBtn: null,
  spinnerEl: null,

  init: function() {
    this.modalEl = document.getElementById('sim-modal');
    if (!this.modalEl) return;
    this.iframeEl = document.getElementById('sim-modal-iframe');
    this.titleEl = document.getElementById('sim-modal-title');
    this.extBtn = document.getElementById('sim-modal-ext');
    this.spinnerEl = document.getElementById('sim-modal-spinner');

    const closeBtn = document.getElementById('sim-modal-close');
    const backdrop = document.getElementById('sim-modal-backdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
    if (backdrop) {
      backdrop.addEventListener('click', () => this.close());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl.classList.contains('is-open')) {
        this.close();
      }
    });

    if (this.iframeEl) {
      this.iframeEl.addEventListener('load', () => {
        if (this.spinnerEl) {
          this.spinnerEl.style.opacity = '0';
        }
      });
    }
  },

  open: function(auto) {
    if (!this.modalEl || !auto || !auto.embed) return;
    this.titleEl.textContent = auto.name + ' - Simulation';
    this.extBtn.href = auto.embed;
    
    if (this.spinnerEl) {
      this.spinnerEl.style.opacity = '1';
    }

    this.iframeEl.src = auto.embed;
    this.modalEl.classList.add('is-open');
    this.modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  close: function() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('is-open');
    this.modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (this.iframeEl) {
      this.iframeEl.src = 'about:blank';
    }
  }
};

/* Card Builder */
function buildCard(auto, idx) {
  const col = document.createElement('div');
  col.className = 'auto-col';
  col.style.animationDelay = (idx * 0.08) + 's';

  // 1. Top Card Box
  const card = document.createElement('article');
  card.className = 'auto-card' + (auto.live ? ' live-card' : ' dummy-card');

  const head = document.createElement('div');
  head.className = 'card-head';

  // Title Row
  const titleRow = document.createElement('div');
  titleRow.className = 'card-title-row';

  const h2 = document.createElement('h2');
  h2.className = 'card-title';
  h2.textContent = auto.name;

  const badge = document.createElement('span');
  badge.className = auto.live ? 'badge badge-live' : 'badge badge-soon';
  badge.textContent = auto.live ? 'LIVE' : 'COMING SOON';

  titleRow.appendChild(h2);
  titleRow.appendChild(badge);

  // Tagline
  const tagline = document.createElement('p');
  tagline.className = 'card-tagline';
  tagline.textContent = auto.tagline;

  head.appendChild(titleRow);
  head.appendChild(tagline);

  // Live action bar or dummy indicator
  if (auto.live) {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('title', 'Click to view ' + auto.name + ' live simulation');

    const actionDiv = document.createElement('div');
    actionDiv.className = 'card-action';

    const watchBtn = document.createElement('button');
    watchBtn.type = 'button';
    watchBtn.className = 'btn-watch-sim';
    watchBtn.innerHTML = ICONS.play + ' <span>Watch Live Simulation</span>';

    const hint = document.createElement('span');
    hint.className = 'card-action-hint';
    hint.innerHTML = ICONS.ext + ' Click to preview';

    actionDiv.appendChild(watchBtn);
    actionDiv.appendChild(hint);
    head.appendChild(actionDiv);

    const openSim = (e) => {
      e.stopPropagation();
      Modal.open(auto);
    };

    card.addEventListener('click', openSim);
    watchBtn.addEventListener('click', openSim);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        Modal.open(auto);
      }
    });
  } else {
    const dummyDiv = document.createElement('div');
    dummyDiv.className = 'card-dummy-status';
    dummyDiv.innerHTML = ICONS.lock + ' <span>Workflow demo in development</span>';
    head.appendChild(dummyDiv);
  }

  card.appendChild(head);
  col.appendChild(card);

  // 2. Pricing & Setup Block Below Card
  const priceBlock = document.createElement('div');
  priceBlock.className = 'pricing-block';

  const priceHeading = document.createElement('div');
  priceHeading.className = 'pricing-price';
  priceHeading.textContent = auto.pricing.price;

  // Setup Required Header
  const setupHeader = document.createElement('div');
  setupHeader.className = 'setup-header';
  setupHeader.innerHTML = ICONS.settings + ' <span>Setup Required</span>';

  // Setup Requirements List
  const list = document.createElement('ul');
  list.className = 'pricing-list';
  const reqItems = auto.pricing.setupRequired || auto.pricing.includes || [];
  reqItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = ICONS.check + ' <span>' + item + '</span>';
    list.appendChild(li);
  });

  const ctaBtn = document.createElement('button');
  ctaBtn.type = 'button';
  ctaBtn.className = 'pricing-cta';
  ctaBtn.dataset.id = auto.id;
  ctaBtn.innerHTML = '<span>Get this automation</span> ' + ICONS.arrow;

  priceBlock.appendChild(priceHeading);
  priceBlock.appendChild(setupHeader);
  priceBlock.appendChild(list);
  priceBlock.appendChild(ctaBtn);

  col.appendChild(priceBlock);

  return col;
}

/* CTA Handler */
function handleCTA(id) {
  const auto = AUTOMATIONS.find((a) => a.id === id);
  if (!auto) return;
  const subject = encodeURIComponent('Inquiry: ' + auto.name + ' Automation');
  const body = encodeURIComponent(
    'Hi Team,\n\nI am interested in getting the "' +
      auto.name +
      '" automation for my business.\n\nPlease share the details, implementation timeline, and next steps.\n\nThanks!'
  );
  window.location.href = 'mailto:' + CONFIG.contactEmail + '?subject=' + subject + '&body=' + body;
}

/* Initialization */
function init() {
  Modal.init();

  const footerDomain = document.querySelector('.footer-domain');
  if (footerDomain) footerDomain.textContent = CONFIG.domain;

  const emailBtn = document.querySelector('.contact-btn--email');
  if (emailBtn) emailBtn.href = 'mailto:' + CONFIG.contactEmail + '?subject=Automation%20Inquiry';

  const waBtn = document.querySelector('.contact-btn--wa');
  if (waBtn) waBtn.href = 'https://wa.me/' + CONFIG.whatsappNumber;

  const grid = document.querySelector('.automations-grid');
  if (grid) {
    grid.innerHTML = '';
    AUTOMATIONS.forEach((auto, idx) => {
      grid.appendChild(buildCard(auto, idx));
    });

    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.pricing-cta');
      if (btn && btn.dataset.id) {
        handleCTA(btn.dataset.id);
      }
    });
  }

  console.log('%cn8n_aivatika.com loaded - ' + AUTOMATIONS.length + ' automations', 'color:#ff6d5a;font-weight:bold');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
