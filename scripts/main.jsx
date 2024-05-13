//comment
/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/

/*import { Astro } from 'astrojs';

const astro = new Astro();

// Assuming you have a FITS file, 'example.fits'
const fitsFile = 'lensedquasars.fits';

// Read the FITS file
astro.fromFile(fitsFile)
  .then((fitsData) => {
    console.log(fitsData); // Display the FITS file data
    // Process and work with the FITS data here
  })
  .catch((error) => {
    console.error('Error reading FITS file:', error);
  }); */
//Please note that you'll need actual FITS files to test with and work on in your JavaScript application. AstroJS and similar libraries provide methods to read and manipulate FITS files, making it possible to extract information, analyze data, and perform operations on astronomical data stored in these files.

//Always refer to the library's documentation or other relevant resources for specific instructions on how to read, extract, and manipulate the data stored in FITS files using the library of your choice, as methods and available functionalities might differ between libraries.

// Function to trigger file download
/*function downloadFile() {
  // Content to be included in the downloaded file

  const fitsFileUrl = 'https://github.com/Krinski-Moreira/lenses/lensedquasars.fits';

  fetch(fitsFileUrl)
    .then(response => response.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'lensedquasars.fits'; // Set the filename with the .fits extension
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch(error => {
      console.error('Error fetching the .fits file:', error);
    });
}

// Add click event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('downloadButton');
  if (myButton) {
    myButton.onclick = downloadFile
  } else {
    console.error("Button not found");
  }
}); */

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

fetch('https://krinski-moreira.github.io/lenses/statistics.json')
.then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => assign(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

function assign(stats){
  //const confirmed = document.querySelector('#Confirmed');
  //const doubles = document.querySelector('#Double');
  console.log(stats.confirmed, stats.doubles);
}
