import { createMyElement } from "../../create_elements.js"

export function renderTransaction(transaction, transactionsList, currencySign, pathPictures, months) {
  const transactionsElement = createMyElement("li", transactionsList, "transaction__item")
        let iconPositiveDebiting =
          transaction.amount > 0 ? pathPictures.balance.positive : pathPictures.balance.debiting;
        const blockIcon = createMyElement("div", transactionsElement, "transaction__icon")
        const iconTransaction = createMyElement("img", blockIcon, "", "", iconPositiveDebiting)
        iconTransaction.alt = "icon"
        const blockInfo = createMyElement("div", transactionsElement, "transaction__info")
        const description = createMyElement("h5", blockInfo, "", transaction.description)
        const dateTransaction = createMyElement("p", blockInfo)
              dateTransaction.textContent = `${months[+transaction.date.getMonth()]} 
                                                 ${transaction.date.getDate()}, 
                                                 ${transaction.date.getFullYear() % 100}`
        let positiveDebitingBalance = transaction.amount > 0 ? "amount-positive" : "amount-debiting";       
        const amountElement = createMyElement('span', transactionsElement, positiveDebitingBalance)            
              amountElement.textContent = transaction.amount > 0 
                                                        ? "+ " + currencySign + transaction.amount 
                                                        : "- " + currencySign + -transaction.amount
}