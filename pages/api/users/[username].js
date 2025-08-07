// /pages/api/users/[username].js

let users = [
  { name: 'Jacob', email: 'jacob@example.com' },
  { name: 'jhon', email: 'jhon@example.com' }
]

export default function handler(req, res){
    const { username } = req.query
    if (req.method === 'GET') {
        const user = users.find(u => u.name.toLowerCase() === username.toLowerCase())
        if (user) {
            res.status(200).json({user})
        } else {
            res.status(404).json({message: '404'})
        }
    } else {
        res.status(405).json({ message: 'undefind'})
    }
}
