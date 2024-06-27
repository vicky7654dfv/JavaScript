export default function StateFunction(){
   const state={
        username:'Suriya',
        userplace: 'Chennai'
    }
    return(

        <div>
        <h1>State-Functional Component</h1>
        <p>{state.username}</p>
        <p>{state.userplace}</p>
        </div>
    )
    
}