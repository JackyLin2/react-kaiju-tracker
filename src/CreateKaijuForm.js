import React from 'react'

class CreateKaijuForm extends React.Component {
 


  render() {
    return (
      <form id='create-kaiju-form' >

        <label>Name: </label>
        <input type='text' placeholder="add your name here.." name="name" value={this.props.state.name} onChange={this.props.handleChange} />

        <label>Power: </label>
        <input type='text' placeholder="add your power here..." name="power" value={this.props.state.power} onChange={this.props.handleChange} />

        <label>Image: </label>
        <input type='text' placeholder="add your image url here..." name="image" value={this.props.state.image} onChange={this.props.handleChange} />

        <br/>

        <input onClick={this.props.handleSubmit} type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
