interface userInterface {
    name: String,
    message: String,
    status: "Sent" | "Delivered" | "Recieved",
    unread: Number,
    icon: String | undefined,
    date: String 
}[];

export const UserListData: userInterface[] = [
    {
        name: "Alice",
        message: "Hey, how are you?",
        status: "Sent",
        unread: 2,
        icon: "https://example.com/icon1.png",
        date: "2024-12-24"
    },
    {
        name: "Bob",
        message: "Meeting rescheduled to 3 PM.",
        status: "Delivered",
        unread: 0,
        icon: undefined,
        date: "2024-12-23"
    },
    {
        name: "Charlie",
        message: "Thanks for the update!",
        status: "Recieved",
        unread: 1,
        icon: "https://example.com/icon2.png",
        date: "2024-12-22"
    },
    {
        name: "Diana",
        message: "Happy holidays!",
        status: "Delivered",
        unread: 0,
        icon: undefined,
        date: "2024-12-21"
    },
    {
        name: "Eve",
        message: "Can we catch up tomorrow?",
        status: "Sent",
        unread: 3,
        icon: "https://example.com/icon3.png",
        date: "2024-12-20"
    },
    {
        name: "Alice",
        message: "Hey, how are you?",
        status: "Sent",
        unread: 2,
        icon: "https://example.com/icon1.png",
        date: "2024-12-24"
    },
    {
        name: "Bob",
        message: "Meeting rescheduled to 3 PM.",
        status: "Delivered",
        unread: 0,
        icon: undefined,
        date: "2024-12-23"
    },
    {
        name: "Charlie",
        message: "Thanks for the update!",
        status: "Recieved",
        unread: 1,
        icon: "https://example.com/icon2.png",
        date: "2024-12-22"
    },
    {
        name: "Diana",
        message: "Happy holidays!",
        status: "Delivered",
        unread: 0,
        icon: undefined,
        date: "2024-12-21"
    },
    {
        name: "Eve",
        message: "Can we catch up tomorrow?",
        status: "Sent",
        unread: 3,
        icon: "https://example.com/icon3.png",
        date: "2024-12-20"
    },
    {
        name: "Frank",
        message: "Don't forget the project deadline.",
        status: "Recieved",
        unread: 4,
        icon: "https://example.com/icon4.png",
        date: "2024-12-19"
    },
    {
        name: "Grace",
        message: "Let's meet at 5 PM.",
        status: "Delivered",
        unread: 0,
        icon: "https://example.com/icon5.png",
        date: "2024-12-18"
    },
    {
        name: "Hank",
        message: "Sure, I’ll get back to you soon.",
        status: "Sent",
        unread: 0,
        icon: undefined,
        date: "2024-12-17"
    },
    {
        name: "Ivy",
        message: "Happy birthday! 🎉",
        status: "Recieved",
        unread: 2,
        icon: "https://example.com/icon6.png",
        date: "2024-12-16"
    },
    {
        name: "Jack",
        message: "Could you send me the report?",
        status: "Delivered",
        unread: 0,
        icon: undefined,
        date: "2024-12-15"
    }
];
