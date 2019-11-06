import React from 'react'

import { Button } from 'reactstrap'

export default function CategoryItem(props) {
    const { index,name,  removeHandle,} = props
   
    return (
        <tr>
            
            <td>{index+1}</td>
            <td>{name}</td>
           
            <td><Button color ="danger" onClick={() => {
                 const confirm = window.confirm('Are you sure?')
                 if (confirm) {
                     removeHandle(props.id)
                 }
             }}>remove</Button></td>
            
    </tr>
        
        )
}
