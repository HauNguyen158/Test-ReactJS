import './Animal.css';

const Animal = (props) =>{
    return(
        <div className="animal">
            <div className="animal-text">DANH SÁCH ĐỘNG VẬT</div>
             {props.listAnimal.map((x, i) =>
            <div className="details-animal">
                <div className="main-animal">
                    <div className="image-animal">
                        <img src={x.img}/>
                    </div>
                    <div className="name-animal">{x.name}</div>
                    <div className="info-animal">{x.info}</div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Animal;