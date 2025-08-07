let tasks = []

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ tasks: tasks });
  } else if (req.method === 'POST') {
    const { title, about } = req.body;
    const newTask = {
        title,
        about,
    }
    tasks.push(newTask)
    console.log(`now tasks is: ${tasks}`)
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
