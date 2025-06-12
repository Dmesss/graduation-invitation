import { motion } from 'framer-motion';
import { MessageCircleHeart, ExternalLink } from 'lucide-react';

export default function RSVP() {
  return (
    <section id="wishes" className="min-h-screen relative overflow-hidden">
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

          {/* Decorative Divider */}
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

        {/* Google Form Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScGLYs8XPd87yTL5bEZgm-p9qhLAiFOyesRS8h2_qc_FJxIEw/viewform" // 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[hsl(var(--chart-1))] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[hsl(var(--chart-1)/0.9)] transition-all duration-200 text-lg font-medium"
          >
            <ExternalLink className="w-5 h-5" />
            Isi Formulir Kehadiran
          </motion.a>

          <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto">
            Silakan klik tombol di atas untuk mengisi kehadiran dan ucapan melalui Google Form.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
