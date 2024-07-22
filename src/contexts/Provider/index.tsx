'use client'

import { ReactNode } from "react"
import { ApiTMDBProvider } from "../ApiContextTMDB"

type ProviderProps = {
    children: ReactNode
}

const Provider = ({children}: ProviderProps) =>{
    return(
        <ApiTMDBProvider>
            {children}
        </ApiTMDBProvider>
    )
}

export default Provider