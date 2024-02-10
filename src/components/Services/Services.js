import Title from '../Title/Title'
import Service from '../Service/Service'
import {services} from '../../data'

export default function Services(){

    return(

      <section className="section services" id="services">
            <Title title="Our" subTitle="Services"/>

            <div className="section-center services-center">

            {
                services.map((item) =>{
                  return <Service icon={item.icon} title={item.title} text={item.text}  />
                })
            }


            </div>
      </section>

    )
}