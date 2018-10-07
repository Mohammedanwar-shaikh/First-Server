const express =require('express');
const hbs=require('hbs');
const port=process.env.PORT || 3000;

var app=express()


hbs.registerPartials(__dirname +'/views/partial')
app.set('view engine','hbs');
app.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentDtae',()=>{

    return new Date();
});
hbs.registerHelper('getUpper',(text)=>{

    return text.toUpperCase();
});

app.use((req,res,next)=>{
    var dt=new Date().toString();
    console.log(dt+req.url+req.method);
    next();
});

app.get('/',(req,res)=>{

res.send({
    name:"Anwar",
    age:22
});

})


app.get('/about',(req,res)=>{

    res.render('about.hbs',{
        pageTitle:"About Page",
        pageBody:"This is page related to appp info",
        welcomeMessage:"welcome to my website"
    });

})

app.listen(port,()=>{

    console.log("server is up at port 3000");
});