import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
	state = {
		poems: [],
		hideForm: false,
		// newPoem: [],
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

	// handleChange = (e) => {
	// 	this.setState({
	// 		newPoem: {
	// 			[e.target.name]: e.target.value,
	// 		},
	// 	});
	// };

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(e.target);
	// 	fetch("http://localhost:6001/poems", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Accepts: "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			newPoem: {
	// 				author: e.target.value,
	// 				title: e.target.value,
	// 				content: e.target.value,
	// 			},
	// 		}),
	// 	})
	// 		.then((response) => response.json())
	// 		.then((poem) => {
	// 			this.setState({
	// 				poems: [...this.state.poems, poem],
	// 				newPoem: [],
	// 			});
	// 		});
	// };
	addnewPoem = (poem) => {
		this.setState({
			poems: [...this.state.poems, poem],
		});
	};

	displayForm = () => {
		this.setState((previousState) => {
			return { hideForm: !previousState.hideForm };
		});
	};
	render() {
		return (
			<div className="app">
				<div className="sidebar">
					<button onClick={this.displayForm}>Show/hide new poem form</button>
					{this.state.hideForm && (
						<NewPoemForm
							addnewPoem={this.addnewPoem}
							// handleChange={this.handleChange}
							// handleSubmit={this.handleSubmit}
						/>
					)}
				</div>
				<PoemsContainer poems={this.state.poems} />
			</div>
		);
	}
}

export default App;
