import { Template } from "meteor/templating";
import students from "../imports/db/students";


Template.form.events
(
    {
        "click #submit" : function( event, template )
        {
            students.insert
            (
                {
                    name : template.find( "#name" ).value,
                    lastName : template.find( "#lastName" ).value,
                    link : template.find( "#link" ).value
                }
            )
        }

    }
)
