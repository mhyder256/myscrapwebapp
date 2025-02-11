import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import QuotationPage from './pages/QuotationPage';

function HomePage() {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/quote');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://example.com/recycling-video.mp4" type="video/mp4" />
        </video>
        
        <div className="container mx-auto relative z-20 container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Transform Your Metal Waste into Value
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-sftext font-medium">
              The smart way for businesses to recycle scrap metal - Simple, Digital, Rewarding
            </p>
            <button 
              className="btn-primary text-lg"
              onClick={handleGetQuote}
            >
              Get Your Quote Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Snap & Upload",
                description: "Take photos of your scrap metal. Use our AI-powered app to capture details",
                icon: "📸",
              },
              {
                title: "Get Instant Quote",
                description: "Receive professional assessment. Real-time market-based pricing",
                icon: "💰",
              },
              {
                title: "Schedule & Earn",
                description: "Book convenient pickup. Secure digital payment",
                icon: "📅",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 font-sftext">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            Why Choose MyScrap
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CurrencyDollarIcon, title: "Instant Digital Quotes" },
              { icon: TruckIcon, title: "Professional Logistics" },
              { icon: ShieldCheckIcon, title: "Secure Digital Payments" },
              { icon: ChartPieIcon, title: "Environmental Impact Tracking" },
              { icon: ChartBarIcon, title: "Business Analytics Dashboard" },
              { icon: CheckBadgeIcon, title: "Certified Recycling Process" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex items-start space-x-4 p-6 rounded-lg bg-sage/10"
              >
                <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold tracking-tight">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600 font-sftext">Business Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K</div>
              <p className="text-gray-600 font-sftext">Tons Recycled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600 font-sftext">Certified Process</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600 font-sftext">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Ready to Start Recycling?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Download for iOS
            </button>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Download for Android
            </button>
          </div>
          <p className="text-lg font-sftext">
            Or contact our business team at{" "}
            <a href="mailto:business@myscrap.com" className="underline">
              business@myscrap.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4 tracking-tight">MyScrap</h3>
              <p className="text-sm font-sftext">
                Transforming metal recycling through digital innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-tight">Company</h4>
              <ul className="space-y-2 text-sm font-sftext">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-tight">Legal</h4>
              <ul className="space-y-2 text-sm font-sftext">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-tight">Connect</h4>
              <ul className="space-y-2 text-sm font-sftext">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center font-sftext">
            © {new Date().getFullYear()} MyScrap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quote" element={<QuotationPage />} />
    </Routes>
  );
}

export default App;