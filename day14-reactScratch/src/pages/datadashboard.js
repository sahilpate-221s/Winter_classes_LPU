import { useState } from "react";
import TaskForm from "../components/taskForm";
import TaskList from "../components/taskList";
import "./dashboard.css";
import TaskFilters from "../components/taskFilter";

const Dashboard = () => {
    const assigneeOptions = [
        "Vishal",
        "Aditi",
        "Sanjay",
        "Priya",
        "Rohan",
        "Sneha",
        "Harsh",
        "Ritika",
        "Aman",
        "Komal",
        "Varun",
        "Nikita",
    ];

    const assignorOptions = [
        "Likhilesh",
        "Rahul",
        "Neha",
        "Karan",
        "Vikram",
        "Anjali",
        "Megha",
        "Ankit",
        "Suresh",
        "Rajeev",
        "Pooja",
        "Ramesh",
    ];

    const [taskList, setTaskList] = useState([
        {
            workTitle: "Development",
            taskTitle: "Dashboard UI",
            assignee: "Vishal",
            deadline: "2025-01-31",
            assignor: "Likhilesh",
        },
        {
            workTitle: "Design",
            taskTitle: "Landing Page",
            assignee: "Aditi",
            deadline: "2025-02-05",
            assignor: "Rahul",
        },
        {
            workTitle: "Marketing",
            taskTitle: "Ad Campaign",
            assignee: "Sanjay",
            deadline: "2025-02-10",
            assignor: "Neha",
        },
        {
            workTitle: "Testing",
            taskTitle: "API Testing",
            assignee: "Priya",
            deadline: "2025-02-15",
            assignor: "Karan",
        },
        {
            workTitle: "Development",
            taskTitle: "Backend Optimization",
            assignee: "Rohan",
            deadline: "2025-02-20",
            assignor: "Vikram",
        },
        {
            workTitle: "Design",
            taskTitle: "Mobile App UI",
            assignee: "Sneha",
            deadline: "2025-02-25",
            assignor: "Anjali",
        },
        {
            workTitle: "Content Writing",
            taskTitle: "Blog Post",
            assignee: "Harsh",
            deadline: "2025-03-01",
            assignor: "Megha",
        },
        {
            workTitle: "SEO",
            taskTitle: "Keyword Research",
            assignee: "Ritika",
            deadline: "2025-03-05",
            assignor: "Ankit",
        },
        {
            workTitle: "Development",
            taskTitle: "Authentication System",
            assignee: "Aman",
            deadline: "2025-03-10",
            assignor: "Suresh",
        },
        {
            workTitle: "Testing",
            taskTitle: "Performance Testing",
            assignee: "Komal",
            deadline: "2025-03-15",
            assignor: "Rajeev",
        },
        {
            workTitle: "Marketing",
            taskTitle: "Social Media Strategy",
            assignee: "Varun",
            deadline: "2025-03-20",
            assignor: "Pooja",
        },
        {
            workTitle: "HR",
            taskTitle: "Recruitment Drive",
            assignee: "Nikita",
            deadline: "2025-03-25",
            assignor: "Ramesh",
        },
    ]);
    return (
        <div className="dashboard-container">
            <h1 className="title">Dashboard for Tasks</h1>
            <TaskForm setTaskList={setTaskList} assigneeOptions={assigneeOptions} />
            <TaskFilters assigneeOptions={assigneeOptions} assignorOptions={assignorOptions}></TaskFilters>
            <TaskList taskList={taskList} />
        </div>
    );
};

export default Dashboard;