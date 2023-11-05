import './CTA.css';
import { PiShareFat, PiChatCircleThin } from "react-icons/pi";
import { BsDownload } from 'react-icons/bs';
import PDF from "../../assets/rajput-pdf.pdf";


const CTA = ({ name }) => {
  return (
    <div className='action-btns'>
        <a href='#'>
            <PiShareFat /> <span>Share</span>
        </a>

        <a href="https://augmntx.com/hire" target='_blank'>
            <PiChatCircleThin /> <span>Hire {name}</span>
        </a>

        <a href={PDF} download>
            <BsDownload /> <span>Download PDF</span>
        </a>
    </div>
  )
}

export default CTA