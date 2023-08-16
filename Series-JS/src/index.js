import { DocGetElementsById, messages, paginator, updatePage, generateButtons } from "./utils.js";
import { Series } from "./series.js";
import { INITIAL_CONFIG, FUNCTION_CONFIG } from "./config.js";


const HTML_ID_ELEMENTS = [
  "form",
  "paginatorContainer",
  "previousButton",
  "entry",
  "currentButton",
  "nextButton",
  "formContainer",
  "resultSquires",
  "resultContainer",
  "resultTittle",
  "buttonsContainer",
];

let { serieList, pages, elementsPerPage } = INITIAL_CONFIG;
const docElements = new DocGetElementsById(HTML_ID_ELEMENTS);
const buttonsHTML = generateButtons(FUNCTION_CONFIG);
docElements.form.innerHTML += buttonsHTML;
docElements.form.addEventListener("submit", renderResult);
docElements.nextButton.addEventListener("click", () => showPages(true, pages));
docElements.previousButton.addEventListener("click", () => showPages(false, pages));

const showPages = (next, list) => {
  docElements.resultSquires.innerHTML = "";
  let currentNumber = parseInt(docElements.currentButton.value);
  let pagesAmount = list.length;
  let pageNumber = updatePage(currentNumber, next, pagesAmount);
  if (serieList.length > elementsPerPage) {
    docElements.paginatorContainer.classList.remove("hide");
    docElements.currentButton.innerText = `Page ${pageNumber + 1} of ${pagesAmount}`;
  };

  let values = list.find((item) => item.index === pageNumber);
  values.elements.forEach((n, index) => {
    setTimeout(() => {
      docElements.resultSquires.innerHTML += `<p class="result-squire">${n}</p>`;
    }, index * 47);
  });
  if (pageNumber < 0) {
    docElements.currentButton.value = list.length - 1;
  } else if (pageNumber >= list.length) {
    docElements.currentButton.value = 0;
  } else {
    docElements.currentButton.value = pageNumber;
  }
};

function renderResult(e) {
  docElements.currentButton.value = "-1";
  docElements.formContainer.classList.remove("top");
  docElements.formContainer.className = "board-colors traslate";
  docElements.resultContainer.classList.remove("hide");
  docElements.resultContainer.className = "board-colors show";

  const givenValue = parseInt( e.target.entry.value );
  const selectedSerie = e.submitter.value;

  const series = new Series(givenValue);
  serieList = series.serie(selectedSerie);
  const functionDetails = FUNCTION_CONFIG.find(item => item.name === selectedSerie);
  messages(givenValue, docElements.resultTittle, functionDetails.message, e);
  pages = paginator(elementsPerPage, serieList);
  showPages(true, pages);
  docElements.form.entry.value = undefined
  e.preventDefault();
}
