import React from 'react';
import Img from '../../components/Img';

export default class Phone extends React.Component {

	constructor(props) {
	  super(props);
	}

	render() {
		let phone = this.props.config.imgs.phone[0];
		return(
			<div class="col m5 hide-on-small-only">
                <Img src={phone.src} alt={phone.alt} clase={phone.clase}/>
            </div>
		)
	}
}