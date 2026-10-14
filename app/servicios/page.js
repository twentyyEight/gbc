import Header from "../components/Header";
import ServiceCarousel from "../components/servicios/ServiceCarousel";
import ServiceCard from "../components/servicios/ServiceCard";
import servicios from "../data/servicios.json";

const categorias = [
    { type: "buceo", titulo: "BUCEO PROFESIONAL" },
    { type: "rov", titulo: "TECNOLOGÍA ROV" },
];

export default function Servicios() {
    return (
        <main className="relative isolate pb-12 before:absolute before:inset-y-0 before:-inset-x-5 before:-z-10 before:bg-[#f3f6f7] before:content-[''] md:before:-inset-x-12 xl:before:-inset-x-20">
            <Header
                titulo="NUESTROS SERVICIOS"
                subtitulo="Descubre nuestra amplia variedad de servicios, organizados según la modalidad en que se realiza cada operación, y encuentra la solución adecuada para cada proyecto."
            />
            <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 lg:gap-16">
                {categorias.map(({ type, titulo }) => {
                    const services = servicios.find((grupo) => grupo.type === type)?.services ?? [];

                    return (
                        <section key={type} className="min-w-0" aria-labelledby={`servicios-${type}`}>
                            <h2 id={`servicios-${type}`} className="text-[1.6rem]! lg:text-[2rem]!">{titulo}</h2>
                            <ServiceCarousel>
                                {services.map((service, index) => (
                                    <div
                                        key={service.name}
                                        className="flex w-full min-w-62.5 shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                                        role="group"
                                        aria-roledescription="diapositiva"
                                        aria-label={`${index + 1} de ${services.length}`}
                                    >
                                        <ServiceCard title={service.name} image={service.img} />
                                    </div>
                                ))}
                            </ServiceCarousel>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}
