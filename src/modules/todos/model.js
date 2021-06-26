const fs = require('fs')
const path = require('path')

const fetchAll = () => {
    let todo = fs. readFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), 'utf-8')
    todo = todo ? JSON.parse(todo) : []
    return todo
}
const insert = ({ title }) => {
    try{
        let todo = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), 'utf-8')
        todo = todo ? JSON.parse(todo) : [];
        console.log(todo);
        let id = todo.length ? todo[todo.length - 1].id + 1 : 1
        let newTodo = {
            id, 
            title
        }
        todo.push(newTodo)
        fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), JSON.stringify(todo, null, 4))
        return newTodo  
    } catch(error){
        console.log(error)
    }
}

const remove = ({ id }) => {
    try{
        let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), 'utf-8')
        todos = todos ? JSON.parse(todos) : []
        let filtered = todos.filter(todo => todo.id !== id)
        fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), JSON.stringify(filtered, null, 4))
        return filtered
    } catch(error){
        console.log(error)
    }
}

const update = ({ id, title }) => {
    try{
        let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), 'utf-8')
        todos = todos ? JSON.parse(todos) : []
        let found = todos.find(todo => todo.id == id)
        found.title = title
        fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), JSON.stringify(todos, null, 4))
        return found
    } catch(error){
        console.log(error)
    }
}



module.exports = { fetchAll, insert, remove, update }