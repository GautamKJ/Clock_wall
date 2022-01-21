console.log('clock');
let second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');

function setTime() {
    const now = new Date();
    const scnd = now.getSeconds();
    // console.log(scnd);
    let secondDeg = ((scnd / 60) * 360) + 90;
    second.setAttribute('style', `transform: rotate(${secondDeg}deg);`);

    const mint = now.getMinutes();

    let minuteDeg = ((mint / 60) * 360) + 90;

    minute.setAttribute('style', `transform: rotate(${minuteDeg}deg);`);


    const hr = now.getHours();
    console.log(hr);

    let hourDeg = ((hr / 12) * 360) + 90;

    hour.setAttribute('style', `transform: rotate(${hourDeg}deg);`);
}

setInterval(setTime, 1000);