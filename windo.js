const productContainers = [...document.querySelectorAll(".product-container")];

const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimnsions = item.getBoundingClientRect();
  let containerWidth = containerDimnsions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});


// ??????????????????????????????????????????????????????????????????????????????
const btnSider = document.getElementById("btn-sider");
const Sider = document.getElementById("sider");

btnSider.addEventListener('click',()=>{
  if(btnSider.classList.contains("fa-bars")){
    sider.classList.add("show");
    btnSider.classList.replace("fa-bars", "fa-close");
  }
  else
  {
    btnSider.classList.replace("fa-close" ,"fa-bars");
    sider.classList.remove("show");

  }

});

window.addEventListener("scroll", ()=>{
  let header = document.querySelector("header");
  header.classList.toggle("scroll", window.scrollY > 60);
});