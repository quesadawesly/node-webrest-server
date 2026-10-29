import { env } from 'node:process';
import { envs } from './Config/envs';
import {Server}  from './presentation/server';

const main = () => {

    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    }).start();
}

(()=>{
    main();
})();

