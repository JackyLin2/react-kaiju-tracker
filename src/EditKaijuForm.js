import React from 'react'

class EditKaijuForm extends React.Component {

  render() {
    console.log(this.props)
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={this.props.saveChanges}>

          <label>Name: </label>
          <input type='text'
          name= "name"
          value={this.props.kaijus.name}
          onChange={this.props.changeInfo} />
          <br/>

          <label>Power: </label>
          <input type='text'
          name= "power"
          value={this.props.kaijus.power} 
          onChange={this.props.changeInfo}/>
          <br/>

          <label>Image URL: </label>
          <input type='text'
          name= "image"
          value={this.props.kaijus.image} 
          onChange={this.props.changeInfo}/>
          <br/>

          <input  type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
