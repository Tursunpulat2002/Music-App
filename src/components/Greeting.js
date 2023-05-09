function Greeting(props){
    console.log(props)
    
    return (
        <div>
            <h1>{props.gret}, {props.greeting_name}</h1>
        </div>
    );
}

export default Greeting;