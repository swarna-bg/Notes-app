import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

export default function NoteItem(props) {

    const { name, id, removeHandle,index,category} = props
    return (
        <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{props.name}</td>
            <td><Link to={`/notes/${id}`}>Show</Link></td>
            <td><Button color="danger" onClick={() => {
                const confirm = window.confirm('Are you sure?')
                if (confirm) {
                    removeHandle(id)
                }
            }}>remove</Button></td>
        
            
        </tr>
        )
}