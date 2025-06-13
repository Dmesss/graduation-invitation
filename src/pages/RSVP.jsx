import { motion } from 'framer-motion';
import { MessageCircleHeart, ExternalLink } from 'lucide-react';

export default function RSVP() {
  return (
    <section id="wishes" className="min-h-screen relative overflow-hidden">
      {/* ✅ Dekorasi Abstrak */}
      <img
        src="/images/decor-top-left.png"
        alt=""
        className="absolute top-0 left-0 w-40 sm:w-56 opacity-100 pointer-events-none z-0"
      />
      <img
        src="/images/decor-bottom-right.png"
        alt=""
        className="absolute bottom-0 right-0 w-40 sm:w-40 opacity-100 pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[hsl(var(--chart-1))] font-medium"
          >
            Konfirmasi Kehadiran
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif text-gray-800"
          >
            RSVP Wisuda
          </motion.h2>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <div className="h-[1px] w-12 bg-[hsl(var(--chart-1)/0.3)]" />
            <MessageCircleHeart className="w-5 h-5 text-[hsl(var(--chart-1))]" />
            <div className="h-[1px] w-12 bg-[hsl(var(--chart-1)/0.3)]" />
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-6"
        >
          {/* Google Form */}
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScGLYs8XPd87yTL5bEZgm-p9qhLAiFOyesRS8h2_qc_FJxIEw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[hsl(var(--chart-1))] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[hsl(var(--chart-1)/0.9)] transition-all duration-200 text-lg font-medium"
          >
            <ExternalLink className="w-5 h-5" />
            Isi Formulir Kehadiran
          </motion.a>

          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Silakan klik tombol di atas untuk mengisi kehadiran dan ucapan melalui Google Form.
          </p>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/6285697900510?text"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-xl shadow-md hover:bg-emerald-600 transition-all duration-200 text-lg font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 0C7.163 0 0 6.963 0 15.556c0 2.742.808 5.333 2.351 7.628L0 32l9.064-2.344A15.901 15.901 0 0016 31.112C24.837 31.112 32 24.149 32 15.556 32 6.963 24.837 0 16 0zm0 28.444c-2.231 0-4.406-.592-6.312-1.716l-.451-.264-5.37 1.39 1-3.63-.295-.493A12.44 12.44 0 013.111 15.556C3.111 8.6 8.968 3.112 16 3.112s12.889 5.488 12.889 12.444c0 6.956-5.857 12.444-12.889 12.444zm6.75-9.167c-.37-.185-2.188-1.077-2.528-1.2-.34-.123-.588-.185-.835.185-.247.37-.958 1.2-1.175 1.448-.216.247-.432.278-.803.093-.37-.185-1.562-.577-2.975-1.841-1.1-.983-1.844-2.194-2.059-2.564-.216-.37-.024-.57.161-.755.165-.165.37-.432.555-.648.185-.216.247-.37.37-.618.123-.247.062-.464-.03-.648-.093-.185-.835-2.007-1.146-2.745-.302-.726-.609-.628-.835-.628-.216 0-.464-.03-.711-.03-.247 0-.648.093-.988.464-.34.37-1.296 1.267-1.296 3.09s1.327 3.586 1.51 3.833c.185.247 2.609 3.993 6.31 5.597.882.38 1.57.61 2.106.777.884.281 1.688.241 2.326.146.709-.106 2.188-.893 2.496-1.754.308-.861.308-1.6.216-1.754-.093-.154-.34-.247-.709-.432z" />
            </svg>
            Ninda Dwi Meirizki
          </motion.a>

          <p className="text-sm text-gray-500 max-w-md mx-auto">
            
          </p>
        </motion.div>
      </div>
    </section>
  );
}
