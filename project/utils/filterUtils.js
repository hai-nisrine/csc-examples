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

export function filterByUsername(arr, username) {
    return arr.find((a) => {
        return a.username.toLowerCase() === username.toLowerCase()
    })
}

export function sendJSONResponse(res, statusCode, payload) {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}

