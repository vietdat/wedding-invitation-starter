import Image from "next/image";
import { weddingData } from "@/lib/wedding-data";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import RsvpForm from "@/components/RsvpForm";
import VenueMap from "@/components/VenueMap";

export default function Home() {
  const { groom, bride } = weddingData;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-blush-50 px-4 py-20 text-center sm:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
          Thiệp cưới online
        </p>
        <h1 className="mt-4 font-serif text-5xl font-bold text-neutral-800 sm:text-7xl">
          {weddingData.heroTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
          {weddingData.heroSubtitle}
        </p>
        <p className="mt-6 font-serif text-xl text-neutral-800">
          {weddingData.dateDisplay} &middot; {weddingData.timeDisplay}
        </p>
        <div className="mt-10">
          <Countdown targetISO={weddingData.dateISO} />
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#rsvp"
            className="rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-gold-600"
          >
            Xác nhận tham dự
          </a>
          <a
            href="#album"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-neutral-200 transition hover:bg-blush-50"
          >
            Xem album ảnh
          </a>
        </div>
      </section>

      {/* Couple */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <p className="text-xs uppercase tracking-widest text-gold-600">
          Cô dâu &amp; Chú rể
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-blush-50 p-8 ring-1 ring-blush-100">
            <p className="text-xs uppercase tracking-widest text-neutral-500">Chú rể</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-neutral-800">
              {groom.shortName}
            </h2>
            <p className="mt-1 text-neutral-600">{groom.fullName}</p>
          </div>
          <div className="rounded-2xl bg-blush-50 p-8 ring-1 ring-blush-100">
            <p className="text-xs uppercase tracking-widest text-neutral-500">Cô dâu</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-neutral-800">
              {bride.shortName}
            </h2>
            <p className="mt-1 text-neutral-600">{bride.fullName}</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-left text-neutral-600">
          {weddingData.story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-blush-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-bold text-neutral-800 sm:text-4xl">
            Chương trình ngày cưới
          </h2>
          <ol className="mt-10 space-y-4">
            {weddingData.schedule.map((item) => (
              <li
                key={item.time}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-blush-100"
              >
                <span className="shrink-0 rounded-full bg-gold-500 px-3 py-1 text-sm font-bold text-white">
                  {item.time}
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-800">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section id="album" className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <h2 className="text-center font-serif text-3xl font-bold text-neutral-800 sm:text-4xl">
          Album ảnh
        </h2>
        <p className="mt-3 text-center text-sm text-neutral-500">
          Ảnh mẫu từ Unsplash — hãy thay bằng ảnh của cô dâu, chú rể trong{" "}
          <code className="rounded bg-blush-100 px-1 py-0.5 text-xs">
            lib/wedding-data.ts
          </code>
          .
        </p>
        <div className="mt-10">
          <Gallery photos={weddingData.gallery} />
        </div>
      </section>

      {/* Venue */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:pb-20">
        <VenueMap
          name={weddingData.venue.name}
          address={weddingData.venue.address}
          mapsUrl={weddingData.venue.mapsUrl}
        />
      </section>

      {/* RSVP */}
      <section id="rsvp" className="bg-blush-50 px-4 py-16 sm:py-20">
        <h2 className="text-center font-serif text-3xl font-bold text-neutral-800 sm:text-4xl">
          Xác nhận tham dự
        </h2>
        <p className="mt-3 text-center text-neutral-600">
          Vui lòng gửi xác nhận trước ngày cưới để chúng mình sắp xếp đón tiếp chu đáo.
        </p>
        <div className="mt-10">
          <RsvpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 text-center">
        <p className="text-sm text-neutral-600">{weddingData.footerNote}</p>
        <p className="mt-4 text-xs text-neutral-400">
          Mẫu thiệp cưới online — template demo, dữ liệu mẫu. Được xây dựng từ
          template{" "}
          <span className="font-semibold">wedding-invitation-starter</span>{" "}
          của Lê Viết Đạt (Studio Dtek,{" "}
          <a
            href="https://thiepmoi.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-neutral-600"
          >
            thiepmoi.digital
          </a>
          ).
        </p>
      </footer>
    </main>
  );
}
