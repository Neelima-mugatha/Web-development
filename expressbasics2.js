const express=require("express");
const app=express();
app.use(express.json());
const port=3000
var users=[{
    name:"john",
    age:22,
   kidneys:[{
       healthy:false
    }]
}];
app.get("/",function(req,res)
{
    const johnkidneys = users[0].kidneys
    const noofkidneys= johnkidneys.length
    let healthykidneys = 0;
    for(let i=0;i<johnkidneys.length;i++)
    {
        if(johnkidneys[i].healthy)
        {
            healthykidneys++;
        }
    }
    const unhealthykidneys=noofkidneys-healthykidneys;
    res.json({
        unhealthykidneys,
        healthykidneys,
        noofkidneys

    })
})
app.post("/", function (req, res) {
  if (typeof req.body?.isHealthy !== "boolean") {
    return res.status(400).json({
      msg: "Send JSON such as {\"isHealthy\": true}"
    });
  }

  users[0].kidneys.push({
    healthy: req.body.isHealthy
  });

  res.json({ msg: "done!" });
});
app.put("/",function(req,res)
{
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy=true;   
    }
    res.json({})
})
app.delete("/",function(req,res){
if(isThereAtleastOneUnhealthyKidney()) {
const newKidneys = [];
for(let i = 0; i<users[0].kidneys.length;i++){
if(users[0].kidneys[i].healthy){
      newKidneys.push({
         healthy: true
         })
        }
    }
users[0].kidneys = newKidneys;
res.json({msg:"done"})
} else {
res. status(411). json({
   msg: "You have no bad kidneys"
});
 }
})

function isThereAtleastOneUnhealthyKidney(){
  let atleastOneUnhealthyKidney = false;
  for(let i=0;i<users[0].kidneys.length;i++){
   if(!users[0].kidneys[i].healthy) {
     atleastOneUnhealthyKidney = true;
   }
}
return atleastOneUnhealthyKidney
}
app.listen(port)  