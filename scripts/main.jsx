//comment
/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Einstein-cross.jpg") {
      myImage.setAttribute("src", "images/Hubble-quasar.jpg");
    } else {
      myImage.setAttribute("src", "images/Einstein-cross.jpg");
    }
  };
//favicon-package-v0.16