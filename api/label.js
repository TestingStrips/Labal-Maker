// api/label.js (Node.js / Next.js API Route handler)
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Logic to fetch labels from a database
      return res.status(200).json({ success: true, labels: ['Bug', 'Feature', 'Documentation'] });
      
    case 'POST':
      // Logic to create a new label
      const { labelName } = req.body;
      return res.status(201).json({ success: true, message: `Label "${labelName}" created.` });
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
