export default function helloWorld(req, res) {
    const { name } = req.body.name
    res.status(200).json({message: `hello, ${name}!`})
}