/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: arshia a kalkhorani_ Student ID: 106391170_ Date: _1/17/2020__
* Heroku Link: _______________________________________________________________
*
********************************************************************************/ 

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataService = require("./modules/data-service.js");

const myData = dataService("mongodb+srv://arshia:arshia1234@cluster0-aclkq.mongodb.net/sample_supplies?retryWrites=true&w=majority");
                            
const app = express();

app.use(cors());

app.use(bodyParser.json());

const HTTP_PORT = process.env.PORT || 8080;

//myData.initialize();
// ************* API Routes

// POST /api/sales (NOTE: This route must read the contents of the request body)
app.post("api/sales", (req, res) =>{ 
    res.json(myData.addNewSale(req.body))
} );


// GET /api/sales (NOTE: This route must accept the numeric query parameters "page" and "perPage", ie: /api/sales?page=1&perPage=5 )
app.get("/api/sales/:page&perpage", (req, res) =>{
    let page = myData.getAllSales(req.params.page,req.params.perpage)
    page ? res.json(page) : res.status(404).json({messege : "not found"});
});


// GET /api/sales (NOTE: This route must accept a numeric route parameter, ie: /api/sales/5bd761dcae323e45a93ccfe8)
app.get("/api/sales/:id", (req, res)=>{ 
let ID = myData.getSaleById(req.params.id)
ID ? res.json(ID) : res.status(404).json({messege : "not found"});
}  );


// PUT /api/sales (NOTE: This route must accept a numeric route parameter, ie: /api/sales/5bd761dcae323e45a93ccfe8 as well as read the contents of the request body)
app.put("/api/theaters/:id", (req, res) => {
  
    
    if (req.params.id != req.body._id) {
      res.status(404).json({ message: "not found" });
    }
    else {
   
      let o = myData.theaterEdit(req.body);
      o ? res.json(o) : res.status(404).json({ message: "not found" });
    }
  });


// DELETE /api/sales (NOTE: This route must accept a numeric route parameter, ie: /api/sales/5bd761dcae323e45a93ccfe8)
app.delete("/api/theaters/:id", (req, res) => {

    myData.deleteSaleById(req.params.id)
     res.status(204).end();
  });

// ************* Initialize the Service & Start the Server

myData.initialize().then(()=>{
    app.listen(HTTP_PORT,()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});

