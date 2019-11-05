import React from 'react'
import axios from '../config/axios'
import CategoryItem from './item'
import { Table,Badge } from 'reactstrap'

export default class CategoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
        this.removeHandle = this.removeHandle.bind(this)
    }

    componentDidMount() {
        axios.get('/categories')
            .then(response => {
                const categories = response.data
                this.setState({ categories })
            })
            .catch(err => {
                console.log(err)
            })
    }

    removeHandle(id) {
        axios.delete(`/categories/${id}`)
            .then((response) => {
                if (response.data._id) {
                    this.setState(prevState => {
                        return { categories: prevState.categories.filter(category => category._id !== id) }

                    })
                }
            })
            .catch((err) => {
                alert(err)

            })
    }

    render() {
        return (
            <div>
                <h2>Categories - {this.state.categories.length}</h2>
               <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                           
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                                
                        {this.state.categories.map((category,index) =>{
                        return<CategoryItem key={category._id}  index={index}   name={category.name} removeHandle={this.removeHandle}    />
                        })}

                    </tbody>
                </Table>
                    
            <Badge color="light" href="/categories/new">Add Category</Badge>  
            </div>

        )
    }
}