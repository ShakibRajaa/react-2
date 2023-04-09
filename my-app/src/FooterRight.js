import insta1 from './insta1.png';
import link from './link.png';
function FooterRight(){
    return(
        <div className='footerRight' style={{itemAlign:"right"}}>
            <p> Dweep.io</p>
            <p>Made with love in India</p>
            <div style={{display:"flex",marginLeft:"30rem"}}>
                <img style={{height:"1.5rem", width:"1.5rem",marginRight:"1rem"}} src={insta1} alt="insta"/>
                <img style={{height:"1.5rem", width:"1.5rem"}} src={link} alt="link"/>

            </div>
            <br/>
            <p>hello@dweep.io</p>
        </div>
        
    )
}

export default FooterRight;