import React from "react";

class Coffe extends React.Component {
	render() {
		const isAvailable = this.props.details.status === 'available';

		return (
			<div className="coffe-item">
				<li>
					<div className='uno'>
						<img className="image-coffe" src={this.props.details.image} alt={this.props.details.name}/>
					</div>
					<div className='dos'>
						<h3>{this.props.details.name}</h3>
						<button disabled={!isAvailable} onClick={() => this.props.addCoffeToOrder(this.props.index)}>Add To Order</button>	
					</div>
					<div><input type="checkbox" onClick={() => this.props.updateStatus(this.props.index)} />Unavailable</div>
				</li>
			</div>
		);
	}
}

export default Coffe;