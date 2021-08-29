//https://randomuser.me/api/?results=10

const getData = () =>{
    const url = `https://randomuser.me/api/?results`
    fetch(url)
        .then(res =>res.json())
        .then(data =>displayUser(data))
}

const displayUser = (items)=>{
    const container = document.getElementById('container');
    const resultArray= items.results
    container.textContent = '';
    resultArray.forEach((item)=>{
        const div= document.createElement('div'); 
        div.classList.add('insideDiv')
       
        div.innerHTML = `
           
                <div class="card mx-auto" style="width: 18rem; height:10rem">
                    <img src="${item.picture.large}" class="card-img-top" alt="User Pic">
                    <div class="card-body">
                    <h5 class="card-title"> ${item.name.first} ${item.name.last}</h5>
                    <div class="cardParaDiv">
                       <p class="cardPara"> <span class="fw-bold"> Country: </span> ${item.location.country} </p>
                       <p class="cardPara"> <span class="fw-bold"> State: </span> ${item.location.state} </p>
                       <p class="cardPara"> <span class="fw-bold"> City:  </span> ${item.location.city} </p>
                       <p class="cardPara"> <span class="fw-bold"> Postcode: </span> ${item.location.postcode} </p>
                    </div>
                    Email: ${item.email}
                    </div>
                </div>
            `
            container.appendChild(div); 
        })
}