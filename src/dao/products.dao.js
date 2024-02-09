
import Product from '../models/products.model.js'; //intancia del modelo es Product

const productDAO={}//Objeto 
productDAO.getAll=async()=>{
    const product=await Product.find();
    return product;

};



productDAO.getOne=async(bc)=>{
    const product=await Product.findOne({barcode:bc});
    return product;
};


productDAO.insertProduct=async(product)=>{
    const productSaved=new Product (product);
    await productSaved.save(); //Para guardar la instancia del modelo product
    return true;
}

productDAO.updateProduct=async(bc,product)=>{
    const productUpdated=await Product.findOneAndUpdate({barcode:bc},product)
    if(productUpdated!=null){
        return true;
    }else{
        return false;
    }
    
}


productDAO.deleteProduct = async (bc) => {
    try {
        const productDelete = await Product.findOneAndDelete({ barcode: bc });
        if (productDelete != null) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false; // Manejo de errores: devolver falso si hay un error
    }
};



export default productDAO;