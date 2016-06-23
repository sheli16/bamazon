var inquirer = require('inquirer');
var prompt = require('prompt');
// var colors = require("colors/safe");
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	// use process.argv for passwords
	password:process.argv[2], 
	database: 'bamazonDB'
})
 // err has a stack traite and throw  is halting execution of code in the browser its like a break statement 
  connection.connect(function(err){
	if (err) throw err;
	// here is an alternative with the curly brackets 
	 // if (err) {
	// throw err;
	console.log('connected as id' + connection.threadId);

connection.query('SELECT * FROM Products', function(err, data){
if (err) throw err;
console.log(data);
purchase();
});

});

  var purchase = function(){ 
        inquirer.prompt([{
        name: "id",
        type: "input",
       message: "Enter the ID of the product you would like to buy"
  }, {
    name: "quantity",
        type: "input",
       message: "Enter the quantity you would like to buy"
    }]).then(function(answer) {
        console.log(answer.id);
        console.log(answer.quantity)
        connection.query('SELECT * FROM products WHERE id = ?',[answer.id], function(err, res){
// console.log("Price:" + res[1].Price);
console.log(res[0].StockQuantiy);

if (err){ throw err;
console.log(res);

}
else if(res[0].StockQuantiy < answer.quantity) {
         return console.log('Quantity not in stock');
} else {

var reduceStock = res[0].StockQuantiy - answer.quantity;
console.log(reduceStock);

connection.query('UPDATE products SET ? WHERE ?', {StockQuantiy: reduceStock, id: answer.id}, function(err,) {
if(err) throw err;
var priceTotal = answer.quantity * res[0].price;
console.log('Please pay' + priceTotal);
        })
}   

})
})
};
















        // (query, [answer.id, answer.quantity], function(err, res) {
        //    for (var i = 0; i < res.length; i++) {
        //         console.log("id: " + res.id + " || Price: " + res.ProductName);
        //     }
     
    




 //   connection.query('SELECT * FROM products', function(err, data){
 //   if (err) throw err;
 // console.log(data[1].ProductName);
 // });

   
  // 
  // Setting these properties customizes the prompt. 
  // prompt.message = colors.cyan("Hi welcome to Bamazon, below is a list of our items for sale");
// prompt.start();
 
//   prompt.get({
//     properties: {
//       choice: {
//         description: colors.magenta("Enter the Id of the item you want to purchase")
//       }
//     }
//   }, function (err, result) {
//     console.log(colors.cyan("You said your choice is: " + result.choice));

//   });
//   connection.query('SELECT * FROM products', function(err, data){
//    if (err) throw err;
//  console.log(data);
// });
  
  
  


  // prompt.delimiter = colors.green("><");
 
// prompt.start();
 
// prompt.message = colors.cyan("Hi welcome to Bamazon, Here is a list of our items for sale"); 
// prompt.get({
//      choice: {
//         description: colors.magenta("Enter Id of Item you want to Buy")
//     }
//   }, function (err, result) {
//     console.log(colors.cyan("The Item you chose is: " + result.choice));
//   });





// console.log(result.choice)


// connection.query('SELECT * FROM products', function(err, data){
//    if (err) throw err;
//  console.log(data);
//  purchase();
//  });



