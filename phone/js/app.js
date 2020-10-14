let acivity_app = document.getElementById("app_activity");
//! init App
let clock = new Clock();
let note = new Note();
//!----------------------
let width = "382px";
let height = "680px";
function App() {
  //! App Recluction

  this.app_name = "";
  this.AppOpen = (app) => {
    //! Get App name
    this.app_name = app.getAttribute("app-name");
    //! App Render
    if (this.app_name === "clock") {
      ShowApp();
      acivity_app.innerHTML = clock.view();
      clock.run((end) => {
        if (end) {
          acivity_app.innerHTML = "";
          clock.finish();
        }
      });
    }
    if (this.app_name === "note") {
      ShowApp();
      acivity_app.innerHTML = note.view();
      note.run((end) => {
        if (end) {
          acivity_app.innerHTML = "";
          note.finish();
        }
      });
    }
    //! end Render
  };

  this.AppClose = () => {
    //! Back button do this!!
    acivity_app.style.height = "0px";
    acivity_app.style.opacity = "0";
    acivity_app.innerHTML = "";
  
    };
}

function ShowApp() {
  acivity_app.style.height = height;
  acivity_app.style.opacity = "1";
  acivity_app.style.transition = "0.5s";
}
