import mongoose,{Schema} from "mongoose";

const userShema =new Schema({
    googleID:{type: String, required: true},
    email:{type: String, required: true},
    displayName:{type: String, required: true},
    image:{type: String, required: true},
    firatName:{type: String, required: true},
    lastName:{type: String, required: true}
},{
    timestamps: true
});

const user =mongoose.model("Users",userShema);

export default user;