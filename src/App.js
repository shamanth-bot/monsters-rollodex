import logo from './logo.svg';
import './App.css';
import {Component}from "react";
import { Cardlist } from './Components/cardList/cardlist';
import {Search} from './Components/Search/Search'
class App extends Component{
  constructor(){
    super();
    this.state={
     samp:'sfdsb hvhfbg fbfh',
     val:0,
     monsters:[],
     seachText:''     
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(users=>this.setState(this.state.monsters=users))
  }
  onchangeHandle=(e)=>{
    this.setState({seachText:e.target.value})
  

  }

  render(){
    const {monsters}=this.state;
    const updatedMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(this.state.seachText.toLowerCase()))
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{  fontfamily:'Bigelo Rules',fontsize: '250px',color:'#0ccac4',fontWeight:'bold'}}>MONSTER DETAILS</h1>
        <Search placeholder="monster Stories" OnChangeHandler={this.onchangeHandle}></Search>
        <Cardlist monsters={updatedMonster} ></Cardlist>
      </header>
    </div>
  );
  }
}

export default App;
