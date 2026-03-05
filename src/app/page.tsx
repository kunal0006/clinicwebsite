import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-l-[100px] -z-10 transform translate-x-1/4" />

        <div className="container mx-auto px-6 md:px-12 max-w-[var(--container-max-w)] z-10 grid md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-primary-dark text-sm font-medium tracking-wide">
              Elevate Your Well-being
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight">
              Premium Physiotherapy in <span className="italic">Metropolis</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-light max-w-lg leading-relaxed">
              Experience bespoke care designed to restore your movement, alleviate pain, and enhance your quality of life in a tranquil environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services" className="bg-primary hover:bg-primary-dark text-surface px-8 py-4 rounded-full font-medium text-center transition-all duration-300">
                Explore Services
              </a>
              <a href="#our-approach" className="bg-transparent border border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-full font-medium text-center transition-all duration-300">
                Our Approach
              </a>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="absolute inset-0 bg-accent/30 mix-blend-multiply z-10" />
            <img
              src="/hero_clinic_room.png"
              alt="Physiotherapy treatment room"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12 max-w-[var(--container-max-w)]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-primary mb-6">Our Services</h2>
            <p className="text-foreground/70 font-light text-lg">
              Tailored treatments utilizing evidence-based practices to address your unique physical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Manual Therapy", description: "Hands-on techniques to mobilize joints and soft tissues to restore normal biomechanics." },
              { title: "Sports Rehabilitation", description: "Targeted programs for athletes to recover from injuries and optimize performance." },
              { title: "Post-Operative Care", description: "Guided recovery protocols following orthopedic surgeries to regain strength and mobility." },
              { title: "Ergonomic Assessment", description: "Workplace analysis to prevent repetitive strain injuries and improve posture." },
              { title: "Acupuncture", description: "Integration of modern acupuncture to relieve pain and promote natural healing." },
              { title: "Chronic Pain Management", description: "Multidisciplinary approach to managing long-term pain conditions effectively." }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-background border border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-surface transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="our-approach" className="py-24 bg-primary text-surface overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[var(--container-max-w)] grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="/holistic_approach.png"
              alt="Holistic wellness approach"
              className="object-cover w-full h-full opacity-90"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Holistic Approach to Your Recovery
            </h2>
            <p className="text-surface/80 font-light text-lg leading-relaxed">
              We believe that true healing extends beyond merely treating symptoms. Our approach integrates state-of-the-art physiotherapy with a holistic understanding of your body, mind, and lifestyle.
            </p>
            <ul className="space-y-6 pt-4">
              {[
                "Comprehensive Full-Body Assessments",
                "Personalized 1-on-1 Treatment Plans",
                "Focus on Long-Term Prevention",
                "Collaborative Goal Setting"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-primary-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-light text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-[var(--container-max-w)] text-center">
          <h2 className="text-4xl font-serif text-primary mb-16">Client Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Sarah Jenkins", role: "Marathon Runner", quote: "The attention to detail in my rehabilitation allowed me to return to running pain-free." },
              { name: "Michael Thorne", role: "Executive", quote: "A truly premium experience. The environment is calming and the care is exceptional." },
              { name: "Elena Rostova", role: "Dancer", quote: "They understood the specific demands of my profession and tailored my recovery perfectly." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-surface p-8 rounded-3xl shadow-sm border border-gray-50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div className="text-accent mb-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-foreground/80 font-light italic mb-8 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <h4 className="font-medium text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/50 font-light">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
