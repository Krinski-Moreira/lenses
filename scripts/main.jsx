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
function downloadFile() {
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
});

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


function readCSVFile(){
     var files = document.querySelector('#file').files;

     if(files.length > 0 ){

          // Selected file
          var file = files[0];

          // FileReader Object
          var reader = new FileReader();

          // Read file as string 
          reader.readAsText(file);

          // Load event
          reader.onload = function(event) {

               // Read file data
               var csvdata = event.target.result;

               // Split by line break to gets rows Array
               var rowData = csvdata.split('\n');

               // <table > <tbody>
               var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
               tbodyEl.innerHTML = "";

               // Loop on the row Array (change row=0 if you also want to read 1st row)
               for (var row = 1; row < rowData.length; row++) {

                     // Insert a row at the end of table
                     var newRow = tbodyEl.insertRow();

                     // Split by comma (,) to get column Array
                     rowColData = rowData[row].split(',');

                     // Loop on the row column Array
                     for (var col = 0; col < rowColData.length; col++) {

                          // Insert a cell at the end of the row
                          var newCell = newRow.insertCell();
                          newCell.innerHTML = rowColData[col];

                     }

               }
          };

     }else{
          alert("Please select a file.");
     }

}

function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
	console.log(lines);
	drawOutput(lines);
}

//if your csv file contains the column names as the first line
function processDataAsObj(csv){
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
	
    //first line of csv
    var keys = allTextLines.shift().split(',');
	
    while (allTextLines.length) {
        var arr = allTextLines.shift().split(',');
        var obj = {};
        for(var i = 0; i < keys.length; i++){
            obj[keys[i]] = arr[i];
	}
        lines.push(obj);
    }
        console.log(lines);
	drawOutputAsObj(lines);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines){
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < lines[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}

//draw the table, if first line contains heading
function drawOutputAsObj(lines){
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");
	
	//for the table headings
	var tableHeader = table.insertRow(-1);
 	Object.keys(lines[0]).forEach(function(key){
 		var el = document.createElement("TH");
		el.innerHTML = key;		
		tableHeader.appendChild(el);
	});	
	
	//the data
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		Object.keys(lines[0]).forEach(function(key){
			var data = row.insertCell(-1);
			data.appendChild(document.createTextNode(lines[i][key]));
		});
	}
	document.getElementById("output").appendChild(table);
}
