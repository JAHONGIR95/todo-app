async function usersList () {
    let response = await request('/users', 'GET')
    for(let user of response){
        let tr = document.createElement("tr")
        let number = document.createElement("td")
        let name = document.createElement("td")
        let isAdmin = document.createElement("td")
        let read = document.createElement("td")
        let add = document.createElement("td")
        let remove = document.createElement("td")
        let change = document.createElement("td")


        let isAdminCheck = document.createElement("input");
        let readCheck = document.createElement("input");
        let addCheck = document.createElement("input");
        let removeCheck = document.createElement("input");
        let changeCheck = document.createElement("input");
        
        isAdminCheck.type = "checkbox";
        readCheck.type = "checkbox";
        addCheck.type = "checkbox";
        removeCheck.type = "checkbox";
        changeCheck.type = "checkbox";

        isAdminCheck.checked = user.isAdmin
        readCheck.checked = user.permission.read
        addCheck.checked = user.permission.add
        removeCheck.checked = user.permission.remove
        changeCheck.checked = user.permission.change

        isAdmin.appendChild(isAdminCheck)
        read.appendChild(readCheck)
        add.appendChild(addCheck)
        remove.appendChild(removeCheck)
        change.appendChild(changeCheck)

        name.textContent = user.username
        number.textContent = user.id

        tr.append(number)
        tr.append(name)
        tr.append(isAdmin)
        tr.append(read)
        tr.append(add)
        tr.append(remove)
        tr.append(change)

        tbody.append(tr)

        isAdminCheck.addEventListener("change", () => {
            isAdminFunc(user.id)
        })

        readCheck.addEventListener('change', (event) => {
            readFunc(user.id, "read")
        });

        addCheck.addEventListener('change', (event) => {
            readFunc(user.id, "add")
        })

        removeCheck.addEventListener('change', (event) => {
            readFunc(user.id, "remove")
        })

        changeCheck.addEventListener('change', (event) => {
            readFunc(user.id, "change")
        })
    }
}

usersList()


async function isAdminFunc(userId) {
    await request("/admin", "PUT", {userId});
}

async function readFunc(userId, permissionType) {
    let response = await request( "/users", "PUT", { userId, permissionType } );
    console.log(response)
}