const {getUserById} = require('./js-fundations/04-arrow.js');

const id = 2;

getUserById(id, (error, user) => {
    if (error){
        throw new Error(error);
    }
    console.log({user});
}); 