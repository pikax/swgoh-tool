import * as React from 'react';
import {Character} from "./components/character";
import {Player} from "./components/Player";


export interface IToon {
  toon: string,
  name?: string,
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


const fixedNames=  [{"toon":"darth-maul","name":"Darth Maul"},{"toon":"savage-opress","name":"Savage Opress"},{"toon":"darth-nihilus","name":"Darth Nihilus"},{"toon":"r2-d2","name":"R2-D2"},{"toon":"emperor-palpatine","name":"Emperor Palpatine"},{"toon":"darth-vader","name":"Darth Vader"},{"toon":"stormtrooper-han","name":"Stormtrooper Han"},{"toon":"wedge-antilles","name":"Wedge Antilles"},{"toon":"lando-calrissian","name":"Lando Calrissian"},{"toon":"qui-gon-jinn","name":"Qui-Gon Jinn"},{"toon":"royal-guard","name":"Royal Guard"},{"toon":"ct-7567-rex","name":"CT-7567 \"Rex\""},{"toon":"rey","name":"Rey"},{"toon":"biggs-darklighter","name":"Biggs Darklighter"},{"toon":"count-dooku","name":"Count Dooku"},{"toon":"han-solo","name":"Han Solo"},{"toon":"tie-fighter-pilot","name":"TIE Fighter Pilot"},{"toon":"luminara-unduli","name":"Luminara Unduli"},{"toon":"grand-moff-tarkin","name":"Grand Moff Tarkin"},{"toon":"teebo","name":"Teebo"},{"toon":"hera-syndulla","name":"Hera Syndulla"},{"toon":"dathcha","name":"Dathcha"},{"toon":"boba-fett","name":"Boba Fett"},{"toon":"captain-phasma","name":"Captain Phasma"},{"toon":"ig-88","name":"IG-88"},{"toon":"princess-leia","name":"Princess Leia"},{"toon":"ezra-bridger","name":"Ezra Bridger"},{"toon":"admiral-ackbar","name":"Admiral Ackbar"},{"toon":"darth-sidious","name":"Darth Sidious"},{"toon":"ewok-elder","name":"Ewok Elder"},{"toon":"chief-chirpa","name":"Chief Chirpa"},{"toon":"hk-47","name":"HK-47"},{"toon":"asajj-ventress","name":"Asajj Ventress"},{"toon":"kanan-jarrus","name":"Kanan Jarrus"},{"toon":"jedi-knight-anakin","name":"Jedi Knight Anakin"},{"toon":"grand-master-yoda","name":"Grand Master Yoda"},{"toon":"sabine-wren","name":"Sabine Wren"},{"toon":"garazeb-zeb-orrelios","name":"Garazeb \"Zeb\" Orrelios"},{"toon":"jawa-engineer","name":"Jawa Engineer"},{"toon":"ewok-scout","name":"Ewok Scout"},{"toon":"chief-nebit","name":"Chief Nebit"},{"toon":"k-2so","name":"K-2SO"},{"toon":"ct-5555-fives","name":"CT-5555 \"Fives\""},{"toon":"ig-86-sentinel-droid","name":"IG-86 Sentinel Droid"},{"toon":"finn","name":"Finn"},{"toon":"sun-fac","name":"Sun Fac"},{"toon":"mace-windu","name":"Mace Windu"},{"toon":"chirrut-imwe","name":"Chirrut Îmwe"},{"toon":"dengar","name":"Dengar"},{"toon":"ahsoka-tano","name":"Ahsoka Tano"},{"toon":"baze-malbus","name":"Baze Malbus"},{"toon":"luke-skywalker-farmboy","name":"Luke Skywalker (Farmboy)"},{"toon":"poe-dameron","name":"Poe Dameron"},{"toon":"first-order-tie-pilot","name":"First Order TIE Pilot"},{"toon":"jawa-scavenger","name":"Jawa Scavenger"},{"toon":"jawa","name":"Jawa"},{"toon":"shoretrooper","name":"Shoretrooper"},{"toon":"death-trooper","name":"Death Trooper"},{"toon":"wicket","name":"Wicket"},{"toon":"chopper","name":"Chopper"},{"toon":"barriss-offee","name":"Barriss Offee"},{"toon":"b2-super-battle-droid","name":"B2 Super Battle Droid"},{"toon":"hoth-rebel-scout","name":"Hoth Rebel Scout"},{"toon":"resistance-pilot","name":"Resistance Pilot"},{"toon":"jyn-erso","name":"Jyn Erso"},{"toon":"obi-wan-kenobi-old-ben","name":"Obi-Wan Kenobi (Old Ben)"},{"toon":"resistance-trooper","name":"Resistance Trooper"},{"toon":"hoth-rebel-soldier","name":"Hoth Rebel Soldier"},{"toon":"captain-han-solo","name":"Captain Han Solo"},{"toon":"kylo-ren","name":"Kylo Ren"},{"toon":"director-krennic","name":"Director Krennic"},{"toon":"clone-wars-chewbacca","name":"Clone Wars Chewbacca"},{"toon":"jedi-consular","name":"Jedi Consular"},{"toon":"first-order-officer","name":"First Order Officer"},{"toon":"ahsoka-tano-fulcrum","name":"Ahsoka Tano (Fulcrum)"},{"toon":"talia","name":"Talia"},{"toon":"first-order-stormtrooper","name":"First Order Stormtrooper"},{"toon":"cc-2224-cody","name":"CC-2224 \"Cody\""},{"toon":"pao","name":"Pao"},{"toon":"cassian-andor","name":"Cassian Andor"},{"toon":"snowtrooper","name":"Snowtrooper"},{"toon":"clone-sergeant-phase-i","name":"Clone Sergeant - Phase I"},{"toon":"geonosian-soldier","name":"Geonosian Soldier"},{"toon":"tusken-raider","name":"Tusken Raider"},{"toon":"bistan","name":"Bistan"},{"toon":"ima-gun-di","name":"Ima-Gun Di"},{"toon":"scarif-rebel-pathfinder","name":"Scarif Rebel Pathfinder"},{"toon":"ct-21-0408-echo","name":"CT-21-0408 \"Echo\""},{"toon":"magmatrooper","name":"Magmatrooper"},{"toon":"jedi-knight-guardian","name":"Jedi Knight Guardian"},{"toon":"bodhi-rook","name":"Bodhi Rook"},{"toon":"tusken-shaman","name":"Tusken Shaman"},{"toon":"eeth-koth","name":"Eeth Koth"},{"toon":"aayla-secura","name":"Aayla Secura"},{"toon":"coruscant-underworld-police","name":"Coruscant Underworld Police"},{"toon":"nute-gunray","name":"Nute Gunray"},{"toon":"general-grievous","name":"General Grievous"},{"toon":"poggle-the-lesser","name":"Poggle the Lesser"},{"toon":"nightsister-initiate","name":"Nightsister Initiate"},{"toon":"stormtrooper","name":"Stormtrooper"},{"toon":"sith-assassin","name":"Sith Assassin"},{"toon":"ig-100-magnaguard","name":"IG-100 MagnaGuard"},{"toon":"cad-bane","name":"Cad Bane"},{"toon":"sith-trooper","name":"Sith Trooper"},{"toon":"ugnaught","name":"Ugnaught"},{"toon":"old-daka","name":"Old Daka"},{"toon":"greedo","name":"Greedo"},{"toon":"plo-koon","name":"Plo Koon"},{"toon":"lobot","name":"Lobot"},{"toon":"general-veers","name":"General Veers"},{"toon":"kit-fisto","name":"Kit Fisto"},{"toon":"zam-wesell","name":"Zam Wesell"},{"toon":"gar-saxon","name":"Gar Saxon"},{"toon":"paploo","name":"Paploo"},{"toon":"imperial-super-commando","name":"Imperial Super Commando"},{"toon":"logray","name":"Logray"},{"toon":"gamorrean-guard","name":"Gamorrean Guard"},{"toon":"mob-enforcer","name":"Mob Enforcer"},{"toon":"nightsister-acolyte","name":"Nightsister Acolyte"},{"toon":"commander-luke-skywalker","name":"Commander Luke Skywalker"},{"toon":"general-kenobi","name":"General Kenobi"},{"toon":"geonosian-spy","name":"Geonosian Spy"},{"toon":"grand-admiral-thrawn","name":"Grand Admiral Thrawn"},{"toon":"hermit-yoda","name":"Hermit Yoda"},{"toon":"rebel-officer-leia-organa","name":"Rebel Officer Leia Organa"},{"toon":"urorrurrr","name":"URoRRuR'R'R"},{"toon":"veteran-smuggler-chewbacca","name":"Veteran Smuggler Chewbacca"},{"toon":"veteran-smuggler-han-solo","name":"Veteran Smuggler Han Solo"}];


export class App extends React.PureComponent<IAppProps, IAppState> {

  componentWillMount(): void {
    this.initData(this.props);
  }

  componentWillUpdate(nextProps: Readonly<IAppProps>, nextState: Readonly<{}>, nextContext: any): void {
    this.initData(this.props);
  }


  render() {
    return <div>
      {JSON.stringify(this.state.players)}
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
        name: name,
        toons: info[name].map(this.fixToon)
      });
    }

    this.setState({players});

  }

  fixToon(toon: IToon): IToon{
    const t = fixedNames.find(x=>x.name === toon.toon);


    return {...toon, ...t};
  }
}
