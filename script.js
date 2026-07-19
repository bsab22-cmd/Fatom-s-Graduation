const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

const music = document.getElementById("bgMusic");
const vinyl = document.querySelector(".vinyl");

let opened = false;
let playing = false;

/* ========================= */
/* OPEN INVITATION */
/* ========================= */

function openInvitation(){

if(opened) return;

opened = true;

const envelope = document.querySelector(".envelope");

envelope.style.transform =
"scale(.88) translateY(60px)";

envelope.style.opacity = "0";

setTimeout(()=>{

cover.style.display="none";

invitation.style.display="flex";

},700);

}

/* ========================= */
/* MUSIC */
/* ========================= */

function toggleMusic(){

if(!playing){

music.play();

vinyl.classList.add("playing");

playing=true;

}else{

music.pause();

vinyl.classList.remove("playing");

playing=false;

}

}
/* ========================= */
/* PARALLAX */
/* ========================= */

document.addEventListener("mousemove",(e)=>{

const card=document.querySelector(".card");

if(!card) return;

const x=(e.clientX/window.innerWidth-.5)*8;

const y=(e.clientY/window.innerHeight-.5)*8;

card.style.transform=
`translate(${x/3}px,${y/3}px)`;

});
/* ========================= */
/* COUNTDOWN */
/* ========================= */

const eventDate = new Date("2026-07-26T20:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = eventDate-now;

if(distance<0){

document.getElementById("days").textContent="00";
document.getElementById("hours").textContent="00";
document.getElementById("minutes").textContent="00";
document.getElementById("seconds").textContent="00";

return;

}

document.getElementById("days").textContent =
Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").textContent =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").textContent =
Math.floor((distance%(1000*60*60))/60000);

document.getElementById("seconds").textContent =
Math.floor((distance%(1000*60))/1000);

},1000);