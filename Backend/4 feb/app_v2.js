const express = require("express");
const fsPromises = require("fs/promises");
const PORT = 1010;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    // DUMMY API :: to check if the server is running...
    res.send(`<h1>Server is running on PORT : ${PORT}</h1>`);
});

// CREATE - Add a new task
app.post("/tasks", async (req, res) => {
    try {
        const newObj = req.body;

        // Read the current list
        let text = await fsPromises.readFile("./db.json", "utf-8");
        if (text.length === 0) text = "[]"; // Ensure valid JSON format
        const arr = JSON.parse(text);

        // Generate a new ID
        let newId = arr.length > 0 ? arr[arr.length - 1].id + 1 : 1;
        newObj.id = newId;

        // Append the new task
        arr.push(newObj);

        // Save the updated list
        await fsPromises.writeFile("./db.json", JSON.stringify(arr, null, 2));

        res.status(201).json({ status: "success", task: newObj });
    } catch (err) {
        console.error("Error in POST /tasks:", err.message);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

// READ - Get all tasks
app.get("/tasks", async (req, res) => {
    try {
        let text = await fsPromises.readFile("./db.json", "utf-8");
        if (text.length === 0) text = "[]";
        const tasks = JSON.parse(text);

        res.status(200).json({ status: "success", data: { tasks } });
    } catch (err) {
        console.error("Error in GET /tasks:", err.message);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

// UPDATE - Update a specific task
app.patch("/tasks/:taskId", async (req, res) => {
    try {
        const taskId = parseInt(req.params.taskId);
        const updatedTaskInfo = req.body;

        // Read the current list
        let text = await fsPromises.readFile("./db.json", "utf-8");
        const arr = JSON.parse(text);

        // Find the task by ID
        const foundIndex = arr.findIndex((task) => task.id === taskId);

        if (foundIndex === -1) {
            return res.status(400).json({ status: "fail", message: "Invalid Task Id!" });
        }

        // Update the task
        arr[foundIndex] = { ...arr[foundIndex], ...updatedTaskInfo };

        // Save the updated list
        await fsPromises.writeFile("./db.json", JSON.stringify(arr, null, 2));

        res.status(200).json({ status: "success", data: { task: arr[foundIndex] } });
    } catch (err) {
        console.error("Error in PATCH /tasks/:taskId:", err.message);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`
-------------------------------------------------
------- Server Started on PORT : ${PORT} --------
------- link: http://localhost:${PORT}/ ---------
-------------------------------------------------
`);
});
