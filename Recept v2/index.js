let recipeCon = document.getElementById("recipeCont");
let recipeCon2 = document.getElementById("recipeCont2");
let picture = document.getElementById("picture");
var root = document.querySelector(':root');
let rotatingP = document.getElementById("rotatingP")
let justFeedMe = document.getElementById("jFM")
let read = false;
function heightChange() {
  if (read === false) {
        root.style.setProperty('--barheight', '10%')
        read = true;
      
  } else if (read === true){
        root.style.setProperty('--barheight', '15%')   
        read = false;
  }
}
// justFeedMe.addEventListener("click", () => {
//         if (rotatingP.classList.contains("rotate")) { 
//                 rotatingP.classList.remove("rotate");
//                 console.log("nu klicka du REMOVE");
//         } else {
//                     rotatingP.classList.add("rotate");  
//                     console.log("nu klicka du ADD rotate");       
//         }
// })
recipeCon.addEventListener("click", () => {
        heightChange();
    if (recipeCon.classList.contains("auto")) {  // Om receptcontainer har klassen auto, ta bort den, annars lägg till den.
        recipeCon.classList.remove("auto");
        picture.classList.add("zoomed");
        
    } else {
            recipeCon.classList.add("auto");
            recipeCon2.classList.remove("auto");

        //picture.classList.remove("zoomed")
               
    }
    });
recipeCon2.addEventListener("click", () => {
        heightChange();
    if (recipeCon2.classList.contains("auto")) {
            recipeCon2.classList.remove("auto");
            picture.classList.add("zoomed")
            
    } else {
            recipeCon2.classList.add("auto");
            recipeCon.classList.remove("auto");
            picture.classList.remove("zoomed")
            
    }
    });


    
