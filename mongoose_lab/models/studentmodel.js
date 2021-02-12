const mongoose = require('mongoose'); const Schema = mongoose.Schema;
//Define a schema

const StudentSchema = new Schema({ 
    Name: String, 
    Grade: String,
});

const student = mongoose.model('student', StudentSchema);