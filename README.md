# wedding-invitation-starter

A free, open-source **Next.js template for online wedding invitations**.

Clone it, change the couple's data in one file, deploy — and you have a
beautiful, mobile-friendly wedding invitation website with a countdown,
photo album, schedule, venue map and an RSVP form.

> **Sample data only.** The couple "Minh & Lan", the date, the venue and the
> photos in this repo are all fake placeholders. There is no real client
> data, no pricing and no API key in this repository.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## Demo

Run it locally (see below) — the homepage is the demo. A live demo link
will be added here after the first deploy (e.g. Cloudflare Pages / Vercel).

## Features

- 💍 Hero section with the couple's names and wedding date
- ⏳ Live countdown to the wedding day
- 👰🤵 Bride & groom cards and a short love story
- 🗓️ Wedding-day schedule timeline
- 📸 Photo album (sample photos from Unsplash — replace with your own)
- 📍 Venue card with a Google Maps link
- ✉️ RSVP form (front-end demo only — it stores and sends nothing, so the
  template works without any backend, database or API key)
- 📱 Fully responsive, Vietnamese-first UI

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/)
- No database, no backend, no third-party API key required

## Getting started

Requirements: Node.js 18+ and npm.

```bash
# 1. Clone the repo
git clone https://github.com/vietdat/wedding-invitation-starter.git
cd wedding-invitation-starter

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:

```bash
npm run build
npm run start
```

## Make it yours

**Edit only one file: `lib/wedding-data.ts`.** Everything on the page —
names, date, story, schedule, venue, photos — comes from that file.

```ts
// lib/wedding-data.ts
export const weddingData = {
  groom: { shortName: "Minh", fullName: "Trần Quốc Minh" },
  bride: { shortName: "Lan", fullName: "Nguyễn Thu Lan" },
  dateISO: "2027-01-17T09:00:00+07:00",
  dateDisplay: "Chủ Nhật, 17 tháng 01, 2027",
  // ... venue, gallery, schedule, story
};
```

1. Replace the names, date and story with the real couple's info.
2. Replace the `gallery` URLs with the couple's own photos (or put images
   in `public/` and reference them as `/ten-anh.jpg`).
3. Replace the venue name, address and Google Maps link.
4. (Optional) Change the colours in `tailwind.config.ts` (`blush` / `gold`).

The RSVP form is a front-end demo. To collect real RSVPs, connect the
`onSubmit` handler in `components/RsvpForm.tsx` to your own backend,
Google Form, or form service of choice.

## Project structure

```
wedding-invitation-starter/
├── app/
│   ├── layout.tsx        # Page metadata (title, description, Open Graph)
│   ├── page.tsx          # The invitation page (hero, story, album, RSVP)
│   └── globals.css       # Tailwind + a few base styles
├── components/
│   ├── Countdown.tsx     # Live countdown to the wedding day
│   ├── Gallery.tsx       # Photo album grid
│   ├── RsvpForm.tsx      # Demo RSVP form (no backend)
│   └── VenueMap.tsx      # Venue card with Google Maps link
├── lib/
│   └── wedding-data.ts   # ★ Edit this file — all content lives here
├── public/               # Static files (put the couple's photos here)
├── LICENSE               # MIT
└── README.md
```

## Contributing

Issues and pull requests are welcome — especially new sections (e.g. a
gift / mừng cưới section, a music toggle, or more colour themes). Please
keep sample data fake and never commit real client data, credentials or
API keys.

## License

MIT — see [LICENSE](LICENSE). Copyright © 2026 Lê Viết Đạt.

---

## Tóm tắt tiếng Việt

**wedding-invitation-starter** là template thiệp cưới online miễn phí, mã
nguồn mở, viết bằng Next.js 14 + React 18 + Tailwind CSS. Clone về, sửa
duy nhất file `lib/wedding-data.ts` (tên cô dâu chú rể, ngày cưới, địa
điểm, ảnh, lịch trình) là có ngay một trang thiệp cưới đẹp, có đếm ngược,
album ảnh, bản đồ và form xác nhận tham dự (RSVP demo, không cần backend).

Toàn bộ dữ liệu trong repo là **dữ liệu mẫu giả** (cặp đôi "Minh & Lan",
ảnh Unsplash), không có dữ liệu khách thật, không có giá, không có API key.

Template được tách ra từ kinh nghiệm làm sản phẩm thật tại
[Studio Dtek — thiepmoi.digital](https://thiepmoi.digital) (thiệp mời
online & video cưới AI). Tác giả: **Lê Viết Đạt** — Founder Studio Dtek,
Ho Chi Minh City, Vietnam; nhận dự án freelance qua Upwork và Fiverr.
