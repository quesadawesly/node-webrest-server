import express from 'express'
import path from 'node:path';

export interface IOptions{
    port: number,
    public_path: string
}

export class Server {

    private app = express();
    private readonly port:number;
    private readonly public_path:string;

    constructor(option: IOptions){
        const {port, public_path = 'public'} = option;
        this.port = port;
        this.public_path = public_path;
    }

    async start( ){

        const publicPath = path.resolve(process.cwd(), this.public_path);

        this.app.use(express.static('public'))

        this.app.use((req, res) => {
            res.sendFile(path.join(publicPath, 'index.html'));
        });

        this.app.listen(this.port, ()=>{
            console.log('RUNNING');
        })
        
    }
    
}