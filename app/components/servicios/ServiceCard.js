import Image from "next/image";

export default function ServiceCard({ title, image }) {
    return (
        <article className="flex w-full min-w-62.5 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative aspect-4/3 shrink-0 bg-[#d9d9d9]">
                {image && image !== "/" && <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />}
            </div>
            <div className="flex-1 px-4 py-4">
                <span aria-hidden="true" className="mb-2 block h-1 w-12 rounded-full bg-gbc-cyan" />
                <h3 className="min-h-[2lh] text-left text-[1.2rem] font-medium leading-[1.3] text-gbc-navy">{title}</h3>
            </div>
        </article>
    );
}
