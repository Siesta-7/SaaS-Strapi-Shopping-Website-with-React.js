import "./footer.scss"
export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <span>Woman</span>
          <span>Men</span>
          <span>Accessories</span>
          <span>Shoes</span>
          <span>NewArrivals</span>
        </div>
        <div className="item">
          <h4>Links</h4>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h4>About</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        <div className="item">
          <h4>Contact</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SiestaStore</span>
          <span className="copyright">©Copyrights 2023</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" />
        </div>  
      </div>
    </div>
  )
}

