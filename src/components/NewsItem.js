import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,desc,imageUrl,NewsUrl,publishedAt}=this.props;
    let date = new Date(publishedAt);
    return (
      <div className="my-4">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtwYjrThvKmYiaLxHwY2smHX-bgTNjnDdtZDPMfGI2W16mPRaEEdaSrb2MhcYuetRHZM&usqp=CAU"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-muted">{date.toGMTString()}</small></p>
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
