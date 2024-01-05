//url
//endpoint: https://dummyjson.com/users

//fetch(): fetch()

function fetchData(){
   fetch('https://dummyjson.com/products').then(response => response.json()).then((data)=>{

   let products =data.products
   

   //let products = [{name:'Rohit'},{name:'Abhishek'}]
   let ul = document.querySelector("#demo")
    ul.innerHTML  =''
    products.forEach(function(value,index){
    
    ul.innerHTML +=`
    
    <div class="col-md-3">
                <div class="card mb-4">
                    <div class="card-body">
                        <img src='${value.images[0]}' class='img-fluid img'>
                        <h4 class="mb-0 h6">${value.title}</h4>
                    </div>
                </div>
            </div>`
   })
   //console.log(users)

   })
}

setTimeout(function(){fetchData()},1000)