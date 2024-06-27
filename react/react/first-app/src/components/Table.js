import './first.css'
function Table(){
    const Students=[
        {
            name:'Vinod',
            age:'22',
            course:'PGA'
        },
        {
            name:'Aswathi',
            age:'23',
            course:'CIBOP'
        },
        {
            name:'Rahul',
            age:'21',
            course:'FSD'
        }
    ]
    return(

        <div>
            <h1><center>Imarticus Learning</center></h1><br><br>
        <table border="1" style={{
            padding:10,
            margin:5,
            color:'red',
            borderColor:'yellowGreen',
            background:'lightgrey',
            fontSize:18,
            marginLeft: 400,
            marginRight:200}}>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
            </tr>
            {
                Students.map((stud))=>(
            <tr>
                <td>{stud.name}</td>
                <td>{stud.age}</td>
                <td>{stud.course}</td>
            </tr>
                ))
            }
        </table>    
        </div>
        
    )
}

export default Students;