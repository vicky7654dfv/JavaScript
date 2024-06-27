function ArratyElements(){
    const items=['pen','pencil','scale','erasor']
    const fruits=['Apple','Banana','Orange','Grapes','Mango']
    const display=(event,message) =>{
        alert(event.target.id);
        alert(message);
    }
    return(
        <div>
            <h1>
                Stationary Elements
            </h1>
           <ul>
                {items.map((item)=>(
                    <li>{item}</li>
                ))}
           </ul>
           <h1>
                Fruits Elements
            </h1>
           <ol>
                {fruits.map((item)=>(
                    <li>{item}</li>
                ))}
           </ol>
           <button id="myId" onClick={event=>display(event,'HelloWorld')}>
            Click here
           </button>

           </div>
    )
}

export default ArratyElements;