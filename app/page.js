import Image from "next/image";
import Link from "next/link";
import clientes from "./clientes.json";
import { LuCalendarDays } from "react-icons/lu"
import { GiDivingHelmet } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Home() {
    return (
        <main className="grid gap-20 sm:gap-24 xl:gap-32">
            {/* BANNER */}
            <div className="hero relative isolate overflow-hidden -mx-5 px-5 w-[calc(100%+2.5rem)] md:-mx-12 md:px-12 md:w-[calc(100%+6rem)] xl:-mx-20 xl:px-20 xl:w-[calc(100%+10rem)] md:aspect-video h-svh md:[@media(max-aspect-ratio:16/9)]:h-auto -scale-x-100 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/inicio/diving.png')] before:bg-center before:bg-no-repeat before:bg-cover md:before:scale-125 md:before:bg-position-[right_40%] md:before:origin-top-right">

                <div className="-scale-x-100 px-5 text-white text-center flex flex-col items-center justify-center h-full gap-3 md:items-start md:mt-5 md:w-[60%] md:ml-auto lg:gap-3 md:text-start xl:gap-4">

                    <Image
                        src="/grupo-buzos-comerciales-logo.png"
                        alt="Grupo Buzos Comerciales Logo"
                        width={160}
                        height={100}
                        className="w-auto h-24 md:h-[15%]"
                        loading="eager"
                    />

                    <h1 id="banner" className="font-bold text-[clamp(2rem,12vw,3rem)] md:text-[2.3rem] lg:text-[3rem] leading-none xl:text-[4rem]">Cubrimos cada desafío bajo el agua</h1>

                    <p className="text-[clamp(1.2rem,5.5vw,1.4rem)] md:text-[1.2rem] lg:text-[1.5rem] leading-[1.2] xl:text-[1.7rem]">Experiencia y tecnología al servicio de proyectos marinos</p>

                    <div className="flex flex-col text-center md:justify-center font-medium w-full gap-2 text-[clamp(1.2rem,5.5vw,1.4rem)] sm:flex-row md:text-[1.2rem] lg:text-[1.5rem]">

                        <Link className="w-full lg:w-full lg:px-0 rounded-sm bg-gbc-cyan hover:bg-gbc-steel active:bg-gbc-steel py-1.5 transition-colors" href="/servicios">Ver servicios</Link>

                        <Link className="w-full lg:w-full lg:px-0 rounded-sm bg-gbc-blue hover:bg-gbc-navy active:bg-gbc-navy py-1 transition-colors" href="/#contacto">Cotizar servicio</Link>
                    </div>
                </div>

            </div>

            {/* POR QUÉ ESCOGERNOS */}
            <div className="text-center xl:flex xl:flex-row-reverse xl:items-center lg:gap-10">

                <div className="xl:flex-1 xl:min-w-0 xl:text-start">
                    <h2 className="xl:after:ml-0! xl:after:mr-auto! xl:text-start!">¿POR QUÉ ESCOGERNOS?</h2>
                    <p className="text-neutral-600 font-regular text-[1.2rem] leading-[1.3] lg:text-[1.3rem]">
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

                                <p className="text-[1.2rem] md:text-[1.2rem] leading-[1.2] text-neutral-500">Trayectoria desarrollando soluciones para distintos proyectos y operaciones submarinas.</p>
                            </div>
                        </div>

                        <div className="md:flex-1 md:min-w-0 lg:flex lg:flex-row lg:gap-3 xl:flex-none">
                            <span className="inline-flex size-18 md:size-16 lg:size-14 shrink-0 items-center justify-center rounded-full bg-gbc-blue text-white">
                                <GiDivingHelmet className="size-11 md:size-8" aria-hidden="true" />
                            </span>

                            <div>
                                <h3 className="text-[1.3rem] font-semibold leading-tight text-gbc-navy pt-4 pb-1.5 lg:pt-0">Equipamiento profesional especializado</h3>

                                <p className="text-[1.2rem] md:text-[1.2rem] leading-[1.2] text-neutral-500">Tecnología, equipos de buceo y sistemas ROV preparados para trabajos subacuáticos eficientes y seguros.</p>
                            </div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="mx-auto flex w-fit max-w-full flex-col items-stretch gap-3 text-[1.2rem] lg:text-[1.3rem] md:flex-row xl:ml-0 xl:mr-auto">
                        <Link className="flex items-center justify-between gap-3 rounded-full bg-gbc-cyan pl-5 pr-3 py-2 text-white font-semibold leading-tight" href="/nosotros">
                            Más sobre nosotros

                            <span className="ml-auto flex shrink-0 items-center justify-center rounded-full bg-white">
                                <MdOutlineKeyboardArrowRight className="size-9 text-black" aria-hidden="true" />
                            </span>
                        </Link>
                        <Link className="flex items-center justify-between gap-3 rounded-full bg-gbc-blue pl-5 pr-3 py-2 text-white font-semibold leading-tight" href="/equipos">
                            Nuestros equipos

                            <span className="flex shrink-0 items-center justify-center rounded-full bg-white">
                                <MdOutlineKeyboardArrowRight className="size-9 text-black" aria-hidden="true" />
                            </span>
                        </Link>
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
            </div>

            {/* CLIENTES */}
            <div>
                <h2>NUESTROS CLIENTES</h2>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {clientes.map((cliente) => (
                        <Link key={cliente.image} href={cliente.web} className="flex h-24 items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 shadow-[0_0_5px_rgba(0,0,0,0.15)] lg:h-32">
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
            </div>

            {/* CONTACTO */}
            <div id="contacto" className="bg-gbc-navy text-white rounded-xl px-3 pb-3 pt-8 mb-5 md:flex md:flex-row md:p-6 lg:gap-6 lg:pl-8 xl:pl-10">

                <div className="flex flex-col gap-5 text-center md:text-start md:justify-center">
                    
                    <h2 className="text-white! after:hidden! md:text-start! xl:text-[2.7rem]!">CONTÁCTANOS</h2>
                    
                    <p className="text-[1.2rem] leading-[1.2] xl:text-[1.4rem]">Escríbenos por correo electrónico, cuéntanos sobre tus requerimientos y cotiza nuestros servicios.</p>
                    
                    <Link href="" className="bg-gbc-cyan text-white flex py-2 text-[1.3rem] rounded-xl font-semibold justify-center items-center gap-[2vw] md:w-fit md:px-4 md:gap-3 xl:text-[1.4rem]">

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
            </div>
        </main>
    );
}
