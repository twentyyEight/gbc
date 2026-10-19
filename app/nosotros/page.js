"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import experiencias from "../data/experiencias.json";
import ExperienciaTimeline from "../components/experiencia/ExperienciaTimeline";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const years = [...new Set(experiencias.map((item) => item.year))].sort((a, b) => a - b);
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export default function Nosotros() {
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const filteredExperiencias = experiencias.filter((item) => item.year === selectedYear)
        .toSorted((a, b) => meses.indexOf(a.mes) - meses.indexOf(b.mes));

    return (
        <main>
            <Header
                titulo="SOBRE NOSOTROS"
                subtitulo="Conoce nuestra historia, los valores que impulsan nuestro trabajo y la experiencia que hemos construido a lo largo de los años"
            />

            {/* QUIENES SOMOS */}
            <section>

                <div className="flex flex-col lg:flex-row-reverse lg:items-stretch lg:gap-8">
                    <div className="lg:min-w-0 lg:flex-1 flex flex-col lg:justify-center">
                        <h2 className="lg:text-left! lg:after:ml-0! lg:after:mr-auto! after:mb-5!">¿QUIENES SOMOS?</h2>

                        <div className="flex flex-col gap-4 text-neutral-500 text-center mb-8 lg:mb-0 lg:text-left">
                            <p>Grupo Buzos Comerciales (GBC), está liderado por dos profesionales con una vasta experiencia en la industria marítima.</p>
                            <p>Claudio Núñez Aravena, con más de una década de trayectoria como buzo comercial, ha desempeñado roles clave en empresas como STM y Chileservice, adquiriendo un profundo conocimiento en operaciones submarinas.</p>
                            <p>Por su parte, Carlos Iván Gutiérrez López, técnico mecánico y buzo comercial desde 2010, ha destacado tanto como operador y mantenedor de ROV, así como supervisor de buceo en diversas industrias, incluyendo la salmonera.</p>
                            <p>La historia de GBC comenzó el 19 de noviembre de 2019, cuando Claudio y Carlos unieron sus habilidades y experiencia para fundar nuestra empresa.</p>
                        </div>
                    </div>

                    <div className="relative aspect-square w-full overflow-hidden rounded-lg lg:w-[34%] lg:shrink-0">
                        <Image
                            src="/nosotros/nosotros.png"
                            alt="Grupo Buzos Comerciales"
                            fill
                            sizes="(min-width: 1024px) 34vw, 100vw"
                            className="object-cover object-top"
                        />
                    </div>
                </div>

                <div className="my-12 grid grid-cols-1 items-center gap-5 lg:my-16 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-10">
                    <div className="relative aspect-4/3 overflow-hidden rounded-lg lg:aspect-square">
                        <Image
                            src="/nosotros/preparacion-buzo-comercial-traje-seco.png"
                            alt="Preparación de un buzo comercial con traje seco antes de una operación submarina"
                            fill
                            sizes="(min-width: 1024px) 30vw, 100vw"
                            className="object-cover object-[50%_40%] lg:object-center"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-6 py-1 text-center lg:gap-8">
                        <span aria-hidden="true" className="h-px w-28 bg-gbc-cyan" />
                        <p className="font-semibold italic text-gbc-blue xl:text-[1.7rem]!">Desde entonces, nos hemos dedicado a proporcionar soluciones submarinas integrales, respaldadas por años de experiencia y un compromiso inquebrantable con la excelencia.</p>
                        <span aria-hidden="true" className="h-px w-28 bg-gbc-cyan" />
                    </div>
                    <div className="relative aspect-4/3 overflow-hidden rounded-lg lg:aspect-square">
                        <Image
                            src="/nosotros/equipamiento-buzo-comercial-casco-buceo.png"
                            alt="Revisión del equipo de un buzo comercial con casco de buceo"
                            fill
                            sizes="(min-width: 1024px) 30vw, 100vw"
                            className="object-cover object-[50%_10%]"
                        />
                    </div>
                </div>
            </section>

            {/* MISIÓN Y VISIÓN */}
            <section className="-mx-8 mb-16 w-[calc(100%+4rem)] text-white md:-mx-12 md:w-[calc(100%+6rem)] xl:-mx-20 xl:w-[calc(100%+10rem)]" aria-label="Misión y visión">
                <div className="bg-gbc-blue px-8 py-10 md:px-12 md:py-20 xl:px-20">
                    <h2 className="mb-6 flex items-center gap-3 text-left! text-[1.6rem]! font-medium text-white! after:hidden! lg:text-[2rem]!">
                        <span aria-hidden="true" className="h-px w-12 bg-white lg:w-20" />
                        MISIÓN
                    </h2>
                    <div className="grid gap-7 lg:grid-cols-2 lg:gap-10">
                        <p className="font-medium italic lg:text-[1.5rem]!">Brindar soluciones especializadas en inspección, mantenimiento y trabajos submarinos mediante buceo industrial y tecnología ROV, ofreciendo servicios seguros, eficientes y de alta calidad.</p>
                        <div className="before:mx-auto before:mb-7 before:block before:h-px before:w-28 before:bg-white/40 before:content-[''] lg:border-l lg:border-white/40 lg:pl-10 lg:before:hidden">
                            <p className="text-right text-white/80 lg:text-[1.2rem]!">En GBC SpA trabajamos comprometidos con la seguridad de nuestro personal, la protección del medio ambiente y la satisfacción de nuestros clientes, utilizando tecnología, experiencia técnica y procedimientos adecuados para entregar información confiable y soluciones oportunas en cada operación.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gbc-cyan px-8 py-10 md:px-12 md:py-20 xl:px-20">
                    <h2 className="mb-6 flex items-center gap-3 text-left! text-[1.6rem]! font-medium text-white! after:hidden! lg:text-[2rem]!">
                        <span aria-hidden="true" className="h-px w-12 bg-white lg:w-20" />
                        VISIÓN
                    </h2>
                    <div className="grid gap-7 lg:grid-cols-2 lg:gap-10">
                        <p className="font-semibold italic lg:text-[1.5rem]!">Ser una empresa referente en Chile en servicios submarinos, buceo industrial e inspecciones mediante ROV, reconocida por su profesionalismo, seguridad, innovación tecnológica y calidad operacional.</p>
                        <div className="before:mx-auto before:mb-7 before:block before:h-px before:w-28 before:bg-white/40 before:content-[''] lg:border-l lg:border-white/40 lg:pl-10 lg:before:hidden">
                            <p className="text-right text-white/80 lg:text-[1.2rem]!">Buscamos consolidar a GBC SpA como un socio estratégico para empresas de los sectores marítimo, portuario, acuícola, energético e industrial, ampliando continuamente nuestras capacidades técnicas y ofreciendo soluciones submarinas eficientes, seguras y confiables.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiencia */}
            <section className="mx-auto w-full max-w-6xl min-w-0" aria-label="Experiencias por año">
                <h2>NUESTRA EXPERIENCIA</h2>
                <p className="mb-8 text-center text-neutral-500">Descubre los proyectos y servicios que hemos realizado durante nuestra trayectoria, reflejo de nuestra experiencia y compromiso en cada desafío bajo el agua.</p>
                <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-x-2">
                    {years.map((year) => (
                        <Fragment key={year}>
                            <button
                                id={`year-${year}`}
                                type="button"
                                aria-expanded={selectedYear === year}
                                aria-controls={`experiencias-${year}`}
                                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                                className={`relative flex w-full cursor-pointer items-center justify-center border-y border-neutral-300 py-4 text-[1.5rem] lg:order-1 lg:mb-12 lg:rounded-md lg:border-0 lg:text-2xl lg:after:absolute lg:after:inset-x-0 lg:after:-bottom-2 lg:after:h-1 lg:after:rounded-full lg:after:content-[''] ${selectedYear === year ? "bg-gbc-sky/50 font-semibold text-gbc-blue lg:after:bg-gbc-blue" : "font-medium text-neutral-400 lg:after:bg-neutral-300"}`}
                            >
                                {year}
                                <MdOutlineKeyboardArrowRight
                                    className={`absolute right-2 size-6 transition-transform lg:hidden ${selectedYear === year ? "-rotate-90" : "rotate-90"}`}
                                    aria-hidden="true"
                                />
                            </button>
                            <div id={`experiencias-${year}`} role="region" aria-labelledby={`year-${year}`} hidden={selectedYear !== year} className="lg:order-2 lg:col-span-5">
                                {selectedYear === year && (
                                    <ExperienciaTimeline experiencias={filteredExperiencias} etiqueta="mes" />
                                )}
                            </div>
                        </Fragment>
                    ))}
                </div>
            </section>
        </main>
    );
}
