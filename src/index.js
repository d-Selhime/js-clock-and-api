// // import Unsplash from 'unsplash-js';
//  import { accessKey, secretKey } from './config'

// // const unsplash = new Unsplash({
// //     applicationId: accessKey,
// //     secret: secretKey
// //   });
  
function getPic() {
    fetch('https://api.unsplash.com/photos/random/?client_id=90ea599df4e990256ce1fb140eabc195c549b00ada1f69e0a76b888990749ef1')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err))
} 
getPic();

 function updateClock() {
    let today = new Date()
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    minute = (minute < 10 ? '0' : '') + minute
    seconds = (seconds < 10 ? '0' : '') + seconds

    let timeOfDay = (hour < 12 ? 'AM' : 'PM')
    hour = (hour > 12) ? hour - 12 : hour
    hour = (hour === 0) ? 12 : hour

    let currentTime = hour + ':' + minute + ':' + seconds + ' ' + timeOfDay
    document.querySelector('.clock').innerHTML = currentTime

    setTimeout(updateClock, 1000)
}

window.onload = updateClock();

function todaysDate () {
    let today = new Date()
    let dd = today.getDate()

    let mm = today.getMonth()+1;

    let year = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm <10) {
        mm = '0' + mm
    }
    today = mm + '-' + dd + '-' + year
    document.querySelector('.date').innerHTML = today
}
todaysDate();