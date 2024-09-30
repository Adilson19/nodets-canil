//

//  Opcoes de string que podem estar no MenuObeject
type MenuOpctions = '' | 'all' | 'dog' | 'cat' | 'fish';
//  Cria o objecto do menu
export const createMenuObject = (activeMenu: MenuOpctions) => {//Recebe o activemenu que eh uma string e contem o menu que esteja activo
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}