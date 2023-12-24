import React, { Component } from 'react'

export default class Newitem extends Component {
  render() {
    let{title,description,image,imageurl,authername}=this.props;
    return (
      <div style={{margin:"10px"}}>
        <div className="card" style={{width: "18em"}}>
        <img src={image} className="card-img-top" alt="..." style={{height:"5cm"}}/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Created By {authername?authername:"Unknwon"}</p>
        <a href={imageurl} rel="noreferrer" target='_blank' className="btn btn-primary" >Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
