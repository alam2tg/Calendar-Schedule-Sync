import { useState } from 'react';
import Card from '../components/CardBody.jsx'

const card = [
	{
	name: '2-C',
	value: 2,
	count: 1,
	image: '../assets/cards/2-C',
	},
	{
	name: '3-C',
	value: 3,
	count: 1,
	image: '../assets/cards/3-C',
	},
	{
	name: '4-C',
	value: 4,
	count: 1,
	image: '../assets/cards/4-C',
	},
	{
	name: '5-C',
	value: 5,
	count: 1,
	image: '../assets/cards/5-C',
	},
	{
	name: '6-C',
	value: 6,
	count: 1,
	image: '../assets/cards/6-C',
	},
	{
	name: '7-C',
	value: 7,
	count: 0,
	image: '../assets/cards/7-C',
	},
	{
	name: '8-C',
	value: 8,
	count: 0,
	image: '../assets/cards/8-C',
	},
	{
	name: '9-C',
	value: 9,
	count: 0,
	image: '../assets/cards/9-C',
	},
	{
	name: '10-C',
	value: 10,
	count: -1,
	image: '../assets/cards/10-C',
	},
	{
	name: 'J-C',
	value: 10,
	count: -1,
	image: '../assets/cards/J-C',
	},
	{
	name: 'Q-C',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-C',
	},
	{
	name: 'K-C',
	value: 10,
	count: -1,
	image: '../assets/cards/K-C',
	},
	{
	name: 'A-C',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-C',
	},
	{
	name: '2-H',
	value: 2,
	count: 1,
	image: '../assets/cards/2-H',
	},
	{
	name: '3-H',
	value: 3,
	count: 1,
	image: '../assets/cards/3-H',
	},
	{
	name: '4-H',
	value: 4,
	count: 1,
	image: '../assets/cards/4-H',
	},
	{
	name: '5-H',
	value: 5,
	count: 1,
	image: '../assets/cards/5-H',
	},
	{
	name: '6-H',
	value: 6,
	count: 1,
	image: '../assets/cards/6-H',
	},
	{
	name: '7-H',
	value: 7,
	count: 0,
	image: '../assets/cards/7-H',
	},
	{
	name: '8-H',
	value: 8,
	count: 0,
	image: '../assets/cards/8-H',
	},
	{
	name: '9-H',
	value: 9,
	count: 0,
	image: '../assets/cards/9-H',
	},
	{
	name: '10-H',
	value: 10,
	count: -1,
	image: '../assets/cards/10-H',
	},
	{
	name: 'J-H',
	value: 10,
	count: -1,
	image: '../assets/cards/J-H',
	},
	{
	name: 'Q-H',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-H',
	},
	{
	name: 'K-H',
	value: 10,
	count: -1,
	image: '../assets/cards/K-H',
	},
	{
	name: 'A-H',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-H',
	},{
	name: '2-S',
	value: 2,
	count: 1,
	image: '../assets/cards/2-S',
	},
	{
	name: '3-S',
	value: 3,
	count: 1,
	image: '../assets/cards/3-S',
	},
	{
	name: '4-S',
	value: 4,
	count: 1,
	image: '../assets/cards/4-S',
	},
	{
	name: '5-S',
	value: 5,
	count: 1,
	image: '../assets/cards/5-S',
	},
	{
	name: '6-S',
	value: 6,
	count: 1,
	image: '../assets/cards/6-S',
	},
	{
	name: '7-S',
	value: 7,
	count: 0,
	image: '../assets/cards/7-S',
	},
	{
	name: '8-S',
	value: 8,
	count: 0,
	image: '../assets/cards/8-S',
	},
	{
	name: '9-S',
	value: 9,
	count: 0,
	image: '../assets/cards/9-S',
	},
	{
	name: '10-S',
	value: 10,
	count: -1,
	image: '../assets/cards/10-S',
	},
	{
	name: 'J-S',
	value: 10,
	count: -1,
	image: '../assets/cards/J-S',
	},
	{
	name: 'Q-S',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-S',
	},
	{
	name: 'K-S',
	value: 10,
	count: -1,
	image: '../assets/cards/K-S',
	},
	{
	name: 'A-S',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-S',
	},{
	name: '2-D',
	value: 2,
	count: 1,
	image: '../assets/cards/2-D',
	},
	{
	name: '3-D',
	value: 3,
	count: 1,
	image: '../assets/cards/3-D',
	},
	{
	name: '4-D',
	value: 4,
	count: 1,
	image: '../assets/cards/4-D',
	},
	{
	name: '5-D',
	value: 5,
	count: 1,
	image: '../assets/cards/5-D',
	},
	{
	name: '6-D',
	value: 6,
	count: 1,
	image: '../assets/cards/6-D',
	},
	{
	name: '7-D',
	value: 7,
	count: 0,
	image: '../assets/cards/7-D',
	},
	{
	name: '8-D',
	value: 8,
	count: 0,
	image: '../assets/cards/8-D',
	},
	{
	name: '9-D',
	value: 9,
	count: 0,
	image: '../assets/cards/9-D',
	},
	{
	name: '10-D',
	value: 10,
	count: -1,
	image: '../assets/cards/10-D',
	},
	{
	name: 'J-D',
	value: 10,
	count: -1,
	image: '../assets/cards/J-D',
	},
	{
	name: 'Q-D',
	value: 10,
	count: -1,
	image: '../assets/cards/Q-D',
	},
	{
	name: 'K-D',
	value: 10,
	count: -1,
	image: '../assets/cards/K-D',
	},
	{
	name: 'A-D',
	value: 1||11,
	count: -1,
	image: '../assets/cards/A-D',
	},
	]

function playerHand() {
	const [playerHandCount, setHandCount] = useState(1);

	const renderHand = () => {
		const components = [];
		for (let i = 0; i < playerHandCount; i++) {
			components.push(<cardBody key={i} />);
		}
		return components;
	};

	return (

		<div className="player-cards">
			<button onClick={() => setHandCount(playerHandCount + 1)}>
				Add Component
			</button>
			<div className="deal-player-card">{renderHand}
				<img src={card.image} id={card.name}></img>
				<data value={card.value}></data>
			</div>
		</div>
	);
}

export default playerHand;