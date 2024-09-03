
import mongoose,{Schema,Document} from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const userSchema :Schema = new Schema({
  name:String,
  email : String,
  phone: Number,
  password : String
});

const UserModel = mongoose.model<IUser>("User",userSchema);

export default UserModel;