import React, { Component } from "react";

export class Item extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props;
    
    return (
      <div className="container">
        <div className="card">
          <img

            src={imgUrl!==null?imgUrl:'/sample.jpg'}
            alt=""
            className="card-img-top"
            
          />
          <div className="card-body">
            <h5 className="card-title">{title!==null?title:'Unknown'}</h5>
            <p className="card-text">{desc!==null?desc:'For more information on this news. Click on the below button.....'}....</p>
            <a href={newsUrl!==null?newsUrl:'/'} className="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
