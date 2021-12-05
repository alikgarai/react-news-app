import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card my-3">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: 1 }}>
                    {source}
                </span>
                <img src={imgUrl} className="card-img-top" alt="..." height="250rem" />
                <div className="card-body">
                    <h5 className="card-title">{title && title.slice(0, 45)}...</h5>
                    <p className="card-text">{description && description.slice(0, 88)}...</p>
                    <p>By {author ? author : "Anonymous"} on {new Date(date).toDateString()}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Show More</a>
                </div>
            </div>
        );
    }
}

export default NewsItem;

