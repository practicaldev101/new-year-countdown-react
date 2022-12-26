import './Credits.css';
import { FaGithub, FaTiktok, FaInstagram, FaYoutube, FaFacebook} from 'react-icons/fa'
export const Credits = () => {
    return (
        <div className='credits'>
            <h3 className='list__title'>
                By: PracticalDev
            </h3>
            <ul className='credits__list'>
                
                <li className='list__item'>
                    <a target="_blank" href="https://github.com/practicaldev101"><FaGithub/></a>
                </li>
                <li className='list__item'>
                    <a target="_blank" href="https://www.tiktok.com/@practicalprogrammer"><FaTiktok/></a>
                </li>
                <li className='list__item'>
                    <a target="_blank" href="https://www.youtube.com/channel/UCk6a5c-G9dIpBDwrBTATgBw"><FaYoutube/></a>
                </li>
                <li className='list__item'>
                    <a target="_blank" href="https://www.instagram.com/practical_dev/"><FaInstagram/></a>
                </li>
                <li className='list__item'>
                    <a target="_blank" href="https://www.facebook.com/practicaldev/"><FaFacebook/></a>
                </li>
                
            </ul>
        </div>
    )
}
