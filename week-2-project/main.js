// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let question1 = []
    let length = data.length
    let sum = 0
    let avgPrices = 0
  for (let i = 0; i < length; i++) {
    sum += data[i].price
  }
  avgPrices= (sum / length).toFixed(2)
  console.log('The average price is ' + avgPrices + '.');
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let question2 = []
  for (var i = 0; i < data.length; i++) {
    if (14 <= data[i].price && data[i].price <= 18) {
      console.log(data[i].title);
    }
  }
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP")
    console.log(data[i].title + " costs " + data[i].price + " pounds");
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
   // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.includes('wood')) {
      console.log(data[i].title + ' is made of wood');
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length > 7) {
      console.log(data[i].materials.length + " " + data[i].title + " " + data[i].materials);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let sum = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      sum += 1
    }
  }
  console.log(sum + " items were made by their sellers.");
}
