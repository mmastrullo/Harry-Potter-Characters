export const Characters = ({actor, image, house, ancestory, name }) => {
    
    return (
        <div>
            <hr></hr>
            <h3>{name}</h3>
            <img src={image} />
            <p>{actor}</p>
            <p>{house}</p>
            <p>{ancestory}</p>
        </div>
    )
};