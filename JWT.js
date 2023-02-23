import sign from "jsonwebtoken";
import {verify} from "jsonwebtoken";
import jsonwebtoken  from 'jsonwebtoken';


export const createTokens = (user) => {
        const accessToken = jsonwebtoken.sign(
            {username : user.username, id: user.id},
                 "jwtsecretplschange"
                 );
            return accessToken

};

export const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];


    if(!accessToken) 
    return res.status(400).json({error: "User Not Authenticated!"}) //User didnt not sign and didnt get cookie attached 

    try {

        const validToken = verify(accessToken, "jwtsecretplschange")

        if (validToken){

            req.authenticated = true; 
            return next();
        }

    }catch (err){

        return res.status(400).json({error : "Error not recognized Token - Please login again to get New Valid Token!" })

    }


} 

 