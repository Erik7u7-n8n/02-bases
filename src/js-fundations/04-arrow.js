const users = [
    {id: 1, name: 'Erik1 Palacios'},
    {id: 2, name: 'Erik2 Palacios'},
    {id: 3, name: 'Erik3 Palacios'},
    {id: 4, name: 'Erik4 Palacios'}
];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {return callback(`User not found with id: ${id}`);}

    
    return callback(null, user);
};

module.exports = {
    getUserById
};