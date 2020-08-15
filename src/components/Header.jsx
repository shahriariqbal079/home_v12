import React, { Component } from 'react'
import { Grid } from '@material-ui/core';


/* ......styles...... */

// 219 -142 

const header = {
    height: '77px',
    background: '#fff'

}


const log_sign_container = {
  
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end' 

}

const link_login = {

    fontFamily: '',
    fontSize: ' 14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: ' 0.5px',
    textAlign: 'center',
    color: '#0d0321',
    textDecoration: 'none',
    marginRight:'10px',
    paddingRight: '10px',
    borderRight: ' 2px solid '
  

}


const link_signup = {

    fontFamily: '',
    fontSize: ' 14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: ' 0.5px',
    textAlign: 'center',
    color: '#0d0321',
    textDecoration: 'none',
    marginRight:'51px'
  

}

const btn_publish = {
    width: ' 135px',
    height: '39px',
    borderRadius:'5px',
    backgroundColor: ' #b4e680',
    textDecoration: 'none',
    border: 'none',
    marginRight:'51px'
}

const btn_text = {
    width:  '61px',
    height:  '16px',
    fontFamily:  '',
    fontSize:  '14px',
    fontWeight:  'bold',
    fontStretch:  'normal',
    fontStyle:  'normal',
    lineHeight:  'normal',
    letterSpacing:  '0.5px',
    textAlign:  'center',
    color:  '#0d0321',
    paddingTop: '36px'
  }


  const link_title = {
    fontSize:  '34px',
    fontWeight:  'bold',
    color: '#202026',
    textDecoration: 'none',
    marginLeft: '92px'
    
  
   
  }

  const text_color = {
      color: '#afe37b'
  }

  const title_container = {

    display: 'flex',
    
    alignItems: 'flex-end' 



   


  }

export class Header extends Component {
    render() {
        return (
            <Grid container style={header} >

                <Grid item sm={6} style={title_container} > <a href="" style={link_title} > Fushion<span style={text_color}>read</span> </a> </Grid>

                <Grid item sm={6}>
                    <div style={log_sign_container}>

                         <a href="" style={link_login} > LOGIN </a>
                         <a href="" style={link_signup} > SIGNUP </a>

                         <button  style={btn_publish}> <span style={btn_text}> Publish </span>  </button>

                     </div>


                

            

                
               </Grid>

                
               
                
            </Grid>
        )
    }
}

export default Header
