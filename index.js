let express = require('express');
let app = express();

app.use('/', express.static('public'));

app.get('/about', (request,response)=>{
    // response.send("this is an about page")
    response.sendFile(__dirname + '/public/about.html');
})

app.get('/projects', (request,response)=>{
    // response.send("this is a project page")
    response.sendFile(__dirname + '/public/project.html');
})

app.get('/contact', (request,response)=>{
    response.send("email: ml8780@nyu.edu");
})
app.listen(3000, ()=> {
    console.log('listenign at localhost:3000');
});