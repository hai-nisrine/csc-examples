
import { getDataFromDB } from "./database/db.js";
import { filterByCity, filterById, filterByUsername, sendJSONResponse, getDataFromQueryParam } from "./utils/filterUtils.js";
import http from 'node:http'

const PORT = 8000

const server = http.createServer(async(req, res) => {

    const users = await getDataFromDB()


    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    const queryObj = Object.fromEntries(urlObj.searchParams)


    if (urlObj.pathname === '/api/users' && req.method === "GET") {
        let filteredData = getDataFromQueryParam(users, queryObj)
        sendJSONResponse(res, 200, filteredData)
    } 
    
    else if (urlObj.pathname.startsWith("/api/users/address") && req.method === 'GET') {
        let city = req.url.split("/").pop() 
        const filteredData = filterByCity(users, city)
        sendJSONResponse(res, 200, filteredData)

    } else if (urlObj.pathname.startsWith("/api/users") && req.method === "GET") {
        let value = req.url.split("/").pop()
        if (isNaN(value)) {
            const filteredData = filterByUsername(users, value)
            sendJSONResponse(res, 200, filteredData)

        } else {
            const num = Number(value)
            const filteredData = filterById(users, num)
            sendJSONResponse(res, 200, filteredData)
        }

    } else {
        sendJSONResponse(res, 404, {
            error: "not found", 
            message: "The request route does not exist"
        })
    }
    


})

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

