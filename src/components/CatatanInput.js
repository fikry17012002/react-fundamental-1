import React from 'react';
import PropTypes from 'prop-types';
 
class CatatanInput extends React.Component {
 constructor(props) {
   super(props);
 
   // inisialisasi state
   this.state = {
     name: '',
     body: '',
   }
 
   this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
   this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }
 
 onNameChangeEventHandler(event) {
   this.setState(() => {
     return {
       name: event.target.value,
     }
   });
 }
 
 onBodyChangeEventHandler(event) {
   this.setState(() => {
     return {
       body: event.target.value,
     }
   });
 }
 
 onSubmitEventHandler(event) {
   event.preventDefault();
   this.props.addCatatan(this.state);
 }
 
 render() {
    return (
      <form className='catatan-input' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Judul" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>

    )
  }
}

CatatanInput.propTypes = {
  addCatatan: PropTypes.func.isRequired,
 }
 
export default CatatanInput;