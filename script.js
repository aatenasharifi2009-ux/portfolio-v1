// Typed effect
const typedText = "Creative Director & UI/UX Specialist";
let i = 0;
function typing(){
  if(i < typedText.length){
    document.getElementById("typed-text").innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typing,60);
  }
}
typing();

// Skills animation
const skillSection = document.getElementById("profile-section");
const skillItems = document.querySelectorAll(".skill-item");
let skillsAnimated = false;

function animateSkills(){
  const scrollPos = window.scrollY + window.innerHeight;
  if(!skillsAnimated && scrollPos > skillSection.offsetTop + 50){
    skillItems.forEach((item,idx)=>{
      const progress = item.querySelector(".progress");
      const target = item.dataset.progress;
      setTimeout(()=>{ progress.style.width = target + "%"; }, idx*200);
    });
    skillsAnimated = true;
  }
}
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{ threshold:0.3 });

reveals.forEach(section=>{
  observer.observe(section);
});

// Projects detail
const projectsData={
  poster:[
    "assets/projects/poster1.jpg","assets/projects/poster2.jpg","assets/projects/poster3.jpg","assets/projects/poster4.jpg"
  ],
  cover:[
    "assets/projects/cover1.jpg","assets/projects/cover2.jpg","assets/projects/cover3.jpg","assets/projects/cover4.jpg"
  ],
  branding:[
    "assets/projects/branding1.jpg","assets/projects/branding2.jpg","assets/projects/branding3.jpg","assets/projects/branding4.jpg"
  ]
};

const projectCards=document.querySelectorAll(".project-card");
const detailGrid=document.getElementById("detail-grid");
const closeBtn=document.getElementById("close-btn");

function showCategory(category){
  detailGrid.innerHTML="";
  projectsData[category].forEach(src=>{
    const div=document.createElement("div");
    div.classList.add("project-card");
    div.innerHTML = `<img src="${src}" alt="نمونه کار">
    <div class="project-overlay"><h3>نمونه کار</h3></div>`;
    detailGrid.appendChild(div);
  });
  detailGrid.classList.add("active");
  closeBtn.style.display="inline-block";
  detailGrid.scrollIntoView({behavior:"smooth"});
}

projectCards.forEach(card=>{
  card.addEventListener("click",()=>{
    showCategory(card.dataset.category);
  });
});

closeBtn.addEventListener("click",()=>{
  detailGrid.classList.remove("active");
  closeBtn.style.display="none";
});
