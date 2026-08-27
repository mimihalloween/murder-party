const posts=[
 {emoji:"🌅",likes:"126 j'aime",caption:"Quelques jours à Willow Lake. J'avais besoin de calme.",comments:["thomas.d: Tu aurais pu prévenir.","lena.martin: Je sais."]},
 {emoji:"🐎",likes:"89 j'aime",caption:"Il est toujours là quand il faut. 🤎",comments:["naomi.r: Le cheval ou la personne ?","lena.martin: Haha."]},
 {emoji:"🍸",likes:"203 j'aime",caption:"Une soirée qui devait être tranquille.",comments:["clara.b: Spoiler : non.","paul_17: On en reparle."]},
 {emoji:"📷",likes:"71 j'aime",caption:"Archive. Ne pas supprimer.",comments:["thomas.d: Pourquoi tu gardes ça ?"]},
 {emoji:"🌙",likes:"154 j'aime",caption:"23:47.",comments:["naomi.r: Tu étais où ?"]},
 {emoji:"🌾",likes:"64 j'aime",caption:"Dimanche.",comments:[]},
 {emoji:"☕",likes:"92 j'aime",caption:"Matin difficile.",comments:["clara.b: Encore ?"]},
 {emoji:"🎞️",likes:"48 j'aime",caption:"Certains souvenirs devraient rester privés.",comments:[]}
];

const chats={
"Thomas D.":{avatar:"TD",messages:[["them","Tu dois vraiment supprimer la photo."],["me","Quelle photo ?"],["them","Celle de Willow Lake."],["me","Tu me fais rire. Pourquoi ?"],["them","Parce qu'on voit qui était là."]]},
"Naomi R.":{avatar:"NR",messages:[["them","Tu étais où hier soir ?"],["me","Chez moi."],["them","Léna."],["me","Quoi ?"],["them","Ne mens pas à tout le monde."]]},
"Compte inconnu":{avatar:"?",messages:[["them","23h47. Parking."],["them","Même endroit."],["me","Qui êtes-vous ?"],["them","Tu sais très bien."]]}
};

const grid=document.getElementById("grid");
posts.forEach((p,i)=>{let d=document.createElement("div");d.className="tile";d.textContent=p.emoji;d.onclick=()=>showPost(i);grid.appendChild(d)});

function activate(id){document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.getElementById(id).classList.add("active");window.scrollTo(0,0)}
function showPost(i){const p=posts[i];document.getElementById("postTitle").textContent=`lena.martin`;document.getElementById("postImage").textContent=p.emoji;document.getElementById("postLikes").textContent=p.likes;document.getElementById("postCaption").innerHTML="<b>lena.martin</b> "+p.caption;document.getElementById("postComments").innerHTML=p.comments.map(x=>`<div class="comment">${x}</div>`).join("");activate("postView")}
function showDM(){document.getElementById("threads").innerHTML=Object.entries(chats).map(([name,c])=>`<div class="thread" onclick="showChat('${name}')"><div class="mini-avatar">${c.avatar}</div><div class="info"><b>${name}</b><br><small>${c.messages[c.messages.length-1][1]}</small></div></div>`).join("");activate("dmView")}
function showChat(name){const c=chats[name];document.getElementById("chatName").textContent=name;document.getElementById("chat").innerHTML=c.messages.map(m=>`<div class="bubble ${m[0]}">${m[1]}</div>`).join("");activate("chatView")}
document.getElementById("openDm").onclick=showDM;
document.getElementById("homeBtn").onclick=()=>activate("profileView");
document.getElementById("profileBtn").onclick=()=>activate("profileView");
document.querySelectorAll(".back").forEach(b=>b.onclick=()=>activate("profileView"));
