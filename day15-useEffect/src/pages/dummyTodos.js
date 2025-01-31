import { useState, useEffect } from "react";
const DummyTodos = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("https://dummyjson.com/todos");
        const resObj = await res.json();
        setData(resObj.todos);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h2>Todos List from API</h2>
            <p>This is a dummy page to show todo's list by fetching API</p>
            {data.map((elem) => {
                return (
                    <div>
                        <h4>{elem.todo}</h4>
                        <p>{elem.userId}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default DummyTodos;


//Each child in a list should have a unique "key" prop.