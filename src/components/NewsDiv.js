import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import Footer from './Footer';
import PropTypes from 'prop-types';


export class NewsDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
        if (this.props.category !== '' && this.props.category !== '/')
            document.title = `SDNews - ${this.capitalizeFirstLetter(this.props.category)}`
        else
        document.title = 'SDNews'
    }

    static defaultProps = {
        country: "in",
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    async componentDidMount() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=969ceadf639e4d53a116b72b9799bafd&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            // loading: false 
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 4000)
    }

    handleNext = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=969ceadf639e4d53a116b72b9799bafd&page=${this.state.page + 1}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            // loading: false
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 3500)
    }

    handlePrevious = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=969ceadf639e4d53a116b72b9799bafd&page=${this.state.page - 1}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            // loading: false
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 5000)
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (

            <div className="container py-4">
                <h2 style={{ "textAlign": "center", marginBottom: "30px" }}>{`Top  ${this.capitalizeFirstLetter(this.props.category)} Headlines Now - SDNews`}</h2>
                <div className="container" style={{ "top": "20px", "marginBottom": "100px" }}>
                    <div className="row">
                        {this.state.loading && <Spinner />}

                        {/* Looping for each article */}
                        {this.state.loading === false && this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title.slice(0, 58) + "..."} description={element.description ? element.description.slice(0, 90) + " ..read more" : "Read more for detailed news.."} imageUrl={element.urlToImage} newsUrl={element.url} loading={this.state.loading} publishedAt={element.publishedAt} author={element.author} />
                                </div>
                            )
                        })}
                    </div>

                    {this.state.loading === false && (<div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevious} >&larr; Previous</button>
                        <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / 6)} className="btn btn-success" onClick={this.handleNext} >Next &rarr;</button>
                    </div>)
                    }
                </div>
            </div>

        )
    }
}

export default NewsDiv
