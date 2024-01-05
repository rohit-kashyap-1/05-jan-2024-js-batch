//url
//endpoint: https://dummyjson.com/users

//fetch(): fetch()

function fetchData(){
   fetch('https://dummyjson.com/users').then(response => response.json()).then((data)=>{

   let users =data.users

   //let users = [{name:'Rohit'},{name:'Abhishek'}]
   let ul = document.querySelector("#demo")
    ul.innerHTML  =''
   users.forEach(function(value,index){
    
    ul.innerHTML +=`
    
    <div class="col-md-3">
                <div class="card mb-4">
                    <div class="card-body">
                        <img src='${value.image}' class='img-fluid'>
                        <h4 class="mb-0 h6">${value.firstName}</h4>
                    </div>
                </div>
            </div>`
   })
   //console.log(users)

   })
}

setTimeout(function(){fetchData()},1000)