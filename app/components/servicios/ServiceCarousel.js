"use client";
import { Children, useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ServiceCarousel({ children }) {
    const trackRef = useRef(null);
    const [isBackDisabled, setIsBackDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const count = Children.count(children);

    useEffect(() => {
        const track = trackRef.current;

        function updateControls() {
            console.log(track.scrollLeft)
            setIsBackDisabled(track.scrollLeft <= 1);
            setIsNextDisabled(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
        }

        const observer = new ResizeObserver(updateControls);
        observer.observe(track);

        Array.from(track.children).forEach((slide) => observer.observe(slide));
        track.addEventListener("scroll", updateControls);
        
        updateControls();

        return () => {
            observer.disconnect();
            track.removeEventListener("scroll", updateControls);
        };
    }, [count]);

    function move(direction) {
        const track = trackRef.current;
        const slide = track.firstElementChild;
        if (!slide) return;

        const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
        track.scrollBy({
            left: direction * (slide.getBoundingClientRect().width + gap),
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
    }

    return (
        <section className="relative w-full min-w-0 md:px-14" aria-label="Servicios" aria-roledescription="carrusel">
            <div
                ref={trackRef}
                className="flex w-full min-w-0 gap-5 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
                aria-label="Tarjetas de servicios"
            >
                {children}
            </div>
            <button
                type="button"
                onClick={() => move(-1)}
                disabled={isBackDisabled}
                aria-label="Servicio anterior"
                className="absolute left-0 top-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gbc-navy shadow-md disabled:opacity-40 enabled:cursor-pointer md:translate-x-0"
            >
                <MdOutlineKeyboardArrowLeft className="size-8" aria-hidden="true" />
            </button>
            <button
                type="button"
                onClick={() => move(1)}
                disabled={isNextDisabled}
                aria-label="Servicio siguiente"
                className="absolute right-0 top-1/2 z-10 flex size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gbc-navy shadow-md disabled:opacity-40 enabled:cursor-pointer md:translate-x-0"
            >
                <MdOutlineKeyboardArrowRight className="size-8" aria-hidden="true" />
            </button>
        </section>
    );
}
