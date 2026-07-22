import { getDataFromDB } from "./database/db.js";
import { filterByCity, filterById, sendJSONResponse } from "./utils/filterUtils.js";
import http from 'node:http'

const PORT = 8000

const server = http.createServer(async(req, res) => {
    const users = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        console.log(users)
    } else if (req.url.startsWith("/api/users/address") && req.method === 'GET') {
        let city = req.url.split("/").pop() 
        const filteredData = filterByCity(users, city)
        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith("/api/users") && req.method === "GET") {
        let num = Number(req.url.split("/").pop())
        const filteredData = filterById(users, num)
        sendJSONResponse(res, 200, filteredData)

    } else {
        sendJSONResponse(res, 404, ({error: "not found"}, {message: "The request route does not exist"}))
    }
    


})

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

