"use client";

import React, { useEffect, useRef, useState } from "react";

interface WaterPreloaderProps {
  onComplete?: () => void;
  /** Force run even if previously seen in session (useful for debugging) */
  force?: boolean;
}

export function WaterPreloader({ onComplete, force = false }: WaterPreloaderProps) {
  // If already loaded in this session, don't show again
  const [shouldMount, setShouldMount] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // SVG and DOM element direct refs for 60fps direct mutation (ZERO React re-renders)
  const frontWaveRef = useRef<SVGPathElement>(null);
  const backWaveRef = useRef<SVGPathElement>(null);
  const crestRef = useRef<SVGPathElement>(null);
  const numberTextRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mutable animation state refs
  const animFrameRef = useRef<number | null>(null);
  const hasFinishedRef = useRef(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Check session storage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadySeen = sessionStorage.getItem("beyondsands_preloader_seen");
    if (alreadySeen && !force) {
      setIsDone(true);
      return;
    }

    setShouldMount(true);
  }, [force]);

  // Main animation lifecycle — runs strictly once
  useEffect(() => {
    if (!shouldMount || isDone) return;

    // Lock body scroll during preloader
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let startTime: number | null = null;
    let waveTime = 0;
    let currentProgress = 0;
    const DURATION = 2200; // 2.2s silky smooth ritual

    // Check if window is already loaded
    let isWindowLoaded = document.readyState === "complete";
    const onWindowLoad = () => {
      isWindowLoaded = true;
    };
    if (!isWindowLoaded) {
      window.addEventListener("load", onWindowLoad, { once: true });
    }

    const completePreloader = () => {
      if (hasFinishedRef.current) return;
      hasFinishedRef.current = true;

      // Persist in session storage so it never pops up again
      try {
        sessionStorage.setItem("beyondsands_preloader_seen", "true");
      } catch {
        // Safe fallback if sessionStorage is blocked
      }

      setIsDismissing(true);

      setTimeout(() => {
        setIsDone(true);
        document.body.style.overflow = prevOverflow;
        if (onComplete) onComplete();
      }, 850);
    };

    const loop = (timestamp: number) => {
      if (hasFinishedRef.current) return;

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      waveTime += 0.04;

      // Calculate smooth target progress using an organic cubic ease-out curve
      let target = (elapsed / DURATION) * 100;
      if (target > 90 && !isWindowLoaded && elapsed < 3500) {
        // Wait slightly if window hasn't completed, but don't stall past 3.5s
        target = 90;
      }
      if (elapsed >= DURATION) {
        target = 100;
      }

      currentProgress += (target - currentProgress) * 0.14;
      if (currentProgress >= 99.6) {
        currentProgress = 100;
      }

      // Update Text Counter directly
      if (numberTextRef.current) {
        numberTextRef.current.textContent = String(Math.floor(currentProgress));
      }

      // Update Progress Bar directly
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${currentProgress}%`;
      }

      // Update Vignette label directly
      if (vignetteRef.current) {
        if (currentProgress < 30) {
          vignetteRef.current.textContent = "Listening to the Kelva tides...";
        } else if (currentProgress < 65) {
          vignetteRef.current.textContent = "Sunlight warming the sands...";
        } else if (currentProgress < 95) {
          vignetteRef.current.textContent = "Crafting your coastal sanctuary...";
        } else {
          vignetteRef.current.textContent = "Welcome to Beyond Sands";
        }
      }

      // Compute SVG Wave geometry directly
      // SVG viewBox is 0 0 1000 260. Text is centered at Y: 152.
      // 0% -> water level Y = 250 (below text)
      // 100% -> water level Y = 45 (completely submerged)
      const clampedProg = Math.max(0, Math.min(100, currentProgress));
      const baseY = 245 - (clampedProg / 100) * 195;

      const dampening = clampedProg >= 97 ? Math.max(0.1, 1 - (clampedProg - 97) / 3) : 1;
      const amp1 = 7.5 * dampening;
      const amp2 = 5.0 * dampening;
      const freq1 = 0.014;
      const freq2 = 0.022;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      let wave1 = `M -60 300 L -60 ${baseY}`;
      let wave2 = `M -60 300 L -60 ${baseY}`;
      let crest = `M -60 ${baseY}`;

      for (let x = -60; x <= 1060; x += 25) {
        const dist = Math.abs(x - (mx * 1000 + 500));
        const lift = Math.max(0, 1 - dist / 350) * (my * 14);

        const y1 = baseY + Math.sin(x * freq1 + waveTime * 1.8) * amp1 + lift;
        const y2 = baseY + Math.cos(x * freq2 - waveTime * 1.5) * amp2 + lift * 0.7;

        wave1 += ` L ${x} ${y1.toFixed(1)}`;
        wave2 += ` L ${x} ${y2.toFixed(1)}`;
        crest += ` L ${x} ${y1.toFixed(1)}`;
      }

      wave1 += ` L 1060 300 Z`;
      wave2 += ` L 1060 300 Z`;

      // Apply directly to SVG paths
      if (frontWaveRef.current) frontWaveRef.current.setAttribute("d", wave1);
      if (backWaveRef.current) backWaveRef.current.setAttribute("d", wave2);
      if (crestRef.current) crestRef.current.setAttribute("d", crest);

      // Finish condition
      if (currentProgress >= 100 && elapsed >= DURATION) {
        completePreloader();
        return;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    // Escape key listener to dismiss immediately
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        completePreloader();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("load", onWindowLoad);
      window.removeEventListener("keydown", onKeyDown);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.body.style.overflow = prevOverflow;
    };
  }, [shouldMount, isDone, onComplete]);

  // Subtle mouse movement tracking without re-renders
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    };
  };

  // If already done or not mounted, do not render anything
  if (!shouldMount || isDone) return null;

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label="Loading Beyond Sands Resort"
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between px-6 py-10 sm:py-14 bg-[#051424] text-warm-ivory select-none transition-all duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isDismissing
          ? "opacity-0 -translate-y-8 pointer-events-none scale-[1.02]"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background Ambience: Deep Kelva Marine Caustics & Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(20, 75, 120, 0.45), rgba(5, 20, 36, 0.95) 75%)",
        }}
      />

      {/* Top Header Label */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 pt-2 sm:pt-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/70 animate-pulse" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-champagne-gold/90 font-medium">
            Kelva Beach · Palghar
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/70 animate-pulse" />
        </div>
      </div>

      {/* Centerpiece: Wordmark with rising fluid water wave */}
      <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center justify-center">
        <div className="relative w-full aspect-[1000/260] max-h-[35vh] flex items-center justify-center">
          <svg
            viewBox="0 0 1000 260"
            className="w-full h-full overflow-visible drop-shadow-[0_12px_28px_rgba(0,0,0,0.4)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Text Mask Definition: Exact typographic imprint of 'beyondsands' */}
              <clipPath id="beyondsands-water-clip">
                <text
                  x="500"
                  y="152"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "128px",
                    letterSpacing: "0.06em",
                  }}
                >
                  beyondsands
                </text>
              </clipPath>

              {/* Water Surface Depth Gradient (Kelva Ocean Sapphire -> Turquoise -> Champagne Sunlight) */}
              <linearGradient id="kelva-water-gradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#0A233A" />
                <stop offset="30%" stopColor="#124168" />
                <stop offset="65%" stopColor="#1F6996" />
                <stop offset="88%" stopColor="#41A2C8" />
                <stop offset="98%" stopColor="#D9BF8F" />
                <stop offset="100%" stopColor="#F8F6F1" />
              </linearGradient>

              {/* Back Wave Translucent Fill */}
              <linearGradient id="back-tide-gradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#07192A" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0F3656" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#C49A65" stopOpacity="0.55" />
              </linearGradient>

              {/* Shimmer / Glow Filter */}
              <filter id="water-crest-glow" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Layer 1: Base Empty Letter Outline & Soft Frosted Glass fill */}
            <text
              x="500"
              y="152"
              textAnchor="middle"
              dominantBaseline="middle"
              className="select-none"
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: "128px",
                letterSpacing: "0.06em",
                fill: "rgba(248, 246, 241, 0.05)",
                stroke: "rgba(196, 154, 101, 0.32)",
                strokeWidth: "1.2px",
              }}
            >
              beyondsands
            </text>

            {/* Layer 2: Real Animated Water Filling Inside the Typography */}
            <g clipPath="url(#beyondsands-water-clip)">
              {/* Back Wave (Drifting in opposite phase) */}
              <path
                ref={backWaveRef}
                d="M -60 300 L 1060 300 Z"
                fill="url(#back-tide-gradient)"
              />

              {/* Front Primary Tide Wave */}
              <path
                ref={frontWaveRef}
                d="M -60 300 L 1060 300 Z"
                fill="url(#kelva-water-gradient)"
              />

              {/* Foaming Water Meniscus / Crest Line with Champagne Shimmer */}
              <path
                ref={crestRef}
                d="M -60 300"
                fill="none"
                stroke="rgba(248, 246, 241, 0.85)"
                strokeWidth="2.2"
                filter="url(#water-crest-glow)"
              />
            </g>

            {/* Layer 3: Subtle Crisp Golden Edge Overlay */}
            <text
              x="500"
              y="152"
              textAnchor="middle"
              dominantBaseline="middle"
              className="select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: "128px",
                letterSpacing: "0.06em",
                fill: "none",
                stroke: "rgba(196, 154, 101, 0.22)",
                strokeWidth: "1px",
              }}
            >
              beyondsands
            </text>
          </svg>
        </div>

        {/* Narrative & Percentage Display */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 gap-3 sm:gap-4 w-full max-w-xs text-center">
          {/* Numerals Counter */}
          <div className="flex items-baseline justify-center gap-1">
            <span
              ref={numberTextRef}
              className="font-serif text-3xl sm:text-4xl font-normal text-warm-ivory tracking-tight tabular-nums"
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              }}
            >
              0
            </span>
            <span className="font-sans text-xs text-champagne-gold font-light tracking-widest">
              %
            </span>
          </div>

          {/* Minimalist Tidal Hairline Progress Bar */}
          <div className="w-full h-[2px] bg-warm-ivory/10 rounded-full relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-navy-blue via-champagne-gold to-warm-ivory rounded-full relative w-0"
            >
              {/* Glowing droplet at front edge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#C49A65]" />
            </div>
          </div>

          {/* Dynamic Vignette Subtitle */}
          <p
            ref={vignetteRef}
            className="font-sans text-[11px] sm:text-xs text-warm-ivory/60 tracking-wider font-light"
          >
            Listening to the Kelva tides...
          </p>
        </div>
      </div>

      {/* Bottom Luxury Footer Note */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-5xl text-[10px] sm:text-[11px] text-warm-ivory/40 uppercase tracking-[0.2em] font-sans pb-1">
        <span>Pure Veg &amp; Jain Luxury</span>
        <span className="hidden sm:inline">100% Beachfront Harmony</span>
        <span>Est. 2024</span>
      </div>
    </div>
  );
}
