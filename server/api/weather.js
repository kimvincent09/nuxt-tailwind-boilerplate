exports.handler =  async(req, res) => {
    const weather = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`)
    return weather
}