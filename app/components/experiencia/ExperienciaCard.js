import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

export default function ExperienciaCard({ img, mes, empresas, trabajos = [], ubicacion }) {
    const nombresEmpresas = Array.isArray(empresas) ? empresas.join(", ") : empresas;
    const listaTrabajos = Array.isArray(trabajos) ? trabajos : [trabajos];

    return (
        <article className="flex w-full min-w-0 flex-col gap-3 lg:flex-row lg:items-start lg:gap-8">

            <div className="min-w-0 flex-1 text-left">
                <h3 className="text-[1.3rem] font-semibold uppercase leading-tight text-gbc-blue lg:text-[1.7rem]">
                    {mes}
                </h3>
                <p className="mt-1 font-medium uppercase leading-tight text-black lg:text-[1.3rem]!">
                    {nombresEmpresas}
                </p>
                <ul className={`mt-2 space-y-1 text-[1.2rem] leading-tight text-neutral-500 lg:mt-3 lg:text-[1.3rem] ${listaTrabajos.length > 1 ? "list-disc pl-5 marker:text-gbc-sky" : "list-none"}`}>
                    {listaTrabajos.map((trabajo, index) => (
                        <li key={`${index}-${trabajo}`}>{trabajo}</li>
                    ))}
                </ul>
                <p className="mt-3 font-medium leading-tight text-gbc-cyan flex items-center gap-2 lg:mt-4 lg:text-[1.3rem]!">
                    <MdLocationOn className="size-6" />
                    {ubicacion}
                </p>
            </div>
        </article>
    );
}
