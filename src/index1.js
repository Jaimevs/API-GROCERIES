const express = require('express');
const app = express();
app.use(express.json()); //para que mi formato entienda el formato Json

app.get('/home/:data',(req,res)=>{

    console.log(req.params.barcode);     //console.log(req.body);                        //Me lo imprime en consola si despues de /getOne/_____ pongo algun dato
    res.json({
        "status":"Peticion por get recibida"

    });
});

app.listen(3200,()=>{
    console.log("Server on port 3200")
})










/*const express = require('express');
const app = express();
app.use(express.json());






app.get('/getAll',(req,res)=>{


    //Aqui se procesa la peticion y se envía una respuest
    res.json({                              
        "status":"Peticion por get recibida"
    });
});

app.get('/getOne/:barcode',(req,res)=>{               //Indico con los : que en esa ruta ira un parametro
    console.log(req.params.barcode);                          //Me lo imprime en consola si despues de /getOne/_____ pongo algun dato
    res.json({
        "status":"Peticion por get recibida"
    });
});

app.get('/getTwo/:barcode',(req,res)=>{
    //console.log(req.params.barcode);
    let a = req.params.barcode
    for (var i = 0; i < 9; i++){
        
    }
    console.log(a);
        //(req.params.barcode)*2);
    res.json({
        "status":"Numero Binario"
    });
})

app.get("/factorial/:number",(req,res)=>{
    let number = parseInt(req.params.number)
    let i=number-1;
    let factorial=number;
    while(i>1){
        factorial*=i;
        i--;
    }
    res.json({
        "result":factorial
    })
})

app.get("/binary/:number",(req,res)=>{
    let number = parseInt(req.params.number);
    let r;
    let result ='';
    while(number > 0){
        r=parseInt(number%2);
        result=r+result;
        number =parents(number/2);
    }
    res.json({
        "result":result
    })

})



app.post("/insertProduct",(req, res)=>{
    console.log(req.body)
    res.json({
        status:"producto insertado"
    })
})




app.post('/post',(req,res)=>{
    //Aqui se procesa la peticion y se envía una respuest
    res.json({
        "status":"Peticion por post recibida"
    });
});


app.put('/put',(req,res)=>{
    //Aqui se procesa la peticion y se envía una respuest
    res.json({
        "status":"Peticion por put recibida"
    });
});


app.delete('/delte',(req,res)=>{
    //Aqui se procesa la peticion y se envía una respuest
    res.json({
        "status":"Peticion por delete recibida"
    });
});

//Port
app.listen(3200,()=>{
    console.log("Server on port 3200")
})
 */