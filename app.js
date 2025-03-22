const btn=document.getElementById("get");
const name=document.getElementById("name");
const species=document.getElementById("species");
const des=document.getElementById("description");
var i=1;
btn.onclick=()=>{

    axios.get('https://www.freetestapi.com/api/v1/birds')
    .then(function(response){
        console.log(response);
        name.textContent=response.data[i].name;
        species.textContent=response.data[i].place_of_found;
        des.textContent=response.data[i].description;
        i++;
    })
};