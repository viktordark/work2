fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
    .then(res => res.json())
    .then(data =>{
        for(capital in data){
            list_of_capital.innerHTML += `<li>${data[capital].capital}</li>`
        }
    });

