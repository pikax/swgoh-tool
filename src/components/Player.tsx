import * as React from 'react';
import {IToon} from "../App";
import {Character} from "./Character";


interface IPlayerProps{
  name: string,

  toons: IToon[],
}

export class Player extends React.PureComponent<IPlayerProps>{
  private renderToon= (t:IToon)=><Character name={t.toon} stars={t.stars}/>;


  render(){
    const {name, toons} = this.props;

    return <div>
      <h1>{name}</h1>

      {toons.map(this.renderToon)}
    </div>
  }

}