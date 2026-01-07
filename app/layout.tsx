import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import Icon from '@/public/images/general/logo.svg?svgr'
import cn from 'clsx'
import './globals.css'
import {Metadata} from "next";
import {NextraSearchDialog} from "@/components/nextra-search-dialog";
import {getPagesFromPageMap} from "@/lib/getPagesFromPageMap";

export const metadata: Metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        default: 'Lichee-Jack-wiki',
        template: '%s | Lichee-Jack-wiki'
    },
    other: {
      'msapplication-TileColor': '#fff'
    }
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const navbar = (
    <Navbar
        projectLink="https://github.com/KaliAssistant/Lichee-Jack"
        logo={
            <Icon  
                height="35"
                className={cn(
                    'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
                    '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-size:400%] [mask-position:0]',
                    'hover:[mask-position:100%]'
                )}
            />
        }
        // ... Your additional navbar options
    />
)
const footer = <Footer>{new Date().getFullYear()} © KaliAssistant.</Footer>

export default async function RootLayout({children}) {
    const pageMap = await getPageMap();
    const pages = await getPagesFromPageMap({
        pageMapArray: pageMap,
        // modify page data if needed
        // filterItem: async (item) => {
        //     return {
        //         ...item,
        //     };
        // }
    });


    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head>
            <link rel="shortcut icon" href={`${basePath}/images/general/icon.svg`}/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            // banner={banner}
            navbar={navbar}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/KaliAssistant/Lichee-Jack-wiki/tree/main"
            footer={footer}
            search={<NextraSearchDialog pages={pages}/>}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}
