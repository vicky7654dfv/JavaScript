import React from 'react'

const Tools=({todos,addTodo})=>{
    return(
        <div>
            <h1>My Todods</h1>

            {
                todos.map((todo))
            }
        </div>
    )
}