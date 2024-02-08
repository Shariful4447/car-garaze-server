const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000 ;

//middlewARE

app.use(cors());
app.use(express.json());    

app.get('/', (req, res) =>{
    res.send('car is running')
})

app.listen(port, ()=>{
    console.log(`Car garaze server is running on port ${port}`);
})