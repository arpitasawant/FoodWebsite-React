const jwt=require('jsonwebtoken');
const SECRET_KEY="USERAPI";


const auth=(req,res,next)=>{
    try {
        let token=req.headers.authorization;
        if(token){
            token=token.split(' ')[1];
            let user=jwt.verify(token,SECRET_KEY);
            req.userid=user.id;

        }
        else{
           return res.status(401).send('unauthoriz user');
        }
        next();
        
    } catch (err) {
        console.log(err);

    }
};

module.exports=auth;