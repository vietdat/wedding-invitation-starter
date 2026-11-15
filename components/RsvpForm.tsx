"use client";

import { useState } from "react";
import type { FormEvent } from "react";

// Demo-only RSVP form: it stores nothing and sends nothing anywhere.
// The confirmation is shown locally in the browser, so the template works
// without any backend, database or API key.
export default function RsvpForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("yes");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-blush-50 p-8 text-center ring-1 ring-blush-100">
        <p className="font-serif text-2xl font-bold text-neutral-800">
          Cảm ơn {name || "bạn"}!
        </p>
        <p className="mt-2 text-neutral-600">
          {attending === "yes"
            ? "Chúng mình rất vui vì bạn sẽ đến chung vui. Hẹn gặp bạn trong ngày cưới!"
            : "Cảm ơn bạn đã gửi lời chúc. Chúng mình sẽ chia sẻ hình ảnh ngày cưới với bạn sau nhé!"}
        </p>
        <p className="mt-4 text-xs text-neutral-400">
          (Bản demo: thông tin chỉ hiển thị trên trình duyệt của bạn, không được gửi đi đâu.)
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold-600 underline underline-offset-4 hover:text-gold-500"
        >
          Gửi lại lời chúc khác
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blush-100 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="rsvp-name" className="mb-1 block text-sm font-semibold text-neutral-700">
            Họ và tên của bạn
          </label>
          <input
            id="rsvp-name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ví dụ: Nguyễn Văn A"
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-800 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30"
          />
        </div>

        <div>
          <span className="mb-1 block text-sm font-semibold text-neutral-700">
            Bạn có tham dự được không?
          </span>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-neutral-700">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
                className="accent-gold-500"
              />
              Có, mình sẽ đến
            </label>
            <label className="flex items-center gap-2 text-sm text-neutral-700">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={attending === "no"}
                onChange={() => setAttending("no")}
                className="accent-gold-500"
              />
              Tiếc là mình không đến được
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="rsvp-guests" className="mb-1 block text-sm font-semibold text-neutral-700">
            Số người đi cùng bạn
          </label>
          <select
            id="rsvp-guests"
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30"
          >
            <option value="1">Chỉ mình tôi</option>
            <option value="2">2 người</option>
            <option value="3">3 người</option>
            <option value="4">4 người trở lên</option>
          </select>
        </div>

        <div>
          <label htmlFor="rsvp-message" className="mb-1 block text-sm font-semibold text-neutral-700">
            Lời chúc gửi tới cô dâu, chú rể
          </label>
          <textarea
            id="rsvp-message"
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Chúc hai bạn trăm năm hạnh phúc..."
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-800 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-gold-600"
        >
          Gửi xác nhận
        </button>
      </div>
    </form>
  );
}
