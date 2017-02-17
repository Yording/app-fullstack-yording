import React from 'react';
import SignUp from './sections/Signup';
import SignInRedes from './sections/Signinredes';
import SignInLocal from './sections/Signinlocal';

export default class Sign extends React.Component {

	constructor(props) {
	  super(props);
	}
	renderForm(){
		return(
			<form action="" className="signup-form">
              <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
              <SignInRedes
              	links={this.props.config.links.redes}
              />
              <div className="divider"></div>
              <SignUp 
              	inputs={this.props.config.inputs}
              	buttons={this.props.config.buttons}/>
            </form>
		)
	}

	render(){
		return(
			<div className="col s12 m7">
	            <div className="row">
	              <div className="signup-box">
	                <h1 className="platzigram">Platzigram</h1>
	                {this.renderForm()}
	              </div>
	            </div>
	            <div className="row">
	              <SignInLocal
	              	links={this.props.config.links.local}
	              />
	            </div>
	        </div>
		)
	}
}