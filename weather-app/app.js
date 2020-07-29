const request = require('request')
//° N, 
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5937&lon=78.9629&%20exclude=hourly,daily&appid=2a9f7d15a0ae6c691ec7095456bc3b02&units=metric&lang=af'

request({ url : url , json : true }, (error , response) => {
                console.log(response.body.daily[0].weather[0].description+'. It is currently '+ response.body.current.temp +' degrees out . There is '+ response.body.current.humidity +' humidity in weather')
})
