import express, { json } from "express";
import 'dotenv/config'
const app = express();


const jsonData = {
    "user": {
        "id": 12345,
        "username": "random_user",
        "email": "user@example.com",
        "profile": {
            "age": 30,
            "gender": "female",
            "interests": ["reading", "hiking", "coding"]
        }
    },
    "posts": [
        {
            "post_id": 1,
            "title": "My First Post",
            "content": "This is the content of my first post.",
            "tags": ["introduction", "first post"],
            "comments": [
                {
                    "comment_id": 101,
                    "user": "commenter1",
                    "content": "Great post!",
                    "likes": 5
                },
                {
                    "comment_id": 102,
                    "user": "commenter2",
                    "content": "Welcome to the blogosphere!",
                    "likes": 3
                }
            ]
        },
        {
            "post_id": 2,
            "title": "Another Day, Another Post",
            "content": "Content for the second post.",
            "tags": ["daily", "thoughts"],
            "comments": []
        }
    ],
    "notifications": [
        {
            "notification_id": 1,
            "type": "new_comment",
            "message": "User commenter1 commented on your post 'My First Post'.",
            "timestamp": "2024-07-20T10:30:00Z"
        },
        {
            "notification_id": 2,
            "type": "new_like",
            "message": "User commenter2 liked your comment.",
            "timestamp": "2024-07-20T12:15:00Z"
        }
    ],
    "settings": {
        "theme": "dark",
        "notifications": {
            "email": true,
            "sms": false,
            "push": true
        }
    }
}

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/api/data', (req, res) => {
    res.json(jsonData);
})

app.listen(process.env.PORT, () => {
    console.log(`app listening on ${port}`);
})