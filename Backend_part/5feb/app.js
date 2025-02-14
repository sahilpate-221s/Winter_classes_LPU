import express from 'express';
import { connectDB } from 'mongoose';
const app = express();

app.use(express.json());

connectDB();


app.patch('/tasks/:taskID', async (req, res) => {
    try {
    // get the task id
    const { taskID } = req.params;
    
    // get the req data
    const { id, assignment, ...reqData } = req.body; // id and the assignment not changable
    
    // update function to update the task
    const data = await Task.findByIdAndUpdate(taskID, reqData);
    if (data == null) {
    res.status(400).json({
    status: 'failure',
    message: 'task id does not exists',
    });
    return;
    }
    console.log(data);
    res.status(200).json({
    status: 'sucess',
    data,
    });
    } catch (error) {
    console.log('error in patch: ', error.name);
    if (error.name === 'CastError') {
    res.status(400).json({
    status: 'failure',
    message: 'Invalid parameter',
    });
    } else {
    res.status(500).json({
    status: 'failure',
    message: 'Internal server error',
    });
    }
    }
    });