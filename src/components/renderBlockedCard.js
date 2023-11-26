import { createMyElement } from "../create_elements.js";

export function renderBlockedCard(cardData, parentElement) {
  let content;
  if (cardData.isActive) {
    const blockingMessage = createMyElement("div", parentElement, "padlock")
    const icon = createMyElement("img", blockingMessage, "", "", "src/assets/images/icon-padlock.svg")
          icon.alt = "icon"
    const message = createMyElement("span", blockingMessage, "", "Card is temporarily blocked") 
  } else {
     null
  }
    
}
