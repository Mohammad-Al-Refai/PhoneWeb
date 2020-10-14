function Clock() {
    this.title="clock"
  this.view = () => {
    let code = `  <div class="action_app">
    <h3 class="title_app">
        ${this.title}
    </h3>
</div>
<div class="body_app">
    <span style="font-size: 60px;" id="time">00</span>
</div>

</div>
`;

return code
  };

  this.run=(end)=>{

    let time = document.getElementById("time");
    

    function Ref(){
      end(false)
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      time.innerHTML =
            h + ':' + m + ':' + s;
    
    }
    
   this.intrvel= setInterval(Ref,1000)
  function checkTime(i) {
    if (i < 10) { i = '0' + i; }
    return i;
  }
  this.finish=()=>{
  clearTimeout(this.intrvel)
end(true)
  }
  }

  }



