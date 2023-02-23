import sign from "jsonwebtoken";
import verify from "jsonwebtoken";
import jsonwebtoken  from 'jsonwebtoken';


export const createTokens = (user) => {
        const accessToken = jsonwebtoken.sign(
            {username : user.username, id: user.id},
                 "jwtsecretplschange"
                 );
            return accessToken

}

 