const control = require('../model/appModel');
const async = require('async');
const taskObject = {
    student_list: async (req, res) => {
        try {
            let studentData = await control.studentList();         
            if (studentData)
                res.send(studentData)
        } catch (error) {
            res.send(error)
        }

    },

    add_student: async (req, res) => {
        var data = req.body;
        try {
            let addData = await control.addStudent(data);         //wait untill get response from addStudent()
            if (addData)
                res.send(addData)
        } catch (error) {
            res.send(error)
        }

    },

    student_detail: async (req, res) => {
        var id = req.params.id;
        try {
            let studentData = await control.studentDetail(id);      //wait untill get response from studentDetail()
            if (studentData)
                res.send(studentData)
        } catch (error) {
            res.send(error)
        }
    },

    update_detail: async (req, res) => {
        var id = req.params.id;
        var data = req.body;
        try {
            let updateDetailsData = await control.updateDetail(id, data);    //wait untill get response from updateDetail()
            if (updateDetailsData)
                res.send(updateDetailsData)
        } catch (error) {
            res.send(error)
        }
    },

    delete_student: async (req, res) => {
        var id = req.params.id;
        try {
            let deleteData = await control.deleteStudent(id);      //wait untill get response from deleteStudent()
            if (deleteData)
                res.send(deleteData)
        } catch (error) {
            res.send(error)
        }
    }

}


module.exports = taskObject;