const mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema({
    cousreName: {
        type: String,
        required : "Required"
    },
    courseID: {
        type: String
    },
    courseDuration :{
        type : String
    },
    courseFee : {
        type : String
    }
}); 

mongoose.model("Course", CourseSchema)