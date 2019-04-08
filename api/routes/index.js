var express = require('express');
var router = express.Router();
var mongo = require('mongodb-curd');
var db = 'yuekao1';
var col = 'dizhi';

/* GET home page. */
router.post('/api/chazhao', function(req, res, next) {
    mongo.find(db, col, function(result) {
        if (result) {
            res.json({ code: 1, msg: '找到了', data: result })
        } else {
            res.json({ code: 0, msg: '没找到了' })
        }
    })
});

router.post('/api/charu', function(req, res, next) {
    var name = req.body.name,
        tel = req.body.tel,
        dizhi = req.body.dizhi,
        juti = req.body.juti;
    mongo.insert(db, col, { name: name, tel: tel, dizhi: dizhi, juti, juti }, function(result) {
        if (result) {
            res.json({ code: 1, msg: '添加成功' })
        } else {
            res.json({ code: 0, msg: '添加失败' })
        }
    })
});

router.post('/api/shanchu', function(req, res, next) {
    var obj = req.body;
    mongo.remove(db, col, obj, function(result) {
        if (result) {
            res.json({ code: 1, msg: '删除成功' })
        } else {
            res.json({ code: 0, msg: '删除失败' })
        }
    })
});


router.post('/api/genggai', function(req, res, next) {
    var obj = req.body;
    mongo.updata(db, col, obj, function(result) {
        if (result) {
            res.json({ code: 1, msg: '更改成功' })
        } else {
            res.json({ code: 0, msg: '更改失败' })
        }
    })
});

module.exports = router;