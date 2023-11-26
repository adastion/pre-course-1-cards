export function getPathData() {
  return {
    logo: "src/assets/images/logo.svg",
    master: "src/assets/images/mastercard-logo.svg",
    visa: "src/assets/images/visa-logo.svg",
    padlock: "src/assets/images/icon-padlock.svg",
    balance: {
      positive: "src/assets/images/icon-refill.svg",
      debiting: "src/assets/images/icon-debiting.svg",
    },
  };
}

export function getMonths() {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
}

export function getUserData() {
  return {
    nameUser: "Alex",
    userCards: [
      {
        type: "debit",
        networkType: "Mastercard",
        cardNumber: "5543 2593 4958 2930",
        expirationMonth: 3,
        expirationYear: 2028,
        currentBalance: 3.26365,
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
        currentBalance: 2.15089,
        currencyType: "EUR",
        isActive: true,
        historyTransactions: [
          {
            date: new Date(2023, 9, 23, 16, 43, 22),
            description: "Payment Received",
            amount: 500,
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
}
