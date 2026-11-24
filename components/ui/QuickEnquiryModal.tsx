"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, X, Send, Calendar, Users, Phone, User, Sparkles } from "lucide-react";

export interface QuickEnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultPackage?: string;
}

export function QuickEnquiryModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  defaultPackage = "Overnight Stay",
}: QuickEnquiryModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state — concise, essential inputs only
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [stayType, setStayType] = useState(defaultPackage);
  const [isJain, setIsJain] = useState(false);

  const isControlled = typeof controlledIsOpen === "boolean";
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
    // Record dismissal in session storage to avoid auto-prompting again
    try {
      sessionStorage.setItem("beyondsands_popup_dismissed", "true");
    } catch {
      // safe fallback
    }
    // Reset submitted state slightly after closing
    setTimeout(() => setIsSubmitted(false), 300);
  };

  // Global event listener: any component can trigger with window.dispatchEvent(new CustomEvent('open-quick-enquiry'))
  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ package?: string }>;
      if (customEvent.detail?.package) {
        setStayType(customEvent.detail.package);
      }
      if (isControlled && controlledOnClose) {
        // Parent controls open state
      } else {
        setInternalIsOpen(true);
      }
    };

    window.addEventListener("open-quick-enquiry", handleOpenEvent);
    return () => window.removeEventListener("open-quick-enquiry", handleOpenEvent);
  }, [isControlled, controlledOnClose]);

  // Gentle smart timer: auto-suggest popup once per session after 18 seconds (if not already dismissed)
  useEffect(() => {
    if (isControlled) return;

    try {
      if (sessionStorage.getItem("beyondsands_popup_dismissed")) {
        return;
      }
    } catch {
      // ignore
    }

    const timer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem("beyondsands_popup_dismissed")) {
          setInternalIsOpen(true);
        }
      } catch {
        setInternalIsOpen(true);
      }
    }, 18000);

    return () => clearTimeout(timer);
  }, [isControlled]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      return;
    }

    // Prepare WhatsApp Concierge Message
    const text = encodeURIComponent(
      `*New Quick Stay Enquiry — Beyond Sands Resort*\n\n` +
      `👤 *Name:* ${name.trim()}\n` +
      `📞 *Mobile / WhatsApp:* ${phone.trim()}\n` +
      `🏖️ *Stay Type:* ${stayType}\n` +
      `📅 *Preferred Date:* ${date || "Flexible / To discuss"}\n` +
      `👥 *Guests:* ${guests}\n` +
      `🥗 *Diet:* ${isJain ? "Strict Jain (No Root Veg)" : "Pure Vegetarian"}\n\n` +
      `_Requested direct booking offer & availability for Kelva Beach, Palghar._`
    );

    // Open WhatsApp in new tab
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");

    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-enquiry-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 select-none animate-in fade-in duration-300"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#05111D]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md bg-[#091E32] text-warm-ivory rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-champagne-gold/25 overflow-hidden transition-all duration-300">
        
        {/* Subtle Luxury Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-navy-blue via-champagne-gold to-warm-ivory" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-warm-ivory/10 hover:bg-warm-ivory/20 text-warm-ivory/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-5 sm:mb-6 pr-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold text-[10px] uppercase tracking-widest font-sans font-medium mb-2">
                  <Sparkles size={11} />
                  <span>Direct Booking · Best Rate</span>
                </div>
                <h2
                  id="quick-enquiry-title"
                  className="font-display text-2xl sm:text-3xl font-medium tracking-wide text-warm-ivory"
                >
                  Quick Stay Enquiry
                </h2>
                <p className="text-warm-ivory/60 text-xs sm:text-sm font-sans mt-1">
                  Share 3 simple details to get instant room rates on WhatsApp in under 5 minutes.
                </p>
              </div>

              {/* Ultra-Short Form */}
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                
                {/* 1. Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-warm-ivory/70 mb-1 font-medium">
                      Your Name <span className="text-champagne-gold">*</span>
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-ivory/40" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rohit Sharma"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-warm-ivory/5 border border-warm-ivory/15 text-warm-ivory placeholder:text-warm-ivory/30 focus:outline-none focus:border-champagne-gold transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-warm-ivory/70 mb-1 font-medium">
                      Phone / WhatsApp <span className="text-champagne-gold">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-ivory/40" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-warm-ivory/5 border border-warm-ivory/15 text-warm-ivory placeholder:text-warm-ivory/30 focus:outline-none focus:border-champagne-gold transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Package / Stay Type Pills */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-warm-ivory/70 mb-1.5 font-medium">
                    Select Stay Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Overnight Stay",
                      "1-Day Picnic",
                      "Family AC Room",
                      "Group / Event",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setStayType(item)}
                        className={`py-2 px-2.5 rounded-xl text-center text-xs transition-all cursor-pointer border ${
                          stayType === item
                            ? "bg-champagne-gold text-deep-navy border-champagne-gold font-semibold shadow-sm"
                            : "bg-warm-ivory/5 text-warm-ivory/80 border-warm-ivory/10 hover:border-warm-ivory/25"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Check-in Date & Number of Guests in one compact row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-warm-ivory/70 mb-1 font-medium">
                      Check-in Date
                    </label>
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-ivory/40 pointer-events-none" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-9 pr-2 py-2.5 rounded-xl bg-warm-ivory/5 border border-warm-ivory/15 text-warm-ivory placeholder:text-warm-ivory/30 focus:outline-none focus:border-champagne-gold transition-colors text-xs [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-warm-ivory/70 mb-1 font-medium">
                      Guests
                    </label>
                    <div className="relative">
                      <Users size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-ivory/40 pointer-events-none" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#091E32] border border-warm-ivory/15 text-warm-ivory focus:outline-none focus:border-champagne-gold transition-colors text-xs cursor-pointer"
                      >
                        <option value="1-2 Guests">1–2 Guests</option>
                        <option value="3-4 Guests">3–4 Guests</option>
                        <option value="5-8 (Family)">5–8 (Family)</option>
                        <option value="8+ (Group)">8+ Guests (Group)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. Quick Food Tag */}
                <div className="flex items-center justify-between pt-1 pb-1 px-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-warm-ivory/80">
                    <input
                      type="checkbox"
                      checked={isJain}
                      onChange={(e) => setIsJain(e.target.checked)}
                      className="w-4 h-4 rounded border-warm-ivory/20 accent-[#C49A65] bg-transparent cursor-pointer"
                    />
                    <span>We prefer strict Jain meal options</span>
                  </label>
                  <span className="text-[10px] text-champagne-gold font-sans font-medium">100% Pure Veg</span>
                </div>

                {/* 5. Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:brightness-105 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] transition-all active:scale-[0.99] cursor-pointer mt-2"
                >
                  <Send size={16} />
                  <span>Get Availability &amp; Rates on WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-warm-ivory/40">
                  Instant response from resort manager · No spam guarantee
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]/40">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-display text-2xl font-medium text-warm-ivory">
                Enquiry Sent!
              </h3>
              <p className="text-xs sm:text-sm text-warm-ivory/70 max-w-xs mx-auto">
                Thank you, <span className="text-champagne-gold font-medium">{name}</span>. WhatsApp has been opened with your pre-filled reservation details.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="py-2.5 px-6 rounded-xl bg-warm-ivory/10 hover:bg-warm-ivory/20 text-warm-ivory text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Floating Quick Enquiry Trigger Pill
 * Placed unobtrusively on the screen so users can click anytime to open the short popup form
 */
export function QuickEnquiryFloatingTrigger() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-quick-enquiry"));
  };

  return (
    <div className="fixed bottom-4 left-16 sm:bottom-6 sm:left-24 z-[55] transition-all duration-300">
      <button
        onClick={handleClick}
        aria-label="Open Quick Stay Enquiry Form"
        className="group flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-deep-navy/90 hover:bg-deep-navy text-warm-ivory border border-champagne-gold/40 shadow-[0_12px_28px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-xs font-sans font-medium"
      >
        <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse" />
        <span className="text-[11px] sm:text-xs tracking-wide">Quick Rates</span>
        <span className="text-[10px] text-champagne-gold hidden md:inline">· Save 10%</span>
      </button>
    </div>
  );
}
