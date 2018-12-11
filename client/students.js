import { Template } from "meteor/templating";
import students from "../imports/db/students";

Template.students.helpers({
    students : function(){
        return students.find();
    }
})
