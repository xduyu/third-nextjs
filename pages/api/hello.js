export default function handler(req, res) {
  const { name } = req.query;
  res.status(200).json({ message: `hello, ${name || 'guest'}!` });
}
