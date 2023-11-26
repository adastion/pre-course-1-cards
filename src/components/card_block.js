import { createMyElement } from "../create_elements.js"

export function renderCard (cardData, cardsList, pathPictures, blockedCard) {
  const cardBlock = createMyElement("li", cardsList, "card")
  const cardContent = createMyElement("section", cardBlock, "card__content")
  let colorCard;
  let currencySign;

// switchCase
  switch (cardData.currencyType) {
    case "USD":
      currencySign = "$";
      colorCard = "bg-1";
      break;
      case "EUR":
        currencySign = "€";
        colorCard = "bg-2";
        break;
        case "GBP":
          currencySign = "£";
          colorCard = "bg-3";
          break;
        }

  // card
  const card = createMyElement("div", cardContent, "card__card")
    card.classList.add(colorCard)
  const cardItem = createMyElement("div", card, "card__item")
  const titleCardType = createMyElement("h3", cardItem, "", `${cardData.type} card`)
  const titleBalance = createMyElement("p", cardItem, "", "Current Balance")
  const balance = createMyElement("h4", cardItem, "", `${currencySign}${cardData.currentBalance}`)
  const cardNumber = createMyElement("p", cardItem, "", cardData.cardNumber)
  const cardItem2 = createMyElement("div", card, "card__item")
  const networkTypeLogo = createMyElement("img", cardItem2, "", "", `${cardData.networkType === "Mastercard" ? pathPictures.master : pathPictures.visa}`)
    networkTypeLogo.alt = "logo-card-network-type"
  const cardDate = createMyElement("span", cardItem2, "", `${cardData.expirationMonth} / ${cardData.expirationYear % 100}`)
  blockedCard(cardData, cardContent)
}