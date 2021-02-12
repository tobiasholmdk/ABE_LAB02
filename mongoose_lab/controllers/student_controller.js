const students = [];
var student = require ('../models/studentmodel');



// Create an instance of model MyModel


/* POST add student form */
exports.addStudent = function (req, res) {
   async function create()
   {
        var result = student.create({name: req.body.name, grade: req.body.grade})
        result.status(200);
        result.json(student);
   }
};