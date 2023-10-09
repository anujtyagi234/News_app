import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,desc,imageUrl,NewsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtwYjrThvKmYiaLxHwY2smHX-bgTNjnDdtZDPMfGI2W16mPRaEEdaSrb2MhcYuetRHZM&usqp=CAU"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={NewsUrl} target="_blank"  rel="noopener noreferrer" className="btn btn-sm btn-primary">
             read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}


export default NewsItem;
