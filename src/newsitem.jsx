import React from "react"


function NewsItem(props) {
    let time = new Date(props.date)
    let date = time.toUTCString()
    return (
        <div className="my-3">
            <div className="card">
                <div className="flex justify-end absolute right-0">
                    <span className="badge rounded-pill bg-danger" >{props.source}</span>
                </div>
                <img className="card-img-top" src={props.img} />
                <div className="card-body">
                    <div className="card-title">{props.title}</div>
                    <p className="card-text">{props.body}</p>
                    <p className="card-text mt-4"><small className="text-danger">By {props.author ? props.author : "Unkown"} on {date}</small></p>
                    <button onClick={() => (window.open(props.url, '_blank'))} className="btn btn-primary mt-6" value="New Tab">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default NewsItem