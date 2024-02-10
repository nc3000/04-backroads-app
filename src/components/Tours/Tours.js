import Title from '../Title/Title'
import {tours} from '../../data'

export default function Tours(){

    return(
      <section className="section" id="tours">

            <Title title="features" subTitle="tours"/>
    
            <div className="section-center featured-center">
      
                {
                tours.map((tours)=> {   // DESCTRURING  THE OBJE PROPERTIES OF THE ARRAY 
                    const {id, image, date, title, info, location, duration, price} = tours;

                  return (
                    <article className="tour-card" key={id}>
                    <div className="tour-img-container">
                      <img src={image} className="tour-img" alt="" />
                      <p className="tour-date">{date}</p>
                    </div>
                    <div className="tour-info">
                      <div className="tour-title">
                        <h4>{title}</h4>
                      </div>
                      <p>
                        {info}
                      </p>
                      <div className="tour-footer">
                        <p>
                          <span><i className="fas fa-map"></i></span> {location}
                        </p>
                        <p>{duration} days</p>
                        <p>from ${price}</p>
                      </div>
                    </div>
                  </article>

                  )
                })
                }



            </div>
      </section>


    )
}