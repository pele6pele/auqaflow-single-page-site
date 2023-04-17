import '../styles/main.css'

import image from '../images/arrow-right-solid.svg'
import cart from '../images/cart-shopping-solid.svg'

const Main = () => {
  return (
    <div className="class_main">
      <div className="class_main_left">
        <div className="title">
          <h1>
            The simple <br /> Bottle Water
          </h1>
          <h3>More offers</h3>
        </div>
        <div className="class_main_left_all_product">
          <div>
            <p>Shop</p>
            <h3>All Product</h3>
          </div>
          <div className="class_main_left_all_product_border">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
      <div className="class_main_right">
        <div className="class_main_right_up">
          <h1>See our cups</h1>
          <img src={image} alt="" />
        </div>
        <div className="class_main_right_down">
          <div className="class_main_right_down_up">
            <h3>
              have some <br /> question?
            </h3>
          </div>
          <h1>Contact us</h1>
        </div>
      </div>
    </div>
  )
}
export default Main
