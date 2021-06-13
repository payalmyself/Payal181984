let mixedMessages = ['My name is Payal',
                     'I like to walk',
                     'I like to listen'];
const message = () => {
    let mixedMessages = ['My name is Payal',
                     'I like to walk',
                     'I like to listen'];

}
const messageGen = () => {
        for(let i=0; i<mixedMessages.length; i++) {
            return mixedMessages[Math.floor(Math.random() * mixedMessages.length)];            let msg = Math.floor(Math.random() * mixedMessages.length);
            let msgResult = [];
                msgResult.push('My Introduction is:' +mixedMessages[msg]);
        }
    }

console.log(messageGen());