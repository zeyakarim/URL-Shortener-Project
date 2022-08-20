const ShorterUrl = require('../models/UrlShorter');
const CountUrl = require('../models/UrlCreated');

module.exports.homePage = async function(req,res){
    const url = await ShorterUrl.find({}).sort('-createdAt');
    const createdUrl = await CountUrl.find({});
    res.render('home',{
        title : 'URL Shortener',
        ShorterUrl: url,
        createUrl : createdUrl
    });
}

module.exports.allUrls = async function(req,res) {
    const urls = await ShorterUrl.create({fullUrl:req.body.fullUrl});
    // const count = await CountUrl.create({urlCreated: 12});
    // console.log(count);
    
    const countId = '630098eca5ba17f9eb0871cc' 
    const findId = await CountUrl.findByIdAndUpdate(countId,{$inc: {urlCreated: 1}});

    console.log(findId)
    if(req.xhr){
        return res.json({
            data: {
                url: urls
            },
            message: 'Url Added'
        });
    }
}

module.exports.shortUrls = async function(req,res){
    const findUrl = await ShorterUrl.findOne({shortUrl: req.params.shortUrlLink});

    if(!findUrl){
        return res.status(404)
    }
    res.redirect(findUrl.fullUrl);
}