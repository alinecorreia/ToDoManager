const uuid = require('uuid');0

const db = [{
    id:uuid(),
    title: "titulo 1",
    description: "description 1",
    isDone: false,
    isPriority: false
}, {
    id:uuid(),
    title: "titulo 2",
    description: "description 2",
    isDone: false,
    isPriority: false
}];

const insert = (task, callback) => {

    const data = {
        id:uuid(),
        title: task.title,
        description: task.description,
        isDone: task.isDone,
        isPriority: task.isPriority
    }
    db.push(data);
    callback(null, data);
}

// Retorna um array contendo todos os itens da tabela Tasks
const listAll = (callback) => {
    callback(null, db.filter(()=>true));
}

// Retorna o item de <ID> id, caso não exista retorna null
const findTaskById = (id, callback) => {
    
}

// Remove o item de <ID> id.
const remove = (id, callback) => {
    
}

// Sobreescreve o módulo
module.exports = { insert, listAll, findTaskById, remove }