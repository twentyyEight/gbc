import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const colors = [
    {
        color: "cyan",
        styles: "bg-gbc-cyan hover:bg-gbc-steel active:bg-gbc-steel",
    },
    {
        color: "blue",
        styles: "bg-gbc-blue hover:bg-gbc-navy active:bg-gbc-navy",
    },
    {
        color: "navy",
        styles: "bg-gbc-navy hover:bg-gbc-blue active:bg-gbc-blue",
    },
    {
        color: "steel",
        styles: "bg-gbc-steel hover:bg-gbc-navy active:bg-gbc-navy",
    },
    {
        color: "sky",
        styles: "bg-gbc-sky hover:bg-gbc-cyan active:bg-gbc-cyan",
    },
];

export default function Button({ href, color = "blue", children }) {
    const selectedColor = colors.find((option) => option.color === color) || colors[1];

    return (
        <Link
            href={href}
            className={`inline-flex min-h-11 max-w-full items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 font-semibold leading-tight text-white transition-colors ${selectedColor.styles}`}
        >
            {children}
            <span className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full bg-white">
                <MdOutlineKeyboardArrowRight className="size-7 text-black" aria-hidden="true" />
            </span>
        </Link>
    );
}
