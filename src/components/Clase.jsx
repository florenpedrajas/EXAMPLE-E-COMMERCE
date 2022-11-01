const Clase= (props) => {

  
    return (
        <div>
                <h2>Hola Clase</h2>
                <h3> El profesor de hoy es: {props.teacher}</h3>
                <h4> La edad del profesor es: {props.age}</h4>
        </div>
    );
};

export default Clase;