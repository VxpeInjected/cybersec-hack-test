var N=15,L=+document.body.dataset.level||0,$=function(i){return document.getElementById(i)};
if(L&&!localStorage.t0)localStorage.t0=Date.now();
var lv=document.createElement("div");lv.id="lv";if(L)document.body.appendChild(lv);
function tick(){var s=Math.floor((Date.now()-localStorage.t0)/1000),p=function(n){return String(n).padStart(2,"0")};$("tm").textContent=p(Math.floor(s/60))+":"+p(s%60);lv.textContent=L+"/"+N}
if(L){tick();setInterval(tick,500)}
async function sha(s){var b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(function(x){return x.toString(16).padStart(2,"0")}).join("")}
$("g").addEventListener("submit",async function(e){e.preventDefault();var f=e.target;
if(await sha($("p").value.trim().toLowerCase())===f.dataset.hash)location.href=f.dataset.next;else $("m").textContent="Nope. Try again."});
var hs,hb=$("hb"),ht=$("ht"),hw=$("hint"),hk="h"+L;
function used(){hb.textContent="Hint (Opened)";hb.classList.add("used")}
if(sessionStorage.getItem(hk))used();
function fit(){if(hw.classList.contains("open"))ht.style.maxHeight=ht.scrollHeight+"px"}
window.addEventListener("resize",fit);
hb.onclick=async function(){
if(hw.classList.contains("open")){hw.classList.remove("open");ht.style.maxHeight="0";hb.setAttribute("aria-expanded","false");
setTimeout(function(){if(!hw.classList.contains("open"))ht.textContent=""},400);return}
if(!hs)hs=JSON.parse(atob(await(await fetch("hints.dat")).text()));
ht.textContent=hs[L-1];hw.classList.add("open");fit();hb.setAttribute("aria-expanded","true");
sessionStorage.setItem(hk,"1");used();
setTimeout(function(){hw.scrollIntoView({block:"nearest",behavior:"smooth"})},380)};
