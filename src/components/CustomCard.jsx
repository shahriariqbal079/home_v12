import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import '../index.css';

const CustomCard = (props) => {
  /*   const classes = useStyles(); */

  const { avatarUrl, title, subtitle, description, imageUrl } = props;

  return (
    <Card style={{ borderRadius: '10px'}}>


      <CardMedia style={{ height: "200px" }} image="https://picsum.photos/200/300" />

      <CardContent>
{/* 
        <Typography variant="body2" component="p">
        Wednesday Holmes: Art as an Act of Survival
        </Typography> */}

        <p style={card_title} > UX Design </p>
        <p style={card_des} > Wednesday Holmes: Art as an Act of Survival </p>
        <p style={card_author}> By Jonathan Doe</p>
        <p style={card_time}> 27 mins ago </p>

      </CardContent>

{/*       <CardActions>
        <Button size="small"> Buy Now </Button>
        <Button size="small"> Offer </Button>
      </CardActions> */}

    </Card>
    /* 
    <div>
      <div > <img style={card_img} src={imageUrl} /> </div>
      <div style={card_body}>  {description} </div>


    </div> */
  );
};

/* const card_img = {
  width:' 290px',
  border: '1px solid',
  borderRadius: '10px',
  marginBottom: '-50px',
  
  
}

const card_body = {
  width: '263px',
  background: 'gray',
  border: '1px solid',
  borderRadius: '10px',
  
  
  
} */

const card_title = {
 

    fontFamily:  'SFUIDisplay',
    fontSize: ' 13px',
    fontWeight:  'normal',
    fontStretch:  'normal',
    fontStyle:  'normal',
    lineHeight:  'normal',
    letterSpacing:  '0.6px',
    color: '#3b3841 ',
    margin: '0px'

}

const card_des = {

  fontFamily: 'SFUIDisplay',
  fontSize: '17px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.41',
  letterSpacing: '0.5px',
  color: '#0d0321',
  margin: '0px'


}

const card_author = {
 
  fontFamily: 'SFUIDisplay',
  fontSize: '14px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.2px',
  color: '#0d0321',
 


}



const card_time = {
 
  fontFamily: 'SFUIDisplay',
  fontSize: '13px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.2px',
  color: '#817c8a',
  margin: '0px'


}

export default CustomCard;
