import { Schema, model, models } from "mongoose";
import { Product } from "./Product";

const WishProductSchema = new Schema({
    userEmail:{type:String, required:true},
    product: {type:Schema.Types.ObjectId, ref: Product},
});

export const WishedProduct = models?.WishedProduct || model('WishedProduct', WishProductSchema);