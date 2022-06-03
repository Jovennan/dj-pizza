import './Meal.css'

const Meal = ({name, description, image, price}) => {
    return (<div className='meal'>
        <div className='image-container'>
            <img src={image} alt={description} />
        </div>
        <div className='content'>
            <p className='name'>
                <strong>{name}</strong>
            </p>
            <p className='description'>
                {description}
            </p>
            <p className='price'>
                R$ <strong>{price}</strong>
            </p>
        </div>
    </div>)
}

export default Meal