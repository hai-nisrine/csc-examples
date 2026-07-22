export function filterById(arr, userId) {
    return arr.find((a) => {
        return a.id === userId
    })
}

export function filterByCity(arr, userCity) {
    return arr.filter((a) => {
       return a.address.city.toLowerCase() === userCity.toLowerCase()
    })
}

export function sendJSONResponse(res, statusCode, payload) {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    res.end(JSON.stringify(payload))
}

