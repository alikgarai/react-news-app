import React from "react";

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    let style = {
        display: 'flex',
        justifyContent: 'end',
        position: 'absolute',
        right: 0
    }
    return (
        <div className="card my-3">
            <div style={style}>
                <span className="badge rounded-pill bg-danger">{source}</span>
            </div>

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

export default NewsItem;

