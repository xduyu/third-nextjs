let users = [{name: 'Jacob'}, {name: 'jhon'}]

export default function handler(req, res) {
    if(req.method === 'GET'){
        res.status(200).json({users})
    }
}