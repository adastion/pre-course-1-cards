const pathPictures = {
  logo: "images/logo.svg",
  padlock: "images/padlock-icon.svg"
};

const userData = {
  nameUser: "Alex",
  userCards: [
   {
    type: "debit",
    networkType: "Mastercard",
    cardNumber: "5543 2593 4958 2930",
    expirationMonth: 3,
    expirationYear: 2028,
    currentBalance: 3263.65,
    currencyType: "USD",
    isActive: false,
    historyTransactions: [
      {
        date: new Date(2022, 3, 27, 16, 43, 22),
        description: "Order Revenue",
        amount: +874,
      },
      {
        date: new Date(2022, 3, 25, 16, 43, 22),
        description: "Withdrawal Initiated",
        amount: -2490,
      },
      {
        date: new Date(2022, 3, 12, 16, 43, 22),
        description: "Order Revenue",
        amount: +423,
      },
      {
        date: new Date(2022, 2, 29, 16, 43, 22),
        description: "Amazon, Order #3213",
        amount: -290,
      },
      {
        date: new Date(2022, 2, 19, 16, 43, 22),
        description: "Order Revenue",
        amount: +925,
      },
      {
        date: new Date(2022, 2, 5, 16, 43, 22),
        description: "Withdrawal Initiated",
        amount: -1290,
      },
    ],
  },
   {
    type: "credit",
    networkType: "Visa",
    cardNumber: "4532 3948 5012 8372",
    expirationMonth: 8,
    expirationYear: 2025,
    currentBalance: 2150.89,
    currencyType: "EUR",
    isActive: true,
    historyTransactions: [
      {
        date: new Date(2023, 9, 23, 16, 43, 22),
        description: "Payment Received",
        amount: +500,
      },
      {
        date: new Date(2023, 9, 29, 16, 43, 22),
        description: "Withdrawal",
        amount: -1000,
      },
      {
        date: new Date(2023, 9, 23, 16, 43, 22),
        description: "Purchase",
        amount: -85.99,
      },
    ],
  },
   {
    type: "debit",
    networkType: "Mastercard",
    cardNumber: "6010 7842 9083 7129",
    expirationMonth: 12,
    expirationYear: 2026,
    currentBalance: 500,
    currencyType: "GBP",
    isActive: true,
    historyTransactions: [
      {
        date: new Date(2023, 8, 3, 16, 43, 22),
        description: "Add Funds",
        amount: +300,
      },
      {
        date: new Date(2023, 7, 28, 16, 43, 22),
        description: "Withdrawal",
        amount: -100,
      },
      {
        date: new Date(2023, 7, 25, 16, 43, 22),
        description: "Purchase",
        amount: -35.5,
      },
    ],
  },
  ],
};

document.write(`<div class='wrap'>`);
  document.write(`<header><a href='#'><img src=${pathPictures.logo} alt='logo'/></a><header>`);
  document.write(`<h1>Welcome Back, ${userData.nameUser}!</h1>`);
    document.write(`<ul>`)
    for (let cards = 0; cards < userData.userCards.length; cards++ ) {
      let card = userData.userCards[cards]

      document.write(`<li>`)
        document.write(`<div>${card.networkType}</div>`)
        document.write(`<h2>${card.type} card</h2>`)
        document.write(`<p>Current Balance</p>`)
        document.write(`<h3>$${card.currentBalance}</h3>`)
        document.write(`<span>${card.cardNumber} </span>`)
        document.write(`<span>${card.expirationMonth} ${card.expirationYear}</span>`)
        document.write(`<div>${card.isActive ? '<span>Card is temporarily blocked</span>' : ''}</div>`)
        document.write(`<h3>History Transactions</h3>`)
        document.write(`<ul>`)

          for (let operation = 0; operation < card.historyTransactions.length; operation++) {
            let transaction = card.historyTransactions[operation]

            document.write(`<li>`)
              document.write(`<div>`)
                document.write(`<h4>${transaction.description}</h4>`)
                document.write(`<p>${transaction.date}</p>`)
              document.write(`</div>`)
              document.write(`<span>${transaction.amount}</span>`)
            document.write(`/<li>`)
          }
          document.write(`</li>`)
        document.write(`</ul>`)
      }
    document.write(`</ul>`)
document.write(`</div>`);
