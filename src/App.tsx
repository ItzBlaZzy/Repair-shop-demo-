import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Smartphone, Laptop, Tablet, Watch, ChevronRight, Star, CheckCircle2, Clock, Shield, MapPin, Phone, Mail, Facebook, Twitter, Instagram, ArrowRight, Search, User, ShoppingCart, MessageSquare, Moon, Sun, Plus, Minus, ArrowUpRight } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">F</div>
          <span className="text-xl font-bold tracking-tight">FixIt<span className="text-primary">Pro</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            onClick={() => onNavigate('booking')}
            className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Book Repair
          </button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-border p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-left py-2"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('booking');
                setIsMobileMenuOpen(false);
              }}
              className="bg-primary text-white w-full py-4 rounded-xl font-bold mt-2"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-secondary/50 pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">F</div>
            <span className="text-xl font-bold tracking-tight">FixIt<span className="text-primary">Pro</span></span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Premium device repair services with certified technicians. We bring your electronics back to life with speed and precision.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            {['Phone Repair', 'Laptop Repair', 'Tablet Repair', 'Console Repair', 'Data Recovery'].map((item) => (
              <li key={item} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-muted-foreground">
              <MapPin size={20} className="text-primary shrink-0" />
              <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Phone size={20} className="text-primary shrink-0" />
              <span>+1 (555) 000-FIXIT</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Mail size={20} className="text-primary shrink-0" />
              <span>support@fixitpro.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 FixItPro. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 glass rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h5 className="font-bold">Support Agent</h5>
                  <p className="text-xs opacity-80">Online • Usually replies in 5m</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div className="h-80 p-4 overflow-y-auto space-y-4 bg-background/50">
              <div className="bg-secondary p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                Hi there! 👋 How can we help you with your device today?
              </div>
            </div>
            <div className="p-4 border-t border-border flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm outline-none focus:ring-2 ring-primary/20"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

const StickyCTA = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
        >
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2"
          >
            Book Repair Now <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Pages ---

const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold"
          >
            <Star size={16} fill="currentColor" />
            <span>Top Rated Repair Shop in the City</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            Fast & Reliable <br />
            <span className="text-primary">Device Repair</span> <br />
            Services.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Certified technicians, same-day repairs, and a 90-day warranty. We fix phones, laptops, tablets, and more while you wait.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
            >
              Book Repair <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="bg-secondary text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/80 transition-all flex items-center justify-center"
            >
              Get Free Quote
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-8 pt-8 border-t border-border"
          >
            <div>
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm text-muted-foreground">Repairs Done</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold">99%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-sm text-muted-foreground">Google Rating</p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/repair/800/1000" 
              alt="Repairing a phone" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-10 -left-10 z-20 glass p-6 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                <Shield size={24} />
              </div>
              <div>
                <p className="font-bold">90-Day Warranty</p>
                <p className="text-xs text-muted-foreground">On all repairs</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-10 -right-10 z-20 glass p-6 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold">Same Day Fix</p>
                <p className="text-xs text-muted-foreground">Most devices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold">What We Fix</h2>
          <p className="text-muted-foreground text-lg">We specialize in a wide range of electronic repairs using high-quality parts.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Phone Repair', icon: Smartphone, desc: 'Screen, battery, and water damage repairs for iPhone & Android.' },
            { title: 'Laptop Repair', icon: Laptop, desc: 'Hardware upgrades, screen replacement, and OS troubleshooting.' },
            { title: 'Tablet Repair', icon: Tablet, desc: 'iPad and Android tablet repairs including charging ports.' },
            { title: 'Other Electronics', icon: Watch, desc: 'Smartwatches, consoles, and small home appliances.' },
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-background p-8 rounded-3xl border border-border hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.desc}</p>
              <button 
                onClick={() => onNavigate('services')}
                className="text-primary font-bold flex items-center gap-2 group"
              >
                Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-muted-foreground text-lg">Getting your device fixed has never been easier.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
          
          {[
            { step: '01', title: 'Book Online', desc: 'Schedule your repair in less than 2 minutes through our website.' },
            { step: '02', title: 'We Fix It', desc: 'Bring it in or mail it. Our experts handle the rest with precision.' },
            { step: '03', title: 'You Enjoy', desc: 'Get your device back like new with our 90-day peace of mind warranty.' },
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl shadow-primary/30">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-white rounded-[3rem] mx-6 my-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Trusted by Thousands of Happy Customers.</h2>
            <p className="text-white/70 text-lg">Don't just take our word for it. See what our customers have to say about our premium repair services.</p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"><ChevronRight size={24} className="rotate-180" /></button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"><ChevronRight size={24} /></button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Sarah Johnson', role: 'iPhone 14 Pro User', text: 'Fixed my cracked screen in 30 minutes. Looks brand new! Highly recommend FixItPro.' },
              { name: 'Mark Wilson', role: 'MacBook Pro Owner', text: 'Professional service and fair pricing. They saved my data when my laptop wouldn\'t boot.' },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="italic text-lg">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our repair process.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'How long does a typical repair take?', a: 'Most phone repairs (screens, batteries) take 30-60 minutes. Laptops and more complex issues usually take 24-48 hours.' },
              { q: 'Do you offer a warranty on repairs?', a: 'Yes! We provide a 90-day warranty on all parts and labor. If the same issue recurs, we fix it for free.' },
              { q: 'Do I need to book an appointment?', a: 'Walk-ins are welcome, but booking online guarantees your spot and ensures we have the parts ready for you.' },
              { q: 'Will I lose my data during repair?', a: 'We always recommend backing up your data, but most hardware repairs (like screens) do not affect your data.' },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden">
                <button className="w-full p-6 text-left font-bold flex justify-between items-center hover:bg-secondary/50 transition-colors">
                  {item.q}
                  <Plus size={20} />
                </button>
                <div className="px-6 pb-6 text-muted-foreground">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto bg-secondary/50 p-12 md:p-20 rounded-[3rem] space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Fix Your Device?</h2>
          <p className="text-xl text-muted-foreground">Join 10,000+ satisfied customers and get your device back in top shape today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl shadow-primary/20"
            >
              Book Your Repair
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-background border border-border px-10 py-5 rounded-full font-bold text-xl hover:bg-secondary transition-all"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const services = [
    {
      category: 'Phone Repair',
      items: [
        { name: 'Screen Replacement', price: '$79 - $299', time: '45 mins', desc: 'Original quality displays for iPhone, Samsung, and Pixel.' },
        { name: 'Battery Replacement', price: '$49 - $89', time: '30 mins', desc: 'Restore your device\'s battery life to 100% capacity.' },
        { name: 'Charging Port Fix', price: '$59 - $99', time: '60 mins', desc: 'Fix loose connections or broken charging pins.' },
      ]
    },
    {
      category: 'Laptop Repair',
      items: [
        { name: 'Screen Repair', price: '$129 - $399', time: '1-2 days', desc: 'LCD/OLED replacement for MacBook, Dell, HP, and more.' },
        { name: 'Keyboard Replacement', price: '$89 - $199', time: '2-3 hours', desc: 'Fix sticky or non-responsive keys on any laptop model.' },
        { name: 'SSD/RAM Upgrade', price: '$99 - $249', time: 'Same day', desc: 'Boost your laptop speed with faster storage and memory.' },
      ]
    },
    {
      category: 'Tablet Repair',
      items: [
        { name: 'iPad Screen Fix', price: '$99 - $349', time: '1 day', desc: 'Cracked glass or digitizer replacement for all iPad models.' },
        { name: 'Battery Service', price: '$69 - $129', time: '2 hours', desc: 'New batteries for iPad and Android tablets.' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">Professional repair solutions for all your favorite gadgets. We use premium parts and offer a 90-day warranty.</p>
        </div>

        <div className="space-y-24">
          {services.map((cat, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full" />
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, j) => (
                  <div key={j} className="bg-secondary/30 p-8 rounded-3xl border border-border flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">{item.time}</span>
                      </div>
                      <p className="text-muted-foreground mb-6">{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <span className="font-bold text-lg">{item.price}</span>
                      <button 
                        onClick={() => onNavigate('booking')}
                        className="text-primary font-bold hover:underline"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: 'Phone',
    issue: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-20 section-padding flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass p-12 rounded-[2.5rem] text-center space-y-6"
        >
          <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto shadow-xl shadow-accent/20">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold">Booking Confirmed!</h2>
          <p className="text-muted-foreground">Thank you, {formData.name}. We've sent a confirmation email to {formData.email}. See you on {formData.date} at {formData.time}!</p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold">Book Your Repair</h1>
            <p className="text-xl text-muted-foreground">Fill out the form to schedule your repair. Our team will have the parts ready for your arrival.</p>
            
            <div className="space-y-6">
              {[
                { icon: Clock, title: 'Save Time', desc: 'Skip the queue with a guaranteed slot.' },
                { icon: Shield, title: 'Expert Care', desc: 'Assigned to our best certified technician.' },
                { icon: CheckCircle2, title: 'No Upfront Cost', desc: 'Pay only after the repair is complete.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/30 p-8 md:p-12 rounded-[2.5rem] border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Device Type</label>
                <select 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20"
                  value={formData.deviceType}
                  onChange={(e) => setFormData({...formData, deviceType: e.target.value})}
                >
                  <option>Phone</option>
                  <option>Laptop</option>
                  <option>Tablet</option>
                  <option>Smartwatch</option>
                  <option>Console</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">What's the issue?</label>
                <textarea 
                  required
                  placeholder="Describe the problem..." 
                  rows={3}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20"
                  value={formData.issue}
                  onChange={(e) => setFormData({...formData, issue: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Preferred Time</label>
                  <input 
                    required
                    type="time" 
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-5xl font-bold">Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">No hidden fees. We provide upfront quotes before starting any repair.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Basic Repairs', price: '49', features: ['Battery Replacement', 'Charging Port Fix', 'Button Repair', 'Software Cleanup', '90-Day Warranty'] },
            { title: 'Standard Repairs', price: '99', features: ['Screen Replacement', 'Camera Repair', 'Speaker Fix', 'Water Damage Diagnostic', '90-Day Warranty'], popular: true },
            { title: 'Complex Repairs', price: '199', features: ['Logic Board Repair', 'Data Recovery', 'GPU/CPU Reflow', 'Full Housing Swap', '90-Day Warranty'] },
          ].map((plan, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border ${plan.popular ? 'bg-primary text-white border-primary shadow-2xl scale-105' : 'bg-secondary/30 border-border'} flex flex-col`}>
              <div className="mb-8">
                {plan.popular && <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 inline-block">MOST POPULAR</span>}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium">Starting from</span>
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className={plan.popular ? 'text-white' : 'text-primary'} />
                    <span className={plan.popular ? 'text-white/80' : 'text-muted-foreground'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-white hover:opacity-90'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">Our Story.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2015, FixItPro started as a small local shop with one goal: to provide high-quality, honest electronic repairs. Today, we are the city's most trusted repair center, having fixed over 10,000 devices.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that electronics should be repaired, not replaced. Our mission is to extend the life of your devices, reducing e-waste while saving you money.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-primary">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">15</p>
                <p className="text-muted-foreground">Certified Techs</p>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/team/800/800" alt="Our workshop" className="w-full h-auto" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Meet the Experts</h2>
          <p className="text-muted-foreground">Our team of certified technicians is here to help.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Alex Rivera', role: 'Lead Technician', img: 'https://picsum.photos/seed/alex/400/400' },
            { name: 'Jessica Chen', role: 'Phone Specialist', img: 'https://picsum.photos/seed/jess/400/400' },
            { name: 'David Miller', role: 'Laptop Expert', img: 'https://picsum.photos/seed/david/400/400' },
            { name: 'Sofia Lopez', role: 'Customer Success', img: 'https://picsum.photos/seed/sofia/400/400' },
          ].map((member, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-square mb-4">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">Have a question? We're here to help. Reach out to us via any of the channels below.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 000-FIXIT</p>
                  <p className="text-sm text-primary font-medium mt-1">Mon - Sat: 9am - 7pm</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">support@fixitpro.com</p>
                  <p className="text-sm text-primary font-medium mt-1">24/7 Online Support</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Tech Avenue, Silicon Valley, CA 94025</p>
                  <p className="text-sm text-primary font-medium mt-1">Free Parking Available</p>
                </div>
              </div>
            </div>

            <div className="h-64 bg-secondary rounded-[2.5rem] overflow-hidden border border-border relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <MapPin size={40} className="opacity-20" />
                <span className="ml-2 font-medium">Map View Placeholder</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-8 md:p-12 rounded-[2.5rem] border border-border">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Message</label>
                <textarea placeholder="Your message..." rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" />
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'services': return <ServicesPage onNavigate={setCurrentPage} />;
      case 'booking': return <BookingPage />;
      case 'pricing': return <PricingPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar onNavigate={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
      <LiveChat />
      <StickyCTA onNavigate={setCurrentPage} />

      {/* Repair Status Tracker Widget (Extra Feature) */}
      <div className="fixed bottom-24 left-6 z-40 hidden lg:block">
        <div className="glass p-6 rounded-2xl shadow-xl w-64 space-y-4">
          <h5 className="font-bold text-sm flex items-center gap-2">
            <Search size={16} className="text-primary" />
            Track Your Repair
          </h5>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Order ID" 
              className="w-full bg-secondary rounded-lg px-3 py-2 text-xs outline-none"
            />
            <button className="bg-primary text-white p-2 rounded-lg"><ArrowRight size={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
