import React, { Component } from 'react'
 
export default class Todo extends Component {

   constructor(props) {
       super(props);
       this.state = {
         task: '',
         items: [],
         completed:{}
         
       };
     }
   
     onChange = (event) => {
       this.setState({ task: event.target.value });
     }



   
     onSubmit = (event) => { 
       event.preventDefault();
       if (this.state.task === '') {
         return alert('You need to write something !')
       }
       else{  
       this.setState({
         task: '',
         items: [...this.state.items, {todo:this.state.task}],
       });
     }
     }
     

     

     handleclick(index) {
       this.setState({
         completed: { ...this.state.completed, [index]: !this.state.completed[index] }
       })};
   

      
     handleDelete = (index) => {
       
         this.setState ({
           items : this.state.items.filter((item,i) => i !== index)
         })
       }
 
       
      




    render() {
        const items = this.state.items
        
        return (
          <div>
           
           <form className='todo-form' onSubmit={this.onSubmit}>
              <div className='titles'>
         <h1>To-Do App !</h1>
         <h3>Add New To-Do</h3>
         </div>
         <input className='inputt' value={this.state.task} onChange={this.onChange} />
         <button className='submit-btn'>Add</button>
       </form> 
       <ul>
       {items.map((el, index) => (
       <li key ={index} className='listtt'> 
       <p style={{  textDecoration : this.state.completed[index] ? "line-through":  ""    }}>{el.todo}</p>

       {<button onClick={() => this.handleDelete(index)} className='delete-btn'>Delete</button>}
       {<button onClick={() => this.handleclick(index)} className='done-btn' >{this.state.completed[index] ? "undo":"complete"}</button>}
       </li> ))}
       </ul>
       </div>
 
            
        )
    }
}