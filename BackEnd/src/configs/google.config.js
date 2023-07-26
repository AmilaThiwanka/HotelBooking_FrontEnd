import GoogleStrategy from "passport-google-oauth20";
import config from ".";
import user from "../api/models/user";


const googleAuth =(passport) =>{
    GoogleStrategy.Strategy;

    passport.use(new GoogleStrategy({
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: config.GOOGLE_REDIRECT_URL
    }, async(accessToekn, refreshToken, profile, callback)=>{
        const userObject ={
            googleID : profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
            firatName: profile.name.givenName,
            lastName:profile.name.familyName
        };
        let user = await user.findOne({googleID:profile.id});
        if(user)
        {
            return callback(null,user);
        }
        user.create(userObject)
        .then((user)=>{
            return callback(null, user);
        })
        .catch((err)=>{
            return callback(err.message);
        });
    })
    );
    passport.serializeUser((user, callback)=> {
        callback(null, user.id);
      });
      
      passport.deserializeUser((id, callback)=> {
       user.findById(id, (err,user) =>{
            callback(err, user);
       });
      });
};
export {googleAuth};