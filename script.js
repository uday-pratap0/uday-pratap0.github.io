// Parallax on hero
document.addEventListener("mousemove", (e)=>{
  const hero = document.querySelector(".hero");
  if(!hero) return;
  const rect = hero.getBoundingClientRect();
  const cx = (e.clientX - rect.width/2)/rect.width;
  const cy = (e.clientY - rect.height/2)/rect.height;
  hero.querySelectorAll(".layer").forEach((el,i)=>{
    const depth = (i+1)*10;
    el.style.transform = `translate(${cx*depth}px, ${cy*depth}px) translateZ(${-120 + i*60}px) scale(${1.12 - i*0.06})`;
  });
});

// Lightbox for gallery
const lb = document.getElementById("lightbox");
if(lb){
  document.querySelectorAll(".item img").forEach(img=>{
    img.addEventListener("click", ()=> {
      lb.querySelector("img").src = img.src;
      lb.classList.add("active");
    });
  });
  lb.addEventListener("click", ()=> lb.classList.remove("active"));
}
