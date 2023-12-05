export default function Lista(){
    const nomes = ['maria','joana', 'pedro', 'Pedro','antonio']
    return(
       <div className="mt-5">
         <h1>Lista de nomes</h1>
         <hr />
         <ul>
            {
                nomes.map(item => <li>{item}</li>)
            }
         </ul>
       </div>
    )
}