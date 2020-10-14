

let back_btn = document.getElementById("back");
let run_phone = document.getElementById("run_phone");
let black_screen = document.getElementById("black_screen");
let soncer = document.getElementById("soncer");
let Applications = document.getElementsByClassName("app");
let app = new App();
let IsRun=true
onStart();
let i=0
let tu
function onStart() {
  for (let i = 0; i < Applications.length; i++) {
    console.log(i)
    Applications[i].addEventListener("click", (e) => {
      app.AppOpen(Applications[i]);
    });
  }
}

back_btn.addEventListener("click", (e) => {
  app.AppClose();
});
run_phone.addEventListener("click", (e) => {
  console.log(IsRun)
  if(IsRun){
    black_screen.style.opacity="0"
    black_screen.style.transition="3s"
    setTimeout(()=>{
      black_screen.style.display="none"
      IsRun=false

    },3000)
   tu= setInterval(() => {
        i++
        if(i%2==0){
          soncer.style.backgroundColor=" rgba(30, 9, 211, 0.473)"
        }else{
          soncer.style.backgroundColor=" rgba(211, 9, 9, 0.473)"
        }
      
    }, 100);
  }else{

    black_screen.style.opacity="1"
      black_screen.style.display="block"
      IsRun=true
      clearInterval(tu)
  }
  
});
app.AppClose();