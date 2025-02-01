import { AuthForm } from "@/components/AuthForm";
import { FeaturedArtworks } from "@/components/FeaturedArtworks";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow">
            Mement Art Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the convergence of traditional artistry and contemporary vision
          </p>
          <AuthForm />
        </div>
      </section>

      {/* Featured Artworks */}
      <FeaturedArtworks />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Mement Art Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;