// create CardBody using props

export default function CardBody (props) {
	return (
		<div className="deal-player-card">
			<img className="card-img" 
			src={props.image} 
			id={props.name}></img>
			<data value={props.value}></data>
		</div>
	)
}

//Card function cannot be read because of props... 
