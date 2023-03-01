import jsonwebtoken  from 'jsonwebtoken';


export const createTokens = (user) => {
        const accessToken = jsonwebtoken.sign(
            
            {username : user.username, id: user.id},
                 "jwtsecretplschange",
                 {expiresIn: "20m"}
                 
                 );


            return accessToken

};






export const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
  
    req.headers["authorization"] = accessToken
    //   const token = authHeader && authHeader.split(" ")[1];
    console.log(req.headers)
    



    if(!accessToken) 
    return res.status(400).json({error: "User Not Authenticated!"}) //User didnt not sign and didnt get cookie attached 


    try {
        
        const validToken = jsonwebtoken.verify(accessToken, "jwtsecretplschange")

        if (validToken){
            
            console.log(validToken )
            req.authenticated = true; 
            return next();

        }

    }catch (err){

        return res.status(400).json({error : "Error not recognized Token - Please login again to get New Valid Token!" }) 

    }


} 

 