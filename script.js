function changeLang(lang){

document.documentElement.lang =
lang;

const elements =
document.querySelectorAll(
"[data-it]"
);

elements.forEach(el=>{

el.innerHTML =
lang==="it"
? el.dataset.it
: el.dataset.en;

});


const timezone =
document.getElementById(
"timezone-label"
);

timezone.innerHTML =

lang==="it"

?

"Ora locale: Italia 🇮🇹"

:

"Local time: New York 🇺🇸";


updateCountdown();

}



function getNowByTimezone(){

const lang =
document.documentElement.lang;



if(lang==="it"){

return new Date(

new Date().toLocaleString(
"en-US",
{
timeZone:
"Europe/Rome"
}

)

);

}



return new Date(

new Date().toLocaleString(
"en-US",
{
timeZone:
"America/New_York"
}

)

);

}



function updateCountdown(){

const weddingDate =

new Date(
"2027-05-28T15:00:00"
);



const now =
getNowByTimezone();



const distance =
weddingDate-now;



const days =
Math.floor(
distance/
1000/
60/
60/
24
);



const hours =
Math.floor(
(
distance%
(
1000*
60*
60*
24
)
)
/
(
1000*
60*
60
)
);



const minutes =
Math.floor(
(
distance%
(
1000*
60*
60
)
)
/
(
1000*
60
)
);



document
.getElementById(
"days"
)
.innerText =
days;



document
.getElementById(
"hours"
)
.innerText =
hours;



document
.getElementById(
"minutes"
)
.innerText =
minutes;

}



changeLang(
"it"
);

setInterval(
updateCountdown,
1000
);

document
.querySelectorAll(
".tip-card"
)

.forEach(card=>{

card.addEventListener(
"click",

()=>{

card.classList.toggle(
"active"
);

}

);

});