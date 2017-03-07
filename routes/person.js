var express = require('express');
var router = express.Router();
var Person = require('./../models/person');

// router.get('/', function(req, res) {
//     Person.find({}, function (err, people) {
//         if (err){
//             return;
//         }
//         res.send(people);
//     });
// });

// router.get('/:id', function(req, res) {
//     Person.findById(req.params.id, function(err, person){
//         if (err){
//             return;
//         }
//         res.send(person);
//     });
// });



module.exports = router;