"use client";

import React, { useState, useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
}

const baseTestimonials: Testimonial[] = [
  {
    quote: "Top! Un vrai passionné des voitures à qui on peut vraiment faire confiance. J’ai amené mes 4 voitures.",
    name: "Adrian Molina Aguilar",
  },
  {
    quote: "Très bon tarifs et garagiste arrangeant, j’ai pu amener mes pièces et récupérer les anciennes changées afin de les renvoyer chez oscaro.",
    name: "Nicolas Massonneau",
  },
  {
    quote: "Super accueil, disponible, répare l essentiel a des prix très corrects pour Paris. Vu dans son garage des autos courantes comme des autos anciennes ou d exception, mini, DS, ferrari, porsche, Lamborghini.",
    name: "Jean-Luc Vinet",
  },
  {
    quote: "Accueil et service +++: très sympa, très honnête et très réactif. Comme un vrai garage d’avant. Un vrai garage d’aujourd’hui. Je recommande vraiment.",
    name: "Marion de Peretti",
  },
];

// Circular clones: 4 items + 3 clones at the end = 7 items
const items: Testimonial[] = [
  ...baseTestimonials,
  baseTestimonials[0],
  baseTestimonials[1],
  baseTestimonials[2],
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Mouse & touch drag
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const updateDimensions = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, currentIndex]);

  const handleNext = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setTransitionEnabled(true);
    if (currentIndex <= 0) {
      setCurrentIndex(baseTestimonials.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (idx: number) => {
    setTransitionEnabled(true);
    setCurrentIndex(idx);
  };

  const onTransitionEnd = () => {
    // Seamless wrap-around after the base testimonials
    if (currentIndex >= baseTestimonials.length) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
    }
  };

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const finishDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      handleNext();
    } else if (dragOffset > 50) {
      handlePrev();
    }
    setDragOffset(0);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - dragStartX);
  };

  const slideWidth = containerWidth > 0 ? containerWidth / slidesToShow : 380;
  const translateX = -(currentIndex * slideWidth) + dragOffset;
  const activeDot = currentIndex % baseTestimonials.length;

  return (
    <div
      className="gt-carousel-root"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (isDragging) finishDrag();
        setIsPaused(false);
      }}
      style={{
        position: "relative",
        padding: "10px 0 20px 0",
        width: "100%",
      }}
    >
      {/* NO SIDE ARROWS - User requested removal of lateral scroll buttons */}

      {/* Track & Slides */}
      <div
        ref={containerRef}
        className="gt-carousel-viewport"
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
      >
        <div
          className="gt-carousel-track-wrapper"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={finishDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={finishDrag}
          style={{
            overflow: "hidden",
            width: "100%",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          <div
            className="gt-carousel-track"
            onTransitionEnd={onTransitionEnd}
            style={{
              display: "flex",
              transition: isDragging
                ? "none"
                : transitionEnabled
                ? "transform 450ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
              transform: `translateX(${translateX}px)`,
              width: `${items.length * slideWidth}px`,
            }}
          >
            {items.map((t, idx) => (
              <div
                key={idx}
                className="gt-carousel-slide"
                style={{
                  width: `${slideWidth}px`,
                  padding: "0 12px",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  pointerEvents: isDragging ? "none" : "auto",
                }}
              >
                <div
                  className="testimonial-item"
                  style={{
                    background: "#FFFFFF",
                    padding: "36px 30px 28px 30px",
                    borderRadius: "4px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                    minHeight: "270px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div className="item-content">
                    <div style={{ marginBottom: "15px" }}>
                      <img
                        alt="citation"
                        decoding="async"
                        src="/images/quote__2.png"
                        style={{ width: "38px", height: "auto", display: "inline-block" }}
                      />
                    </div>
                    <p
                      style={{
                        color: "#0a0a0a",
                        fontSize: "15px",
                        fontStyle: "italic",
                        lineHeight: "1.7em",
                        margin: 0,
                        minHeight: "85px",
                      }}
                    >
                      {t.quote}
                    </p>
                  </div>
                  <div
                    className="testimonial-author"
                    style={{
                      position: "static",
                      marginTop: "20px",
                      borderTop: "1px solid #f0f0f0",
                      paddingTop: "14px",
                      display: "block",
                    }}
                  >
                    <div
                      className="testimonial-name"
                      style={{
                        color: "#010d14",
                        fontSize: "18px",
                        fontWeight: 700,
                        display: "block",
                      }}
                    >
                      {t.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clickable Pagination Dots */}
        <div
          className="gt-carousel-pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "26px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {baseTestimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => goToSlide(dotIdx)}
                aria-label={`Aller au témoignage ${dotIdx + 1}`}
                style={{
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  display: "inline-block",
                  backgroundColor: activeDot === dotIdx ? "#ffb703" : "#d0d0d0",
                  width: activeDot === dotIdx ? "32px" : "10px",
                  height: "8px",
                  borderRadius: "4px",
                  transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                  padding: 0,
                  margin: "0 2px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
