var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res = JSON.parse(request.response);
    console.log(res);

    for(var i=0; i<res.length; i++){
        console.log("country name is:",res[i].name,"region is:",res[i].region,"sub region is:",res[i].subregion,"population is:",res[i].population);
        }
};