import React from 'react'
import './style.css'
const Card = (props) => {
    return (
        

            
            
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={props.image} className="card-img-top" alt=" haggle screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <hr></hr>
                            <a href= {props.githubUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Repo</a>
                            <a href= {props.projectUrl} className="btn btn-primary" target="_blank" rel="noreferrer">{props.title}</a>
                        </div>
                    </div>
                </div>
    
        

    )
}

export default Card
