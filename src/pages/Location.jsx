import config from "@/config/config";
import {
  Clock,
  MapPin,
  CalendarCheck,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { formatEventDate } from "@/lib/formatEventDate";

export default function Location() {
  return (
    <section id="location" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[hsl(var(--chart-1))] font-medium"
          >
            Lokasi Acara Wisuda
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif text-gray-800"
          >
            Lokasi
          </motion.h2>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <div className="h-[1px] w-12 bg-[hsl(var(--chart-1)/0.3)]" />
            <MapPin className="w-5 h-5 text-[hsl(var(--chart-1))]" />
            <div className="h-[1px] w-12 bg-[hsl(var(--chart-1)/0.3)]" />
          </motion.div>
        </motion.div>

        {/* Map + Address in column */}
        <div className="max-w-xl mx-auto space-y-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15778.429796368004!2d106.9504292!3d-6.3604054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993b1278b4b25%3A0xa5fbcf54059f6fc5!2sKB-TK-SD%20Ecotech%20Islamic%20School%20YPMI!5e1!3m2!1sen!2sid!4v1749698712815!5m2!1sen!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] border-none"
            ></iframe>
          </motion.div>

          {/* Address Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4"
          >
            <h3 className="text-2xl font-serif text-gray-800">
              {config.data.location}
            </h3>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[hsl(var(--chart-1))] mt-1" />
              <p className="text-gray-600">{config.data.address}</p>
            </div>

            <div className="flex items-center space-x-3">
              <CalendarCheck className="w-5 h-5 text-[hsl(var(--chart-1))]" />
              <p className="text-gray-600">{formatEventDate(config.data.date)}</p>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-[hsl(var(--chart-1))]" />
              <p className="text-gray-600">{config.data.time}</p>
            </div>

            <div className="pt-2">
              <motion.a
  href={config.data.maps_url}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center justify-center gap-1.5
    bg-[hsl(var(--chart-1))] text-white
    px-4 py-2 rounded-lg
    border border-[hsl(var(--chart-1)/0.4)]
    hover:bg-[hsl(var(--chart-1)/0.9)]
    transition-colors text-sm"
>
  <ExternalLink className="w-4 h-4" />
  <span className="font-semibold">Lihat Peta</span>
</motion.a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
