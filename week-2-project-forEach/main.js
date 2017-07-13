// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let question1 = []
    let sum = 0
    let avgPrices = 0
  data.forEach(function(object) {
    sum += object.price
  })
  avgPrices= (sum / data.length).toFixed(2)
  console.log('The average price is ' + avgPrices + '.');
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let question2 = []
  data.forEach(function(object){
    if (14 <= object.price && object.price <= 18) {
      console.log(object.title);
    }
  })
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  data.forEach(function(object) {
    if (object.currency_code === "GBP")
    console.log(object.title + " costs " + object.price + " pounds");
  })
}


// 4: Display a list of all items who are made of wood.
function question4 () {
   // Answer:
  let woodItems = data.filter(function(woodItems) {
    return woodItems.materials.includes("wood");
  }).map(function(item){
    //TODO: return a string
    return item.title + 'is made of wood';
  });
    console.log(woodItems);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  data.forEach(function(object) {
    if (object.materials.length > 7) {
      console.log(object.materials.length + " " + object.title + " " + object.materials);
    }
  })
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let sum = 0
  data.forEach(function(object) {
    if (object.who_made === "i_did") {
      sum += 1
    }
  })
  console.log(sum + " items were made by their sellers.");
}
