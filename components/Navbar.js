import Image from "next/image"

export default function Navbar(){
    return(
        <>
        <nav className="flex flex-row justify-between py-4 px-80 bg-white shadow-lg border-b top-0 fixed w-full items-center">
            <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hankook_Tire_logo.svg"
            width={150}
            height={150}>
            </Image>
            <h1 className="font-bold italic"></h1>
            <h1 className="font-bold text-sm">Rework App</h1>
        </nav>
        </>
    )
}