import React, { Component } from "react";
import styles from "./Footer.module.css";
import { Grid } from "@material-ui/core";

export class Footer extends Component {
  render() {
    return (
      <Grid container className={styles.footer}>
        <Grid item xs={false} sm={2} />

        <Grid container direction="column" item xs={12} sm={8}>

          <Grid item  className={styles.container_country}>
              <img src="" className={styles.link} />
              <a href="" className={styles.link} > V4M2C1 </a>
              <a href="" className={styles.link} >  Vancouver  </a>
              <a href="" className={styles.link} > BC   </a>
              <a href="" className={styles.link} > Canada   </a>
          </Grid>

          <Grid item className={styles.container_others} >

              <div className={styles.others} > 

              <a href="" className={styles.link_other} > About </a>
              <a href="" className={styles.link_other} >  Term & Conditions   </a>
              <a href="" className={styles.link_other} > Privacy  Policy   </a>
              

               </div>

              <div className={styles.others} > 
              <img style={{ height:'29px', width:'29px',display: 'block', margin: 'auto' }} src="https://picsum.photos/200/300" />
               </div>


              <div style={{ textAlign: 'right'}} > 

                <span className={styles.link_other}> ©2020 FusionRead.Com </span> 
                <span className={styles.link_other} >  All Rights Reserved </span>   

               </div>

          </Grid>

        </Grid>

        <Grid item xs={false} sm={2} />
      </Grid>
    );
  }
}

export default Footer;

           

              