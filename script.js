

const url = "https://api.openweathermap.org/data/2.5/weather?&appid=a6347b783b7884ca7667688febb524ce&units=metric&q=";

const search = document.querySelector(".city-name");
const searchbtn = document.querySelector(".btn");


async function checkweather(city){
    const response = await fetch(url + city );
    const data = await response.json();
    console.log(data);
   document.querySelector(".city").innerHTML  = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
   document.querySelector(".wind").innerHTML  = data.wind.speed + "Km/h";
   document.querySelector(".humid").innerHTML  = data.main.humidity + "%"; 
   

}



    searchbtn.addEventListener("click", () =>{
        checkweather(search.value);
    })