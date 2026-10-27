# n8n_aivatika.com - n8n Automations Showcase

A production-ready, single-page marketing website showcasing n8n automation workflows. Built as a plain static site (HTML/CSS/JS) for instant deployment to Netlify, Vercel, or any static host.

## Features

- **Fully responsive** — Mobile-first, works at 375px, 768px, 1280px+
- **Light & Dark mode** — Automatic via `prefers-color-scheme`, respects user preference
- **Accessible** — Semantic HTML, ARIA labels, keyboard focus, reduced motion support
- **SEO ready** — Meta tags, Open Graph, Twitter cards, structured data
- **Lazy-loaded iframes** — Workflow demos load only when scrolled into view (IntersectionObserver)
- **Zero dependencies** — No frameworks, no build step, no external libraries
- **Easy to extend** — All content in one data array in `script.js`

## Quick Start

```bash
# Clone or download
cd n8n_Dashboard

# Serve locally (any static server)
npx serve .
# or
python3 -m http.server 8000
# or
php -S localhost:8000
```

Open `http://localhost:8000` in your browser.

## Project Structure

```
n8n_Dashboard/
├── index.html          # Main HTML page
├── style.css           # All styles (light/dark, responsive)
├── script.js           # App logic + AUTOMATIONS data array
├── README.md           # This file
└── automations/        # Demo HTML files (iframe sources)
    ├── dashboard_workflow_live.html
    ├── tender_workflow_live.html
    └── ... (add more here)
```

## Configuration

Edit the `CONFIG` object at the top of `script.js`:

```javascript
const CONFIG = {
  domain: "n8n_aivatika.com",           // Your domain (used in title, meta, footer)
  siteName: "n8n_aivatika.com",         // Display name in top bar
  heroTitle: "n8n Automations made by our team",
  heroSubtitle: "Ready-to-use workflows that save hours of manual work. Watch each one run live.",
  contactEmail: "hello@n8n_aivatika.com",
  whatsappNumber: "91XXXXXXXXXX"        // WhatsApp link in footer
};
```

## Adding a New Automation

**1. Drop the demo HTML file** into `/automations/` folder (e.g., `my_workflow.html`)

**2. Add one entry to the `AUTOMATIONS` array** in `script.js`:

```javascript
{
  id: "my-workflow",                    // Unique slug (kebab-case)
  name: "My Workflow Name",             // Card heading
  tagline: "One-line description of what it does.",  // Subtitle under name
  embed: "automations/my_workflow.html", // Path to demo file
  pricing: {
    price: "Setup Rs 10,000 + Rs 1,500/month",  // Pricing display
    includes: [                               // Bullet points (3-5 items)
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description",
      "Feature 4 description",
      "Feature 5 description"
    ]
  }
}
```

**3. That's it!** The card, iframe, lazy-loading, and pricing block appear automatically.

### Automation Object Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (kebab-case), used for CSS/JS hooks |
| `name` | Yes | Display name in card header |
| `tagline` | Yes | One-sentence description under the name |
| `embed` | Yes | Relative path to demo HTML in `/automations/` |
| `pricing.price` | Yes | Price string (shown with gradient text) |
| `pricing.includes` | Yes | Array of 3-5 feature strings |

## Deploying

### Netlify
1. Push to GitHub/GitLab/Bitbucket
2. Connect repo in Netlify
3. Build command: *(leave empty)*
4. Publish directory: `.` (root)
5. Deploy!

### Vercel
```bash
npx vercel --prod
```
Or connect repo in Vercel dashboard — auto-detects static site.

### Any Static Host
Upload all files (including `/automations/` folder) to your host. Works on:
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Apache/Nginx
- Shared hosting (FTP)

## Customizing Design

All design tokens are CSS custom properties in `style.css` under `:root`:

```css
:root {
  --bg: #f3f5fb;           /* Page background */
  --card: rgba(255,255,255,.9);  /* Card background */
  --card-border: #dde3f0;  /* Card border */
  --text: #0f172a;         /* Primary text */
  --text-muted: #64748b;   /* Secondary text */
  --accent: #4f46e5;       /* Primary brand color (indigo) */
  --accent-gradient: linear-gradient(135deg, #4f46e5, #ec4899); /* Heading/button gradient */
  --coral: #ff6d5a;        /* n8n coral accent */
  --good: #059669;         /* Success green */
  --radius: 20px;          /* Card border radius */
  --shadow-lg: 0 20px 40px -20px rgba(15,23,42,.35);
}
```

Dark mode colors are defined in `@media (prefers-color-scheme: dark)`.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses modern CSS (custom properties, `color-mix()`, `clamp()`) and IntersectionObserver. No polyfills needed for modern browsers.

## Performance

- **~15 KB** total (HTML + CSS + JS gzipped)
- **No render-blocking** resources
- **Lazy-loaded iframes** — demos don't load until visible
- **System font stack** — zero font downloads
- **No external dependencies**

## License

MIT — Use freely for your agency or client work.

---

Built for **n8n_aivatika.com** • Questions? [hello@n8n_aivatika.com](mailto:hello@n8n_aivatika.com)