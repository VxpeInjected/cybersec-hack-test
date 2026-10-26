var N=15,L=+document.body.dataset.level||0,$=function(i){return document.getElementById(i)};
if(L&&!localStorage.t0)localStorage.t0=Date.now();
function tick(){var s=Math.floor((Date.now()-localStorage.t0)/1000),p=function(n){return String(n).padStart(2,"0")};$("tm").textContent=p(Math.floor(s/60))+":"+p(s%60)+"  ·  "+L+"/"+N}
if(L){tick();setInterval(tick,500)}
async function sha(s){var b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(function(x){return x.toString(16).padStart(2,"0")}).join("")}
$("g").addEventListener("submit",async function(e){e.preventDefault();var f=e.target;
if(await sha($("p").value.trim().toLowerCase())===f.dataset.hash)location.href=f.dataset.next;else $("m").textContent="Nope. Try again."});
var hs;$("hb").onclick=async function(){var p=$("ht");if(p.textContent){p.textContent="";return}
if(!hs)hs=JSON.parse(atob(await(await fetch("hints.dat")).text()));p.textContent=hs[L-1]};
