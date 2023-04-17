import '../styles/footer.css'

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="main_footer">
        <div>
          <h1>Stay in touch!</h1>
          <ul className="footer_stayIn">
            <li>
              <a href="https://www.facebook.com">
                <AiOutlineFacebook size={60} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <AiOutlineInstagram size={60} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <AiOutlineTwitter size={60} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <AiOutlineYoutube size={60} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Company</h1>
          <ul>
            <li>Product</li>
            <li>About us</li>
            <li>App</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
