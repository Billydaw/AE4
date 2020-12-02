let lluvia = [40,60,110,70,20,15,10,15,90,120,80,50];
let temperatura = [3,4,3,5,7,10,12,15,12,10,7,5];
let mes = [1,2,3,4,5,6,7,8,9,10,11,12];

let context = document.getElementById('myChart').getContext('2d');
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'mm3',
                type: 'line',
                data: lluvia

            },
            {
                label: 'ºC',
                backgroundColor: 'rgb(255, 100, 132)',
                borderColor: 'rgb(255, 100, 132)',
                data: temperatura
            }
        ],

    },
});

function validar() {


    const mesid = document.getElementById("mes").value;
    const temperaturaid = document.getElementById("temperatura").value;
    const lluviaid = document.getElementById("lluvia").value;
    const arraymesid = mesid.split(",");
    const arraytemperaturaid = temperaturaid.split(",");
    const arraylluviaid = lluviaid.split(",");


    if (mesid == "" && temperaturaid == "" && lluviaid == "") {
        alert("Introduzca los datos");
    } else if (mesid.length == temperaturaid.length && mesid.length == lluviaid.length && lluviaid.length == temperaturaid.length) {
        alert("Datos validos");
        arraymesid.forEach((element, index) => {
            lluvia[element - 1] = arraylluviaid[index];
            temperatura[element - 1] = arraytemperaturaid[index];
        });
        chart.update();
    } else {
        alert("Introduce datos en los campos");
    }

}