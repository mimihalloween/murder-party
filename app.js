const posts=[
 {emoji:"☕",likes:"38 j’aime",caption:"Pause entre deux journées. J’ai officiellement besoin d’un café IV.",comments:["clara_m: Courage 😂","lola_tvr: Je prends les transmissions à 7h demain."]},
 {emoji:"🌴",likes:"51 j’aime",caption:"Je pourrais facilement m’habituer à ça.",comments:["emma.r: Tu nous ramènes un peu de soleil ?"]},
 {emoji:"🥐",likes:"27 j’aime",caption:"Les petits plaisirs avant d’aller bosser.",comments:["margot: Team petit-déj salé ici."]},
 {emoji:"🌊",likes:"44 j’aime",caption:"Pas envie de rentrer.",comments:["lucie: Ça se voit 😭"]},
 {emoji:"🩺",likes:"32 j’aime",caption:"Quand tu dis que tu fais une sieste et que ton téléphone sonne 4 minutes après.",comments:["anais: La vie d’infirmière quoi."]},
 {emoji:"🏔️",likes:"36 j’aime",caption:"Le Pérou était complètement fou.",comments:["julie.p: Encore des photos !!"]},
 {emoji:"🍜",likes:"29 j’aime",caption:"Je pourrais manger ça tous les jours.",comments:[]},
 {emoji:"🌙",likes:"42 j’aime",caption:"Longue journée. Maintenant dodo.",comments:["camille: Demain ça recommence 😭"]},
 {emoji:"✈️",likes:"47 j’aime",caption:"Toujours partante pour repartir.",comments:["emma.r: Prochaine destination ?"]},
];

const chat=[
["them","J’ai enfin fini ma journée."],
["me","Et alors, tu as survécu ? 😌"],
["them","À peine. J’ai passé ma journée à courir partout."],
["me","Tu devrais apprendre à dire non de temps en temps."],
["them","C’est toi qui dis ça ? 😂"],
["me","Je suis infirmière, c’est différent. Je suis payée pour sauver des gens."],
["them","Moi je suis juste payé pour faire semblant d’être organisé."],
["me","Ça te ressemble assez bien."],
["them","Tu sais que je commence à vraiment aimer parler avec toi ?"],
["me","Tu commences seulement ?"],
["them","Disons que je me suis habitué à attendre tes messages."],
["me","C’est mignon ça."],
["them","Je suis sérieux."],
["me","Je sais."],
["them","Au fait, je pensais à un truc aujourd’hui."],
["me","Ça devient inquiétant."],
["them","J’ai eu un ami quand j’étais plus jeune. Il est mort il y a quelques années."],
["me","Oh… je suis désolée. Tu ne m’en avais jamais parlé."],
["them","J’en parle rarement. Ça me fait toujours bizarre d’y repenser."],
["me","Tu peux m’en parler si tu veux. Je ne vais pas te juger."],
["them","Merci ❤️"],
["me","Et sinon, raconte-moi quelque chose de moins triste."],
["them","J’ai croisé mon ex aujourd’hui."],
["me","La fameuse ex ?"],
["them","Oui. Et je crois vraiment que je vais arrêter cette histoire pour de bon."],
["me","Pour de bon ?"],
["them","Oui. J’en ai marre de faire semblant. Surtout maintenant."],
["me","Maintenant ? 👀"],
["them","Tu sais très bien ce que je veux dire."],
["me","Peut-être que j’aime bien te faire parler."],
["them","Peut-être que j’aime bien quand tu me fais parler."],
["me","Tu flirtes avec moi là ?"],
["them","Depuis un moment, Lola."],
["me","Alors continue."],
["them","Avec plaisir. ❤️"],
["me","Bonne nuit, Logan."],
["them","Bonne nuit, Lola. Et demain tu m’envoies une photo de ton café."],
["me","Seulement si tu m’envoies la tienne d’abord."],
["them","Marché conclu."]
];

const stories={
hawai:{title:"Hawai",emoji:"🌺🌊",caption:"Quelques jours au paradis. J’y retournerais demain sans réfléchir."},
perou:{title:"Pérou",emoji:"🗿⛰️",caption:"Des paysages complètement dingues et beaucoup trop de photos."}
};

const grid=document.getElementById("grid");
posts.forEach((p,i)=>{const d=document.createElement("div");d.className="tile";d.textContent=p.emoji;d.onclick=()=>showPost(i);grid.appendChild(d)});

function activate(id){document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.getElementById(id).classList.add("active");window.scrollTo(0,0)}
function showPost(i){const p=posts[i];document.getElementById("postImage").textContent=p.emoji;document.getElementById("postImage").style.background=p.bg||getComputedStyle(document.querySelectorAll(".tile")[i]).background;document.getElementById("postLikes").textContent=p.likes;document.getElementById("postCaption").innerHTML="<b>lola_tvr</b> "+p.caption;document.getElementById("postComments").innerHTML=p.comments.map(x=>`<div class="comment">${x}</div>`).join("");activate("postView")}
function openStory(key){const s=stories[key];document.getElementById("storyTitle").textContent=s.title;document.getElementById("storyImage").textContent=s.emoji;document.getElementById("storyCaption").textContent=s.caption;activate("storyView")}
function showDM(){document.getElementById("threads").innerHTML=`<div class="thread" onclick="showChat()"><div class="mini-avatar">L</div><div class="info"><b>Logan</b><br><small>${chat[chat.length-1][1]}</small></div></div>`;activate("dmView")}
function showChat(){document.getElementById("chat").innerHTML=chat.map(m=>`<div class="bubble ${m[0]}">${m[1]}</div>`).join("");activate("chatView")}
document.getElementById("openDm").onclick=showDM;
document.getElementById("homeBtn").onclick=()=>activate("profileView");
document.getElementById("profileBtn").onclick=()=>activate("profileView");
document.querySelectorAll(".back").forEach(b=>b.onclick=()=>activate("profileView"));
