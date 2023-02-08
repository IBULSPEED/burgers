const Card = ({ burgers }) => {
    return (
        <div className='card'>
        <h2>{burgers.name}</h2>
        <h3>{burgers.description}</h3>
        <p>{burgers.ingredients}</p>
        <p>{burgers.localisation.address}</p>
        <p>{burgers.localisation.web}</p>
        <p>{burgers.visited && <div className='visited'></div>}</p>
        <p>{burgers.visited && <div className='not-visited'></div>}</p>
        </div>
    );
};
export default Card