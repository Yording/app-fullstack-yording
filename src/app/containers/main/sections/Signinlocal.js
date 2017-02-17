import React from 'react';
import A from '../../../components/A';

export default class SignInLocal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let links = this.props.links.map((link) => 
      <A href={link.href} name={link.name} clase={link.clase} key={link.id}/>
    )
    return (
      <div class="login-box">
        ¿Tienes una cuenta? {links}
      </div>
    );
  }
}
