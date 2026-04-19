



import "./App.css";
import { motion } from "framer-motion";
import afterdentista from "./assets/afterdentista.jpg";
import beforedentista from "./assets/beforedentista.jpg";
import blanqueamientodental from "./assets/blanqueamientodental.jpg";
import implantedental from "./assets/implantedental.jpg";
import limpiezadental from "./assets/limpiezadental.jpg";
import consultoriodentista from "./assets/consultoriodentista.jpg";
import consultoriodentista2 from "./assets/consultoriodentista2.jpg";

function App() {

  const services = [
    {
      title: "Teeth Cleaning",
      text: "Professional cleaning for a healthy smile",
      img:  limpiezadental
    },
    {
      title: "Whitening",
      text: "Brighten your smile safely",
      img: blanqueamientodental
    },
    {
      title: "Dental Implants",
      text: "Permanent solutions for missing teeth",
      img: implantedental
    }
  ];

  const images = [
   consultoriodentista,
    consultoriodentista2
  ];

  const testimonials = [
    { text: "Amazing service and very professional.", name: "Emma" },
    { text: "Best dentist I’ve ever visited.", name: "Bill" }
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <h2>Smile Clinic</h2>
        <a href="#contact" className="btn">Book Now</a>
      </nav>

      <div className="container">

        {/* HERO */}
        <section className="hero">

<div className="container">

          <motion.div
            className="hero-box"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get your perfect smile today</h1>
            <p>Professional dental care for you and your family</p>

            <motion.a
              href="https://wa.me/5491123456789"
              className="btn big"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.a>
          </motion.div>

          </div>
        </section>

        {/* SERVICES */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>

          <div className="grid">
            {services.map((item, i) => (
              <motion.div
                key={i}
                className="card apple"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={item.img} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IMAGES */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Clinic</h2>

          <div className="grid">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="card apple"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={img} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>What Patients Say</h2>

          <div className="grid">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                className="card apple"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <p>"{item.text}"</p>
                <span>- {item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* BEFORE AFTER */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Before & After</h2>

          <div className="grid">
            <div className="card apple">
              <img src={beforedentista} />
              <p>Before</p>
            </div>

            <div className="card apple">
              <img src={afterdentista} />
              <p>After</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="cta"
          id="contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Need a dental check?</h2>

          <motion.a
            href="https://wa.me/5491123456789"
            className="btn big"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Now
          </motion.a>
        </motion.section>

 {/* WHATSAPP */}
      <a href="https://wa.me/5491123456789" className="whatsapp">
        💬
      </a>

      </div>
    </>
  );
}

export default App;








//codigo de la pagina dentista que fui haciendo yo con la ia y
//  arriba esta el jsx completo que hizo la ia

// import "./App.css";
// import { motion } from "framer-motion";


// function App() {
//   return (
//     <div className="container">

//       {/* NAV */}
//       <nav className="nav">
//         <h2>Smile Clinic</h2>
//         <a href="#contact" className="btn">Book Now</a>
//       </nav>

//       {/* HERO
//       <section className="hero">
//         <div className="hero-box">
//           <h1>Get your perfect smile today</h1>
//           <p>Professional dental care for you and your family</p>
//           <a href="https://wa.me/5491123456789" className="btn big">
//             Book Appointment
//           </a>
//         </div>
//       </section> */}

// <section className="hero">
//   <motion.div
//     className="hero-box"
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//   >
//     <h1>Get your perfect smile today</h1>
//     <p>Professional dental care for you and your family</p>

//     <motion.a
//       href="https://wa.me/5491123456789"
//       className="btn big"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       Book Appointment
//     </motion.a>
//   </motion.div>
// </section>



//       {/* SERVICES
//       <section className="section">
//         <h2>Our Services</h2>

//         <div className="grid">
//           <div className="card">
//             <h3>Teeth Cleaning</h3>
//             <p>Professional cleaning for a healthy smile</p>
//           </div>

//           <div className="card">
//             <h3>Whitening</h3>
//             <p>Brighten your smile safely</p>
//           </div>

//           <div className="card">
//             <h3>Dental Implants</h3>
//             <p>Permanent solutions for missing teeth</p>
//           </div>
//         </div>
//       </section> */}


// <section className="section">
//   <h2>Our Services</h2>

//   <div className="grid">
//     {[ 
//       { title: "Teeth Cleaning", text: "Professional cleaning for a healthy smile" },
//       { title: "Whitening", text: "Brighten your smile safely" },
//       { title: "Dental Implants", text: "Permanent solutions for missing teeth" }
//     ].map((item, i) => (
//       <motion.div
//         key={i}
//         className="card apple"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.5, delay: i * 0.2 }}
//         viewport={{ once: true }}
//       >
//         <h3>{item.title}</h3>
//         <p>{item.text}</p>
//       </motion.div>
//     ))}
//   </div>
// </section>




//       {/* IMAGES 
//       <section className="section">
//         <h2>Our Clinic</h2>

//         <div className="grid">
//           <div className="card">
//             <img src="https://images.unsplash.com/photo-1588776814546-ec7e0c47d55e" />
//           </div>

//           <div className="card">
//             <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db" />
//           </div>
//         </div>
//       </section>*/}


// <section className="section">
//   <h2>Our Clinic</h2>

//   <div className="grid">
//     {[
//       "https://images.unsplash.com/photo-1588776814546-ec7e0c47d55e",
//       "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
//     ].map((img, i) => (
//       <motion.div
//         key={i}
//         className="card apple"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.5, delay: i * 0.2 }}
//         viewport={{ once: true }}
//       >
//         <img src={img} />
//       </motion.div>
//     ))}
//   </div>
// </section>



//       {/* TESTIMONIALS 
//       <section className="section">
//         <h2>What Patients Say</h2>

//         <div className="grid">
//           <div className="card">
//             <p>"Amazing service and very professional."</p>
//             <span>- Maria</span>
//           </div>

//           <div className="card">
//             <p>"Best dentist I’ve ever visited."</p>
//             <span>- John</span>
//           </div>
//         </div>
//       </section>*/}

// <section className="section">
//   <h2>What Patients Say</h2>

//   <div className="grid">
//     {[
//       { text: "Amazing service and very professional.", name: "Maria" },
//       { text: "Best dentist I’ve ever visited.", name: "John" }
//     ].map((item, i) => (
//       <motion.div
//         key={i}
//         className="card apple"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.5, delay: i * 0.2 }}
//         viewport={{ once: true }}
//       >
//         <p>"{item.text}"</p>
//         <span>- {item.name}</span>
//       </motion.div>
//     ))}
//   </div>
// </section>




//       {/* CTA 
//       <section className="cta" id="contact">
//         <h2>Need a dental check?</h2>
//         <a href="https://wa.me/5491123456789" className="btn big">
//           Contact Now
//         </a>
//       </section>*/}


// <section className="cta" id="contact">
//   <motion.div
//     initial={{ opacity: 0, scale: 0.9 }}
//     whileInView={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//   >
//     <h2>Need a dental check?</h2>

//     <motion.a
//       href="https://wa.me/5491123456789"
//       className="btn big"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       Contact Now
//     </motion.a>
//   </motion.div>
// </section>



//     </div>
//   );
// }

// export default App;