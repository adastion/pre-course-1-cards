import { getPathData, getMonths, getUserData } from './src/data.js'
import { createMyElement } from './src/create_elements.js'
import { renderCard } from './src/components/card_block.js'

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
const greeting = createMyElement("h1", container, "",  `Welcome Back, ${userData.nameUser}!`)
const contentCards = createMyElement("div", rootElement, "container")
const titleCards = createMyElement("h2", contentCards, "", "My Cards")

//rendering cards list
const cardsList = createMyElement("ul", contentCards, "cards")
  for (let i = 0; i < userData.userCards.length; i++) {
    const cardData = userData.userCards[i]
    renderCard(cardData, cardsList, pathPictures)
  }


//               document.write(`<h4 class='transaction-title'>History Transactions</h4>`);
//               document.write(`<ul class='transaction'>`);
//                 for (let numTransaction = 0; numTransaction < card.historyTransactions.length; numTransaction++) {
//                   let transaction = card.historyTransactions[numTransaction];
//                   document.write(`<li class='transaction__item'>`);
//                     let iconPositiveDebiting =
//                       transaction.amount > 0
//                         ? pathPictures.balance.positive
//                         : pathPictures.balance.debiting;
//                     document.write(`<div class='transaction__icon'>
//                                       <img src=${iconPositiveDebiting} alt='icon'/>
//                                     </div>`);
//                     document.write(`<div class='transaction__info'>`);
//                       document.write(`<h5>${transaction.description}</h5>`);
//                       document.write(`<p>
//                                         ${months[+transaction.date.getMonth()]} 
//                                         ${transaction.date.getDay()}, 
//                                         ${transaction.date.getFullYear() % 100}
//                                       </p>`
//                                     );
//                     document.write(`</div>`);
//                       let positiveDebitingBalance = transaction.amount > 0
//                                                    ? "#2DD683" 
//                                                    : "#E74A51";
//                       document.write(`<span style='color: ${positiveDebitingBalance};'>
//                                           ${transaction.amount > 0 
//                                           ? "+ " + currencySign + transaction.amount 
//                                           : "- " + currencySign + -transaction.amount}
//                                       </span>`);
//                   document.write(`</li>`);
//                 }
//               document.write(`</ul>`);
//           document.write(`</section>`);
//         document.write(`</li>`);
//       }
//     document.write(`</ul>`);
// document.write(`</div>`);
