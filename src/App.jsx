import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import React, { useState } from 'react';
import { 
  ShoppingCart, Play, Check, UserPlus, Package, Rocket, X, Zap
} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//img
import bannerImage from './assets/banner.png'; 

//  Products Data 
const productsData = [
  { id: 1, title: 'AI Writer Pro', price: 49, unit: '/mo', description: 'Advanced AI content generation tool for writers.', features: ['Unlimited words', 'SEO optimization', 'Multi-language'], tag: 'Best Seller', tagStyle: 'bg-purple-100 text-purple-600 border-purple-200', icon: "📝" },
  { id: 2, title: 'Design Suite', price: 29, unit: '/mo', description: 'Professional assets and UI kits for designers.', features: ['1000+ Icons', 'Vector export', 'Figma sync'], tag: 'Popular', tagStyle: 'bg-blue-100 text-blue-600 border-blue-200', icon: "🎨" },
  { id: 3, title: 'Photo Enhancer', price: 19, unit: '/mo', description: 'Magic upscale for low-res images using AI.', features: ['4K export', 'Batch processing', 'Face restore'], tag: 'New', tagStyle: 'bg-red-100 text-red-600 border-red-200', icon: "📷" },
  { id: 4, title: 'SEO Analyzer', price: 39, unit: '/mo', description: 'Deep scan your website for SEO improvements.', features: ['Backlink check', 'Keyword tracking', 'Competitor audit'], tag: 'Tools', tagStyle: 'bg-emerald-100 text-emerald-600 border-emerald-200', icon: "🔍" },
  { id: 5, title: 'Social Stream', price: 15, unit: '/mo', description: 'Manage all social media from one dashboard.', features: ['Auto-post', 'Analytics', 'Team access'], tag: 'Growth', tagStyle: 'bg-orange-100 text-orange-600 border-orange-200', icon: "📱" },
  { id: 6, title: 'Cloud Layer', price: 59, unit: '/mo', description: 'Secure cloud storage with version control.', features: ['Infinite history', 'Encrypted', 'Instant share'], tag: 'Storage', tagStyle: 'bg-indigo-100 text-indigo-600 border-indigo-200', icon: "☁️" },
];

