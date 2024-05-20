export interface Message {
    sender: string;
    text: string;
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