import React from 'react'


 export default class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //   title:this.props.note.title ? this.props.note.title:'',
            //  description:this.props.note.description ? this.props.note.description:'',
            
            name:' ',
           
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
            name:this.state.name,
           
        }
        console.log(formData)
        this.props.category && (formData.id=this.props.category._id)
          this.props.handleCategorySubmit(formData)
    }
    // componentWillReceiveProps(nextProps){
    //     const {name}=nextProps.category
    //     this.setState({name})
    //   }

    render(){
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Name
                        <input type="text" value={this.state.title} onChange={this.handleChange} name="name"/>
                    </label><br/>
                   
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}




