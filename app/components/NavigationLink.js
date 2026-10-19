"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({ href, onClick, children, ...props }) {
    const pathname = usePathname();

    function handleClick(event) {
        onClick?.(event);

        if (event.defaultPrevented || href !== "/#contacto" || pathname !== "/") return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (props.target && props.target !== "_self") return;

        const contacto = document.getElementById("contacto");
        if (!contacto) return;

        event.preventDefault();
        if (window.location.hash !== "#contacto") {
            window.history.pushState(null, "", "/#contacto");
        }
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                contacto.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
                    block: "start",
                });
            });
        });
    }

    return (
        <Link {...props} href={href} onClick={handleClick}>
            {children}
        </Link>
    );
}
