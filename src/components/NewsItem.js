import React, { Component } from 'react'

import altImage from '../logo/googleNews.png'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, publishedAt, author } = this.props;

        return (

            <div className="card mx-2 my-2">
                <img src={imageUrl ? imageUrl : altImage} className="card-img-top img-responsive" alt="@sdnews" />
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{ zIndex:'7', left:"85%"}}>{author === null ? "Google" : author.slice(0,17)}
                        <span className="visually-hidden"></span>
                    </span></h5>
                    <p className="card-text">{description}.</p>
                    <p className="card-text"><small className="text-muted">By {author === null ? "Google" : author} on {new Date(publishedAt).toUTCString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
