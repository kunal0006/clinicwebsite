"use client";

import { useState } from "react";

export default function BookingManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  // Form State
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep(); // Go to success step
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => setStep(1), 300); // Reset after animation
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-primary text-surface px-6 py-4 rounded-full shadow-xl font-medium tracking-wide hover:bg-primary-dark hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <span>Book Consultation</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-surface w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="font-serif text-2xl text-primary">Book an Appointment</h2>
              <button onClick={close} className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              {/* Progress indicator */}
              {step < 4 && (
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full ${step >= i ? "bg-accent" : "bg-gray-200"}`} />
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-medium mb-4">Select Service</h3>
                  <div className="space-y-3">
                    {["Initial Physiotherapy Assessment", "Follow-up Treatment", "Sports Massage", "Post-Op Rehab"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setService(s)}
                        className={`w-full text-left p-4 rounded-xl border ${service === s ? "border-primary bg-primary/5 text-primary" : "border-gray-200 hover:border-accent hover:bg-gray-50"} transition-all duration-200`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-medium mb-4">Date & Time</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Select Date</label>
                      <input
                        type="date"
                        value={date} onChange={(e) => setDate(e.target.value)}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Select Time</label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((t) => (
                          <button
                            key={t}
                            onClick={() => setTime(t)}
                            className={`p-2 text-sm rounded-lg border ${time === t ? "bg-primary text-surface border-primary" : "border-gray-200 hover:border-accent"} transition-colors`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-medium mb-4">Your Details</h3>
                  <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                      <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                      <input required type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                      <input required type="tel" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                  </form>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-primary mb-2">Request Confirmed</h3>
                  <p className="text-gray-600">Thank you, {name || "there"}. We&apos;ll see you for your {service} on {date} at {time}. We&apos;ve sent an email with the details.</p>
                  <button onClick={close} className="mt-8 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
                    Close
                  </button>
                </div>
              )}
            </div>

            {step < 4 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center">
                {step > 1 ? (
                  <button onClick={prevStep} className="text-gray-500 hover:text-gray-800 font-medium px-4 py-2 transition-colors">
                    Back
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <button
                    onClick={nextStep}
                    disabled={step === 1 ? !service : !(date && time)}
                    className="bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-surface px-8 py-3 rounded-full font-medium transition-all"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="booking-form"
                    className="bg-accent hover:bg-accent-light text-surface px-8 py-3 rounded-full font-medium transition-all"
                  >
                    Confirm Booking
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
