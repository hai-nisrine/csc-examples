import { fetchData } from './utils/fetchData.js'


const userInput = process.argv.slice(2)

if (userInput.length === 0) {
    console.log("You have to input a username")
    process.exit(1)

} else {
    async function main() {

        const username = userInput[0]
        const apiURL = `https://api.github.com/users/${username}/repos`

        try {

            const data = await fetchData(apiURL)
            console.log(data)

        } catch(err) {
            if (err.message ===  '404') {
                console.log(`The username ${username} couldn't be found`)

            } else {
                console.log(`There was an error: ${err.message}`)
            }
         
        }
    }

     main()
    }  



