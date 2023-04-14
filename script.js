

const button = document.querySelector(".btn")


let weather = {



    fetchWeather: function (City) {
        let cityTown = document.querySelector(".cityTown");
        let description = document.querySelector(".description");
        let wind1 = document.querySelector(".wind1");
        let humidity = document.querySelector(".humidity1");
        let temp1 = document.querySelector(".temp1");



        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=b1e2202ba6ba01e931c8b1d01148a249`
        )
            .then((response) => response.json())
            .then((data) => {
                cityTown.textContent = data.name
                description.textContent = data.weather[0].description
                Icon = data.weather[0].icon
                wind1.textContent = data.wind.speed
                wind1.textContent = data.wind.speed
                humidity.textContent = data.main.humidity
                temp1.textContent = Math.floor(data.main.temp)
                document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + Icon + "@2x.png"
                document.querySelector(".weather").classList.remove("loading")
                document.querySelector(".card").classList.remove("cardloading")
                document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + City + "')"
            });


    },

    Search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value)
    }







};




button.addEventListener('click', () => {

    weather.Search()

});
document.querySelector(".searchbar").addEventListener('keyup', (event) => {

    if (event.key == "Enter") {
        weather.Search()
    }

});

