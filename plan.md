# MadMap — Product Plan

> **Every Scan Puts MadMix on the Map.**

---

## The Big Idea

MadMap is a gamified consumer intelligence platform that transforms every MadMix packet into a source of real-world demand data.

The platform's key innovation is the **SOS ("Bring MadMix Here")** feature. If a customer cannot find a MadMix product on Blinkit, Instamart, or Zepto, they can report it directly through the website. These reports build a live demand heatmap showing where customers want MadMix but cannot buy it.

Traditional FMCG brands learn demand only after products sell. MadMap captures demand even when a sale never happens.

---

## The Problem

MadMix currently has very limited visibility into areas that drive sales and sunrise locations. The company knows sales figures but has little direct information about:

- Products frequently unavailable on quick-commerce platforms
- Pincodes that drive demand and sales
- Repeat purchase intent
- Locations with unmet demand

When customers cannot find MadMix, they purchase a competing snack instead of informing the brand. These lost sales remain **invisible**.

---

## Our Solution

MadMap creates a direct relationship between MadMix and its customers.

Every product packet contains a unique QR code customers scan after purchase to earn rewards. These scans provide valuable first-party consumer data, while the "Bring MadMix Here" feature allows users to report unavailable products. Every stockout report becomes a **demand signal** instead of a lost opportunity.

By combining QR scans, customer feedback, and unavailability reports, MadMap transforms every interaction into actionable business intelligence — enabling smarter decisions about:

- **Inventory planning** – identify stockouts before they become recurring problems
- **Distribution** – allocate products to locations with the highest unmet demand
- **Product development** – understand customer preferences
- **Marketing** – target campaigns using first-party consumer insights
- **Geographic expansion** – prioritise new cities and PIN codes based on real demand

---

## User Journey

### Scenario 1 — Purchase Flow

1. **Purchase** — Customer buys a MadMix packet containing a unique one-time QR code
2. **Scan** — Opens a landing page asking for PIN code, product purchased, purchase location (Blinkit / Instamart / Zepto / Store), product rating, and repeat purchase intent. User instantly earns loyalty points.
3. **Engage** — Encouraged to download the MadMap app for additional rewards, track points, redeem rewards, refer friends, and report unavailable products

### Scenario 2 — SOS Flow

1. **Product Unavailable** — Customer searches for MadMix on Blinkit/Instamart/Zepto or a retail store but finds it out of stock
2. **Report** — Opens MadMap and taps "Bring MadMix Here", recording: PIN code (or GPS), product unavailable, platform checked, date and time. Customer earns a small reward for the report.
3. **Action** — Reports aggregate into a live demand heatmap. MadMix uses signals to reallocate inventory, reduce stockouts, and prioritise expansion.

---

## Core Features

### QR Loyalty System
- Every packet contains a **unique one-time QR code**
- Scanning verifies genuine purchases and creates reliable first-party data
- Points awarded immediately on scan

### SOS — "Bring MadMix Here"
- Users report unavailable products in their area
- Records: PIN code, product, platform checked, timestamp
- Creates demand signals representing **lost sales**
- Unlike sales reports, captures customers who wanted to buy but couldn't

### Rewards System
Points earned for meaningful actions:
| Action | Points |
|--------|--------|
| First QR scan | 100 |
| Product review | 50 |
| SOS report | 30 |
| App download | 75 |
| Referral | 150 |
| Multiple scans (streak) | Bonus |

Rewards may include: coupons, free products, exclusive flavour launches.

### Demand Heatmap (Internal Dashboard)
SOS reports aggregate into a national demand heatmap:
- 🟢 Available
- 🟡 Low availability
- 🔴 High demand but unavailable

Allows MadMix to prioritise distribution, inventory allocation, expansion, and marketing campaigns.

### Engagement / Gamification
- Progress bar
- Streak system
- Daily Spin Wheel
- Leaderboards
- Referral rewards

---

## Design System

| Purpose | Colour | Hex |
|---------|--------|-----|
| Primary Brand | Vibrant Orange | `#F97316` |
| Secondary | Golden Yellow | `#FBBF24` |
| Accent | Fresh Green | `#22C55E` |
| Error / SOS | Warm Red | `#EF4444` |
| Background | Soft Cream | `#FFF9F2` |
| Card Background | White | `#FFFFFF` |
| Primary Text | Charcoal | `#1F2937` |
| Secondary Text | Slate Grey | `#6B7280` |

### Design Rules
- Every feature must create business value
- Keep the experience clean and intuitive
- Minimise the number of questions users answer
- Reward every meaningful interaction
- Data collection should never feel intrusive

### Animations
- Smooth page transitions
- Reward count-up animation
- Progress bar animation
- Heatmap colour transitions
- Small celebrations after rewards

---

## Tech Stack

- **Frontend / Framework**: Next.js 14 (App Router)
- **Database / Auth / Backend**: Supabase
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## MVP Roadmap

### Phase 1 (Current)
- [x] Unique QR codes
- [x] QR scan landing page
- [x] Customer feedback form (PIN, product, platform, rating)
- [x] Loyalty points
- [x] SOS reporting ("Bring MadMix Here")
- [x] Internal demand heatmap dashboard

### Phase 2
- [ ] Mobile web app (PWA)
- [ ] Rewards wallet
- [ ] Referral programme
- [ ] Product Radar ("Notify Me when back in stock")
- [ ] Personalised offers
- [ ] Streak system & leaderboards

### Phase 3
- [ ] Consumer insights dashboard
- [ ] Demand forecasting
- [ ] New flavour validation using customer feedback
- [ ] Expansion planning using historical demand data

---

## Success Metrics

- QR scan rate
- Repeat scans per customer
- App downloads
- SOS reports submitted
- Reward redemptions
- Customer retention
- Availability of MadMix products in high-demand areas

---

## Business Value

| Function | How MadMap Helps |
|----------|-----------------|
| Sales | Identify areas with repeated stock shortages |
| Marketing | Understand where demand is strongest before campaigns |
| Product Dev | Learn which flavours customers enjoy |
| Distribution | Use QR scans and SOS reports to support stocking decisions |

---

## Open Questions

- How should QR codes be printed securely?
- What is the optimal reward value to encourage repeat scans?
- Should SOS reports be rewarded with points?
- How many reports should trigger a "high-demand" area on the heatmap?
- Should Product Radar notify users when products become available again?

---

## Vision

MadMap is not simply a loyalty app.

It is a **consumer intelligence platform** that converts every MadMix packet into actionable business insight.

Every scan rewards the customer.  
Every interaction helps MadMix make smarter inventory, marketing and expansion decisions.  
**Every scan puts MadMix on the map.**
