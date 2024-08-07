const getCountry =(callback) =>{
    fetch('https://ipapi.co/json')
    .then(response =>response.json())
    .then(data =>{
        callback(data.utc_offset);
    })
    .catch(error=>{
        console.error('Error al obtener la informacion de geolocalizacion:', error);
        callback(null);
    });
}

/*Variables para el uso horario */
let state = '';
let utc3 = -300;
let result = 0;
const determineCounter = (utc2, utc3) =>{
    if(utc2===utc3){
        state = 'igual';
        return result, state;
    }
    if(utc2>utc3){
        let num = utc2-utc3;
        result = num/100
        state = 'mayor'
        return result, state
    }
    else if(utc2<utc3){
        let num = utc3-utc2;
        result = num/100;
        state = 'menor';
        return result, state;
    };
};

getCountry(utc=>{
    let utc2 = Number(utc);
    determineCounter(utc2, utc3)
    let countDate = new Date("Dec 31 2024 23:59:59").getTime()
    countdown(countDate, result, state)
});

const cero = 0;



const progressBar = document.getElementsByClassName('progress-bar')[0];

setInterval(()=>{
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
},5)