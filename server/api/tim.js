export default defineEventHandler(async (event) => {
    //handle query params
    // const { name } = getQuery(event)


    //handle post data
    // const { age } = await readBody(event)

    //api call with priv key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=YOURKEY')

    // return {
    //     message: `Hello, ${name}. You are ${age} years old.`
    // }
    return data
})