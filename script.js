const menuBtn=document.getElementById("menuBtn");const navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>{navMenu.classList.toggle("active");menuBtn.textContent=navMenu.classList.contains("active")?"✕":"☰"});
document.querySelectorAll("#navMenu a").forEach(link=>link.addEventListener("click",()=>{navMenu.classList.remove("active");menuBtn.textContent="☰"}));
document.getElementById("year").textContent=new Date().getFullYear();
const navbar=document.querySelector(".navbar");window.addEventListener("scroll",()=>{navbar.style.background=window.scrollY>50?"rgba(8,8,8,.92)":"rgba(8,8,8,.75)"});
const revealElements=document.querySelectorAll(".section-heading,.about-grid,.project-card,.skill-category,.timeline-item");
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";observer.unobserve(entry.target)}})},{threshold:.12});
revealElements.forEach(element=>{element.style.opacity="0";element.style.transform="translateY(30px)";element.style.transition="opacity .7s ease,transform .7s ease";observer.observe(element)});
document.querySelectorAll(".project-card").forEach(card=>{card.addEventListener("mousemove",event=>{if(innerWidth<800)return;const r=card.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top,cx=r.width/2,cy=r.height/2;card.style.transform=`translateY(-8px) rotateX(${((y-cy)/cy)*-2}deg) rotateY(${((x-cx)/cx)*2}deg)`});card.addEventListener("mouseleave",()=>card.style.transform="translateY(0) rotateX(0) rotateY(0)")});
