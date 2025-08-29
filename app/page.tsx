"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">BizGen</h1>
        <nav className="space-x-6 hidden md:flex">
          <Link href="#features" className="hover:text-blue-600">Features</Link>
          <Link href="#pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="#footer" className="hover:text-blue-600">Contact</Link>
        </nav>
        <Link
          href="/signup"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
          Generate Your <span className="text-blue-600">Business Model</span> in Minutes
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Turn your raw idea into a structured, professional Business Model Canvas.
          Perfect for startups, freelancers, and entrepreneurs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/gen"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 flex items-center justify-center"
          >
            Get Started Free →
          </Link>
          <Link
            href="#pricing"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:border-blue-600 hover:text-blue-600 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-md bg-blue-50">
            <h4 className="text-xl font-semibold mb-3">1. Input Details</h4>
            <p className="text-gray-600">
              Tell us your project idea, target market, and resources.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-md bg-blue-50">
            <h4 className="text-xl font-semibold mb-3">2. AI Processing</h4>
            <p className="text-gray-600">
              Our AI creates a structured Business Model Canvas.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-md bg-blue-50">
            <h4 className="text-xl font-semibold mb-3">3. Export & Share</h4>
            <p className="text-gray-600">
              Download as PDF/Word and impress investors or partners.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="p-8 rounded-2xl shadow bg-white text-center">
            <h4 className="text-xl font-semibold">Free Plan</h4>
            <p className="text-gray-600 mt-2">1 free generation per day</p>
            <p className="text-4xl font-bold mt-4">$0</p>
            <Link
              href="/signup"
              className="mt-6 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
          {/* Pro Plan */}
          <div className="p-8 rounded-2xl shadow bg-white text-center border-2 border-blue-600">
            <h4 className="text-xl font-semibold">Pro Plan</h4>
            <p className="text-gray-600 mt-2">Unlimited generations + clean exports</p>
            <p className="text-4xl font-bold mt-4">$10<span className="text-lg font-normal">/mo</span></p>
            <Link
              href="/signup"
              className="mt-6 inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BizGen. All rights reserved.
      </footer>
    </div>
  );
}
