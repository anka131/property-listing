
function CardComponent({ propertyData = [] }) {
  
    return (

            <div className="card-div">
                {propertyData.map((data, idx) => (
                    <div className="card" key={idx}>
                       <div className='card-image'>
                         {data.superhost && <span className='superhost'>Superhost<img className="star" src="/img/Star_fill.svg" alt="star" /></span>} 
                        <img src={data.image} alt={data.title} />
                         </div>
                        
                        <div className='card-content'>
                        <h2 className='label'>{data.title} </h2>
                        <p className='desc'>{data.description}</p>
                       <div className="num-guests"> 
                        <p>🏠{data.capacity.bedroom} bedroom</p>
                        <p>👤{data.capacity.people} guests</p>
                       </div>
                       <div className="line"></div>
                       <div className="price-rate">
                        <p>${data.price}/night</p>
                        <p><img className="star" src="/img/Star_fill.svg" alt="star" />{data.rating}</p>
                       </div>
                      
                        
                        </div>
                      
                    </div>
                ))}
            </div>
    );
}

export default CardComponent
