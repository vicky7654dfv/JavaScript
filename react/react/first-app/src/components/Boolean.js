const Boolean = ()=>{
    const display1 =true;
    const display2 =false
    return(
        <div>
            {display1 && <h1>Display - true value</h1>}<br/>
            {display2 && <h1>Display - false value</h1>}
        </div>
    )
}

export default Boolean;