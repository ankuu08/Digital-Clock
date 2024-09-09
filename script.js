let container=document.querySelector(".h6");
setInterval(() => {
  let date=new Date().toLocaleTimeString();
  console.log(date);
  container.innerHTML=date;
}, 1000);