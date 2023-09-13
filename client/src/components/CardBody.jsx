// create CardBody using props

function CardBody (props) {
	return (
		<div className="deal-player-card">
			<img className="card-img" 
			src={props.image} 
			id={props.name}></img>
			<data value={props.value}></data>
		</div>
	)
}

export default CardBody;

//Card function cannot be read because of props... 
