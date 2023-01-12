import React from 'react'
// import PropTypes from 'prop-types'

const NewsItem =(props)=>{
//   static propTypes = {

//   }


    let {title,description,imageUrl,newsUrl,author,date,source} = props;  
    return (
      <div>
        <div className="card my-3">
          {/*badges*/}
          <div style ={{
            display:'flex',
            justifyContent:'flex-end',
            right:'0',
            position:'absolute',
            top:'0',
            color:'white',
            fontWeight:'bold'
          }}>
          <span className="square-pill bg-danger" >
            {source}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                Published by {!author ? "Anonymous" : author} on{ ' '}
                {new Date(date).toTimeString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem
