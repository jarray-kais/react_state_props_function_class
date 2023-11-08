import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
//import Home from './home';

class App extends Component{
  state={
    profile:[
      {id:1,name:"kais", lastname:"jarray",age:29},
      {id:2,name:"houssem", lastname:"bjaoui",age:25},
      {id:3,name:"bilel", lastname:"bjaoui",age:31},
      {id:4,name:"ali", lastname:"terti", age:40},
    ]

  }

  render(){
    const data=this.state.profile.map((item)=>{
      return (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastname}</li>
          <li>{item.age}</li>
        </ul>
      )
    })
    const age=this.state.profile.map((item)=>{
      if(item.age<30){
        return <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastname}</li>
          <li>{item.age}</li>
        </ul>
      }
    })
    return <div className='App'>
   <h1>welcome to reactjs course</h1>
      {/*<Home firstname="kais" lastname ="jarray" age="30"/>*/}
      <div>{data}</div>
      <div>
        <h1>age inferieur a 30 </h1>
        {age}
      </div>
      <div><ul>
        {this.state.profile.map((item,index)=><li>{index}-{item.name}</li>)}
      </ul></div>
    </div>
  }
}

export default App;
