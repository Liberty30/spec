import { DokzProvider, GithubLink, ColorModeSwitch } from "dokz";
import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <ChakraProvider resetCSS>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Fira+Code"
                    rel="stylesheet"
                    key="google-font-Fira"
                />
            </Head>
            <DokzProvider
                headerLogo={<Image src="/Unfinished-logo.jpg"
                                   alt="unfinished logo"
                                   height={50}
                                   width={230}
                />}
                headerItems={[
                    <GithubLink
                        key="0"
                        url="https://github.com/LibertyDSNP/spec"
                    />,
                    <ColorModeSwitch key="1" />,
                ]}
                sidebarOrdering={{
                    "index.md": true,
                    "DSNP": {
                        "Implementation_Status.md": true,
                        "Identity": {
                          "Overview.md": true,
                        },
                        "Graph": {
                          "Overview.md": true,
                        },
                        "Messages": {
                          "Overview.md": true,
                          "Serialization.md": true,
                          "Types.md": true,
                        },
                        "Archives": {
                          "Overview.md": true,
                        },
                        "Future Proposals": {
                          "Keys": true,
                          "Verified_Attributes": true,
                        }
                    },
                    "Reference": {
                        "glossary.md": true,
                    },
                }}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </ChakraProvider>
    )
};