const getData = ()=>{

    const searchBox = document.getElementById('search-field');
    const searchText = searchBox.value ; 
    searchBox.value= ""; 

    const url =`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    fetch(url)
        .then(res =>res.json())
        .then(data => displayData(data))
}

const displayData = (items) =>{
    const cardContainer = document.getElementById('cardContainer'); 
    cardContainer.textContent =''
    const teamArray = items.teams; 
    teamArray.forEach((item)=>{
        const div = document.createElement('div'); 
        div.classList.add('col'); 
        div.innerHTML= `
        <div class="card" style="width: 18rem;">
            <img src="${item.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.strTeam}</h5>
            <p class="card-text">
                '${item.strSport}'
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        `

        cardContainer.appendChild(div); 

    })
    
    
}

