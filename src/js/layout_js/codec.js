let freq_lines = document.getElementsByClassName('fill-line');
let freq_num = document.querySelector('.freq-num');
let ptt = document.getElementsByClassName('ptt');
let text = document.querySelector('#dialog-text')
let d_box = document.querySelector('#dialog')

let count=0;
function connect() {
  count++;
  if(count<5){
  setRandomImages();
  char1.style.animation="1s infinite alternate blink";
  char2.style.animation="1s infinite alternate blink";
    for(let i=0;i<freq_lines.length;i++){
      freq_lines[i].style.animation="1s infinite linear alternate finding";
    }
    for(let j=0;j<ptt.length;j++){
      ptt[j].style.color="#7CD0AC";
    }
  let majnum=Math.floor(Math.random()*999);
  let minnum=Math.floor(Math.random()*99);
  if(majnum<100){majnum=majnum*10};
  if(minnum<10){minnum=minnum*10};
  let new_text=`${majnum}.${minnum}`.replaceAll(1,2);
  freq_num.innerHTML=`<p>${new_text}</p>`;
  freq_num.style.color="#7CD0AC"
  d_box.style.color="#f0f0f0"
  nextline();
  }
  else{
    stop();
    count=0;
  }
}

function nextline(){
  text.innerText=`${dialogues[Math.floor(Math.random()*dialogues.length)]}...`;
}

const dialogues=[
  "海賊王に俺はなる!",
  "私は正義だ!",
  "平和を守るために悪になる",
  "Bang",
  "ポテトチップスを取って...そして食べる!",
  "人は死んだら死ぬんだ",
  "月に代わってお仕置きよ!",
  "君の名前は…",
  "ガキはガキらしくよ、ニカーッと笑っていこうや",
  "Muda! Muda! Muda!",
  "La vie est drôle.",
  "Poems are made by fools like me, but only God can make a tree.",
  "Look around Eren, at these big [***] trees.",
  "Pornography can save the world!",
  "Hey, you spiky, aloe vera b*stard! Where the hell's Sasuke?",
  "Hey Mister! I am mad scientist!  It's so coooooooooool! Son of a b*tch!",
  "If I get reincarnated…I wanna become a clam.",
  "I'll gladly turn into a piece of paper!"
]

function stop(){
  char1.style.animation="none";
  char2.style.animation="none";
    for(let i=0;i<freq_lines.length;i++){
      freq_lines[i].style.animation="none";
    }
    for(let j=0;j<ptt.length;j++){
      ptt[j].style.color="#192E26";
    }
  freq_num.innerHTML=`<p>000.00</p>`;
  freq_num.style.color="#192E26"
  d_box.style.color="#a0a0a0"
  text.innerText="***DISCONNECTED***";
}
