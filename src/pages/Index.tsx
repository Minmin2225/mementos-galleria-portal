import { AuthForm } from "@/components/AuthForm";
import { FeaturedArtworks } from "@/components/FeaturedArtworks";
import { FeedbackForm } from "@/components/FeedbackForm";

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
            Jakol is the greates art of all
          </p>
          <AuthForm />
        </div>
      </section>

      {/* Featured Artworks */}
      <FeaturedArtworks />

      {/* Feedback Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Share Your Feedback</h2>
          <div className="flex justify-center">
            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Mement Art Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;