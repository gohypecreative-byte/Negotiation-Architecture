"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const IMAGES = [
  "/images/gallery/dr-tarun-01.jpg",
  "/images/gallery/dr-tarun-02.jpg",
  "/images/gallery/dr-tarun-03.jpg",
  "/images/gallery/dr-tarun-08.jpg",
];

export interface StickyContentLink {
  href?: string;
  text?: string;
  label?: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface StickyContentItem {
  num?: string;
  category?: string;
  duration?: string;
  badge?: string;
  heading?: string;
  paragraphs?: string[];
  paragraph?: string | string[];
  list?: string[];
  listItems?: string[];
  link?: StickyContentLink;
  href?: string;
  linkText?: string;
  cta?: string;
  image?: string;
  alt?: string;
  imageAlt?: string;
  width?: number;
  height?: number;
  content?: React.ReactNode;
}

const defaultItems: StickyContentItem[] = [
  {
    num: "01",
    category: "Diagnostic",
    duration: "60 Seconds",
    heading: "Designed for the everyday",
    paragraph:
      "Spaces where architecture, comfort and light work together, so the design supports how you actually live.",
    list: [
      "Open layouts with natural light",
      "Premium materials and finishes",
      "Considered, low-maintenance detailing",
    ],
    link: { href: "#", text: "Explore" },
    image: IMAGES[0],
  },
  {
    num: "02",
    category: "Blueprint",
    duration: "10 Minutes",
    heading: "Placed where it counts",
    paragraph:
      "Connected to the routes and neighbourhoods that matter, close to work, transport and everyday amenities.",
    list: [
      "Near key urban corridors",
      "Strong transport links",
      "Surrounded by lifestyle hubs",
    ],
    link: { href: "#", text: "See locations" },
    image: IMAGES[1],
  },
  {
    num: "03",
    category: "Simulation",
    duration: "One Evening",
    heading: "Built to hold value",
    paragraph:
      "Engineered for durability and future-readiness, so the space keeps pace with a changing city.",
    list: [
      "High construction standards",
      "Future-ready infrastructure",
      "Long-term appreciation potential",
    ],
    link: { href: "#", text: "Investment" },
    image: IMAGES[2],
  },
  {
    num: "04",
    category: "Advisory",
    duration: "30 Minutes",
    heading: "Finished with care",
    paragraph:
      "From the amenities to the interiors, every layer is tuned for a calm, elevated day-to-day experience.",
    list: [
      "Considered lifestyle amenities",
      "Well-resolved interiors",
      "Community-minded shared spaces",
    ],
    link: { href: "#", text: "Amenities" },
    image: IMAGES[3],
  },
];

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

const getParagraphs = (item: StickyContentItem) => {
  if (Array.isArray(item.paragraphs)) return item.paragraphs;
  if (Array.isArray(item.paragraph)) return item.paragraph;
  return item.paragraph ? [item.paragraph] : [];
};

const getListItems = (item: StickyContentItem) => {
  if (Array.isArray(item.list)) return item.list;
  if (Array.isArray(item.listItems)) return item.listItems;
  return [];
};

const getLink = (item: StickyContentItem): StickyContentLink | null => {
  if (item.link) return item.link;
  if (item.href) {
    return {
      href: item.href,
      text: item.linkText || item.cta || "Learn more",
    };
  }
  return null;
};

const renderStickyContent = (item: StickyContentItem) => {
  if (item.content) {
    return item.content;
  }

  const paragraphs = getParagraphs(item);
  const listItems = getListItems(item);
  const link = getLink(item);

  return (
    <div className="flex h-full w-full flex-col justify-center max-w-xl pl-2 sm:pl-4">
      {/* Big Bold Clean Sans-serif Heading */}
      {item.heading && (
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-5 text-white leading-[1.08]">
          {item.heading}
        </h3>
      )}

      {/* Clean Paragraph */}
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p
          key={`paragraph-${paragraphIndex}`}
          className="text-base sm:text-lg text-white/70 leading-relaxed mb-6 font-sans font-normal max-w-lg"
        >
          {paragraph}
        </p>
      ))}

      {/* Minimal Plain Text List (No bullets/dividers - identical to reference) */}
      {listItems.length > 0 && (
        <div className="space-y-2 mb-8">
          {listItems.map((listItem, listIndex) => (
            <p
              key={`list-${listIndex}`}
              className="text-sm sm:text-base text-white/85 font-sans font-normal"
            >
              {listItem}
            </p>
          ))}
        </div>
      )}

      {/* Action Link */}
      {link?.href && (
        <div className="pt-2">
          <a
            href={link.href}
            onClick={(e) => {
              if (link.onClick) {
                link.onClick(e);
              } else if (link.href?.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="group inline-flex items-center gap-2 text-base md:text-lg font-sans font-medium text-white hover:text-white/80 transition-colors"
          >
            <span>{link.text || link.label || "Explore"}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export interface StickyContentCompProps {
  items?: StickyContentItem[];
  className?: string;
  bgColor?: string;
}

export function StickyContentComp({
  items = defaultItems,
  className = "",
  bgColor = "#080808",
}: StickyContentCompProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRefsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefsRef = useRef<(HTMLDivElement | null)[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current || !items.length) {
      return;
    }

    const reducedMotion = prefersReducedMotion();

    const context = gsap.context(() => {
      const contents = contentRefsRef.current;
      const images = imageRefsRef.current;

      // 1. Initial State
      contents.forEach((content, index) => {
        if (!content) return;
        gsap.set(content, {
          autoAlpha: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 25,
          zIndex: items.length - index,
        });
      });

      images.forEach((image, index) => {
        if (!image) return;
        gsap.set(image, {
          autoAlpha: index === 0 ? 1 : 0,
          zIndex: items.length - index,
          clipPath: "inset(0% 0% 0% 0%)",
          scale: index === 0 ? 1 : 1.1,
          transformOrigin: "center center",
        });
      });

      // 2. Timeline setup with native ScrollTrigger pinning
      const stepDuration = 1.6;
      const totalSteps = items.length - 1;
      const scrollDistance = Math.max(1200, totalSteps * 850);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76px", // Pin neatly below the fixed top navbar
          end: `+=${scrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 3. Step Transitions
      items.forEach((_, index) => {
        if (index === items.length - 1) return;

        const currentContent = contents[index];
        const nextContent = contents[index + 1];
        const currentImage = images[index];
        const nextImage = images[index + 1];

        const stepStart = index * stepDuration;
        const transitionStart = stepStart + stepDuration * 0.45;

        // Content out & in with graceful crossfade
        if (currentContent && nextContent) {
          timeline
            .to(
              currentContent,
              {
                autoAlpha: 0,
                y: -25,
                duration: stepDuration * 0.4,
                ease: "power2.inOut",
              },
              transitionStart
            )
            .fromTo(
              nextContent,
              {
                autoAlpha: 0,
                y: 25,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: stepDuration * 0.45,
                ease: "power2.inOut",
              },
              transitionStart + stepDuration * 0.15
            );
        }

        // Image reveal & scale
        if (currentImage && nextImage) {
          if (reducedMotion) {
            timeline
              .to(
                currentImage,
                { autoAlpha: 0, duration: stepDuration * 0.5, ease: "power2.inOut" },
                transitionStart
              )
              .to(
                nextImage,
                { autoAlpha: 1, duration: stepDuration * 0.5, ease: "power2.inOut" },
                transitionStart
              );
          } else {
            // Reveal next image underneath by wiping current image up
            gsap.set(nextImage, { autoAlpha: 1 });
            timeline
              .to(
                currentImage,
                {
                  clipPath: "inset(0% 0% 100% 0%)",
                  scale: 0.98,
                  duration: stepDuration * 0.6,
                  ease: "power2.inOut",
                },
                transitionStart
              )
              .fromTo(
                nextImage,
                { scale: 1.1 },
                {
                  scale: 1,
                  duration: stepDuration * 0.6,
                  ease: "power2.out",
                },
                transitionStart
              );
          }
        }
      });

      // Small delay to ensure all images and parents above have calculated layout
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(refreshTimeout);
    }, sectionRef);

    return () => context.revert();
  }, [items]);

  if (!items.length) {
    return null;
  }

  return (
    <div
      ref={sectionRef}
      className={`relative w-full ${className}`}
      style={{
        backgroundColor: bgColor || "#080808",
      }}
    >
      <div className="relative w-full h-[calc(100vh-76px)] min-h-[580px] max-h-[920px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Left Column: Frameless Clean Text Content (Exact to user reference) */}
        <div className="relative w-full lg:w-[48%] h-full flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={`content-${index}`}
              ref={(element) => {
                contentRefsRef.current[index] = element;
              }}
              className="absolute inset-0 flex items-center justify-center opacity-0"
            >
              {renderStickyContent(item)}
            </div>
          ))}
        </div>

        {/* Right Column: Architectural Sharp Framed Image */}
        <div className="relative w-full lg:w-[50%] h-[74vh] max-h-[720px] rounded-none overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] bg-black">
          {items.map((item, index) => (
            <div
              key={`image-${index}`}
              ref={(element) => {
                imageRefsRef.current[index] = element;
              }}
              className="absolute inset-0 w-full h-full opacity-0"
            >
              {item.image && (
                <div className="relative w-full h-full overflow-hidden bg-[#070B12]">
                  <img
                    src={item.image}
                    alt={item.alt || item.heading || `pathway-visual-${index + 1}`}
                    className="w-full h-full object-cover object-center filter grayscale contrast-[1.25] brightness-[0.88]"
                  />
                  {/* Black & Blue Duotone Gradient Tint */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-[#050D1A] via-[#0F2D69] to-[#2563EB] mix-blend-color pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Deep Black Shadow Vignette */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent to-[#070B12]/60 mix-blend-multiply pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Atmospheric Deep Blue Screen Accent */}
                  <div
                    className="absolute inset-0 bg-[#0A1E3F]/35 mix-blend-screen pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface StickyContentWrapperProps {
  items?: StickyContentItem[];
  bgColor?: string;
  className?: string;
}

export default function StickyContentWrapper({
  items = defaultItems,
  bgColor,
  className = "",
}: StickyContentWrapperProps) {
  return (
    <StickyContentComp
      items={items}
      bgColor={bgColor}
      className={className}
    />
  );
}