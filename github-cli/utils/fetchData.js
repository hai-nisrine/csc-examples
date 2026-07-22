export async function fetchData(url) {

    try {

        const response = await fetch(url)

        if (!response.ok) {
        throw new Error(`${response.status}`)

        } else {

        const data = await response.json()
        return data

        }

    } catch(err) {
        throw err
    }

}