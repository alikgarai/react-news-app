import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            lastPage: 1,
        };
    }

    async updateNews() {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee162550437a496a8e48b90e015e13cc&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
        });
    }

    async componentDidMount() {
        this.updateNews();
        this.setState({ lastPage: Math.ceil(this.state.articles.length / this.props.pageSize) });
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    };

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    };

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    };

    static defaultProps = {
        pageSize: 8,
        country: "in",
        category: "general",
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center" style={{ margin: "40px" }}>News Monkey - Top Headlines</h1>

                {this.state.loading && <Spinner />}

                {!this.state.loading && (
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title}
                                        description={element.description}
                                        imgUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}

                <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                    <button
                        class="btn btn-dark me-md-2"
                        type="button"
                        disabled={this.state.page === 1}
                        onClick={this.handlePrevClick}>&larr; Previous
                    </button>
                    <button
                        class="btn btn-dark"
                        type="button"
                        disabled={this.state.page === this.state.lastPage}
                        onClick={this.handleNextClick}>Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
