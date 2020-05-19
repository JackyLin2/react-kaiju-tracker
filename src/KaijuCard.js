// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {
  state = {
    mode: false,
    name: this.props.kaijus.name,
    power: this.props.kaijus.power,
    image: this.props.kaijus.image
  }


  handleClick = () => {
    const {mode} = this.state
    this.setState({ mode: !mode })
  }

  //true = close-form
  //false = edit button


  saveChanges = (event) => {
    event.preventDefault()
    const {name,power,image} = this.state
    const id = this.props.kaijus.id
    fetch(`http://localhost:4000/kaijus/${id}`,{
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        power,
        image
      })
    })
    .then(this.props.fetchMonsters)
  }
  changeInfo = (event) => {
    const {value} = event.target
    this.setState({[event.target.name]: value})
  }

  //after you finish editting the info
  //return back to the main page

  showEditForm = () => {
    const {mode} = this.state
    if(mode === true) 
      {return <>
        <EditKaijuForm kaijus={this.state} saveChanges={this.saveChanges} changeInfo={this.changeInfo}/>
      <button 
        onClick={this.handleClick}
       className='kaiju-card-edit-button'>
         Close
      </button>
      </>}
     
    else if( mode === false)
    {return <button onClick={this.handleClick} className='kaiju-card-edit-button'>Edit</button>}
  }


  handleDelete = () => {
    const id = this.props.kaijus.id
    fetch(`http://localhost:4000/kaijus/${id}`, {
    method: 'DELETE'
    })
    .then(this.props.fetchMonsters)
  }

  // How can we show the edit form conditionally?
  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.kaijus.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.kaijus.power}</h3>

        <img className='kaiju-card-image' src={this.props.kaijus.image} alt={"Maybe something should go here"} />

        {this.showEditForm()}
     
        <button onClick={this.handleDelete} className='kaiju-card-delete-button'>Delete</button>
      </div>
    )
  }
}

export default KaijuCard
