import * as React from 'react';
import {Character} from "./components/character";
import {Player} from "./components/Player";


export interface IToon {
  toon: string,
  level: string,
  gear: string;
  stars: string,
  zeta: string,
  percent: string,
}


interface IJSONData extends IToon {
  name: string,
}

export interface IPlayer {
  name: string,
  toons: IToon[],
}

interface IAppProps {
  data: IJSONData[]
}

interface IAppState {
  players: IPlayer[]
}


export class App extends React.PureComponent<IAppProps, IAppState> {


  componentWillMount(): void {
    this.initData(this.props);
  }


  componentWillUpdate(nextProps: Readonly<IAppProps>, nextState: Readonly<{}>, nextContext: any): void {
    this.initData(this.props);
  }


  render() {
    return <div>
      {this.state.players.map(this.renderCharacter)}
    </div>
  }

  renderCharacter = (p: IPlayer) => {
    return <Player name={p.name} toons={p.toons}/>
  }

  private initData(props: IAppProps) {
    const {data} = this.props;

    const info = data.reduce((c, v) => {
      const {name, ...toon} = v;
      const toons = c[name] || [];
      toons.push(toon);
      c[name] = toons;
      return c;
    }, {} as { [id: string]: IToon[]; });

    const players: IPlayer[] = [];

    for (const name in info) {


      players.push({
        name,
        toons: info[name]
      });
    }

    this.setState({players});

  }
}
