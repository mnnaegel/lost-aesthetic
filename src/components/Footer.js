import React from 'react'
import '../css/footer.css'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import twit from '../assets/twit.svg'

const Footer = () => {
    return (
        <div class="footer">
            <div class="social-media-links">
                <a class="media-icon" href="#"><img src={fb} alt="facebook"></img></a>
                <a class="media-icon" href="#"><img src={insta} alt="instagram"></img></a>
                <a class="media-icon" href="#"><img src={twit} alt="twitter"></img></a>
            </div>
            <div class="additional-links">
                <a class="newsletters" href="#">NEWSLETTER</a>
                <div class="copyright"><span>© 2021 STÜSSY</span></div>
                <div class="links-list">
                    <a class="link" href="#">Chat</a>
                    <a class="link"href="#">Contact</a>
                    <a class="link" href="#">Chapters</a>
                    <a class="link" href="#">Features</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
