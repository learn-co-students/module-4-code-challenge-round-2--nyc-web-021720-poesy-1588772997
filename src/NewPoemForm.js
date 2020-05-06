import React from "react";

class NewPoemForm extends React.Component {
	state = {
		newPoem: {},
	};

	handleChange = (e) => {
		this.setState({
			newPoem: {
				[e.target.name]: e.target.value,
			},
		});
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
		let { author, title, content } = this.state.newPoem;

		return (
			<form className="new-poem-form" onSubmit={this.handleSubmit}>
				<input
					placeholder="Title"
					name="Title"
					value={title}
					onChange={this.handleChange}
				/>
				<input
					placeholder="Author"
					name="Author"
					value={author}
					onChange={this.handleChange}
				/>
				<textarea
					placeholder="Write your masterpiece here..."
					name="Content"
					value={content}
					onChange={this.handleChange}
					rows={10}
				/>
				<input type="submit" value="Share your masterpiece" />
			</form>
		);
	}
}

export default NewPoemForm;
