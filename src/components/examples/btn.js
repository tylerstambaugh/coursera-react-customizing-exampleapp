// function Btn() {
//     const clickHandler = () => console.log('button clicked')
//     return (
        
//         <button onClick={clickHandler}>
//             Click Me
//             </button>
//     );
// }

// export default Btn;


function Btn() {
    const clickHandler = () => console.log('moused over')
    return (
        
        <button onMouseOver={clickHandler}>
            Click Me
            </button>
    );
}

export default Btn;

