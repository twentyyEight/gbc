"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const links = [
    ["INICIO", "/"],
    ["NOSOTROS", "/nosotros"],
    ["SERVICIOS", "/servicios"],
    ["EQUIPO", "/equipos"],
    ["CONTACTO", "/#contacto"],
];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);
    const navRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        const hero = document.querySelector(".hero");

        function updateBackground() {
            if (!hero) {
                setHasBackground(true);
                return;
            }

            const { top, height } = hero.getBoundingClientRect();
            const threshold = top + height * 0.25;

            setHasBackground(
                threshold <= navRef.current.getBoundingClientRect().top
            );
        }

        const observer = new ResizeObserver(updateBackground);
        if (hero) observer.observe(hero);
        window.addEventListener("scroll", updateBackground, { passive: true });
        window.addEventListener("resize", updateBackground);
        updateBackground();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", updateBackground);
            window.removeEventListener("resize", updateBackground);
        };
    }, [pathname]);

    function closeMenu() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const desktop = window.matchMedia("(min-width: 768px)");

        function handleResize(event) {
            if (event.matches) {
                setIsOpen(false);
            }
        }

        desktop.addEventListener("change", handleResize);

        return () => {
            document.body.style.overflow = previousOverflow;
            desktop.removeEventListener("change", handleResize);
        };
    }, [isOpen]);

    return (
        <nav ref={navRef} className="fixed inset-x-0 top-4 z-50 flex justify-center" aria-label="Navegación principal">

            {/* PC */}
            <ul className={`hidden list-none items-center rounded-full px-3 py-1 text-xl font-medium md:flex md:text-base lg:text-[1.1rem] xl:text-[1.2rem] transition-colors duration-300 motion-reduce:transition-none ${hasBackground ? "bg-white text-black" : "bg-transparent text-white"}`}>

                {links.map(([label, href]) => (
                    <li
                        key={label}
                        className={`px-3 py-1 transition-colors hover:bg-gbc-sky hover:text-gbc-navy ${label === "INICIO" ? "rounded-l-2xl rounded-r-md" : label === "CONTACTO" ? "rounded-r-2xl rounded-l-md" : "rounded-md"}`}
                    >
                        <Link href={href}>
                            {label}
                        </Link>
                    </li>
                ))}

            </ul>

            {/* Mobile */}
            <button
                className={`absolute right-5 cursor-pointer border-0 rounded-full transition-colors duration-300 motion-reduce:transition-none md:hidden ${hasBackground ? "bg-white text-black" : "bg-transparent text-white"}`}
                type="button"
                aria-label="Abrir menú"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(true)}
            >
                <IoMenu className="w-13 h-auto" />
            </button>

            <div
                className={`${isOpen ? "transform-[translateY(0)]" : "transform-[translateY(-100%)]"} fixed inset-0 flex flex-col items-center justify-center overflow-y-auto bg-gbc-blue px-5 py-6 text-white h-svh min-h-142 min-w-[320px] transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden`}
                inert={!isOpen}
                aria-label="Menú de navegación"
            >
                <button
                    className="absolute top-6 right-5 cursor-pointer border-0 bg-transparent p-1.5"
                    type="button"
                    name="close"
                    aria-label="Cerrar menú"
                    onClick={closeMenu}
                >
                    <IoClose className="w-13 h-auto" />
                </button>

                <div className="flex shrink-0 flex-col items-center gap-[10vh]">

                    <ul className="flex list-none flex-col items-center gap-2 text-center text-[clamp(1.8rem,8vw,2.5rem)] sm:gap-5 sm:text-[2.5rem]">

                        {links.map(([label, href]) => (

                            <li key={label}>
                                <Link
                                    className="transition-opacity hover:opacity-75"
                                    href={href}
                                    onClick={closeMenu}
                                >{label}</Link>
                            </li>
                        ))}

                    </ul>

                    <Image
                        src="/grupo-buzos-comerciales-logo.png"
                        alt="Grupo Buzos Comerciales Logo"
                        width={160}
                        height={100}
                        className="h-auto w-[45vw] shrink-0 opacity-65"
                    />
                </div>
            </div>
        </nav>
    );
}
