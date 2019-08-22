module.exports = {
    requireAuthentication: function(req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function(req,res,next){
        var myDate = new Date;
        console.log('Date: ' + myDate.toString() + ' Method: ' + req.method + ' URL: ' + req.originalUrl);
        next();
    }
};