const express=require("express");
const port=3000;
const app=express();

 function calculateSum(n)
 {
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
     return sum;
 }

 app.get("/", function(req,res)
{
    n=req.query.n;
    let ans = calculateSum(n)
    res.send("hi there " + ans)
})
app.listen(port)
