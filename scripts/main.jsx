//comment
/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/sab.png") {
      myImage.setAttribute("src", "images/USP.jpg");
    } else {
      myImage.setAttribute("src", "images/sab.png");
    }
  };