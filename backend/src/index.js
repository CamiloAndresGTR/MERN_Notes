const app = require('./app');
const conectarDB = require('./database');

async function  main(){

    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
    
}

main();
conectarDB();

