import { Inter } from "next/font/google"
import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
    return(
        <>
        <Head>
        <title>Hankook | Rework Monitoring</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.hankooktire.com/etc.clientlibs/hankooktire/clientlibs/clientlib-base/resources/favicon/favicon-32x32.png"
        />
        </Head>
        <div className={inter.className}>
            <div className="bg-white text-dark">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>

        </>
    )
}