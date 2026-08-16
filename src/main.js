const toggle=document.querySelector('.hamb');
const drawer=document.querySelector('.drawer');
toggle?.addEventListener('click',()=>{
const open=!drawer.classList.contains('show');
drawer.classList.toggle('show',open);
document.body.classList.toggle('locked',open);
toggle.setAttribute('aria-expanded',String(open));
toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
toggle.textContent=open?'×':'☰';
drawer.setAttribute('aria-hidden',String(!open));
}
);
drawer?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
drawer.classList.remove('show');
document.body.classList.remove('locked');
toggle.setAttribute('aria-expanded','false');
toggle.setAttribute('aria-label','Open menu');
toggle.textContent='☰';
drawer.setAttribute('aria-hidden','true');
}
));

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){
const io=new IntersectionObserver(entries=>entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add('in');
io.unobserve(e.target)}
}
),{
threshold:.12}
);
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));

