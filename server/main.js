import { Meteor } from 'meteor/meteor'
import students from "../imports/db/students"


Meteor.startup(() => {
  if( students.find().count() <= 0 )
  {
    students.insert(
      {
        name : "Manon",
        lastName : "Ragnotti",
        link : "https://github.com/ManonRagnotti"
      }
    );
  }
});
