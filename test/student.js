//test cases for student module

//import modules supertest and should-http
var request = require('supertest'),
	should = require('should-http');

//collection of test cases for the whole student module
//describe statements inside the "main describe" are for each unit/function
describe('student', function(){
	var url = 'localhost:5000';
	
	//test cases for find function only
	describe('find()', function(){
		it('should retrieve all student records', function(done){
			request(url)
				.get('/students')
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200); //checks if status code is 200
					res.body.should.be.an.instanceOf(Array).and.have.lengthOf(3); //checks if response body is an instance of an array and have a length of 3
					done();
				});
		});
	});
	
	//test cases for findOne function only
	describe('findOne()', function(){
		it('should retrieve a student record', function(done){
			request(url)
				.get('/students/2012-72018')
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200); //checks if status code is 200
					res.body.should.be.an.instanceOf(Object); //checks if response body is an instance of an object
					done();
				});
		});
	});
	
	//test cases for insert function only
	describe('insert()', function(){
		it('should return newly created record', function(done){
			request(url)
				.post('/students')
				.send({'studNo': '2015-12345', 'name': 'Marie', 'bdate': '1997-11-12'})
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200); //checks if status code is 200
					res.body.should.be.an.instanceOf(Object); //checks if response body is an instance of an object
					done();
				});
		});
	});
});