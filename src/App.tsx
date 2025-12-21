import React, { useState, useEffect } from 'react';
import { ArrowDown, Menu, X, Camera, Heart, Download, Lock, Sparkles, Apple } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: string }) => {
  return (
    <div
      className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full hover:border-pola-red/30"
      style={{ animationDelay: delay }}
    >
      <div className="w-16 h-16 bg-pola-red rounded-full flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-3">{title}</h3>
      <p className="text-stone-600 text-center leading-relaxed">{description}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-stone-800 selection:bg-pola-red selection:text-white">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAFAF5]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-br from-pola-cream to-stone-200 rounded-2xl flex items-center justify-center relative shadow-md border-2 border-pola-gray/30">
              <div className="w-6 h-6 bg-pola-black rounded-full border-2 border-pola-gray"></div>
              <div className="w-2 h-2 bg-pola-red rounded-full absolute top-2 right-2 shadow-sm"></div>
            </div>
            <span className={`font-serif font-bold text-xl tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              PolaMoment
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-pola-red transition-colors cursor-pointer uppercase">Features</a>
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-pola-red transition-colors cursor-pointer uppercase">About</a>
            <a href="#download" onClick={scrollToSection('download')} className="hover:text-pola-red transition-colors cursor-pointer uppercase">Download</a>
            <a
              href="/privacy.html"
              className="hover:text-pola-red transition-colors cursor-pointer uppercase"
            >
              Privacy
            </a>
            <a
              href="#download"
              onClick={scrollToSection('download')}
              className="px-5 py-2 bg-pola-black text-white rounded-full hover:bg-pola-red transition-colors shadow-sm cursor-pointer flex items-center gap-2"
            >
              <Apple size={18} />
              Get App
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAFAF5] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
          <a href="#features" onClick={scrollToSection('features')} className="hover:text-pola-red transition-colors cursor-pointer uppercase">Features</a>
          <a href="#about" onClick={scrollToSection('about')} className="hover:text-pola-red transition-colors cursor-pointer uppercase">About</a>
          <a href="#download" onClick={scrollToSection('download')} className="hover:text-pola-red transition-colors cursor-pointer uppercase">Download</a>
          <a
            href="/privacy.html"
            onClick={() => setMenuOpen(false)}
            className="hover:text-pola-red transition-colors cursor-pointer uppercase"
          >
            Privacy
          </a>
          <a
            href="#download"
            onClick={scrollToSection('download')}
            className="px-6 py-3 bg-pola-black text-white rounded-full shadow-lg cursor-pointer flex items-center gap-2"
          >
            <Apple size={20} />
            Get App
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pola-red rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-300 rounded-full blur-[120px] opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 border border-pola-red text-pola-red text-xs tracking-[0.25em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/50 shadow-sm">
            iOS • Camera App
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900">
            PolaMoment
          </h1>
          <p className="font-serif italic text-2xl md:text-4xl text-stone-600 mb-6">
            Capture the Magic
          </p>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            Transform your iPhone into a vintage Polaroid camera. Create instant memories with that iconic retro aesthetic we all love.
          </p>

          {/* Polaroid Frame Visual */}
          <div className="max-w-md mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white p-4 shadow-2xl rounded-sm">
              <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 rounded-sm mb-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,48,37,0.1)_0%,rgba(217,48,37,0.05)_50%,transparent_100%)]"></div>
                <Camera size={80} className="text-stone-400" />
              </div>
              <div className="h-16 flex items-center justify-center">
                <p className="font-serif italic text-stone-500 text-sm">Instant nostalgia in every shot</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#features" onClick={scrollToSection('features')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
              <span className="tracking-wider">EXPLORE</span>
              <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 group-hover:bg-white transition-all bg-white/50">
                <ArrowDown size={16} />
              </span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Features</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Simple. Authentic. Beautiful.</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">Everything you need to capture and share vintage-style Polaroid photos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Camera}
                title="Vintage Camera"
                description="Transform your iPhone into a classic Polaroid camera with authentic vintage filters and effects"
                delay="0s"
              />
              <FeatureCard
                icon={Sparkles}
                title="Instant Effects"
                description="Apply beautiful retro filters in real-time. See your Polaroid develop right before your eyes"
                delay="0.1s"
              />
              <FeatureCard
                icon={Download}
                title="Save & Share"
                description="Save your Polaroid-style photos to your library and share memories with friends and family"
                delay="0.2s"
              />
              <FeatureCard
                icon={Lock}
                title="Privacy First"
                description="All photos stay on your device. No cloud storage, no tracking, no data collection"
                delay="0.3s"
              />
              <FeatureCard
                icon={Heart}
                title="No Subscriptions"
                description="Pay once, use forever. No hidden fees, no monthly charges, no in-app purchases"
                delay="0.4s"
              />
              <FeatureCard
                icon={Apple}
                title="iOS Native"
                description="Built specifically for iOS with a beautiful, intuitive interface that feels right at home"
                delay="0.5s"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-pola-cream border-t border-stone-200">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">The Story</div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Nostalgia Meets Technology</h2>
                <div className="w-16 h-1 bg-pola-red mb-6"></div>
                <div className="text-lg text-stone-600 leading-relaxed space-y-4">
                  <p>
                    <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-pola-red">R</span>emember the excitement of shaking a fresh Polaroid and watching your memory slowly appear? That magic feeling of instant photography is now at your fingertips.
                  </p>
                  <p>
                    PolaMoment brings back the charm of vintage Polaroid cameras to your iPhone. Create authentic-looking instant photos with that distinctive white border, warm tones, and slightly faded aesthetic that made Polaroids so iconic.
                  </p>
                  <p>
                    Whether you're capturing moments with friends, documenting your travels, or just expressing your creativity, PolaMoment makes every photo feel special.
                  </p>
                </div>
              </div>
              <div className="relative">
                {/* Multiple Polaroid Stack Effect */}
                <div className="relative">
                  <div className="absolute top-0 left-4 w-full h-full bg-white shadow-xl rounded-sm transform rotate-3 opacity-50"></div>
                  <div className="absolute top-2 left-2 w-full h-full bg-white shadow-xl rounded-sm transform -rotate-2 opacity-70"></div>
                  <div className="relative bg-white p-5 shadow-2xl rounded-sm transform hover:rotate-0 transition-transform duration-500">
                    <div className="aspect-square bg-gradient-to-br from-pola-cream via-stone-100 to-stone-200 rounded-sm mb-5 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pola-red/10 to-transparent"></div>
                      <div className="text-center z-10">
                        <div className="w-20 h-20 bg-pola-black rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-pola-gray">
                          <Camera size={40} className="text-white" />
                        </div>
                        <p className="font-serif text-2xl text-stone-700 italic">Your Moments</p>
                      </div>
                    </div>
                    <div className="h-20 flex items-center justify-center">
                      <p className="font-serif italic text-stone-600">Timeless memories, one click away</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Highlight */}
        <section className="py-24 bg-stone-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <Lock className="w-16 h-16 mx-auto mb-6 text-pola-red" />
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Your Privacy Matters</h2>
            <p className="max-w-3xl mx-auto text-xl text-stone-300 leading-relaxed mb-8">
              We don't collect, store, or share any of your data. All photos stay on your device. No cloud storage, no analytics, no tracking. Just you and your memories.
            </p>
            <a
              href="/privacy.html"
              className="inline-block px-8 py-3 bg-white text-stone-900 rounded-full hover:bg-pola-red hover:text-white transition-colors font-medium"
            >
              Read Privacy Policy
            </a>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block mb-6 px-4 py-2 border border-pola-red text-pola-red text-xs tracking-[0.25em] uppercase font-bold rounded-full bg-pola-red/5">
              Available on iOS
            </div>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-stone-900">Start Creating Today</h2>
            <p className="max-w-2xl mx-auto text-xl text-stone-600 mb-12 leading-relaxed">
              Download PolaMoment and start capturing vintage-style Polaroid photos on your iPhone right away.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 bg-pola-black text-white rounded-full hover:bg-pola-red transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg font-medium"
            >
              <Apple size={28} />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </a>

            <p className="mt-8 text-sm text-stone-500">
              Requires iOS 14.0 or later • Compatible with iPhone
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pola-cream to-stone-200 rounded-2xl flex items-center justify-center relative shadow-md border-2 border-pola-gray/30">
                  <div className="w-6 h-6 bg-white rounded-full border-2 border-pola-gray"></div>
                  <div className="w-2 h-2 bg-pola-red rounded-full absolute top-2 right-2 shadow-sm"></div>
                </div>
                <div className="text-white font-serif font-bold text-2xl">PolaMoment</div>
              </div>
              <p className="text-sm">Vintage Polaroid camera for your iPhone</p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="mailto:privacy@polamoment.app" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-stone-800 text-xs text-stone-600">
            <p>© 2024 PolaMoment. All rights reserved.</p>
            <p className="mt-2 italic opacity-70">Making memories instant again, one photo at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
