import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Input';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let inputs = this.props.inputs.map((input) => 
        <Input type={input.type} name={input.name} placeholder={input.placeholder} clase={input.clase} key={input.id}/>
    )
    let buttons = this.props.buttons.map(button => 
        <Button clase={button.clase} type={button.type} name={button.name} key={button.id}/>
    )
    return (
      <div class="section">
          {inputs}  
          {buttons}
      </div>
    );
  }
}
