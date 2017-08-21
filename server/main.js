import {Meteor} from "meteor/meteor";
// Players is being used by meteor to setup DDP, it's supposed to be here.
import {Players} from "./../imports/api/players";
Meteor.startup(() => {

});

// // object spread operator
// let house = {
//     bedrooms: 2,
//     bathrooms: 1
// };
// let yearBuilt = 1992;
//
// console.log({
//     ...house,
//     bedrooms:4,
//     yearBuilt,
//     flooring: 'carpet'
// });
