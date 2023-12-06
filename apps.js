// var viz = new tableau.Viz(placeholderDiv, url, options):

let viz;

// 1. Create a variable to store the placeholderDiv
const placeholderDiv = document.getElementById("VizContainer");
// 2. Create a variable to store the URL
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-US&:display_count=n&:origin=viz_share_link";
// 3. Create a variable to store the dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  console.log("Viz is ready to load");
  viz = new tableau.Viz(placeholderDiv, url, options);
}

// Listen for the content to be loaded, when finished, load the viz
document.addEventListener("DOMContentLoaded", initViz);

// Buttons
// Where are my buttons?
const exportpdfbutton = document.getElementById("exportPDF");

// Listen for buttons clicked
exportpdfbutton.addEventListener("click", exportPDFfunction);

//What happens when buttons are clicked
function exportPDFfunction() {
  viz.showExportPDFDialog();
}

// PPT Button
const exportPPTbutton = document.getElementById("exportPPT");

// Listen for buttons clicked
exportPPTbutton.addEventListener("click", exportPPTfunction);

//What happens when buttons are clicked
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}

// Image button
const exportImagebutton = document.getElementById("exportImage");

// Listen for buttons clicked
exportImagebutton.addEventListener("click", exportImagefunction);

//What happens when buttons are clicked
function exportImagefunction() {
  viz.showExportImageDialog();
}

// --------------------------------------------------------

const filterButton = document.getElementById("FilterButton");
filterButton.addEventListener("click", getRangeValues);

function getRangeValues() {
  // Filter range buttons
  const minValue = document.getElementById("minValue").value;

  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);

  //const filterButton = document.getElementById("FilterButton");

  // need to get the active sheet and then list of worksheets
  filterButton;
  const workbook = viz.getWorkbook();
  console.log(workbook);
  const activesheet = workbook.getActiveSheet();
  console.log(activesheet);
  const sheets = activesheet.getWorksheets();
  console.log(sheets);

  const sheetToFilter = sheets[0];
  console.log(sheetToFilter);
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("Viz Filtered"));
}
