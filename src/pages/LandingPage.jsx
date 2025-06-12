import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const LandingPage = ({ onOpenInvitation }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen relative overflow-hidden"
  >
    {/* Decorative Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-[hsl(var(--chart-1)/0.05)] to-white" />
    <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[hsl(var(--chart-1)/0.2)] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[hsl(var(--chart-1)/0.15)] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        {/* Card Container */}
        <div className="backdrop-blur-sm bg-white/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-[hsl(var(--chart-1)/0.2)] shadow-xl">
          
          {/* LOGO TRIO */}
<div className="flex justify-center items-center gap-x-4 mb-6">
  <img
    src="/images/logo.png"
    alt="Logo 1"
    className="h-16 sm:h-20 w-auto"
  />
  <img
    src="/images/logos.png"
    alt="Logo 2"
    className="h-16 sm:h-20 w-auto"
  />
  <img
    src="/images/logoss.png"
    alt="Logo 3"
    className="h-16 sm:h-20 w-auto"
  />
</div>


          {/* Top Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-16 bg-[hsl(var(--chart-1)/0.2)]" />
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--chart-1))]" />
            <div className="h-px w-12 sm:w-16 bg-[hsl(var(--chart-1)/0.2)]" />
          </div>

          {/* Date and Time */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
          >
            <div className="inline-flex flex-col items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
              <Calendar className="w-5 h-5 text-[hsl(var(--chart-1))]" />
              <p className="text-gray-700 font-medium">
                {formatEventDate(config.data.date)}
              </p>
            </div>

            <div className="inline-flex flex-col items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
              <Clock className="w-5 h-5 text-[hsl(var(--chart-1))]" />
              <p className="text-gray-700 font-medium">
                {config.data.time}
              </p>
            </div>
          </motion.div>

          {/* Wisuda Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 leading-tight">
                {config.data.title}
              </h1>
              <div className="h-px w-16 sm:w-24 mx-auto bg-[hsl(var(--chart-1)/0.3)]" />
            </div>
          </motion.div>

          {/* Open Invitation Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 sm:mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenInvitation}
              className="group relative w-full bg-[hsl(var(--chart-1))] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-medium shadow-lg hover:bg-[hsl(var(--chart-1)/0.9)] transition-all duration-200"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Buka Undangan Wisuda</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--chart-1)/0.8)] to-[hsl(var(--chart-1))] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default LandingPage;
