import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* BANNER */}
            <div className="hero relative isolate overflow-hidden md:aspect-video w-full h-svh md:[@media(max-aspect-ratio:16/9)]:h-auto -scale-x-100 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/inicio/grupo-buzos-comerciales-gbc.png')] before:bg-center before:bg-no-repeat before:bg-cover md:before:scale-125 md:before:bg-position-[right_40%] md:before:origin-top-right">


                <div className="-scale-x-100 px-5 text-white text-center flex flex-col items-center justify-center h-full gap-3 md:px-12 md:items-start md:mt-5 lg:pl-12 lg:pr-0 md:w-[60%] md:ml-auto lg:w-[50%] lg:gap-3 md:text-start xl:gap-4">

                    <Image
                        src="/grupo-buzos-comerciales-logo.png"
                        alt="Grupo Buzos Comerciales"
                        width={160}
                        height={100}
                        className="w-auto h-24 md:h-[15%]"
                        loading="eager"
                    />

                    <h1 id="banner" className="font-bold text-[clamp(2rem,12vw,3rem)] md:text-[2.3rem] lg:text-[3rem] leading-none xl:text-[4rem]">Cubrimos cada desafío bajo el agua</h1>

                    <p className="text-[clamp(1.2rem,5.5vw,1.4rem)] md:text-[1.2rem] lg:text-[1.5rem] leading-[1.2] xl:text-[1.7rem]">Experiencia y tecnología al servicio de proyectos marinos</p>

                    <div className="flex flex-col text-center md:justify-center font-medium w-full gap-2 text-[clamp(1.2rem,5.5vw,1.4rem)] md:flex-row md:text-[1.2rem] lg:text-[1.5rem]">

                        <Link className="w-full lg:w-full lg:px-0 rounded-sm bg-gbc-cyan hover:bg-gbc-steel active:bg-gbc-steel py-1.5 transition-colors" href="/servicios">Ver servicios</Link>

                        <Link className="w-full lg:w-full lg:px-0 rounded-sm bg-gbc-blue hover:bg-gbc-navy active:bg-gbc-navy py-1 transition-colors" href="/#contacto">Cotizar servicio</Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
