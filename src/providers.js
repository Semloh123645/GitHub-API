import React from "react"
import GithubProvider from "./providers/GithubProvider"
import { ResetCSS } from "./global/resetCSS"
import App from "./App"

const Providers = () => {
    return (
    <>
        <GithubProvider>
            <ResetCSS/>
            <App/>
        </GithubProvider>
    </>
    )
}
export default Providers