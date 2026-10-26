async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
document.getElementById('g').addEventListener('submit',async e=>{e.preventDefault();const f=e.target;
if(await sha(document.getElementById('p').value.trim().toLowerCase())===f.dataset.hash)location.href=f.dataset.next;
else document.getElementById('m').textContent='Nope. Try again.'});