const DigiToolsLanding = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); 

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      toast.info(`${product.title} already in cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.title} added to cart! 🛒`);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    toast.error("Item removed from cart.");
  };

  const handleCheckout = () => {
    setCart([]);
    setView('home');
    toast.info("Success! Thank you for your purchase.");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const steps = [
    { id: '01', title: 'Create Account', description: 'Sign up for free in seconds. No credit card required.', icon: <UserPlus className="text-purple-600" size={32} /> },
    { id: '02', title: 'Choose Products', description: 'Browse our catalog and select the tools that fit your needs.', icon: <Package className="text-purple-600" size={32} /> },
    { id: '03', title: 'Start Creating', description: 'Download and start using your premium tools immediately.', icon: <Rocket className="text-purple-600" size={32} /> },
  ];

  const pricingPlans = [
    { name: 'Starter', price: '$0', description: 'Perfect for getting started', features: ['Access to 10 free tools', 'Basic templates', 'Community support'], buttonText: 'Get Started Free', isPopular: false },
    { name: 'Pro', price: '$29', description: 'Best for professionals', features: ['Access to all premium tools', 'Unlimited templates', 'Priority support'], buttonText: 'Start Pro Trial', isPopular: true },
    { name: 'Enterprise', price: '$99', description: 'For teams and businesses', features: ['Team collaboration', 'Custom integrations', 'Dedicated support'], buttonText: 'Contact Sales', isPopular: false }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-3xl font-extrabold text-[#7C3AED] cursor-pointer" onClick={() => setView('home')}>
            DigiTools
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-slate-600">
            <button onClick={() => setView('home')} className="hover:text-[#7C3AED] transition">Products</button>
            <a href="#steps" className="hover:text-[#7C3AED] transition">Features</a>
            <a href="#pricing" className="hover:text-[#7C3AED] transition">Pricing</a>
            <a href="#testimonials" className="hover:text-[#7C3AED] transition">Testimonials</a>
            <a href="#faq" className="hover:text-[#7C3AED] transition">FAQ</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-600 hover:text-[#7C3AED] relative p-1" onClick={() => setView('cart')}>
              <ShoppingCart size={20} />
              {cart.length > 0 && <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">{cart.length}</span>}
            </button>
            <button className="text-slate-700 font-semibold text-[15px] hover:text-[#7C3AED] transition">Login</button>
            <button className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-7 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95">Get Started</button>
          </div>
        </div>
      </nav>

      {view === 'home' ? (
        <>
          {/* HERO */}
          <header className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-2.5 bg-[#EEF2FF] border border-[#E0E7FF] text-[#4338CA] px-4 py-2 rounded-full text-sm font-medium shadow-inner">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
                  </div>
                  New: AI-Powered Tools Available
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Supercharge Your <br />
                <span className="text-slate-800">Digital Workflow</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg">Explore Products</button>
                <button className="flex items-center gap-2 border border-purple-200 text-[#7C3AED] px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"><Play size={18} fill="currentColor" /> Watch Demo</button>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
                </div>
            </div>
          </header>

          {/* STATS SECTION */}
          <section className="py-20 bg-[#7C3AED] text-white">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-12 border border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm">
                <div className="md:border-r border-white/20 last:border-none">
                  <div className="text-6xl font-black mb-2 tracking-tight">50K+</div>
                  <p className="text-purple-100 font-medium text-lg">Active Users</p>
                </div>
                <div className="md:border-r border-white/20 last:border-none">
                  <div className="text-6xl font-black mb-2 tracking-tight">200+</div>
                  <p className="text-purple-100 font-medium text-lg">Premium Tools</p>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2 tracking-tight">4.9</div>
                  <p className="text-purple-100 font-medium text-lg">Rating</p>
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCTS SECTION */}
          <section id="products" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto text-center">
              <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Premium Digital Tools</h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                
                <div className="flex justify-center">
                  <div className="inline-flex items-center bg-white rounded-full p-1.5 border border-slate-100 shadow-sm">
                    <button onClick={() => setView('home')} className={`px-10 py-2.5 rounded-full text-sm font-bold transition-all ${view === 'home' ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-md' : 'text-slate-500'}`}>Products</button>
                    <button onClick={() => setView('cart')} className={`px-10 py-2.5 rounded-full text-sm font-bold transition-all ${view === 'cart' ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-md' : 'text-slate-500'}`}>Cart ({cart.length})</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {productsData.map(product => {
                  const alreadyInCart = cart.find(item => item.id === product.id);
                  return (
                    <div key={product.id} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                      <div className={`absolute top-6 right-8 px-4 py-1 rounded-full text-[10px] font-bold uppercase border ${product.tagStyle}`}>{product.tag}</div>
                      <div className="w-14 h-14 bg-purple-50 rounded-2xl mb-8 flex items-center justify-center text-3xl shadow-inner">{product.icon}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">{product.description}</p>
                      
                     
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                            <Check size={14} className="text-[#7C3AED]" /> {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="text-4xl font-bold mb-8 text-slate-900">${product.price}<span className="text-slate-400 text-lg font-medium">{product.unit}</span></div>
                      
                      <button 
                        onClick={() => addToCart(product)} 
                        className={`w-full py-4 rounded-3xl font-bold text-lg transition shadow-lg active:scale-95 ${alreadyInCart ? 'bg-emerald-500 text-white' : 'bg-[#7C3AED] text-white hover:bg-purple-700'}`}
                      >
                        {alreadyInCart ? '✓ Added' : 'Buy Now'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* STEPS SECTION */}
          <section id="steps" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get Started In 3 Steps</h2>
              <p className="text-slate-500 text-lg mb-16">Start using premium digital tools in minutes, not hours.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map(step => (
                  <div key={step.id} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-6 right-6 bg-[#7C3AED] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg">{step.id}</div>
                    <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section id="pricing" className="py-24 px-6 bg-slate-50 border-t border-purple-100">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-5 font-bold text-slate-900 mb-16">Simple, Transparent Pricing</h2>
              <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">
      Choose the perfect plan for your needs. No hidden fees, cancel anytime.
    </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`p-10 rounded-[2.5rem] border transition-all duration-300 relative ${plan.isPopular ? 'bg-[#7C3AED] text-white scale-105 shadow-2xl z-10 border-transparent' : 'bg-white text-slate-900 border-slate-200 shadow-sm hover:shadow-lg'}`}>
                    {plan.isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-extrabold px-5 py-1.5 rounded-full uppercase border-2 border-white shadow-md">Most Popular</div>}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-10 ${plan.isPopular ? 'text-purple-100' : 'text-slate-400'}`}>{plan.description}</p>
                    <div className="mb-10"><span className="text-5xl font-extrabold">{plan.price}</span><span className={`text-lg font-medium ${plan.isPopular ? 'text-purple-200' : 'text-slate-400'}`}>/mo</span></div>
                    <ul className="space-y-5 mb-10">
                      {plan.features.map((f, idx) => <li key={idx} className="flex items-center gap-3 text-[14px] font-semibold"><Check size={18} className={plan.isPopular ? 'text-white' : 'text-emerald-500'} />{f}</li>)}
                    </ul>
                    <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.isPopular ? 'bg-white text-[#7C3AED] hover:bg-slate-50' : 'bg-[#7C3AED] text-white hover:bg-purple-700'}`}>{plan.buttonText}</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        
        <section className="py-24 px-8 min-h-[60vh] bg-slate-50 text-center animate-in fade-in duration-300">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-10">Your Cart</h2>
            <div className="flex justify-center mb-12">
                <div className="inline-flex items-center bg-white border border-slate-100 rounded-full p-1.5 shadow-sm">
                  <button onClick={() => setView('home')} className="px-10 py-2.5 rounded-full text-sm font-bold text-slate-500">Products</button>
                  <button className="px-10 py-2.5 rounded-full text-sm font-bold bg-[#7C3AED] text-white shadow-lg">Cart ({cart.length})</button>
                </div>
            </div>
            {cart.length === 0 ? (
              <div className="bg-white p-16 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🛒</div>
                <h3 className="text-xl font-bold text-slate-400">Your cart is empty</h3>
                <button onClick={() => setView('home')} className="mt-6 bg-[#7C3AED] text-white px-8 py-3 rounded-full font-bold">Start Shopping</button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                      <div><h4 className="font-bold text-slate-900">{item.title}</h4><p className="text-sm text-slate-400">${item.price}</p></div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition"><X size={20} /></button>
                  </div>
                ))}
                <div className="mt-10 bg-[#7C3AED] rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
                  <div className="text-left">
                    <p className="text-purple-100 text-sm font-medium uppercase mb-1">Total Amount</p>
                    <h3 className="text-4xl font-black">${totalPrice.toFixed(2)}</h3>
                  </div>
                  <button onClick={handleCheckout} className="bg-white text-[#7C3AED] px-12 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition active:scale-95">Checkout Now</button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
{/* CTA SECTION */}
<section className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] py-24 px-6 relative overflow-hidden shadow-2xl">
  
  
  <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

  <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
      Ready To Transform Your Workflow?
    </h2>
    <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
      Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" /> 
      Start your free trial today.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <button className="bg-white text-[#7C3AED] px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-lg active:scale-95">
        Explore Products
      </button>
      <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
        View Pricing
      </button>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-purple-200 text-sm font-medium">
      <span>14-day free trial</span>
      <span className="hidden md:block">•</span>
      <span>No credit card required</span>
      <span className="hidden md:block">•</span>
      <span>Cancel anytime</span>
    </div>
  </div>
</section>
      {/* FOOTER */}

<footer className="bg-[#0B1221] text-white pt-20 pb-10 px-6 md:px-12 border-t border-slate-900">
  <div className="max-w-7xl mx-auto">
  
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
     
      <div className="md:col-span-4 space-y-6 text-left">
        <h2 className="text-4xl font-bold tracking-tight">DigiTools</h2>
        <p className="text-slate-400 text-[15px] leading-relaxed max-w-xs">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

   
      <div className="md:col-span-2 text-left">
        <h4 className="text-[17px] font-semibold mb-7">Product</h4>
        <ul className="space-y-4 text-slate-400 text-[15px]">
          <li><a href="#" className="hover:text-white transition">Features</a></li>
          <li><a href="#" className="hover:text-white transition">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition">Templates</a></li>
          <li><a href="#" className="hover:text-white transition">Integrations</a></li>
        </ul>
      </div>

      <div className="md:col-span-2 text-left">
        <h4 className="text-[17px] font-semibold mb-7">Company</h4>
        <ul className="space-y-4 text-slate-400 text-[15px]">
          <li><a href="#" className="hover:text-white transition">About</a></li>
          <li><a href="#" className="hover:text-white transition">Blog</a></li>
          <li><a href="#" className="hover:text-white transition">Careers</a></li>
          <li><a href="#" className="hover:text-white transition">Press</a></li>
        </ul>
      </div>

      <div className="md:col-span-2 text-left">
        <h4 className="text-[17px] font-semibold mb-7">Resources</h4>
        <ul className="space-y-4 text-slate-400 text-[15px]">
          <li><a href="#" className="hover:text-white transition">Documentation</a></li>
          <li><a href="#" className="hover:text-white transition">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition">Community</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <div className="md:col-span-2 text-left">
        <h4 className="text-[17px] font-semibold mb-7">Social Links</h4>
        <div className="flex gap-4">
         
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-slate-200 transition">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          </a>
         
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-slate-200 transition">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
          </a>
         
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-slate-200 transition">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
          </a>
        </div>
      </div>
    </div>

   
    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[14px]">
      <p>© 2026 Digitools. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#" className="hover:text-white transition">Cookies</a>
      </div>
    </div>
  </div>
</footer>

      <ToastContainer position="bottom-right" autoClose={2500} theme="colored" />
    </div>
  );
};

export default DigiToolsLanding;