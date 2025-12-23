import type { APIRoute } from "astro"
import {ui} from "../../../i18n/ui"

export const getStaticPaths = () => {
    return [
        {
            params: {
                language: 'en'
            }
        },
        {
            params: {
                language: 'el'
            }
        }
    ]
}

export const GET: APIRoute = async({params}) => {
    
    const lang = params.language as keyof typeof ui
    const aboutTitle =  ui[lang]['about.title'] || ui.en
    const aboutText =  ui[lang]['about.text'] || ui.en

    return new Response(JSON.stringify({aboutText, aboutTitle}), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 200
    })
}