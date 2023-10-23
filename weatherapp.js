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

var input = document.getElementById("q");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("bt").click();
  }
});
  
    async function fetchweather(name) {
        
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=c2a09b9fec5c8554787f8d63ccc5a2e2&units=metric&q="+name);
        const data = await response.json();
        console.log(data);
        img.src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png";
        locname.innerHTML = data.name;
        country.innerHTML = data.sys.country;
        desc.innerHTML = data.weather[0].main;
        let dayornight = (data.weather[0].icon).charAt((data.weather[0].icon).length-1);
        changeBackground(data.weather[0].main,dayornight);
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
        let dayornight = (data.weather[0].icon).charAt((data.weather[0].icon).length-1);
        changeBackground(data.weather[0].main,dayornight);
        tempc.innerHTML = data.main.temp+"°C";
        
      }

      
      function changeBackground(weatherType,dayornight) {
        const body = document.body;
        let imageUrl = '';
        
      
        switch (weatherType.toLowerCase()) {
          case 'smoke':
            imageUrl = 'images/smoke.jpg';
            break;
          case 'rain':
            imageUrl = 'images/rain.jpg';
            break;
          case 'clear':
            if(dayornight === "n"){
              imageUrl = 'images/clear-night.jpg';
              
            }
            else{
              imageUrl = 'images/clear.jpg';
            }
            break;
          case 'haze':
            imageUrl = 'images/smoke.jpg';
            break;
         
          case 'clouds':
            imageUrl = 'images/cloudy.jpg';
            break;
          
        }
      
        body.style.backgroundImage = `url(${imageUrl})`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
      }
      
      // Example usage:
      // changeBackground('rain'); // Change background to rain.jpg
      
  
