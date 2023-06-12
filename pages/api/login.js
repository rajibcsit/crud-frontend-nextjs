import axios from "@/lib/axios";

export default async function loginHandler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Perform authentication logic here using Axios or any other library
      // Example: const response = await axios.post('/login', { username, password });
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      // If authentication is successful, send a success response
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      // If authentication fails, send an error response
      res.status(401).json({ message: "Login failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
