import { about } from "../../constants"

export const GET = async() => {
return new Response(JSON.stringify(about), {
    headers: {
        'Content-Type': 'application/json'
    },
    status: 200
})
}