const router = require('express').Router();
const Doc = require('../models/doc');

router.get('/api/v1/:getCode', async(req, res) => {
    const { getCode } = req.params;
    
    try{
        const doc = await Doc.findOne({ customUrl: getCode }).exec();

        if(!doc){
            return res.status(401).json({ error: 'No document found'});
        }
    }
    
    catch(err){
        res.status(500).json({ error: err.message });
    }

    res.status(200).json(doc);
});

module.exports = router;