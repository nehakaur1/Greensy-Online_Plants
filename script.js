  // menubar
  let menubari1=document.querySelector(".menubar_icon");
  let menubari2=document.querySelector("#menubar_icon2");
  let menubar=document.querySelector(".menubar");

  menubari1.addEventListener("click",()=>{
   menubar.classList.add("active")
  })

  menubari2.addEventListener("click",()=>{
    menubar.classList.remove("active") 
   })
//    category dropdown btn
let category_btn=document.querySelector(".dropdown_button");
let category_content=document.querySelector("#category_btn");
category_btn.addEventListener("click",()=>{
category_content.classList.toggle("active")
category_btn.classList.toggle("active")
})

//  top logo
 let top_btn=document.querySelector(".top_logo");
 window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        top_btn.classList.add("active")
    }
  else{
    top_btn.classList.remove("active")
  }
 });

 top_btn.addEventListener("click",()=>{
window.scrollTo({
    top:0,
    behavior:"smooth"
});
 });