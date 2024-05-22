export interface Message {
    sender: string;
    text: string;
}
export interface Channel {
    name: string;
    messageHistory: Message[];
}

export const messageHistory = [
    {
        sender: 'Alice',
        text: 'hi Bob'
    },
    {
        sender: 'Bob',
        text: 'hello Alice'
    }
]

const generalChannel = {
    name: 'General',
    messageHistory: messageHistory
}

const secondChannel = {
    name: 'Second Channel',
    messageHistory: [
        {
            sender: 'Somebody',
            text: 'This is the 2nd channel!!!111'
        }
    ]
}

export const channels = [generalChannel, secondChannel]