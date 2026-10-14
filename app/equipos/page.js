import Header from "../components/Header";
import Image from "next/image";
import { BiWater, BiSolidCamera } from "react-icons/bi";
import { GiRopeCoil } from "react-icons/gi";

const caracteristicasROV = [
    {
        Icon: BiWater,
        titulo: "Inmersión a más de 100 metros de profundidad",
        descripcion: "Configurados para operar en zonas de corrientes intensas y áreas remotas o de difícil acceso.",
    },
    {
        Icon: GiRopeCoil,
        titulo: "Umbilical de 300 metros",
        descripcion: "Permite inspecciones extensas sin mover la plataforma de trabajo.",
    },
    {
        Icon: BiSolidCamera,
        titulo: "Cámara de alta definición",
        descripcion: "Garantiza imágenes de calidad y detalladas para análisis preciso.",
    },
];

export default function Equipos() {
    return (
        <main>
            <Header
                titulo="NUESTROS EQUIPOS"
                subtitulo="Conoce los equipos y tecnologías que utilizamos en nuestras operaciones, seleccionados para desarrollar cada trabajo de manera eficiente, precisa y segura."
            />
            <section className="mx-auto mb-16 grid w-full max-w-7xl min-w-0 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10" aria-labelledby="equipos-rov">
                <div className="min-w-0 text-center lg:text-left">
                    <h2 id="equipos-rov" className="lg:text-left! lg:after:ml-0! lg:after:mr-auto! lg:after:w-24">EQUIPOS ROV</h2>
                    <p className="text-neutral-500">Grupo Buzos Comerciales SPA cuenta con dos ROV de marca Blue Robotics, ideales para exploraciones submarinas capaces de trabajar en condiciones desafiantes.</p>
                    <ul className="mt-8 flex flex-col gap-8 lg:gap-6">
                        {caracteristicasROV.map(({ Icon, titulo, descripcion }) => (
                            <li key={titulo} className="flex flex-col items-center gap-3 lg:flex-row lg:gap-3">
                                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gbc-sky">
                                    <Icon className="size-9 text-white" aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-xl font-semibold leading-tight text-gbc-blue">{titulo}</h3>
                                    <p className="mt-1 text-neutral-500">{descripcion}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="@container min-w-0">
                    <div className="grid grid-cols-1 justify-items-center gap-5 lg:@[32rem]:grid-cols-5 lg:@[32rem]:gap-0">
                        <div className="relative aspect-4/3 w-full max-w-80 lg:max-w-96 lg:@[32rem]:col-span-3 lg:@[32rem]:col-start-1 lg:@[32rem]:row-start-1 lg:@[32rem]:justify-self-start">
                            <Image src="/equipos/PDS-ROV-df-1.png" alt="ROV Blue Robotics visto desde el frente" fill sizes="(min-width: 1024px) 36vw, 320px" className="object-contain" />
                        </div>
                        <div className="relative aspect-4/3 w-full max-w-80 lg:max-w-96 lg:@[32rem]:col-span-3 lg:@[32rem]:col-start-3 lg:@[32rem]:row-start-2 lg:@[32rem]:justify-self-end">
                            <Image src="/equipos/PDS-ROV-df-2.png" alt="ROV Blue Robotics visto desde la parte posterior" fill sizes="(min-width: 1024px) 36vw, 320px" className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto mb-16 grid w-full max-w-7xl min-w-0 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10" aria-labelledby="equipos-buceo">
                <div className="min-w-0 lg:col-start-2 lg:row-start-1">
                    <h2 id="equipos-buceo" className="lg:text-left! lg:after:ml-0! lg:after:mr-auto! lg:after:w-32">EQUIPOS DE BUCEO</h2>
                    <ul className="list-disc space-y-3 pl-5 text-[1.2rem] leading-[1.2] text-neutral-500 marker:text-gbc-sky lg:text-[1.3rem]">
                        <li>Casco de buceo KM-37</li>
                        <li>Mascara Kirbi Morgan con comunicaciones y monitoreo en superficie.</li>
                        <li>Panel de control de aire Sistema de video X-Visión</li>
                        <li>Compresor de baja sistema Hoocka</li>
                        <li>Umbilicales de buceo</li>
                        <li>Cilindros de buceo</li>
                    </ul>
                    <p className="mt-6 text-center text-neutral-500">Y más...</p>
                </div>
                <div className="@container min-w-0 lg:col-start-1 lg:row-start-1">
                    <div className="grid grid-cols-1 justify-items-center gap-2 lg:@[32rem]:grid-cols-5 lg:@[32rem]:gap-0">
                        <div className="relative aspect-4/3 w-full max-w-80 lg:max-w-96 lg:@[32rem]:col-span-3 lg:@[32rem]:col-start-1 lg:@[32rem]:row-start-1 lg:@[32rem]:justify-self-start">
                            <Image src="/equipos/casco-buceo-km-37.png" alt="Casco de buceo comercial KM-37" fill sizes="(min-width: 1024px) 36vw, 320px" className="object-contain" />
                        </div>
                        <div className="relative aspect-4/3 w-full max-w-80 lg:max-w-96 lg:@[32rem]:-mt-8 lg:@[32rem]:col-span-3 lg:@[32rem]:col-start-3 lg:@[32rem]:row-start-2 lg:@[32rem]:justify-self-end">
                            <Image src="/equipos/rov-performer-m6.png" alt="Equipo ROV Performer M6" fill sizes="(min-width: 1024px) 36vw, 320px" className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-5 bg-gbc-cyan px-5 py-12 text-white md:-mx-12 md:px-12 lg:py-24 xl:-mx-20 xl:px-20" aria-labelledby="certificacion">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
                    <div className="relative order-first size-48 shrink-0 overflow-hidden rounded-full bg-white lg:order-last lg:size-72">
                        <Image
                            src="/equipos/abs-quality-certified-logo.png"
                            alt="ABS Quality Evaluations, Inc. — Management System Certification"
                            fill
                            sizes="(min-width: 1024px) 288px, 192px"
                            className="object-contain"
                        />
                    </div>
                    <div className="min-w-0 flex-1 text-center lg:text-left">
                        <h2 id="certificacion" className="text-white! after:bg-white! lg:text-left! lg:after:ml-0! lg:after:mr-auto! lg:after:w-32">CERTIFICACIÓN</h2>
                        <p>Contamos con un Sistema de Gestión Integrado, respaldado por la certificación internacional de ABS Quality Evaluations, Inc., que refleja nuestro compromiso con la calidad, la seguridad y la mejora continua. Esta certificación fortalece nuestros procesos y procedimientos, promoviendo una gestión eficiente y estándares consistentes en cada operación, con el objetivo de entregar servicios confiables y de alta calidad.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
