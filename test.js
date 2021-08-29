//Practice 1 Fettching only Data
/*
const getData = () =>{
    const url = `https://jsonplaceholder.typicode.com/users`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

*/


//Practice 2 Fetching Data an and show property
/*
const getData = () =>{
    const url = `https://jsonplaceholder.typicode.com/users`
    fetch(url)
        .then(res => res.json())
        .then(data => displayProperty(data))
}

const displayProperty = (items) =>{
    for (const item of items){
        console.log(`${item.name} ${item.email}`
        )
    }
}   
*/


//Pract 3 Using For Loop const getData = () =>{
/*
const getData= () =>{    
    const url = `https://jsonplaceholder.typicode.com/users`
    fetch(url)
        .then(res => res.json())
        .then(data => displayProperty(data))
}

const displayProperty = (items) =>{
    items.forEach((item)=>{
        console.log(`${item.email}`);
    })
}  
*/

