import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Location",
      content: "Bapatla, Guntur",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "anchapremchand@gmail.com",
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Mobile Number",
      content: "+917670861313",
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Languages",
      content: "English ,Telugu",
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/anchaprem/" },
    { icon: <FaFacebook size={20} />, url: "https://www.facebook.com/premchand.chowdary.39?mibextid=ZbWKwL" },
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/anchaprem/?igsh=djVpMDN5aTNuenNj#" },
    { icon: <FaWhatsapp size={20} />, url: "http://wa.me/7670861313" },
    { icon: <FaTwitter size={20} />, url: "https://x.com/anchaprem_?t=ZEo54m7EH_Gr9pp7pqXZzg&s=09" },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a192f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            CONTACT ME
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto"
          >
            Your satisfaction is my priority! Whether you have questions or need assistance with my services, 
            I'm just a message away. Don't hesitate to reach out. I'm here and ready to provide the support you need. 😊💬
          </motion.p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#112240] p-6 rounded-xl border border-gray-800 hover:border-[#64ffda]/30 
                  group transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#64ffda]/10 rounded-lg flex items-center justify-center
                    text-[#64ffda] group-hover:bg-[#64ffda]/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-gray-200 font-bold mb-1 group-hover:text-[#64ffda] transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#112240] rounded-full flex items-center justify-center
                  text-gray-400 hover:text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300
                  transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 