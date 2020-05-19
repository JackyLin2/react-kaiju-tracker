//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    name:'',
    power:'',
    image:''
  }

  fetchMonsters = () => {
    requests.fetchKaijus()
    .then(response => this.setState({kaijus: response}))
  }

  componentDidMount(){
    this.fetchMonsters()
  }

  handleChange = (event) => {
    const {value} = event.target
    this.setState({[event.target.name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {name, power, image} = this.state
    fetch('http://localhost:4000/kaijus/',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        power,
        image
      })
    })
    .then(this.setState({name:'',
    power:'',
    image:''}))
   .then(this.fetchMonsters)
  }



  render() {
  
    return (
      <>

        <CreateKaijuForm  state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>

        <div id='kaiju-container'>
          {this.state.kaijus.map (kaijus => <KaijuCard fetchMonsters={this.fetchMonsters} key={kaijus.id} kaijus={kaijus}/>)}
        </div>

       

        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
