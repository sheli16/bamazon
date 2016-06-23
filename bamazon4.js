var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'sheli16',
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
 