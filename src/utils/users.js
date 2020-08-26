const { urlencoded } = require("express")

const users = []

const addUser = ({ id, username, room}) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room){
        return {
            error: 'Username and room are required!'
        }
    }
    
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    
    if(existingUser){
        return {
            error: "Username is in use!"
        }
    }

    const user = {id, username, room}
    users.push(user)
    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

// addUser({
//     id: 22,
//     username: 'Tharun   ',
//     room: '    Singapore'
// })

// addUser({
//     id: 42,
//     username: 'Nigel  ',
//     room: '    Singapore'
// })

// addUser({
//     id: 32,
//     username: 'Tharun   ',
//     room: '    Malaysia'
// })

// console.log(users);

// addUser({
//     id: 32,
//     username: 'Tharun   ',
//     room: '    Singapore'
// })

// const removedUser = removeUser(22)

// console.log(removedUser)
// console.log(users);

// const user = getUser(212)
// console.log(user);

// const usersInRoom = getUsersInRoom('malasia')
// console.log(usersInRoom)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
