


import * as http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {
    console.log(req.url)


    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const htmlfile = fs.readFileSync('./public/index.html', 'utf-8');
        res.end(htmlfile);
        return;
    }
    
    if(req.url?.endsWith('.js')){
        res.writeHead(200, {'Content-Type': 'application/javascript'});
    }else if(req.url?.endsWith('.css')){
        res.writeHead(200, {'Content-Type': 'text/css'});
    }

    const responseContent = fs.readFileSync(`./public/${req.url}`, 'utf-8')
    res.end(responseContent);
    
});

server.listen(8080, () =>{
    console.log('server running')
})

