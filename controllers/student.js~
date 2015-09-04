//Student Module

var db = require(__dirname + '/../lib/mysql'); //imports module to be used (mysql module)

//access /students with the function GET
//retrieves all student records
exports.find = function(req, res, next){
	db.query('SELECT * FROM student',
		function(err, rows){
			if(err) return next(err);
			res.send(rows);
		});
};

//access /students with the function POST
//creates a student record
exports.insert = function(req, res, next){
	db.query('INSERT INTO student VALUES(?,?,?)', [req.body.studNo, req.body.name, req.body.bdate],
		function(err, rows){
			if(err) return next(err);
			res.send(rows);
		});
};

//access /students/:id with the function GET
//retrieves one student record
exports.findOne = function(req, res, next){
	db.query('SELECT * FROM student WHERE studNo=?', [req.params.id],
		function(err, rows){
			if(err) return next(err);
			if(rows.length === 0)
				res.status(404).send("Student Not Found!");
			else res.send(rows[0]);
		});
};

//access /students/:id with the function PUT
//updates one student record
exports.update = function(req, res, next){
	db.query('UPDATE student SET ? WHERE studNo=?', [req.body, req.params.id],
		function(err, rows){
			if(err) return next(err);
			if(rows.length === 0)
				res.status(404).send("Student Not Found!");
			else res.send(rows);
		});
};

//access /students/:id with the function DELETE
//deletes one student record
exports.remove = function(req, res, next){
	db.query('DELETE FROM student WHERE studNo=?', [req.params.id],
		function(err, rows){
			if(err) return next(err);
			if(rows.length === 0)
				res.status(404).send("Student Not Found!");
			else res.send(rows);
		});
};