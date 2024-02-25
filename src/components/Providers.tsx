"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Providers = ({children}: Props) => {
    return (<ChakraProvider><SessionProvider>{children}</SessionProvider></ChakraProvider> )
};

export default Providers;