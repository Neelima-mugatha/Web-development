const express =require("express");
const jwt =require("jsonwebtoken");
const jwtpassword = "1235vv";
const app =express();
app.use(express.json());
const ALL_USERS =[
    {
        username : "neelima@gmail.com",
        password : "123",
        name : "neelimamugatha"
    },
    {   username : "hima@gmail.com",
        password : "12346",
        name : "himasdf"

    },
    {
        username : "haima@gmail.com",
        password : "4646",
        name : "haimaa"
    }
];
function userExists(username ,password)
{
    for(let i =0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
            return true;
        }
    }
    return false;
}
app.post("/signin",function(req,res)
{
    const username = req.body.username;
    const password =req.body.password;
    if(!userExists(username,password))
    {
     return res.status(404).json(
     {
        msg  : "this user is not existed in database",
     });
}
var token = jwt.sign({username:username}, jwtpassword);
return res.json({
   token,
});
});
app.get("/users",function(req, res){
 let token= req.headers.authorization;
 try{
   const decoded=jwt.verify(token , jwtpassword);
   const username = decoded.username;
 }
 catch(err)
 {
    return res.status(403).json({
      msg:"inavalid token",
    });
 }
});
app.listen(3000)
