import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-surface/80 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-[var(--container-max-w)] grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 lg:col-span-5">
          <Link href="/" className="flex items-center gap-2 mb-6 text-surface">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary-dark font-serif italic font-bold">
              P
            </div>
            <span className="font-serif text-2xl font-medium tracking-tight">
              Premium Physio
            </span>
          </Link>
          <p className="max-w-xs text-surface/70 leading-relaxed font-light mb-8">
            Elevating your physical well-being through expert, personalized care in a tranquil environment.
          </p>
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center text-surface/70 hover:text-surface hover:bg-surface/10 hover:border-surface/40 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center text-surface/70 hover:text-surface hover:bg-surface/10 hover:border-surface/40 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center text-surface/70 hover:text-surface hover:bg-surface/10 hover:border-surface/40 transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-3">
          <h3 className="font-serif text-xl text-surface mb-6">Contact</h3>
          <ul className="space-y-4 font-light text-surface/70">
            <li>123 Wellness Avenue<br />Suite 400<br />Metropolis, NY 10001</li>
            <li>
              <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a href="mailto:hello@premiumphysio.com" className="hover:text-accent transition-colors">
                hello@premiumphysio.com
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-4">
          <h3 className="font-serif text-xl text-surface mb-6">Hours</h3>
          <ul className="space-y-4 font-light text-surface/70">
            <li className="flex justify-between border-b border-surface/20 pb-2">
              <span>Mon - Fri</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-surface/20 pb-2">
              <span>Saturday</span>
              <span>9:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between border-surface/20 pb-2">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-[var(--container-max-w)] mt-16 pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center text-sm font-light text-surface/50">
        <p>&copy; {new Date().getFullYear()} Premium Physio. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-surface transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-surface transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
