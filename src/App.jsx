import React, { useState } from 'react';
import { 
  ShoppingCart, Play, Search, MousePointer2, Share2, Layers, 
  Check, UserPlus, Package, Rocket, X 
} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --- ছবির ইমপোর্ট (import) করুন ---
// ছবিটি src/assets ফোল্ডারে আছে বলে এভাবে ইমপোর্ট করতে হবে।
import bannerImage from './assets/banner.png'; // আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথটি ঠিক করুন। যদি assets ফোল্ডারটি src ফোল্ডারের ভিতরে থাকে তবে './assets/banner.png' সঠিক।

// --- Products Data (৬টি কার্ডের ডাটা) ---
const productsData = [
  { id: 1, title: 'AI Writer Pro', price: 49, unit: '/mo', description: 'Advanced AI content generation tool for writers.', features: ['Unlimited words', 'SEO optimization', 'Multi-language'], tag: 'Popular', tagStyle: 'bg-purple-100 text-purple-600 border-purple-200', icon: "📝" },
  { id: 2, title: 'Design Suite', price: 29, unit: '/mo', description: 'Professional assets and UI kits for designers.', features: ['1000+ Icons', 'Vector export', 'Figma sync'], tag: 'New', tagStyle: 'bg-blue-100 text-blue-600 border-blue-200', icon: "🎨" },
  { id: 3, title: 'Photo Enhancer', price: 19, unit: '/mo', description: 'Magic upscale for low-res images using AI.', features: ['4K export', 'Batch processing', 'Face restore'], tag: 'Hot', tagStyle: 'bg-red-100 text-red-600 border-red-200', icon: "📷" },
  { id: 4, title: 'SEO Analyzer', price: 39, unit: '/mo', description: 'Deep scan your website for SEO improvements.', features: ['Backlink check', 'Keyword tracking', 'Competitor audit'], tag: 'Tools', tagStyle: 'bg-emerald-100 text-emerald-600 border-emerald-200', icon: "🔍" },
  { id: 5, title: 'Social Stream', price: 15, unit: '/mo', description: 'Manage all social media from one dashboard.', features: ['Auto-post', 'Analytics', 'Team access'], tag: 'Growth', tagStyle: 'bg-orange-100 text-orange-600 border-orange-200', icon: "📱" },
  { id: 6, title: 'Cloud Layer', price: 59, unit: '/mo', description: 'Secure cloud storage with version control.', features: ['Infinite history', 'Encrypted', 'Instant share'], tag: 'Storage', tagStyle: 'bg-indigo-100 text-indigo-600 border-indigo-200', icon: "☁️" },
];

