import Head from "next/head"
import { Montserrat } from "next/font/google";
import { FC, PropsWithChildren } from "react"
import LayoutHF from "./LayoutHF";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700']
}) 

interface ILayout {
    title?: string,
    isLogin?: boolean,
    className?: string
}


const getTitle = (title: string | undefined) => title ? `${title} | QuickDirection` : 'QuickDirection';

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, title, isLogin = true, className = '' }) => {
    return (
        <div style={{maxWidth: '2000px', margin: '0 auto'}} className={`${montserrat.className} ${className} `} >
            <Head>
                <title>{getTitle(title)}</title>
                <link rel="icon" href="/logo.svg" type="image.svg"/>
            </Head>
            {isLogin ?
                <LayoutHF>
                    {children}
                </LayoutHF> :
                <main>
                    {children}
                </main>
            }
        </div>
    )
}

export default Layout