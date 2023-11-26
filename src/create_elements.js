// creating functions
export function createMyElement(teg, parentItem, addClass = "", addCntent = "", pathImage = "", pathLink = "") {
  let Element = document.createElement(teg);
    if (addClass !== '') {
      Element.classList.add(addClass)
    }
    if (addCntent !== '') {
      Element.textContent = addCntent;
    }
    if (pathImage !== '') {
      Element.src = pathImage;
    }
    if (pathLink !== '') {
      Element.href = pathLink;
    }
    parentItem.appendChild(Element);

  return Element;
}