import "./App.css";
import { useState } from "react";

function App() {
	//inorder to set the cards
	const [cards, setCards] = useState([]);
	const [turn, setTurn] = useState(0);

	//first we need to fetch the card images
	const cardImages = [
		{ src: "./public/img/helmet-1.png" },
		{ src: "./public/img/potion-1.png" },
		{ src: "./public/img/ring-1.png" },
		{ src: "./public/img/scroll-1.png" },
		{ src: "./public/img/sword-1.png" },
		{ src: "./public/img/shield-1.png" },
	];

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((cards) => ({ ...cards, id: Math.random() }));

		setCards(shuffledCards);
		setTurn(0);
	};

	console.log(cards, turn);

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => (
					<div className="card" key={card.id}>
						<img src={card.src} alt="front-image" className="card front" />
						<img
							src="./public/img/cover.png"
							alt="back-image"
							className="card back"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
