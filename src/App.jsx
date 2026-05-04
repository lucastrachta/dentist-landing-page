



import "./App.css";
import { motion } from "framer-motion";
import after from "./assets/afterdentista.jpg";
import before from "./assets/beforedentista.jpg";
import limpieza from "./assets/limpiezadental.jpg";
import implante from "./assets/implantedental.jpg";
import whitening from "./assets/blanqueamientodental.jpg";
import clinic1 from "./assets/consultoriodentista.jpg";
import clinic2 from "./assets/consultoriodentista2.jpg";
import whatsapp from "./assets/whatsapp4.jpg";

import sonrisamasfuerte from "./assets/sonrisamasfuerte.jpg";
import dientesmassaludables from "./assets/dientemassaludable.jpg";
import after2 from "./assets/after2.jpg";
import nuestraoficina2 from "./assets/nuestraoficina2.jpg";
import after3 from "./assets/after3.jpg"; 
import clinic from "./assets/clinic.jpg";
 import smile from "./assets/smile.jpg";
 import beforedentista4 from "./assets/beforedentista4.png";


function App() {

  const benefits = [
    {
      title: "Whiter Smile",
      text: "Noticeable results in just one session",
      img: sonrisamasfuerte
    },
    {
      title: "Healthy Teeth",
      text: "Prevent cavities and gum disease",
      img: dientesmassaludables
    },
    {
      title: "Permanent Solutions",
      text: "Dental implants that last for years",
      img: after2
    }
  ];

  const testimonials = [
    { text: "My smile completely changed!", name: "Emily" },
    { text: "Super professional and painless.", name: "John" }
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <h2>Smile Clinic</h2>
        <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20a%20website%20like%20this" className="btn">
          Book Now
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.div className="hero-box">
          <h1>Fix your smile in just 1 visit — or we fix it for free</h1>

<p>
  Trusted by 500+ patients. Fast, painless and professional dental care.
</p>

<span className="hero-badge">
   Only 3 appointments left this week
</span>

<a href="https://wa.me/5493705013558?text=I%20want%20to%20fix%20my%20smile" className="btn big">
  Book My Appointment Now
</a>
        </motion.div>
      </section>


<section className="section">
  <div className="container">
    <div className="card apple center">
      <h2>Why Choose Our Clinic?</h2>

     <ul className="benefits">
  <li>😊 Smile with confidence again</li>
  <li>🦷 Pain-free treatments with modern technology</li>
  <li>⚡ Fast results from your first visit</li>
</ul>
    </div>
  </div>
</section>



      {/* BENEFITS */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2>

          <div className="grid">
            {benefits.map((item, i) => (
              <div key={i} className="card apple">
                <img src={item.img} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="section">
        <div className="container">
          <h2>Real Results</h2>

          <div className="grid">
            <div className="card apple">
              <img src={beforedentista4} />
              <p>Before</p>
            </div>

            <div className="card apple">
              <img src={after3} />
              <p>After</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC */}
      <section className="section">
        <div className="container">
          <h2>Our Clinic</h2>

          <div className="grid">
            {[smile, clinic].map((img, i) => (
              <div key={i} className="card apple">
                <img src={img} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <h2>What Patients Say</h2>

          <div className="grid">
            {testimonials.map((t, i) => (
              <div key={i} className="card apple">
                <p>"{t.text}"</p>
                <span>- {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="section">
      
<h3>Teeth Whitening</h3>
<h2>$99</h2>

<p>
  Get a visibly whiter smile in just one session.
</p>

<span className="urgency">
  ✅ Only 3 spots available this week
</span>

<a href="https://wa.me/5493705013558?text=I%20want%20the%20whitening%20offer" className="btn">
  Claim My Spot Now
</a>
             
      </section>

      {/* GUARANTEE */}
      <section className="section">
        <div className="container">
          <h2>100% Satisfaction Guarantee</h2>
          <p>If you're not happy, we fix it for free.</p>
        </div>
      </section>

      {/* CTA */}
      
<section className="cta">
  <div className="container">

    <h2>Don’t wait to fix your smile</h2>

    <p>
      Only 3 appointments left this week. Book now and get your first consultation free.
    </p>

    <a 
      href="https://wa.me/5493705013558?text=I%20want%20to%20book%20now"
      className="btn big boton"
    >
      Book My Appointment Now
    </a>

    <span className="cta-note">
      ⚠️ Appointments fill fast — secure yours now
    </span>

  </div>
</section>

<section className="section contact-pro">
  <div className="container">
    <h2>Contact Us</h2>

    <div className="contact-grid">

      {/* INFO */}
      <div className="card apple contact-info">
        <p>📍 Address: Av. Siempre Viva 123</p>
        <p>📞 Phone: +54 9 11 1234-5678</p>
        <p>🕐 Hours: Mon - Fri 9:00 - 18:00</p>

        <a
          href="https://wa.me/5493705013558?text=I%20want%20to%20book%20an%20appointment"
          className="btn"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* MAPA */}
      <div className="card apple contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          title="map"
        ></iframe>
      </div>

    </div>
  </div>
</section>


      {/* WHATSAPP */}
      <div className="whatsapp-container">
        <div className="whatsapp-tooltip">
          Chat with us
        </div>

        <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20a%20website%20like%20this" className="whatsapp-btn">
          <img src={whatsapp} />
        </a>
      </div>
    </>
  );
}

export default App;






//JSX QUE SUBI A VERCEL HECHO POR MI Y LA IA PERO AHORA LA COMENTO PORQUE ENCONTRE
// OTRO APP.JSX HECHO SOLO POR IA MAS LINDO Y ESE LO SUBI A VERCEL

// import "./App.css";
// import { motion } from "framer-motion";
// import afterdentista from "./assets/afterdentista.jpg";
// import beforedentista from "./assets/beforedentista.jpg";
// import blanqueamientodental from "./assets/blanqueamientodental.jpg";
// import implantedental from "./assets/implantedental.jpg";
// import limpiezadental from "./assets/limpiezadental.jpg";
// import consultoriodentista from "./assets/consultoriodentista.jpg";
// import consultoriodentista2 from "./assets/consultoriodentista2.jpg";
// import whatsapp4 from "./assets/whatsapp4.jpg";

// function App() {

//   const services = [
//     {
//       title: "Teeth Cleaning",
//       text: "Professional cleaning to keep your smile healthy and fresh",
//       img: limpiezadental
//     },
//     {
//       title: "Whitening",
//       text: "Get a brighter, whiter smile in just one visit",
//       img: blanqueamientodental
//     },
//     {
//       title: "Dental Implants",
//       text: "Permanent solution to restore your confidence",
//       img: implantedental
//     }
//   ];

//   return (
//     <>
//       {/* NAV */}
//       <nav className="nav">
//         <h2>Smile Clinic</h2>
//         <a href="https://wa.me/5493705013558" className="btn">
//           Book Now
//         </a>
//       </nav>

//       <div className="container">






//         {/* HERO */}
//         <section className="hero">
//           <motion.div
//             className="hero-box"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h1 className="heading-xl">
//               Get Your Perfect Smile Today
//             </h1>

//             <p className="subheading">
//               Modern dental care designed to give you confidence and results
//             </p>

//             <span className="hero-urgency">
//               Limited appointments available this week
//             </span>

//             <a href="https://wa.me/5493705013558" className="btn btn-primary">
//               Book Appointment
//             </a>
//           </motion.div>
//         </section>

//         {/* SERVICES */}
//         <section className="section">
//           <h2 className="heading-lg">Our Services</h2>

//           <div className="grid">
//             {services.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="card premium"
//                 whileHover={{ y: -5 }}
//               >
//                 <img src={item.img} />
//                 <h3 className="heading-md">{item.title}</h3>
//                 <p>{item.text}</p>

//                 <a href="https://wa.me/5493705013558" className="btn small">
//                   Book Now
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* BEFORE AFTER */}
//         <section className="section">
//           <h2 className="heading-lg">Real Results</h2>

//           <div className="grid">
//             <div className="card premium">
//               <img src={beforedentista} />
//               <p>Before</p>
//             </div>

//             <div className="card premium">
//               <img src={afterdentista} />
//               <p>After</p>
//             </div>
//           </div>
//         </section>

//         {/* CLINIC */}
//         <section className="section">
//           <h2 className="heading-lg">Our Clinic</h2>

//           <div className="grid">
//             <div className="card premium">
//               <img src={consultoriodentista} />
//             </div>

//             <div className="card premium">
//               <img src={consultoriodentista2} />
//             </div>
//           </div>
//         </section>

//         {/* TESTIMONIALS */}
//         <section className="section">
//           <h2 className="heading-lg">What Patients Say</h2>

//           <div className="grid">
//             <div className="card premium">
//               <p>"Amazing service and very professional."</p>
//               <span>- Emma</span>
//             </div>

//             <div className="card premium">
//               <p>"Best dentist I’ve ever visited."</p>
//               <span>- Bill</span>
//             </div>
//           </div>
//         </section>



// {/* OFFER / PRICING */}
// <section className="section offer">

//   <h2 className="heading-lg">
//     Affordable Dental Care
//   </h2>

//   <p className="subheading">
//     High-quality treatment at a price you can afford
//   </p>

//   <div className="offer-box">

//     <span className="offer-badge">
//       Limited spots this week
//     </span>

//     <h3 className="offer-price">
//       Free Consultation
//     </h3>

//     <p className="offer-desc">
//       Get a professional evaluation and personalized treatment plan
//     </p>

//     <ul className="offer-list">
//       <li>✔ Full dental check</li>
//       <li>✔ Personalized plan</li>
//       <li>✔ No commitment</li>
//     </ul>

//     <a
//       href="https://wa.me/5493705013558"
//       className="btn btn-primary big"
//     >
//       Book Your Free Visit
//     </a>

//   </div>

// </section>






//         {/* CTA */}
//         <section className="cta">
//           <h2 className="heading-lg">
//             Ready to improve your smile?
//           </h2>

//           <a href="https://wa.me/5493705013558" className="btn btn-primary big">
//             Contact Now
//           </a>
//         </section>

//         {/* WHATSAPP */}
//         <div className="whatsapp-container">

//           <div className="whatsapp-tooltip">
//             Chat with us
//           </div>

//           <a href="https://wa.me/5493705013558" className="whatsapp-btn">
//             <img src={whatsapp4} />
//           </a>

//         </div>

//       </div>
//     </>
//   );
// }

// export default App;