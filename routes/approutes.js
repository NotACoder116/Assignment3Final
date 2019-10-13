const expess = require("express");
const router = expess.Router();
const alltask = require('../controller/appController');
const app = require('./../app');

router.route('/').get(alltask.student_list)          //get request for fetching list of students
     .post(alltask.add_student);                          //post request for adding new record
router.route('/:id').get(alltask.student_detail)     //get record of particular student
     .put(alltask.update_detail)                         //put request for updating particular record
 .delete(alltask.delete_student)    
module.exports = router;