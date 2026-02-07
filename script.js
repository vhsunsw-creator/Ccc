const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
let index = 0;

function typeWriter(el, speed = 28){
  const html = el.innerHTML
    .replace(/\n\s*\n/g, "<br><br>")
    .replace(/\n/g, "<br>");

  el.innerHTML = "";
  let i = 0;

  function type(){
    if(i < html.length){
      el.innerHTML += html.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// first page
const first = document.querySelector(".page.active .type");
if(first) typeWriter(first);

nextBtn.onclick = () => {
  pages[index].classList.remove("active");
  index++;

  if(index < pages.length){
    pages[index].classList.add("active");

    const el = pages[index].querySelector(".type");
    if(el) typeWriter(el);

    const video = pages[index].querySelector("video");
    if(video) video.play();
  }
};

/* Gift interaction */
const gift = document.getElementById("giftBox");
const polaroid = document.getElementById("polaroid");
const heartsContainer = document.getElementById("hearts");

if(gift){
  gift.onclick = () => {
    gift.style.display = "none";
    polaroid.classList.remove("hidden");

    for(let i=0;i<25;i++){
      const h = document.createElement("div");
      h.className = "heart";
      h.innerText = "💗";
      h.style.left = Math.random()*100 + "vw";
      h.style.bottom = "20px";
      heartsContainer.appendChild(h);
      setTimeout(()=>h.remove(),2000);
    }
  };
}
