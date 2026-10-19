"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./components/Button";
import NavigationLink from "./components/NavigationLink";
import ServiceCarousel from "./components/servicios/ServiceCarousel";
import ServiceCard from "./components/servicios/ServiceCard";
import ExperienciaTimeline from "./components/experiencia/ExperienciaTimeline";
import clientes from "./data/clientes.json";
import servicios from "./data/servicios.json";
import experiencias from "./data/experiencias.json";
import cotizacionHref from "./data/cotizacion";
import { LuCalendarDays } from "react-icons/lu"
import { GiDivingHelmet } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const ultimasExperiencias = experiencias
    .toSorted((a, b) =>
        b.year - a.year || meses.indexOf(b.mes) - meses.indexOf(a.mes)
    )
    .slice(0, 3);

export default function Home() {
    const [type, setType] = useState("rov");
    const filteredServices = (servicios.find((group) => group.type === type)?.services ?? []).slice(0, type === "rov" ? 3 : 6);

    return (
        <main className="grid gap-20 sm:gap-24 xl:gap-32">

            {/* BANNER */}
            <section className="hero relative isolate overflow-hidden -mx-8 px-8 w-[calc(100%+4rem)] md:-mx-12 md:px-12 md:w-[calc(100%+6rem)] xl:-mx-20 xl:px-20 xl:w-[calc(100%+10rem)] md:aspect-video h-svh md:[@media(max-aspect-ratio:16/9)]:h-auto -scale-x-100 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/inicio/diving.png')] before:bg-center before:bg-no-repeat before:bg-cover md:before:scale-125 md:before:bg-position-[right_40%] md:before:origin-top-right">

                <div className="-scale-x-100 px-5 text-white text-center flex flex-col items-center justify-center h-full gap-3 md:items-start md:mt-5 md:w-[55%] md:ml-auto lg:gap-3 md:text-start xl:gap-4">

                    <h1 id="banner" className="font-bold text-[clamp(2rem,12vw,3rem)] md:text-[2.3rem] lg:text-[3rem] leading-none xl:text-[4rem]">SOLUCIONES INTEGRALES</h1>

                    <p className="text-[clamp(1.2rem,5.5vw,1.4rem)]! md:text-[1.2rem]! lg:text-[1.5rem]! xl:text-[1.7rem]!">Experiencia y tecnología al servicio de proyectos marinos</p>

                    <div className="flex flex-col text-center md:justify-center font-medium w-full gap-2 text-[clamp(1.2rem,5.5vw,1.4rem)] sm:flex-row md:text-[1.2rem] lg:text-[1.5rem]">

                        <Link className="w-full lg:w-full lg:px-0 rounded-sm bg-gbc-cyan hover:bg-gbc-steel active:bg-gbc-steel py-2 transition-colors" href="/servicios">Ver servicios</Link>

                        <NavigationLink className="w-full lg:w-full lg:px-0 rounded-sm bg-gbc-blue hover:bg-gbc-navy active:bg-gbc-navy py-2  transition-colors" href="/#contacto">Cotizar servicio</NavigationLink>
                    </div>
                </div>

            </section>

            {/* POR QUÉ ESCOGERNOS */}
            <section className="text-center xl:flex xl:flex-row-reverse xl:items-center lg:gap-10">

                <div className="xl:flex-1 xl:min-w-0 xl:text-start">
                    <h2 className="xl:after:ml-0! xl:after:mr-auto! xl:text-start! after:mb-5!">¿POR QUÉ ESCOGERNOS?</h2>
                    <p className="text-neutral-600 font-regular">
                        En Grupo Buzos Comerciales (GBC) combinamos el conocimiento técnico con la pasión por el trabajo bien hecho, asegurando resultados impecables en cada proyecto marino que emprendemos
                    </p>

                    {/* Texto con iconos */}
                    <div className="flex flex-col gap-6 py-8 md:flex-row lg:text-start xl:flex-col">

                        <div className="md:flex-1 md:min-w-0 lg:flex lg:flex-row lg:gap-3 xl:flex-none">
                            <span className="inline-flex size-18 md:size-16 lg:size-14 shrink-0 items-center justify-center rounded-full bg-gbc-blue text-white">
                                <LuCalendarDays className="size-11 md:size-8" aria-hidden="true" />
                            </span>

                            <div>
                                <h3 className="text-[1.3rem] font-semibold leading-tight text-gbc-navy pt-4 pb-1.5 lg:pt-0">Más de 5 años de experiencia</h3>

                                <p className="md:text-[1.2rem]! text-neutral-500">Trayectoria desarrollando soluciones para distintos proyectos y operaciones submarinas.</p>
                            </div>
                        </div>

                        <div className="md:flex-1 md:min-w-0 lg:flex lg:flex-row lg:gap-3 xl:flex-none">
                            <span className="inline-flex size-18 md:size-16 lg:size-14 shrink-0 items-center justify-center rounded-full bg-gbc-blue text-white">
                                <GiDivingHelmet className="size-11 md:size-8" aria-hidden="true" />
                            </span>

                            <div>
                                <h3 className="text-[1.3rem] font-semibold leading-tight text-gbc-navy pt-4 pb-1.5 lg:pt-0">Equipamiento profesional especializado</h3>

                                <p className="md:text-[1.2rem]! text-neutral-500">Tecnología, equipos de buceo y sistemas ROV preparados para trabajos subacuáticos eficientes y seguros.</p>
                            </div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="mx-auto flex w-fit max-w-full flex-col items-stretch gap-3 text-[1.2rem] md:flex-row xl:ml-0 xl:mr-auto">
                        <Button href="/nosotros" color="cyan">Más sobre nosotros</Button>
                        <Button href="/equipos" color="blue">Nuestros equipos</Button>
                    </div>
                </div>

                {/* Imagenes */}
                <div className="flex flex-col gap-3 pt-10 sm:flex-row md:flex-row-reverse md:justify-center lg:grid lg:grid-cols-3 xl:grid-cols-2 xl:grid-rows-2 xl:aspect-3/2 xl:w-[44%] xl:shrink-0 xl:pt-0">
                    <Image
                        className="aspect-square object-cover object-[50%_65%] rounded-xl sm:aspect-auto sm:w-[50vw] md:aspect-square md:w-[35vw] lg:w-full lg:min-w-0 xl:col-start-2 xl:row-start-1 xl:row-span-2 xl:h-full xl:min-h-0 xl:aspect-auto"
                        src="/inicio/buzo-casco-km-37.jpg" alt="Buzo con casco de buceo profesional KM 37" width={768} height={1024} />

                    <div className="flex flex-col gap-3 sm:w-[50vw] md:w-[35vw] lg:contents">
                        <Image
                            className="aspect-video object-cover object-top rounded-xl sm:aspect-square md:aspect-video lg:aspect-square lg:w-full lg:min-w-0 xl:col-start-1 xl:row-start-1 xl:h-full xl:min-h-0 xl:aspect-auto"
                            src="/inicio/rov.png" alt="ROV realizando trabajos submarinos" width={1458} height={975} />

                        <Image
                            className="aspect-video object-cover object-top rounded-xl sm:aspect-square md:aspect-video lg:aspect-square lg:w-full lg:min-w-0 lg:object-[20%_50%] xl:col-start-1 xl:row-start-2 xl:h-full xl:min-h-0 xl:aspect-auto"
                            src="/inicio/buzo-soldador.jpg" alt="Buzo realizando trabajos de soldadura submarina" width={736} height={528} />
                    </div>
                </div>
            </section>

            {/* SERVICIOS */}
            <section className="w-full min-w-0">
                <div className="mx-auto mb-8 max-w-5xl text-center">
                    <h2>ALGUNOS DE NUESTROS SERVICIOS</h2>
                    <p className="text-neutral-500">
                        Nuestros servicios se dividen en dos categorías: operaciones con buceo profesional y tecnología ROV, adaptándonos a las necesidades de cada proyecto submarino.
                    </p>
                </div>
                
                <div className="mb-6 flex gap-2 md:mx-14 md:gap-4" role="group" aria-label="Tipo de servicio">
                    {["buceo", "rov"].map((option) => (
                        <button
                            key={option}
                            type="button"
                            aria-pressed={type === option}
                            onClick={() => setType(option)}
                            className={`relative min-w-0 flex-1 cursor-pointer rounded-lg px-4 py-2 text-[1.3rem] transition-colors after:absolute after:inset-x-0 after:-bottom-2 after:h-1.5 after:rounded-full after:content-[''] ${type === option ? "bg-gbc-sky/50 font-semibold text-gbc-blue after:bg-gbc-blue" : "bg-transparent font-medium text-neutral-400 after:bg-neutral-300"}`}
                        >
                            {option === "buceo" ? "Buceo" : "ROV"}
                        </button>
                    ))}
                </div>
                <ServiceCarousel key={type}>
                    {filteredServices.map((service, index) => (
                        <div
                            key={`${type}-${service.name}`}
                            className="flex min-w-62.5 w-full shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]"
                            role="group"
                            aria-roledescription="diapositiva"
                            aria-label={`${index + 1} de ${filteredServices.length}`}
                        >
                            <ServiceCard title={service.name} image={service.img} />
                        </div>
                    ))}
                </ServiceCarousel>
                <div className="mt-6 flex justify-center md:mt-8">
                    <Button href="/servicios" color="blue">Ver más servicios</Button>
                </div>
            </section>

            {/* EXPERIENCIAS */}
            <section className="mx-auto w-full max-w-sm min-w-0 lg:max-w-6xl" aria-label="Últimos trabajos">
                <h2>UN POCO DE NUESTRO TRABAJO</h2>
                <ExperienciaTimeline experiencias={ultimasExperiencias} etiqueta="year" />
                <div className="mt-7 flex justify-center">
                    <Button href="/experiencias" color="cyan">Ver más trabajos</Button>
                </div>
            </section>

            {/* CLIENTES */}
            <section>
                <h2>NUESTROS CLIENTES</h2>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {clientes.map((cliente) => (
                        <Link key={cliente.image} href={cliente.web} target="_blank" rel="noopener noreferrer" className="flex h-24 items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 shadow-[0_0_5px_rgba(0,0,0,0.15)] lg:h-32">
                            <div className="relative h-full w-full max-w-56">
                                <Image
                                    src={cliente.image}
                                    alt={cliente.name}
                                    fill
                                    sizes="224px"
                                    className="object-contain transition-[filter] duration-200 hover:grayscale active:grayscale"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="bg-gbc-navy text-white rounded-xl -mx-4 px-3 pb-3 pt-8 md:flex md:flex-row md:p-6 lg:gap-6 lg:pl-8 xl:pl-10">

                <div className="flex flex-col gap-5 text-center md:text-start md:justify-center">

                    <h2 className="text-white! after:hidden! md:text-start! xl:text-[2.7rem]!">CONTÁCTANOS</h2>

                    <p>Escríbenos por correo electrónico, cuéntanos sobre tus requerimientos y cotiza nuestros servicios.</p>

                    <Link href={cotizacionHref} className="bg-gbc-cyan hover:bg-gbc-steel active:bg-gbc-steel text-white flex py-2 text-[1.3rem] rounded-xl font-semibold justify-center items-center gap-[2vw] md:w-fit md:px-4 md:gap-3 xl:text-[1.4rem]">

                        <MdEmail className="size-7" />
                        Solicitar cotización
                    </Link>
                </div>

                <div className="relative mt-4 md:-my-3 md:-mr-3 lg:m-0">
                    <Image
                        src="/inicio/buceo-comercial-buzo.png"
                        alt="Buzo realizando trabajos de buceo comercial"
                        width={1000}
                        height={750}
                        className="aspect-video object-cover rounded-xl md:aspect-4/3 lg:aspect-video"
                    />
                </div>
            </section>
        </main>
    );
}
