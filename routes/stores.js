/**
 * Created by dtlinh on 11/19/2015.
 */
var express = require('express');
var router = express.Router();
var rs = {};

//Store view
router.get('/', function(req, res, next) {
    res.render('store', { title: 'Store' });
});


/*
 * GET groceries list.
 */
router.get('/storelist', function(req, res) {
    var db = req.db;
    var collection = db.get('groceries');
    collection.find({},{},function(e,docs){
        rs.result = docs
        res.json(rs);
    });
});


/*
 * POST to add a grocery store.
 */
router.post('/addstore', function(req, res) {
    var db = req.db;
    var collection = db.get('groceries');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});


module.exports = router;