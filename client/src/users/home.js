import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';

 export default function Home(props){
    return (
        <div>
        <Card body outline color="primary">
            <CardTitle>Welcome to Notes app</CardTitle>
            <CardText>Sign-up and click on Notes to add a note</CardText>
          
      </Card>
      </div>
    )
} 