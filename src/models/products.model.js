import { Schema,model } from "mongoose"; //Schema es para crear esos modelos de datos
const productSchema=new Schema ({
    barcode:{
        type:String,
        unique:true,
        require:true
    },
        description:String,
        brand:String,
        price:Number,
        cost:Number,
        stock:Number,
        expiredData:String,
        status:Number
    
},{
    versionKey:false,
    timeseries:true  //cuando se creo el docuemtno y la fecha de la ultima actualziacion
});

export default model('products',productSchema);