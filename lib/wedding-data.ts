// ---------------------------------------------------------------------------
// Sample wedding data — ALL FAKE, for demo purposes only.
// To use this template for a real wedding, edit ONLY this file:
// change the names, date, venue, photos and story below.
// No real client data, no prices and no API keys belong in this repo.
// ---------------------------------------------------------------------------

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export const weddingData = {
  groom: {
    shortName: "Minh",
    fullName: "Trần Quốc Minh",
  },
  bride: {
    shortName: "Lan",
    fullName: "Nguyễn Thu Lan",
  },

  // ISO date with Vietnam timezone. The countdown counts down to this.
  // Sample date: Sunday, 17 January 2027, 09:00 (GMT+7).
  dateISO: "2027-01-17T09:00:00+07:00",
  dateDisplay: "Chủ Nhật, 17 tháng 01, 2027",
  timeDisplay: "09:00",

  heroTitle: "Minh & Lan",
  heroSubtitle: "Trân trọng kính mời bạn đến dự lễ cưới của chúng mình",

  story: [
    "Minh và Lan gặp nhau lần đầu vào một buổi chiều mưa ở Sài Gòn, khi cả hai cùng trú mưa dưới một mái hiên nhỏ. Một câu chào bâng quơ hôm đó đã mở đầu cho rất nhiều buổi cà phê, những chuyến đi và những lần cười không dứt.",
    "Sau nhiều năm đồng hành, chúng mình quyết định viết tiếp câu chuyện này — cùng nhau, trước sự chứng kiến của gia đình và bạn bè.",
  ],

  // Sample photos from Unsplash (free stock photos, NOT real clients).
  // Replace these URLs with the couple's own photos.
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      alt: "Sample photo: wedding couple",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      alt: "Sample photo: wedding ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      alt: "Sample photo: wedding rings",
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
      alt: "Sample photo: bride and groom",
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      alt: "Sample photo: bride",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      alt: "Sample photo: happy couple",
    },
  ] as GalleryPhoto[],

  schedule: [
    {
      time: "09:00",
      title: "Đón khách",
      description: "Chào đón gia đình và bạn bè, chụp ảnh lưu niệm.",
    },
    {
      time: "09:30",
      title: "Lễ cưới",
      description: "Nghi thức cưới và lời chúc phúc của hai bên gia đình.",
    },
    {
      time: "10:30",
      title: "Tiệc mừng",
      description: "Dùng tiệc và chung vui cùng cô dâu, chú rể.",
    },
    {
      time: "12:00",
      title: "Tiễn khách",
      description: "Cảm ơn quý khách đã đến chung vui.",
    },
  ] as ScheduleItem[],

  venue: {
    // Sample venue — replace with the real venue.
    name: "Trung tâm tiệc cưới Riverside (địa điểm mẫu)",
    address: "123 Đường Hoa Hồng, Quận 1, TP. Hồ Chí Minh (địa chỉ mẫu)",
    mapsUrl: "https://maps.google.com/?q=Ho+Chi+Minh+City",
  },

  footerNote: "Minh & Lan — rất mong được đón tiếp bạn trong ngày vui của chúng mình.",
};
