import React, { Component } from "react";
import Item from "./Item";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount()
  {
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=87d18dec13e4498f8b19be8e733ed9b2";
    let fetchdata=await fetch(url);
    let data= await fetchdata.json();
 
    this.setState({
      articles:data.articles
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center m-3"> Top Headlines </h1>
        <div className="row">

        {this.state.articles.map((e) => {
          return (
            <div className="col-lg-4 col-md-6 mb-2" key={e.url}>
              <Item title={e.title===null?e.title:e.title.slice(0,49)} desc={e.description===null?e.description:e.description.slice(0,80)} imgUrl={e.urlToImage} newsUrl={e.url} />
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default News;
