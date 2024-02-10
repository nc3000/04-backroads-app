import{pageLinks, socialLinks} from '../../data'

export default function Footer(){

    return(
        <footer className="section footer">

            <ul className="footer-links">
              {
                pageLinks.map((pageLinks)=>{
                  const {id, href, text} = pageLinks;

                  return (
                      <li key={id}>
                        <a href={href} className="footer-link">{text}</a>
                      </li>

                  )
                })
              }
            </ul>


            <ul className="footer-icons">   
              {
                  socialLinks.map((socialLinks) =>{
                    const {id, href, icon} = socialLinks;
                    return(
                        <li key={id}>
                        <a href={href} target="_blank" rel="noreferrer" className="footer-icon"><i className={icon}></i></a>
                      </li>
                    )
                  })
                }
            </ul>


            <p className="copyright">
              copyright &copy; Backroads travel tours company
              <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
      </footer>

    )
}