const buildPerson = ({name,birthdate}) => {
    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),

    }
}

const obj = {name: 'Erik', birthdate: '1995-09-06'};

const Erik = buildPerson(obj);
console.log({Erik});  