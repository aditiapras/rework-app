import { Inter } from "next/font/google"
import Head from "next/head"
import Navbar from "./Navbar"

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
    return(
        <>
        <Head>
        <title>Hankook Tire Rework Monitoring</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={inter.className}>
            <div className="bg-white text-dark">
                <Navbar />
            {children}
            </div>
        </div>

        </>
    )
}