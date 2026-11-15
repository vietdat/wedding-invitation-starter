import Image from "next/image";
import type { GalleryPhoto } from "@/lib/wedding-data";

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-blush-50 shadow-sm"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition duration-300 hover:scale-105"
            loading={index < 3 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
