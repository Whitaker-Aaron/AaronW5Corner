const name = 'Aaron';

function Message() {
    //JSX: Javascript XML
    let nameToReturn;
    if (getName() == 'Aaron')
        return <h1>Hello {getName()}</h1>;
    else return <h1>You are not Aaron.</h1>
}

function getName() {
    return name;
}

export default Message;