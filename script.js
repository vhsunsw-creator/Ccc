const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
let index = 0;

/* ✅ CORRECT TYPEWRITER (TEXT ONLY) */
function typeWriter(el, speed = 28){
  const text = el.textContent;   // IMPORTANT
  el.textContent = "";
  let i = 0;

  function type(){
    if(i < text.length){
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

/* Start first page */
const first = document.querySelector(".page.active .type");
if(first) typeWriter(first);

/* NEXT button */
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

/* 🎁 GIFT INTERACTION */
const gift = document.getElementById("giftBox");
const polaroid = document.getElementById("polaroid");
const heartsContainer = document.getElementById("hearts");

if(gift){
  gift.onclick = () => {
    gift.style.display = "none";
    polaroid.classList.remove("hidden");

    for(let i = 0; i < 25; i++){
      const h = document.createElement("div");
      h.className = "heart";
      h.innerText = "💗";
      h.style.left = Math.random() * 100 + "vw";
      h.style.bottom = "20px";
      heartsContainer.appendChild(h);
      setTimeout(() => h.remove(), 2000);
    }
  };
}
