import './_benefits.scss'


export const Benefits=(props)=>{
    return(<>
    
    <div className="col-md-12 mt2"id="benefits-box">

        <center>
            <h1>{props.icon}</h1>
            <h5 className="mt3 page-headings">{props.description}</h5>
        </center>
    </div>
    
    
    </>)
}