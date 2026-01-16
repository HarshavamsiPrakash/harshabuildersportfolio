// export default function Hero() {
//   return (
//     <section className="hero" id="home">
//       <div className="hero-bg"></div>
//       <div className="hero-overlay"></div>

//       <div className="hero-content">
//         <h1>
//           SHRI HARSHA <span>ASSOCIATES</span>
//         </h1>

//         <h2>Trusted Construction & Infrastructure Solutions</h2>

//         <p>
//           We deliver high-quality residential, commercial, and infrastructure
//           projects with uncompromised engineering standards, strict safety
//           practices, and reliable on-time execution.
//         </p>

//         <div className="hero-actions">
//           <a href="#projects" className="btn primary">View Projects</a>
//           <a href="#contact" className="btn secondary">Get Consultation</a>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Hero() {
  return (
    <section className="home-hero" id="home">
      {/* MAIN BACKGROUND IMAGE */}
      <div className="home-hero-bg"></div>

      {/* GOLD OVERLAY */}
      <div className="home-hero-overlay"></div>

      {/* SECOND IMAGE / ACCENT LAYER */}
      <div className="home-hero-accent"></div>

      {/* HERO CONTENT */}
      <div className="home-hero-content">
        {/* COMPANY NAME */}
        <h4 className="home-company-name">
          SHRI HARSHA ASSOCIATES
        </h4>

        {/* MAIN HEADING */}
        <h1>
          BUILDING YOUR VISION.
        </h1>

        {/* DESCRIPTION */}
        <p>
          We deliver high-quality residential, commercial, and infrastructure
          projects with precision engineering and uncompromised standards.
        </p>

        {/* CTA */}
        <a href="#contact" className="home-cta">
          REQUEST A QUOTE
        </a>
      </div>
    </section>
  );
}