const DigiToolsLanding = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); // 'home' or 'cart'

  // --- Cart Functions ---
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
    toast.info("Success! Thank you for your purchase.", { position: "top-center" });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // --- UI Data ---
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
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 py-5 max-w-7xl mx-auto border-b border-purple-100">
        <div 
          className="text-2xl font-bold text-purple-600 flex items-center gap-1 cursor-pointer"
          onClick={() => setView('home')}
        >
          DigiTools
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <button onClick={() => setView('home')} className="hover:text-purple-600 transition">Products</button>
          <a href="#steps" className="hover:text-purple-600 transition">Features</a>
          <a href="#pricing" className="hover:text-purple-600 transition">Pricing</a>
        </div>
        <div className="flex items-center gap-6">
          <button 
            className="text-slate-600 hover:text-purple-600 relative p-2"
            onClick={() => setView('cart')}
          >
            <ShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold border-2 border-white">
                {cart.length}
              </span>
            )}
          </button>
          <button className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-100">Get Started</button>
        </div>
      </nav>

      {view === 'home' ? (
        <>
          {/* HERO */}
          <header className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Supercharge Your <br />
                <span className="text-slate-800">Digital Workflow</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                Access premium AI tools, design assets, templates, and productivity software—all in one place.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-200">Explore Products</button>
                <button className="flex items-center gap-2 border border-purple-200 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition">
                  <Play size={18} fill="currentColor" /> Watch Demo
                </button>
              </div>
            </div>
            
            {/* ছবির সেকশন - এখানে ছবিটি ব্যবহার করা হয়েছে */}
            <div className="relative flex justify-center items-center">
                {/* এটি ছবির কন্টেইনার। শ্যাডো এবং বর্ডার দিয়ে ছবিটিকে প্রিমিয়াম লুক দেওয়া হয়েছে। */}
                <div className="w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-purple-100 border-4 border-white">
                    {/* ছবির ট্যাগ - ছবির সোর্স হিসেবে 'public' ফোল্ডারের ছবির পথ দিন */}
                    <img 
                      src={bannerImage} // ডামি ছবিটির পরিবর্তে এখানে ইমপোর্ট করা ছবিটি ব্যবহার করা হয়েছে
                      alt="Digital Workflow" 
                      className="w-full h-full object-cover" // ছবিটিকে কন্টেইনারে সুন্দর করে সেট করার জন্য
                    />
                </div>
            </div>
          </header>

          {/* PRODUCTS SECTION - ৬টি কার্ড এখানে */}
          <section id="products" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16">Premium Digital Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.map(product => {
                  const alreadyInCart = cart.find(item => item.id === product.id);
                  return (
                    <div key={product.id} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                      <div className={`absolute top-6 right-8 px-4 py-1 rounded-full text-[10px] font-bold uppercase border ${product.tagStyle}`}>{product.tag}</div>
                      <div className="w-14 h-14 bg-purple-50 rounded-2xl mb-8 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110">
                        {product.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-left text-slate-900 mb-3">{product.title}</h3>
                      <p className="text-slate-500 text-left text-sm leading-relaxed mb-8">{product.description}</p>
                      <div className="text-4xl font-bold text-left mb-8 text-slate-900">
                        ${product.price}<span className="text-slate-400 text-lg font-medium">{product.unit}</span>
                      </div>
                      <ul className="space-y-4 mb-10 text-left">
                        {product.features.map((f,i) => <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium"><Check size={18} className="text-emerald-500 stroke-[3.5px]" />{f}</li>)}
                      </ul>
                      <button 
                        onClick={() => addToCart(product)}
                        className={`w-full py-4 rounded-3xl font-bold text-lg transition shadow-lg ${alreadyInCart ? 'bg-emerald-500 text-white shadow-emerald-100' : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-100'}`}
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
              <p className="text-slate-500 text-lg mb-16">Start using premium digital tools in minutes.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map(step => (
                  <div key={step.id} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-6 right-6 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-purple-200">{step.id}</div>
                    <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* CART VIEW */
        <section className="py-24 px-8 min-h-[60vh] bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-4xl font-extrabold text-slate-900">Your Cart</h2>
                <button onClick={() => setView('home')} className="text-purple-600 font-bold hover:underline">Back to Shop</button>
            </div>
            
            {cart.length === 0 ? (
              <div className="bg-white p-16 rounded-[2.5rem] border-2 border-dashed border-slate-200 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🛒</div>
                <h3 className="text-xl font-bold text-slate-400">Your cart is empty</h3>
                <button onClick={() => setView('home')} className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-full font-bold">Start Shopping</button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-400">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
                
                <div className="mt-10 bg-purple-600 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl shadow-purple-200">
                  <div>
                    <p className="text-purple-100 text-sm font-medium uppercase tracking-wider mb-1">Total Amount</p>
                    <h3 className="text-4xl font-black">${totalPrice.toFixed(2)}</h3>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="bg-white text-purple-600 px-12 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition active:scale-95"
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 px-6 bg-slate-50 border-t border-purple-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5 font-bold text-slate-900 mb-16">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-10 rounded-[2.5rem] border transition-all duration-300 relative ${plan.isPopular ? 'bg-purple-600 text-white scale-105 shadow-2xl z-10 border-transparent' : 'bg-white text-slate-900 border-slate-200 shadow-sm hover:shadow-lg'}`}>
                {plan.isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-extrabold px-5 py-1.5 rounded-full uppercase border-2 border-white shadow-md">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2 text-left">{plan.name}</h3>
                <p className={`text-sm text-left mb-10 ${plan.isPopular ? 'text-purple-100' : 'text-slate-400'}`}>{plan.description}</p>
                <div className="mb-10 text-left">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className={`text-lg font-medium ${plan.isPopular ? 'text-purple-200' : 'text-slate-400'}`}>/mo</span>
                </div>
                <ul className="space-y-5 mb-10 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[14px] font-semibold">
                      <Check size={18} className={plan.isPopular ? 'text-white' : 'text-emerald-500'} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.isPopular ? 'bg-white text-purple-600 hover:bg-slate-50' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>{plan.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1a2a] text-white pt-20 pb-6 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-slate-800 pb-16">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-extrabold text-white">DigiTools</h2>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Premium digital tools for creators and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Product</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Social</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:bg-purple-400 transition font-bold">f</div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:bg-purple-400 transition font-bold">X</div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:bg-purple-400 transition font-bold">in</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-slate-400">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* TOAST NOTIFICATIONS */}
      <ToastContainer 
        position="bottom-right" 
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" 
      />
    </div>
  );
};

export default DigiToolsLanding;