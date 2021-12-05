import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee162550437a496a8e48b90e015e13cc&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    }

    async componentDidMount() {
        // This doesn't work, ????
        // this.updateNews();
        // this.setState({ loading: false });

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee162550437a496a8e48b90e015e13cc&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }


    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: "40px" }}>News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element, index) => {
                                return (
                                    <div className="col-md-4" key={element.url + index}>
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
                    </div>
                </InfiniteScroll>
            </>
        );
    }

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
}

export default News;
