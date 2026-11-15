export default function VenueMap({
  name,
  address,
  mapsUrl,
}: {
  name: string;
  address: string;
  mapsUrl: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-blush-100 sm:p-8">
      <p className="text-xs uppercase tracking-widest text-gold-600">Địa điểm tổ chức</p>
      <h3 className="mt-2 font-serif text-2xl font-bold text-neutral-800">
        {name}
      </h3>
      <p className="mt-2 text-neutral-600">{address}</p>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-gold-600"
      >
        Xem bản đồ &rarr;
      </a>
    </div>
  );
}
