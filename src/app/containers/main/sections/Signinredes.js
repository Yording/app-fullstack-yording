import React from 'react';
import A from '../../../components/A';

export default class SignInRedes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let links = this.props.links.map((link) => 
      <A href={link.href} clase={link.clase} name={link.name} key={link.id}/>
    )
    return (
      <div class="section">
          {links}
      </div>
    )
  }
}
