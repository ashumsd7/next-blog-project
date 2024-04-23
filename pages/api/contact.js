function handler(req, res) {
  console.log("hello");
  if (req.method == "POST") {
    const { name, email, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(422).json({ message: "Please fill all the fields" });
      return;
    } else {
      //store it in DB
      const newMsg = {
        email,
        name,
        message,
      };

      console.log(newMsg);
      res.status(201).json({ message: "Message received" });
    }
  }
}

export default handler;
