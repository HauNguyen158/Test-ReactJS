import "./Paging.css"

const Paging = (props) =>{
    return(
        <div className="paging">
            {props.paging.map((x, i) =>
            <button className={props.page == i+1 ? "current" : ""} onClick={e=>{props.setPage(i+1)}}>{i + 1}</button>
            )}
        </div>
    )
}
export default Paging