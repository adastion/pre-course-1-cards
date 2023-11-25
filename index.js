import { getPathData, getMonths, getUserData } from './src/data.js'
import { createMyElement} from './src/create_elements.js'

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



//     document.write(`<ul class='cards'>`);
//       for (let numCard = 0; numCard < userData.userCards.length; numCard++) {
//         let card = userData.userCards[numCard];

//         document.write(`<li class-'card'>`);
//           document.write(`<section class='card__content'>`);
//             let colorCard = "";
//             let currencySign = "";

//             switch (card.currencyType) {
//               case "USD":
//                 currencySign = "$";
//                 colorCard = "linear-gradient(-175deg, #9C2CF3, #3A6FF9)";
//                 break;
//               case "EUR":
//                 currencySign = "€";
//                 colorCard = "linear-gradient(-175deg, #F32CC7, #27A6AE)";
//                 break;
//               case "GBP":
//                 currencySign = "£";
//                 colorCard = "linear-gradient(-175deg, #F3972C, #E333C7)";
//                 break;
//             }
//             document.write(`<div class='card__card' style='background: ${colorCard};'>`);
//               document.write(`<div class='card__item'>`);
//                 document.write(`<h3>${card.type} card</h3>`);
//                 document.write(`<p>Current Balance</p>`);
//                 document.write(`<h4>${currencySign}${card.currentBalance}</h4>`);
//                 document.write(`<p>${card.cardNumber} </p>`);
//               document.write(`</div>`);
//               document.write(`<div class='card__item'>`);
//                 document.write(`<img src=${card.networkType === "Mastercard" ? pathPictures.master : pathPictures.visa} alt=logo-card-network-type/>`);
//                 document.write(`<span >${card.expirationMonth} / ${card.expirationYear % 100}</span>`);
//               document.write(`</div>`);
//             document.write(`</div>`);

//             document.write(`<div class='padlock'>
//                             ${card.isActive 
//                               ? '<img src="src/assets/images/icon-padlock.svg" alt="icon"/>' 
//                               + "<span>Card is temporarily blocked</span>" 
//                               : ""}
//                             </div>`);
//             document.write(`<h4 class='transaction-title'>History Transactions</h4>`);
//             document.write(`<ul class='transaction'>`);
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
