// async function request(path, method, body){
//     let response = await fetch (path, {
//         method,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     })
    
//     return await response.json() 
// }

// authForm.onsubmit = async (event) => {
//     event.preventDefault()

//     let obj = {
//         username: username.value,
//         email: email.value,
//         password: password.value
//     }

//     let response = await request('/register', 'POST', obj)
//     // console.log(response.json());
// }