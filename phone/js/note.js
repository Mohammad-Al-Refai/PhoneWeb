function Note() {
  this.title = "note";
  this.view = () => {
    let code = ` <div class="action_app_note">
    <h3 class="title_app">
        ${this.title}
    </h3>
</div><div class="input-note">
    <input placeholder="..." id="text_note">
    <button id="add_note">+</button>
</div>
<div class="list-note" id="list_note">

    

</div>`;

    return code;
  };

  this.run = (end) => {
    end(false);
    let text=document.getElementById("text_note")
    let add=document.getElementById("add_note")
    let list=document.getElementById("list_note")
    add.addEventListener("click",e=>{
      if(text.value.length>0){
        list.innerHTML+=item(text.value)
        text.value=""
        verifay()
      }
     
    })

function verifay(){
  let re_btn=document.getElementsByClassName("remove-item-note")
  for(let i=0;i<re_btn.length;i++){
  re_btn[i].addEventListener("click",e=>{
    re_btn[i].parentElement.remove()
  })
  
}

 
}



    function item(value){
      return `<div class="item-note">
     ${value}
      <button class="remove-item-note"></button>
  </div>`
    }

    this.finish = () => {
      end(true);
    };
  };
}
