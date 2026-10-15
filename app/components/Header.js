export default function Header({ titulo, subtitulo }) {
    return (
        <header className="hero relative isolate -mx-8 w-[calc(100%+4rem)] mb-16 flex min-h-96 items-center justify-center overflow-hidden bg-gbc-navy px-5 py-16 text-center text-white before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(rgba(33,52,84,0.8),rgba(33,52,84,0.8)),url('/rov-submarino-grupo-buzos-comerciales.jpg')] before:bg-cover before:bg-center before:content-[''] md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:min-h-80 lg:justify-start lg:py-6 lg:text-left lg:before:bg-[linear-gradient(90deg,#213454_0%,rgba(33,52,84,0.95)_45%,rgba(33,52,84,0.2)_100%),url('/rov-submarino-grupo-buzos-comerciales.jpg')] lg:before:bg-right xl:-mx-20 xl:w-[calc(100%+10rem)] xl:px-20">
            <div className="w-full max-w-md lg:max-w-xl">
                <h1 className="text-[clamp(2rem,9vw,2.7rem)] font-bold leading-tight lg:text-[2.5rem]">{titulo}</h1>
                <p className="mt-2 text-[clamp(1.1rem,5vw,1.2rem)]! lg:mt-1 lg:text-[1.1rem]!">{subtitulo}</p>
            </div>
        </header>
    );
}
