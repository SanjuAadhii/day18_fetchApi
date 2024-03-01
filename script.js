var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json").then(data => data.json()).then(data1 => bar(data1))
console.log(res)
// Api key = 14a494807d3a665e0f8c636b1b82f7b2 


// function foo(lat,lon){
//     var val = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=14a494807d3a665e0f8c636b1b82f7b2`).then(data1 =>data1.json()).then(data2 => console.log(data2.main.temp))
    
// }


var container =document.createElement("div");
container.className="container"

var row = document.createElement("div");
row.className="row";
row.style.marginTop="60px"



function bar(data){
    console.log(data)
    for(let i=0;i<data.length;i++){
        console.log(data[i].flag)
        var col = document.createElement("div");
        col.className="col-lg-4 col-sm-12";
        col.style.marginBottom = "30px";
        col.innerHTML=`<div class="card text-center " style="width: 18rem;background: rgb(131,58,180);
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.3981967787114846) 50%, rgba(252,176,69,1) 100%);">
        <h5 class="card-title" style="background-color:black;color:white;padding:2px" >${data[i].name}</h5>
        <img src="${data[i].flag}" class="card-img-top" alt="flag">
        <div class="card-body ">
        <p class="card-text">Capital : ${data[i].capital}</p>
        <p class="card-text">Region : ${data[i].region}</p>
        <p class="card-text">Country Code : ${data[i].alpha3Code}</p>
        <a href="#" class="btn" style="border:1px solid black;border-radius:10px">Click for weather</a>
        </div>
        </div>`;
        row.append(col)
        container.append(row)
        document.body.append(container)      
    }
}

