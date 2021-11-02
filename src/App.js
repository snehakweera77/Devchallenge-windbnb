import './App.css';
import React , {useState} from "react";
import Header from './components/Header';
import Cards from './components/Cards';
import staysData from './Data/stays.json';
function App() {
  const [roomCard, setRoomCard] = useState(
		staysData.map((ele, index) => {
			return (
				<Cards
              superHost={ele.superHost}
					title={ele.title}
					rating={ele.rating}
					type={ele.type}
					photo={ele.photo}
					beds={ele.beds}
          />
			);
		})
	);
  return (
    <div className="app">
      <Header />
      <h2>Stays in Finland</h2>
      <div className="app__card">
        {roomCard}
      </div>
      
      <footer>
				{" "}
				Created by <a href="https://github.com/snehakweera77">
					snehakweera77
				</a>{" "}
			</footer>
    </div>
  );
}

export default App;
