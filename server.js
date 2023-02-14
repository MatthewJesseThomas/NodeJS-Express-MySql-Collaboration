const express = require('express');
const cors = require('cors');
const { removeAll, create } = require('./app/models/tutorial.model.js');
const { findAll } = require('./app/controllers/tutorial.controller.js');
const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));
// Routes
require("./app/routes/tutorial.routes.js")(app);

app.post("/create", create =>{
    res.json({ 
        "title": "New Data",
        "description": "Create new Data"
        });
});
app.get("/findAll", findAll =>{
    res.json({ 
        "title": " Retrieve Data",
        "description": "Retrieve All Data"
        });
});
app.get("/published", findAllPublished =>{
    res.json({ 
        "title": "Retrieve All Data",
        "description": "Retrieve All Published Data"
        });
});
app.get("/:id", findOne =>{
    res.json({ 
        "title": "Retrieve Data By ID",
        "description": "Retrieve single Data"
        });
});
app.put("/update", update => {
    res.json({ 
        "title": "Updates",
        "description": "Data Updated By ID"
        });
    
});
app.delete("/delete", remove =>{
    res.json({ 
        "title": "Deletion",
        "description": "Deleted By ID"
        });
});
app.delete("/deleteAll", removeAll =>{
    res.json({ 
        "title": "DeletionAll",
        "description": "All Data were deleted successfully!"
        });
});

const PORT = process.env.Port || 8080;
app.listen(PORT, () =>{
    console.log(`Server is Running on Port ${PORT}.`);
});