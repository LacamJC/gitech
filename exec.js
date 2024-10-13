const shell = require('shelljs');

function commitAndPush(msg){
    shell.exec('git add *');
    shell.exec('console.log("Adicionando todas as modificações para o git"');
    shell.exec(`git commit -am '${msg}'`);
    shell.exec('git push');

    console.log('Alterações realizadas com sucesso')
}

commitAndPush('teste')