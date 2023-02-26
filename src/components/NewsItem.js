import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right:'0',
            }}
          >
            <span class="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/08/full/1675832313-1343.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <small className="text-muted">
                {new Date(date).toGMTString()}
              </small>
            </p>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
