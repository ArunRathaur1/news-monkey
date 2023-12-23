import React, { Component } from 'react'

export default class Newitem extends Component {
  render() {
    let{title,description,image,imageurl}=this.props;
    return (
      <div style={{margin:"10px"}}>
        <div class="card" style={{width: "18em"}}>
        <img src={image} class="card-img-top" alt="..." style={{height:"5cm"}}/>
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={imageurl} target='_blank' class="btn btn-primary" >Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
