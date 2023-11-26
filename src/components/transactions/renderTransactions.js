import { createMyElement } from "../../create_elements.js"
import { renderTransaction } from "./renderTransaction.js"

export function renderTransactions (cardData, parentElement, currencySign, pathPictures, months) {
  const titleTransaction = createMyElement("h4", parentElement, "transaction-title", "History Transactions")
  const transactionsList = createMyElement("ul", parentElement, "transaction")
  
  for (let i = 0; i < cardData.historyTransactions.length; i++) {
    const transaction = cardData.historyTransactions[i]
    
    renderTransaction(transaction, transactionsList, currencySign, pathPictures, months)
  }       
}
