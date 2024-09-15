import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query"
import { getCookie } from "../../hooks/cookies"

const responseHandler = async (args, api, extra) => {
    console.log(args)
    console.log("api==>", api)
    console.log("extra==>", extra)

    const result = await
        fetchBaseQuery({
            baseUrl: 'http://192.168.1.13:5050/api',
            prepareHeaders: (headers) => {
                headers.set('authorization', getCookie("u") ? getCookie("u").token : "")
                return headers
            },
        }, api)

    console.log('from basee=>> ', result)
}

export default responseHandler