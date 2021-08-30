const getInfo = () =>{
    const search_field = document.getElementById('search-field'); 
    let searchText = search_field.value; 
console.log(searchText)
    search_field.value = ''; 

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=a0b7f64e18db8b6cbe664914eeeab712`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => getTemperature(data))
}

const getTemperature = (item) =>{
    const weatherContainer = document.getElementById('weatherContainer');
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
    <div class="col-lg-4 col-sm-12 mt-sm-4">     
        <div class="card cardColor" style="width: 16rem;">
            <img class="card-img-top" src="./heat.jpg" alt="Card image cap">
            <div class="card-body">
                <div class="card-text">
                    <p>Temperature ${item.main.temp} </p>
                    <p>Max ${item.main.temp_max} </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-sm-12 12 mt-sm-4">     
        <div class="card cardColor" style="width: 16rem;">
        <img class="card-img-top" src="./fog.jpg_fit=scale" alt="Card image cap">
            <div class="card-body">
                <div class="card-text">
                    <p>Humidity ${item.main.humidity} </p>
                    <p>Max Humidity ${item.main.pressure} </p>
                </div>
            </div>
        </div>
    </div>
  
    <div class="col-lg-4 col-sm-12 mt-sm-4">     
    <div class="card cardColor" style="width: 16rem;">
    <img class="card-img-top" src="./wind.jpg" alt="Card image cap">
        <div class="card-body">
            <div class="card-text">
                <p>Pressure ${item.main.pressure} </p>
                <p>Wind Speed ${item.wind.speed} </p>
            </div>
        </div>
    </div>
</div>


    `
    weatherContainer.appendChild(div); 
}