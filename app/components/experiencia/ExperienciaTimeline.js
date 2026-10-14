import ExperienciaCard from "./ExperienciaCard";

export default function ExperienciaTimeline({ experiencias, etiqueta = "year" }) {
    const mostrarMes = etiqueta === "mes";

    return (
        <ol className={mostrarMes ? "px-3 py-5 lg:px-0 lg:py-0" : undefined}>
            {experiencias.map((experiencia, index) => {
                const mostrarYear = index === 0 || experiencia.year !== experiencias[index - 1].year;
                const haySiguiente = index < experiencias.length - 1;

                return (
                    <li key={`${experiencia.year}-${experiencia.mes}-${experiencia.empresa}-${index}`} className={`relative lg:grid lg:gap-x-4 lg:pb-8 lg:last:pb-0 ${mostrarMes ? "lg:grid-cols-[10rem_1.5rem_minmax(0,1fr)]" : "lg:grid-cols-[6rem_1.5rem_minmax(0,1fr)]"}`}>
                        {mostrarMes ? (
                            <h3 className="hidden pt-1 text-right text-xl font-semibold uppercase text-gbc-blue lg:col-start-1 lg:row-start-1 lg:block">{experiencia.mes}</h3>
                        ) : (
                            <>
                                {index > 0 && mostrarYear && <span aria-hidden="true" className="mx-auto my-3 block h-12 w-0.5 bg-gbc-cyan lg:hidden" />}
                                {mostrarYear && <p className="text-center font-semibold text-gbc-navy lg:col-start-1 lg:row-start-1 lg:pt-1 lg:text-left lg:text-[2rem]!">{experiencia.year}</p>}
                                <div aria-hidden="true" className="relative mx-auto mb-4 mt-3 h-12 w-0.5 bg-gbc-cyan lg:hidden">
                                    <span className="absolute -bottom-1 left-1/2 size-3 -translate-x-1/2 rounded-full bg-gbc-blue" />
                                </div>
                            </>
                        )}
                        <div aria-hidden="true" className="relative hidden lg:col-start-2 lg:row-start-1 lg:block">
                            <span className={`absolute left-1/2 size-3 -translate-x-1/2 rounded-full bg-gbc-blue ${mostrarMes ? "top-3" : "top-4"}`} />
                            {haySiguiente && <span className={`absolute left-1/2 w-0.5 -translate-x-1/2 bg-gbc-blue ${mostrarMes ? "-bottom-11 top-3" : "-bottom-12 top-4"}`} />}
                        </div>
                        <div className={`min-w-0 lg:col-start-3 lg:row-start-1 ${mostrarMes ? "lg:[&_article_h3]:hidden" : ""}`}>
                            <ExperienciaCard
                                img={experiencia.img}
                                mes={experiencia.mes}
                                empresas={experiencia.empresa}
                                trabajos={experiencia.trabajos}
                                ubicacion={experiencia.lugar}
                            />
                        </div>
                        {mostrarMes && haySiguiente && <span aria-hidden="true" className="mx-auto my-5 block h-12 w-0.5 bg-gbc-cyan lg:hidden" />}
                    </li>
                );
            })}
        </ol>
    );
}
