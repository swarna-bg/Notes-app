import React from 'react'


 export default class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //   title:this.props.note.title ? this.props.note.title:'',
            //  description:this.props.note.description ? this.props.note.description:'',
            
            title:' ',
            description:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
       this.setState({
            [e.target.name]:e.target.value
       })
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description
        }
        console.log(formData)
        this.props.note && (formData.id=this.props.note._id)
          this.props.handleNoteSubmit(formData)
    }
    // componentWillReceiveProps(nextProps){
    //     const {title,description}=nextProps.note
    //     this.setState({title,description})
    //   }

    render(){
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label >
                        title
                        <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                    </label><br/>
                    <label>
                        description
                        <input type="text" value={this.state.description} onChange={this.handleChange} name="description"/>
                    </label><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}




