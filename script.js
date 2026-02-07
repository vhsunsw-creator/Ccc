const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("next");
let index = 0;

function typeWriter(el, speed = 30){
  const text = el.innerText;
  el.innerText = "";
  let i = 0;
  function type(){
    if(i < text.length){
      el.innerText += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

typeWriter(document.querySelector(".page.active .type"));

nextBtn.onclick = () => {
  pages[index].classList.remove("active");
  index++;
  if(index < pages.length){
    pages[index].classList.add("active");

    const typeEl = pages[index].querySelector(".type");
    if(typeEl) typeWriter(typeEl);

    const video = pages[index].querySelector("video");
    if(video) video.play();
  }
};

/* Gift click */
const gift = document.getElementById("giftBox");
const polaroid = document.getElementById("polaroid");
const heartsContainer = document.getElementById("hearts");

if(gift){
  gift.onclick = () => {
    gift.style.display="none";
    polaroid.classList.remove("hidden");

    for(let i=0;i<25;i++){
      const h=document.createElement("div");
      h.className="heart";
      h.innerText="💗";
      h.style.left=Math.random()*100+"vw";
      h.style.bottom="20px";
      heartsContainer.appendChild(h);
      setTimeout(()=>h.remove(),2000);
    }
  };
}
