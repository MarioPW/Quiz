export class DocGetElementsById {
  constructor(ids) {
    ids.forEach(id => {
      this[id] = document.getElementById(id);
    });
  }
}

export const messages = (value, messageContainer, message, e) => {
  Number.isInteger(value) && value >= 2
    ? (message = `<p>${message} <mark>${value}</mark>:</p>`)
    : (message = `<p>Error: You must enter an integer value greater than or equal to 2... no symbols, letters, or HTML injections. 😊</p>`)    ;
  messageContainer.innerHTML = message;
  e.preventDefault()
};

export const paginator = (numElements, list) => {
  const numPages =  Math.ceil(list.length / numElements);
  let pages = [];
  for (let i = 0; i < numPages; i++) {
    let start = i * numElements;
    let end = start + numElements;
    let elements = list.slice(start, end);
    let page = {
      index: i,
      elements
    };
    pages.push(page);
  }
  return pages;
};

export const updatePage = (currentValue, isNext, pageCount) => {
  if (isNext) {
    return (currentValue + 1) % pageCount;
  } else {
    return (currentValue - 1 + pageCount) % pageCount;
  }
};


export const generateButtons = (config) => {
  const buttonsHTML = config.map((eachFunc) => `
    <button type="submit" class="my-button" value="${eachFunc.name}">${eachFunc.buttonText}</button>
  `).join('');

  return buttonsHTML;
}

