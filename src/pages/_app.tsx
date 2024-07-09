import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ogImage from "@/assets/opengraph-image.jpg";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>ICT SMAN 5 Kota Bekasi</title>
                <meta name="og:title" content="ICT SMAN 5 Kota Bekasi" />
                <meta
                    name="og:description"
                    content="Website official ekskul ICT SMAN 5 Kota Bekasi"
                />
                <meta
                    name="og:image"
                    content="https://media.discordapp.net/attachments/866552863264997376/1257407947903078450/ICT.jpg?ex=66844be8&is=6682fa68&hm=3ee175b30d0f108dd1bfa81844e35772322392d0ff3b313e47d9e3b2a85f2f6c&=&format=webp&width=856&height=661"
                />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="600" />
                <link rel="shortcut icon" href="./ICT.jpg" />
                <link rel="apple-touch-icon" sizes="180x180" href="./ICT.jpg" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./ICT.jpg"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="./ICT.jpg"
                />
                {/* Fonts */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}
