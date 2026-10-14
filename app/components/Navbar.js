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
        <nav ref={navRef} className="fixed inset-x-0 top-0 z-50 flex justify-center" aria-label="Navegación principal">

            {/* PC */}
            <div className={`hidden w-full items-center justify-between gap-4 px-12 py-3.5 md:flex transition-colors duration-300 motion-reduce:transition-none text-white lg:px-16 ${hasBackground ? "bg-gbc-blue" : "bg-transparent"}`}>
                <Link href="/" className="shrink-0" aria-label="Grupo Buzos Comerciales, inicio">
                    <Image
                        src="/gbc-letras.png"
                        alt="Grupo Buzos Comerciales Logo"
                        width={160}
                        height={100}
                        className="h-10 w-auto"
                    />
                </Link>
                <ul className="flex list-none items-center justify-end font-medium">

                    {links.map(([label, href]) => (
                        <li
                            key={label}
                            className={`px-3 py-1 transition-colors hover:bg-gbc-sky hover:text-gbc-navy rounded-lg`}
                        >
                            <Link href={href} className="text-[1.2rem]!">
                                {label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>

            {/* Mobile */}
            <div className={`flex w-full items-center justify-between gap-4 px-5 py-2 text-white transition-colors duration-300 motion-reduce:transition-none md:hidden ${hasBackground ? "bg-gbc-blue" : "bg-transparent"}`}>
                <Link href="/" className="shrink-0" aria-label="Grupo Buzos Comerciales, inicio">
                    <Image
                        src="/gbc-letras.png"
                        alt="Grupo Buzos Comerciales Logo"
                        width={160}
                        height={100}
                        className="h-8 w-auto"
                    />
                </Link>
            <button
                className="shrink-0 cursor-pointer rounded-md border-0 bg-transparent text-white"
                type="button"
                aria-label="Abrir menú"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(true)}
            >
                <IoMenu className="w-12 h-auto" />
            </button>
            </div>

            <div
                className={`${isOpen ? "transform-[translateY(0)]" : "transform-[translateY(-100%)]"} fixed inset-0 flex flex-col items-center justify-center overflow-y-auto bg-gbc-blue px-5 py-6 text-white h-vh min-w-[320px] transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden`}
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

                    <ul className="flex list-none flex-col items-center gap-5 text-center">

                        {links.map(([label, href]) => (

                            <li key={label}>
                                <Link
                                    className="transition-opacity hover:opacity-75 text-[clamp(1.8rem,8vw,2.5rem)]! sm:text-[2.5rem]!"
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
