import { Card } from "@/components/ui/card";

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Elena Rivers",
    image: "https://source.unsplash.com/random/800x600/?abstract,art",
  },
  {
    id: 2,
    title: "Urban Dreams",
    artist: "Marcus Chen",
    image: "https://source.unsplash.com/random/800x600/?modern,art",
  },
  {
    id: 3,
    title: "Nature's Whisper",
    artist: "Sarah Blake",
    image: "https://source.unsplash.com/random/800x600/?nature,art",
  },
];

export const FeaturedArtworks = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 glow">Featured Artworks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {artworks.map((artwork) => (
          <Card key={artwork.id} className="artwork-card bg-transparent">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transform translate-y-4 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100">
              <h3 className="text-xl font-semibold">{artwork.title}</h3>
              <p className="text-sm text-gray-200">{artwork.artist}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};