import { WhatsappWrapper } from "./styles";
import WhatsAppIcon from '../../assets/images/whatsapp.png';

const WhatsappButton = () => {


    return(
        <WhatsappWrapper href="https://api.whatsapp.com/send?phone=557791455292">
                <img src={WhatsAppIcon} alt="" className="whatsapp-icon"/>
                <span className="whatsapp-text">Whatsapp</span>
                <span className="whatsapp-number">(77) 9145-5292</span>
            </WhatsappWrapper>
    )

}

export default WhatsappButton;


