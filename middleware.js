const express = require("express")
const app = express()
function ischeckAgemiddleware(req,res,next)
{
    const age = req.query.age
    if(age >=14)
    {
        next();
    }
    else{
        res.json({
            msg:"you havent age yet",
        });
    }
}
app.get("/ride1",ischeckAgemiddleware,function(req,res)
{
    res.json({
    msg : "you have succesfully took ride 1",
  });
})

app.get("/ride2",ischeckAgemiddleware,function(req,res)
{
  res.json({
    msg : "you have succesfully took ride 2",
  });
})
app.listen(3000);

