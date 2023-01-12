import React from 'react'
// import PropTypes from 'prop-types'

const Alert = (props)=> {
//   static propTypes = {

//   }
   const textCapitalize = (word)=>{
     return word.toUpperCase();
  }

  
    let {alert} = props
   const myStyle={
     height:'75px',
     textAlign:'center',
     position:'relative',
     top: '57px'
     
   }
    return (
      <>
        <div style= {myStyle}>
          {props.alert && <div 
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Your Country code : <strong>{textCapitalize(alert)}</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
  }
        </div>
      </>
    );
  
}

export default Alert
