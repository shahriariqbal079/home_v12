import React, { Component } from "react";

export class ContentCategories extends Component {
  render() {
    return (
      <div style={container_categories}>
        <div style={item} > Latest Articles   </div>
        <div style={item} > Popular  </div>
        <div style={item} > Recommend  </div>
        <div style={item} > Arts  </div>
        <div style={item} > Science  </div>
        <div style={item} > Technology  </div>
        <div style={item} > Entertainment   </div>
        <div style={item} > Finance  </div>
        <div style={item} > Business    </div>
        <div style={item} > Creativity      </div>
         <div style={item} > Lifestyle </div>
        
      </div>
    );
  }
}


const container_categories = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
   
}

const item = {
   
 
    margin: '0px',
    textAlign: 'center',
    lineHeight: '75px',
    fontSize: '16px',
}

export default ContentCategories;

                                                                          