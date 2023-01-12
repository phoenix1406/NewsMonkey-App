import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types' 
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)



  const capitalizeFirstLetter = (word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1);
  }

  document.title = `NewsMonkey (${(props.country).toUpperCase()}) - ${capitalizeFirstLetter(props.category)}`;

  const updateNews= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    props.updateProgress(0);
    let data =await fetch(url);
    props.updateProgress(30);
    const parsedData = await data.json();
    props.updateProgress(50);
    // console.log(parsedData);
     setArticles(parsedData.articles);
     setLoading(false);
    //  setTotalResults(totalResults);
     setTotalResults(parsedData.totalResults)
     props.updateProgress(100);
  }
    useEffect(()=>{
      updateNews();
      // to remove warning from console put this in before the line which is giving bug
      // eslint-disable-next-line
    },[])
  // async componentDidMount(){
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5cb260a252b34f4cac10bf4ad13e3324&page=1&pageSize=${props.pageSize}`
  //   // this.setState({loading:true})
  //   // let data =await fetch(url);
  //   // const parsedData = await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults : parsedData.totalResults,
  //   //   loading:false
   

  //   // })
  //   this.updateNews();
  // }


  //   handlePrevClick = async ()=>{
  //   //     

    
  //   this.setState({
  //     page:this.state.page-1,
      
    
  //   })
  //   this.updateNews();
  //  }
  //  const handleNextClick =async ()=>{
   
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5cb260a252b34f4cac10bf4ad13e3324&page=${this.state.page+1}&pageSize=${props.pageSize}`
  //   // this.setState({loading:true});
  //   //  let data =await fetch(url);
  //   // const parsedData = await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   page : this.state.page + 1,
  //   //   totalResults : parsedData.totalResults,
  //   //   loading:false
  //   // })
  //   this.setState({
  //     page:this.state.page+1
  //   })
  //   this.updateNews();
  // }
   const fetchMoreData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
    setLoading(true);
    let data =await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);
      setArticles(articles.concat(parsedData.articles));
      setLoading(false);
      setTotalResults(parsedData.totalResults)
      setPage(page+1);
   
   }


  
   
  
  
    return (
      <>
        <h2 className ="text-center" style={{marginTop:'58px'}}>{`${capitalizeFirstLetter(props.category)} Top Headlines Of The Day`}</h2>
        { loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={loading &&<Spinner/>}
        >
          <div className="container"> 
         <div className="row">
          {/*!(this.state.loading)  &&*/articles.map((element)=>{ 
           
             return( <div className="col-md-4 my-2" key = {element.url}>
              <NewsItem title = {(element.title)?element.title.slice(0,30):""} description = {(element.description)? element.description.slice(0,40):""} imageUrl = {((element.urlToImage))? element.urlToImage:"https://cdn-icons-png.flaticon.com/512/2965/2965879.png"} newsUrl = {element.url}
                author={element.author} date ={element.publishedAt} source ={element.source.name}/>
              </div>
             )
          })}
          
          
        </div>
        
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.handlePrevClick}>&larr; Previous</button>
          <button disabled = {this.state.page +1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick = {this.handleNextClick}>Next &rarr;</button>
        </div> */}
        
         
      </>
    )
  
}
// static defaultProps = {
//   country :'in',
//   pageSize:5,
//   category:'general'
// }
//  static propTypes = {
//   country: PropTypes.string.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   category :PropTypes.string.isRequired,
// }
 News.defaultProps = {
  country :'in',
  pageSize:5,
  category:'general'
}
 News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category :PropTypes.string.isRequired,
}

export default News
