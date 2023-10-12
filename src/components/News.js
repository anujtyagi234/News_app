import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export class News extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            article: [],
            totalResults: 0,
            loading: false,
            publishedAt:""
        };        
    }
    async componentDidMount() {
        let {category}=this.props;
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=971b5cb64c0b477fab14a2fede604e1a&page=1&pageSize=12`;
        console.log(url)
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            publishedAt: parsedData.publishedAt
        });
    }

    handlePrevClick = async () => {
        let {category}=this.props;
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=971b5cb64c0b477fab14a2fede604e1a&page=${this.state.page - 1}&pageSize=12`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        this.setState({
            page: this.state.page - 1,
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            publishedAt: parsedData.publishedAt
        });
    }
    
    handleNextClick = async () => {
        let {category}=this.props;
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=971b5cb64c0b477fab14a2fede604e1a&page=${this.state.page + 1}&pageSize=12`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        this.setState({
            page: this.state.page + 1,
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            publishedAt: parsedData.publishedAt
        });
    }
    render() {
        return (
            <div className='container my-2'>
                <h1 className="text-center" style={{ textDecoration: "underline" ,color:"red"}}>News Top-Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.article.map((element) => {
                       return <div className='col-md-3' key={element.url} >
                         <div className="d-flex flex-column align-items-center">
                            <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} NewsUrl={element.url} publishedAt={element.publishedAt} />
                        </div>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark mx-2" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
