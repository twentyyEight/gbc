import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-black p-5 pb-7 flex flex-col mt-20 md:flex-row md:justify-between md:p-8 lg:px-20 lg:py-8">
            <Image
                src="/grupo-buzos-comerciales-logo.png"
                alt="Grupo Buzos Comerciales Logo"
                width={160}
                height={100}
                className="w-auto h-24 md:h-[15%] lg:h-20 mx-auto md:mx-0"
            />
            <ul className="list-none text-white flex flex-col gap-2 mt-8 md:mt-0 lg:flex-row lg:items-center lg:gap-10">
                <div className="flex flex-col gap-2">
                    <li className="flex items-center gap-1.5">
                        <MdWhatsapp aria-hidden="true" size={25} />
                        <Link className="text-[1.1rem]!" href={'https://wa.me/56974318900'}>+56 9 7431 8900</Link>
                    </li>
                    <li className="flex items-center gap-1.5">
                        <MdWhatsapp aria-hidden="true" size={25} />
                        <Link className="text-[1.1rem]!" href="https://wa.me/56996936511">+56 9 9693 6511</Link>
                    </li>
                </div>
                <div className="flex flex-col gap-2">
                    <li className="flex items-center gap-1.5">
                        <MdEmail aria-hidden="true" size={25} />
                        <Link className="text-[1.1rem]!" href="mailto:clarence.gbcspa@gmail.com">clarence.gbcspa@gmail.com</Link>
                    </li>
                    <li className="flex items-center gap-1.5 text-[1.1rem]">
                        <MdLocationOn aria-hidden="true" size={25} />
                        Luis Cousiño 19, Quintero, V Región
                    </li>
                </div>
            </ul>

        </footer>
    )
}
