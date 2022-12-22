const Card = ({img = "https://thumbs.dreamstime.com/b/l%C3%ADnea-icono-de-la-galer%C3%ADa-fotos-105614992.jpg", title="Sin Imagen", des="Sin Descripcion"}) => {
    return (
        <>
        <div className="card m-3 bg-dark" style={{width: '18rem'}} >
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{des}</p>
            </div>
        </div>
        </>
    );
};

export default Card;