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

var purchase = function(){ 
        inquirer.prompt({
        name: "action",
        type: "list",
        message: "Welcome to Bamazon",
        choices: ["Enter the ID of the product you would like to buy", "how many would you like to buy"]
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
