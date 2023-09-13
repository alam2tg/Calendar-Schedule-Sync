function Card(props) {

    return (
        <div className="card" id={props.card.name}>
            <img className="card-img" 
            src={props.card.img}
            alt={props.card.name}></img>
        </div>
    )
}

export default Card
