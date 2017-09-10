import * as React from 'react';


interface ICharacter{
  name: string,
  stars: string,
}

export class Character extends React.PureComponent<ICharacter,{}>{

  render(){
    return <div>{this.props.name} : {this.props.stars}  - 3 </div>
  }
}

