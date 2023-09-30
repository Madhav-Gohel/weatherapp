navigator.geolocation.getCurrentPosition((position) => {
    // position.coords.latitude, position.coords.longitude
    // let loc = "?lat="+position.coords.latitude + ","+position.coords.latitude;
    // let q = document.getElementById("q").value = loc;
   
    fetchweatherlatlon(position.coords.latitude,position.coords.longitude);
  });
const img = document.getElementById("icon");
const locname = document.getElementById("name");
const tempc = document.getElementById("tempc");
const region = document.getElementById("region");
const country = document.getElementById("country");
const desc = document.getElementById("desc");
  
    async function fetchweather(name) {
        
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=c2a09b9fec5c8554787f8d63ccc5a2e2&units=metric&q="+name);
        const data = await response.json();
        console.log(data);
        img.src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png";
        locname.innerHTML = data.name;
        country.innerHTML = data.sys.country;
        desc.innerHTML = data.weather[0].main;
        tempc.innerHTML = data.main.temp+"°C";
        
      }
      async function fetchweatherlatlon(lat,lon) {
        
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=c2a09b9fec5c8554787f8d63ccc5a2e2&units=metric&lat="+lat+"&lon="+lon);
        const data = await response.json();
        // console.log(data);
        img.src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png";
        locname.innerHTML = data.name;
        country.innerHTML = data.sys.country;
        desc.innerHTML = data.weather[0].main;
        tempc.innerHTML = data.main.temp+"°C";
        
      }
      
  
  
