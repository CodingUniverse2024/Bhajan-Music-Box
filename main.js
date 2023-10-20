//Data Structures
let data = [
    {
    title : "Om Nava Shivaya",
    img:"v1.jpg",
    src:"m1.mp3"
},{
    title: "Ram Siya Ram",
    img:"v2.jpg",
    src:"m2.mp3"
}];
let audio = new Audio();
let tit = document.getElementById('title');
let index = 0;
let as = 0;
function play_x(){
document.getElementById('logo').src = data[index].img;
tit.innerHTML = data[index].title;
audio.src = data[index].src;
if(as==0){
    as=1;
    audio.play();
}else{
as =0;
audio.pause();}
}
function prev(){index--; play_x(); audio.play()}
function next(){index++;play_x();audio.play()}
