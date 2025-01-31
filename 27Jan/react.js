const parent = document.getElementById('dom-root');
const root = ReactDOM.createRoot(parent);

// const newTitle = React.createElement("h2", {}, "Hello")
// const newli = React.createElement("li", {}, "item no. 1");
// const newli2 = React.createElement("li", {}, "item no. 2");
// const newUl = React.createElement("ul", {}, [newli, newli2]);
// const newDiv = React.createElement("div", {}, [newTitle, newUl])
// console.log(newDiv);
// root.render(newDiv);

//  X ---------------------------------------------------------------------------

// const styleObj = {
//     fontSize: "2rem",
//     color: "yellow"
// };
// const title = React.createElement("dh2",
//     {
//         className:"title.box",
//         style:styleObj
// }, "Hello! React!");

// root.render(title);

// X ----------------------------------------------------------------------------

// const title = (
//     <h1 className="cname" id="comething" title="company_name">
//     Hello hello
//     </h1>
// );

// root.render(title);

// X ---------------------------------------------------------------------------


// const title = (
//     <div className="main_card" style={styleCard}>
//         <img src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b" alt="img" style={{ height: "50px", width: "50px", marginBottom: "10px" }} />
//         <div>
//             <p> Name: Raj </p>
//             <p> place: Sikkim</p>
//             <p> Student</p>
//         </div>
//     </div>
// );
// root.render(title);

// const display = (
//     <div>{title} {title}</div>
// )
// root.render(display);


// const title = (fullName, cityName) => {

//     const styleCard = {
//         backgroundColor: "yellow",
//         height: "150px",
//         width: "300px",
//         border: "2px solid black",
//         borderRadius: "5px",
//         display: "column",
//         flexDirection: "row ",
//         padding: "20px",
//         margin:"1rem",
//     }

//     return (
//     <div className="main_card" style={styleCard}>
//         <img src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b" alt="img" style={{ height: "50px", width: "50px", marginBottom: "10px" }} />
//         <div>
//             <p> Name: {fullName} </p>
//             <p> Place: {cityName}</p>
//             <p> Work: Student</p>
//         </div>
//     </div>
//     )
// };
// // root.render(title());

// const display = (
//     <div>
//         {title("Raj", "Sikkim")}
//         {title("Rahul", "Punjab")} 
//         {title("Anjali", "Nepal")}
//     </div>
// )

// root.render(display);



const Title = (obj) => {

    const styleCard = {
        backgroundColor: "yellow",
        height: "150px",
        width: "300px",
        border: "2px solid black",
        borderRadius: "5px",
        display: "column",
        flexDirection: "row ",
        padding: "20px",
        margin:"1rem",
    }

    const imgStyle = { height: "50px", width: "50px", marginBottom: "10px" }

    return (
    <div className="main_card" style={styleCard}>
        <img src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b" 
        alt="img" style={imgStyle} />
        <div>
            <p> Name: {obj.fullName} </p>
            <p> Place: {obj.cityName}</p>
            <p> Work: Student</p>
        </div>
    </div>
    )
};
const Display = () => {
    return (
    <div>
        <Title fullName="Raj" cityName="Gangtok" />
        <Title fullName="Rishika" cityName="Ludhiana" />
        <Title fullName="Manya" cityName="Jammu" />
        <Title fullName="Adarsh" cityName="Lakhimpur" />
        <Title fullName="Sidhant" cityName="Aara" />
    </div>
    )
};
root.render(<Display/>);





