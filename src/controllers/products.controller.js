// Aquí haremos la lógica para la petición de getAll
import productDAO from "../dao/products.dao.js";

export const getAll = (req, res) => {
  productDAO.getAll()
    .then(products => {
      if(products != null)
        res.render('../src/views/index.ejs', { products: products }); // Pasando el objeto products a la vista
      else
        res.json({
          status: 'error',
        })
    })
    .catch(err => {
      res.json({
        status: "Servidor no disponible"
      });
    });
};


export const getOne = (req, res) => {
  productDAO.getOne(req.params.bc)
    .then(result => {
      if (result !== null) {
        res.json(result);
      } else {
        res.json({
          status: "Product not found"
        });
      }
    })
    .catch(err => {
      res.json({
        status: "Servidor no disponible"
      });
    });
};


export const insertProduct = async (req, res) => {
  try {
    const result = await productDAO.insertProduct(req.body);
    if (result) {
      res.redirect('/api/product')
    } 
  } catch (err) {
    res.json({ status: "Server Unavailable" });
  }
};



export const updateProduct = (req, res) => {
    productDAO.updateProduct(req.params.bc,req.body)
    .then(result=>{
      if(result)
        res.json({
            status:"Product updated "
        });
        else 
          res.json({status:"Service unavailable"});
    })
    .catch(erro=>{
        res.json({
          status:"Server unavailable"
        })
      })
};




export const deleteProduct = (req, res) => {
  productDAO.deleteProduct(req.params.bc)
  .then(result=>{
    if(result)
      res.json({
          status:"Product delete "
      });
      else 
        res.json({status:"Service unavailable"});
  })
  .catch(erro=>{
      res.json({
        status:"Server unavailable"
      })
    })
};


//Para llevar informacion usamos POST

