var companyInfo = {
  title: 'prime steak resturant',
  phone: '(416) 111-1111',
  location: '123 mad FROSTY LANE M7Q 3O5',
}

var specialMenuData = [
  {
    title: 'item1',
    description: 'fried eggs, steak baked potatoes with a side a fresh organi vegetables',
    price: 25,
  },
  {
    title: 'item2',
    description: 'fried eggs, steak baked potatoes with a side a fresh organi vegetables',
    price: 22,
  },
  {
    title: 'item3',
    description: 'fried eggs, steak baked potatoes with a side a fresh organi vegetables',
    price: 29,
  },
]

var reviewsData = [
  {
    review:'"THIS RESTURANT IS AWESOME AND THE STAFF ARE SO POLITE!"',
    author:'- john doe',
    highlight: 'WHAT FOOD CONNOISSEURS SAY ABOUT US',
  },
  {
    review:'"The food is to die for"',
    author:'- jason mark',
    highlight: 'Worth dying over?',
  },
  {
    review:'"better than my secret reciept"',
    author:'- Mr.krabs',
    highlight: 'from the man himself',
  },
  {
    review:'"i think what they are doing here is amazing and i see tons of potential with this up and coming resturant"',
    author:'- gordon ramsy',
    highlight: 'good words from a veteran chef',
  },
]

var randomQuoteData = [
  {
    quote: '"Cooking Is At Once Child\'s Play And Adult Joy. And Cooking Done With Care Is An Act Of Love"',
    author: ' - Craig Claiborne'
  },
  {
    quote: '"All you need is love. But a little chocolate now and then doesn\'t hurt"',
    author: ' ― Charles M. Schulz'
  },
  {
    quote: '"Ask not what you can do for your country. Ask what’s for lunch."',
    author: ' ― Orson Welles'
  },
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  }
}
