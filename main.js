const timeInputs = {
    seconds: document.querySelector('#seconds > input'),
    minutes: document.querySelector('#minutes > input'),
    hours: document.querySelector('#hours > input'),
    days: document.querySelector('#days > input'),
    weeks: document.querySelector('#weeks > input'),
    months: document.querySelector('#months > input')
};

const btn = document.querySelector('.button button');


timeInputs.seconds.addEventListener('input', function () {
    const sTime = parseFloat(timeInputs.seconds.value);
    
    timeInputs.minutes.value = Math.round(sTime / 60 * 100 ) / 100;
    timeInputs.hours.value = Math.round(sTime / 3600 * 100 ) / 100;
    timeInputs.days.value = Math.round(sTime / 86400 * 100 ) / 100;
    timeInputs.weeks.value = Math.round(sTime / 604800 * 100 ) / 100;
    timeInputs.months.value = Math.round(sTime / 2.628e+6 * 100 ) / 100;
});


timeInputs.minutes.addEventListener('input', function () {
    const mTime = parseFloat(timeInputs.minutes.value);
    
    timeInputs.seconds.value = Math.round(mTime * 60 * 100 ) / 100;
    timeInputs.hours.value = Math.round(mTime / 60 * 100 ) / 100;
    timeInputs.days.value = Math.round(mTime /1440 * 100 ) / 100;
    timeInputs.weeks.value = Math.round(mTime / 10080 * 100 ) / 100;
    timeInputs.months.value = Math.round(mTime / 43800 * 100 ) / 100;
});

timeInputs.hours.addEventListener('input', function () {
    const hTime = parseFloat(timeInputs.hours.value);
    
    timeInputs.seconds.value = Math.round(hTime * 3600 * 100 ) / 100;
    timeInputs.minutes.value = Math.round(hTime * 60 * 100 ) / 100;
    timeInputs.days.value = Math.round(hTime / 24 * 100 ) / 100;
    timeInputs.weeks.value = Math.round(hTime / 168 * 100 ) / 100;
    timeInputs.months.value = Math.round(hTime / 730 * 100 ) / 100;
});

timeInputs.days.addEventListener('input', function () {
    const dTime = parseFloat(timeInputs.days.value);
    
    timeInputs.seconds.value = Math.round(dTime * 86400 * 100 ) / 100;
    timeInputs.minutes.value = Math.round(dTime * 1440 * 100 ) / 100;
    timeInputs.hours.value = Math.round(dTime * 24 * 100 ) / 100;
    timeInputs.weeks.value = Math.round(dTime / 7 * 100 ) / 100;
    timeInputs.months.value = Math.round(dTime / 30.417 * 100 ) / 100;
});

timeInputs.weeks.addEventListener('input', function () {
    const wTime = parseFloat(timeInputs.weeks.value);
    
    timeInputs.seconds.value = Math.round(wTime * 604800 * 100 ) / 100;
    timeInputs.minutes.value = Math.round(wTime * 10080 * 100 ) / 100;
    timeInputs.hours.value = Math.round(wTime * 168 * 100 ) / 100;
    timeInputs.days.value = Math.round(wTime * 7 * 100 ) / 100;
    timeInputs.months.value = Math.round(wTime / 4.345 * 100 ) / 100;
});

timeInputs.months.addEventListener('input', function () {
    const moTime = parseFloat(timeInputs.months.value);
    
    timeInputs.seconds.value = Math.round(moTime * 2.628e+6 * 100 ) / 100;
    timeInputs.minutes.value = Math.round(moTime * 43800 * 100 ) / 100;
    timeInputs.hours.value = Math.round(moTime * 730 * 100 ) / 100;
    timeInputs.days.value = Math.round(moTime * 30.417 * 100 ) / 100;
    timeInputs.weeks.value = Math.round(moTime * 4.345 * 100 ) / 100;
});

btn.addEventListener('click', ()=>{
    timeInputs.seconds.value = ""
    timeInputs.minutes.value = ""
    timeInputs.hours.value = ""
    timeInputs.days.value = ""
    timeInputs.weeks.value = ""
    timeInputs.months.value = ""
})