const app = require("express")();
const port = 5000;
app.listen(port, () => console.log(`Server is listening on port:${port}`));
app.get("/", (req, res) => {
	res.json({ msg: "The server is alive!" });
});
