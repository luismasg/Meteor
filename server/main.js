import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
Meteor.startup(() => {
    // code to run on server at startup
Accounts.validateNewUser((user)=>{
    console.log('this is a user',user);
    return true;
});
    // const petSchema = new SimpleSchema({
    //     name:{
    //         type:String,
    //         min:1,
    //         max:200,
    //         optional:true
    //     },
    //     age:{
    //         type:Number,
    //         min:0
    //     },
    //     contactNumber:{
    //         type:String,
    //         optional:true,
    //         regEx:SimpleSchema.RegEx.Phone
    //     }
    // });
    // petSchema.validate({
    //             age:1,
    //             contactNumber:''
    // });


    // const employeeschema= new SimpleSchema({
    //     name:{type:String,min:1,max:200},
    //     hourlyWage:{type:Number,min:0},
    //     email:{type:String,regEx:SimpleSchema.RegEx.Email }
    // });
    // employeeschema.validate({
    //     name:'andy',
    //     hourlyWage:45,
    //     email:'melocalhost'
    // });

});
