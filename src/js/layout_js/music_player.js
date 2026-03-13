let prev_button = document.getElementById("prev");
let play_button = document.getElementById("playpause");
let next_button = document.getElementById("next");
let audio = document.getElementById("audio");
let progress_bar = document.getElementById("progress-fill");
let dropdown = document.getElementById("dropdown");

let songs=[
  "shiawa",
  "somf",
  "oyasumi"
];
let currsongno=Math.floor(Math.random() * songs.length);
let currsong=songs[currsongno];

for (let i=0;i<songs.length;i++){
  let option = document.createElement('option');
  option.setAttribute("onclick",`choose(${i})`);
  option.innerHTML=`<b> ${songs[i]} <3 </b>`;
  document.getElementById("dropdown").appendChild(option);
}

function choose(num){
  audio.setAttribute("src",`/assets/music/${songs[num]}.mp3`);
  currsong=songs[num];
  audio.play();
  currsongno=num;
}

function prevnext(num){
  // 0 for prev and 1 for next
  if(num==0){
    let new_index=currsongno==songs.length-1 ? 0 : currsongno+1;
    choose(new_index);
    currsongno=new_index;
  }
  else{
    let new_index=currsongno==0 ? songs.length-1 : currsongno-1;
    choose(new_index);
    currsongno=new_index;
  }
  
}

Window.onload=audio.setAttribute("src",`/assets/music/${currsong}.mp3`)
audio.onended= () =>{
  currsongno=Math.floor(Math.random() * songs.length);
  currsong=songs[currsongno];
  audio.setAttribute("src",`/assets/music/${currsong}.mp3`);
  audio.play();
};
setInterval(() => {
    if(audio.paused==false){
      let filling=Math.floor((audio.currentTime/audio.duration)*100)
      progress_bar.style.width=`${filling}%`
    }
}, 1000);

function playpause(){
  if(audio.paused==false){
    play_button.setAttribute("src","/assets/main_layout/leftbar/play.png");
    audio.pause();
  }
  else{
    progress_bar.style.animation="none";
    play_button.setAttribute("src","/assets/main_layout/leftbar/pause.png");
    audio.play();
  }
}


