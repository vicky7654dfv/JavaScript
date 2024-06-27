import './first.css'
function JsonElement(){
    const items=[
        {
            name:'Pen',
            price:'10$'
        },
        {
            name:'Pencil',
            price:'5$'
        },
        {
            name:'Erasor',
            price:'$2'
        },
        {
            name:'Scale',
            price:'$3'
        }
    ]
    return(
        <div style="container">
                <h1>Json Elements</h1><br></br>
                {
                    items.map((item)=>(
                        <li>
                            <span>{item.name}</span>&nbsp;-
                            <span>{item.name}</span>
                        </li>
                    ))
                }
        </div>
    )
}