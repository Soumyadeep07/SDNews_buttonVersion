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
            // loading: true,
            // page: 1
        }
        if (this.props.category !== '' && this.props.category !== '/' && this.props.category !== 'all')
            document.title = `SDNews - ${this.capitalizeFirstLetter(this.props.category)}`
        else
        document.title = 'SDNews'
    }

    static defaultProps = {
        country: "in",
        category: "all"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    async componentDidMount() {
        this.setState({ loading: true })
        let url = `https://inshortsapi.vercel.app/news?category=${this.props.category}`;
        let dataFetched = await fetch(url);
        let parsedData = await dataFetched.json();
        this.setState({
            articles: parsedData.data,
            // totalResults: parsedData.totalResults,
            // loading: false 
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 4000)
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
                                <div className="col-md-4 my-2" key={element.imageUrl}>
                                    <NewsItem title={element.title.slice(0, 58) + "..."} content={element.content ? element.content.slice(0, 90) + " ..read more" : "Read more for detailed news.."} imageUrl={element.imageUrl} readMoreUrl={element.readMoreUrl?element.readMoreUrl:element.url} loading={this.state.loading} date={element.date} time={element.time} author={element.author} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsDiv
