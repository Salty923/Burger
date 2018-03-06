var connection = mysql.createConnection({
host: 'localhost',
database: 'bugers_db',
user: 'root',
password: '',
port: 3306
});
connection.connect(function (err){
if (err){
throw err;
}else{
console.log('Sql connected');
}
});

module.exports = connection;