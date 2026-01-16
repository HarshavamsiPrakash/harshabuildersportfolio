// import logo from "../assets/company-logo.png";

// export default function Header() {
//   return (
//     <header className="home-header">
//       <div className="home-header-container">
//         <div className="home-logo">
//           <img src={logo} alt="Shri Harsha Associates" />
//         </div>

//         <nav className="home-nav">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#services">Services</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }

import logo from "../assets/company-logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        {/* LEFT – LOGO + COMPANY NAME */}
        <div className="header-brand">
          <img src={logo} alt="Shri Harsha Associates Logo" />

          <div className="brand-text">
            <h1>Shri Harsha Associates</h1>
            <span>Construction & Infrastructure</span>
          </div>
        </div>

        {/* RIGHT – NAVIGATION */}
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}
