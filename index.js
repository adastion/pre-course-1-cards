import { getPathData, getMonths, getUserData } from './src/data.js'
import { createMyElement } from './src/create_elements.js'
import { renderCard } from './src/components/cards/renderCards.js'

// variables
const pathPictures = getPathData()
const months = getMonths()
const userData = getUserData()
const rootElement = document.querySelector('#root')

// rendering header
const header = createMyElement("header", rootElement, "header")
const container = createMyElement("div", header, "container")
const logo = createMyElement("a", container, "logo", "", "", "#")
const logoImage = createMyElement("img", logo, "", "", pathPictures.logo)
  logoImage.alt = logo
const contentCards = createMyElement("div", rootElement, "container")
const greeting = createMyElement("h1", contentCards, "",  `Welcome Back, ${userData.nameUser}!`)
const titleCards = createMyElement("h2", contentCards, "", "My Cards")

//rendering cards list
const cardsList = createMyElement("ul", contentCards, "cards")
  for (let i = 0; i < userData.userCards.length; i++) {
    const cardData = userData.userCards[i]
    renderCard(cardData, cardsList, pathPictures, months)
  }