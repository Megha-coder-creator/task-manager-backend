const jwt = require('jsonwebtoken');
module.exports= (req,res,next) => {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({message: 'No token, access denied'});

    try {
        const decoded = jwt.verify(token, 'secretkey123');
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({message: 'Invalid token'});
    }
};