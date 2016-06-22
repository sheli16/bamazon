var prompt = require('prompt');
var prompt = require('prompt');
var colors = require("colors/safe");
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	// use process.argv for passwords
	password:process.argv[2], 
	database: 'BamazonDB'
})
 // err has a stack traite and throw  is halting execution of code in the browser its like a break statement 
  connection.connect(function(err){
	if (err) throw err;
	// here is an alternative with the curly brackets 
	 // if (err) {
	// throw err;
	console.log('connected as id' + connection.threadId);

});

connection.query('SELECT * FROM products', function(err, data){
   if (err) throw err;
 console.log(data);
});
 //   connection.query('SELECT * FROM products', function(err, data){
 //   if (err) throw err;
 // console.log(data[1].ProductName);
 // });

   
  // 
  // Setting these properties customizes the prompt. 
  // prompt.message = colors.cyan("Hi welcome to Bamazon, below is a list of our items for sale");
prompt.start();
 
  prompt.get({
    properties: {
      choice: {
        description: colors.magenta("Enter the Id of the item you want to purchase")
      }
    }
  }, function (err, result) {
    console.log(colors.cyan("You said your choice is: " + result.choice));

  });
  connection.query('SELECT * FROM products', function(err, data){
   if (err) throw err;
 console.log(data);
});
  
  
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


git@github.com:sheli16/bamazon.git



// console.log(result.choice)


// connection.query('SELECT * FROM products', function(err, data){
//    if (err) throw err;
//  console.log(data);
//  purchase();
//  });


var purchase = function(){ 
		inquirer.prompt({
        name: "action",
        type: "list",
        message: "Welcome to Bamazon",
        choices: ["Enter the ID of the product you would like to buy", "how many would you like to buy","Checkout"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'Pick the item id you want to purchase':
                itemSearch();
            break;
            
            case 'Add another item':
                additem();
            break;
          case 'Checkout':
                checkout();
            break;
        }
    }) 
};
purchase();
var itemSearch = function() {
    inquirer.prompt({
        name: "Id",
        type: "input",
        message: "What item would you like to Buy?"
    }).then(function(answer) {
        var query = 'SELECT id, productName, Price, FROM products WHERE ?'
        connection.query(query, {Id: answer.id}, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("productName: " + res[i].productName + " || price: " + res[i].price + " || Quantiy: " + res[i].Quantiy);
            }
            purchase();
        })
    })
};
