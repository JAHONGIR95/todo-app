function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
let haveUser=getCookie("username")

if(haveUser) {
    let username = haveUser
    username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
    logo.textContent = 'Welcome, ' + username
} 


async function fetchTodos(){
    let todos = await request('/api/todos', 'GET')

    for(let todo of todos){
        let li = document.createElement('li')
        let text = document.createElement('span')
        let button = document.createElement('button')

        text.textContent = todo.title
        text.contentEditable = true
        button.textContent = 'remove'
        text.spellcheck = "false"

        li.append(text)
        li.append(button)
        list.append(li)

        button.onclick = async() => {
            let res = await request('/api/todos', 'DELETE', {id: todo.id})
            if(res.status == 403){
                alert(res.message)
            } else {
                li.remove()
            }
        }

        text.onkeypress = async(event) => {
            if(event.keyCode === 13 && text.textContent.trim() !== ""){
                let response = await request('/api/todos', 'PUT', { id: todo.id, title: text.textContent })
                location.reload(true)
            }
        }
    }
}

fetchTodos()