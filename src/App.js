import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
	state = {
		poems: [],
		hideForm: false,
		newPoem: [],
	};
	componentDidMount() {
		fetch("http://localhost:6001/poems")
			.then((response) => response.json())
			.then((poemsData) => {
				this.setState({
					poems: poemsData,
				});
			});
	}

	handleChange = (e) => {
		this.setState(
			{
				newPoem: {
					[e.target.name]: e.target.value,
				},
			},
			() => console.log(this.state.newPoem)
		);
	};
	render() {
		return (
			<div className="app">
				<div className="sidebar">
					<button>Show/hide new poem form</button>
					{true && (
						<NewPoemForm
							newPoem={this.state.newPoem}
							handleChange={this.handleChange}
						/>
					)}
				</div>
				<PoemsContainer poems={this.state.poems} />
			</div>
		);
	}
}

export default App;
