import React from "react";

class NewPoemForm extends React.Component {
	state = {
		newPoem: {
			author: "",
			title: "",
			content: "",
		},
	};

	handleChange = (e) => {
		this.setState(
			({
				newPoem: {
					[e.target.name]: e.target.value,
				},
			},
			() => console.log)
		);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		fetch("http://localhost:6001/poems", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify({
				author: e.target.value,
				title: e.target.value,
				content: e.target.value,
			}),
		})
			.then((response) => response.json())
			.then((poem) => {
				this.props.addnewPoem(poem);
			});
		this.setState({ newPoem: {} });
	};

	render() {
		console.log(this.state.newPoem.title);
		return (
			<form className="new-poem-form" onSubmit={this.handleSubmit}>
				<input
					placeholder="Title"
					name="Title"
					value={this.state.newPoem.title}
					onChange={this.handleChange}
				/>
				<input
					placeholder="Author"
					name="Author"
					value={this.state.newPoem.author}
					onChange={this.handleChange}
				/>
				<textarea
					placeholder="Write your masterpiece here..."
					name="Content"
					value={this.state.newPoem.content}
					onChange={this.handleChange}
					rows={10}
				/>
				<input type="submit" value="Share your masterpiece" />
			</form>
		);
	}
}

export default NewPoemForm;
