import React from 'react'
import{ Card, CardContent, Typography} from "@material-ui/core";
import "./InfoBox.css";
const InfoBox2 = ({title,total}) => {
  return (
    <Card className="infoBox">
       <CardContent>
        
         <Typography className="infobox__title" color="textSecondary">{title}</Typography>
        
        <h2 className="infobox__total" color="textSecondary">{total} Total</h2>
       </CardContent>
    </Card>
  )
}

export default InfoBox2