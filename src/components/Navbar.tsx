"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-surface/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-[var(--container-max-w)]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-surface font-serif italic font-bold group-hover:bg-accent transition-colors">
            P
          </div>
          <span className="font-serif text-xl font-medium tracking-tight text-primary">
            Premium Physio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Our Approach", "Testimonials", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-surface shadow-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-64 border-t border-gray-100" : "max-h-0"
          }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {["Services", "Our Approach", "Testimonials", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary py-2 border-b border-gray-50 last:border-0"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}
