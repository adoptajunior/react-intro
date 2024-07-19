{/* 

    Crear un componente Person que acepte props name, surname y age, 
    y nos muestre dichos datos dentro de etiquetas span.

*/}

const Person = (props) => {
    return <h3>Hello {props.name} {props.surname}! You are {props.age} years old.</h3>
}

function App() {
    return (
        <div className="App">
            <Person name="Manolito" surname="Gafotas" age="10" />
            <Person name="Pepito" surname="Grillo" age="89" />
            <Person name="Jesu" surname="Cristo" age="33" />
        </div>
    )
}

export default App