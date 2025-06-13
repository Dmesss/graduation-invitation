import { useEffect, useState } from 'react';
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const LandingPage = ({ onOpenInvitation }) => {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('guest');

    if (guestParam) {
      try {
        const decoded = safeBase64.decode(guestParam);
        setGuestName(decoded);
      } catch (error) {
        setGuestName('');
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* ✅ Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[hsl(var(--chart-1)/0.05)] to-white" />
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[hsl(var(--chart-1)/0.2)] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[hsl(var(--chart-1)/0.15)] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      {/* ✅ Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* ✅ Card */}
          <div className="backdrop-blur-sm bg-white/50 p-6 sm:p-8 md:p-10 rounded-2xl border border-[hsl(var(--chart-1)/0.2)] shadow-xl relative">

            {/* ✅ Dekorasi Abstrak */}
            <img
              src="/images/decor-top-lefts.png"
              alt=""
              className="absolute top-5 left-0 w-20 sm:w-24 pointer-events-none z-0"
            />
            <img
              src="/images/decor-bottom-rights.png"
              alt=""
              className="absolute bottom-0 right-0 w-28 sm:w-40 pointer-events-none z-0"
            />

            {/* ✅ Logo Row */}
            <div className="flex justify-center items-center gap-3 mb-6 overflow-x-auto">
              <img src="/images/logo.png" alt="Logo 1" className="h-10 w-auto" />
              <img src="/images/logos.png" alt="Logo 2" className="h-10 w-auto" />
              <img src="/images/logosee.png" alt="Logo 3" className="h-10 w-auto" />
              <img src="/images/logoss.png" alt="Logo 4" className="h-10 w-auto" />
            </div>

            {/* ✅ Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="h-px w-12 sm:w-16 bg-[hsl(var(--chart-1)/0.2)]" />
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--chart-1))]" />
              <div className="h-px w-12 sm:w-16 bg-[hsl(var(--chart-1)/0.2)]" />
            </div>

            

            {/* ✅ Title */}
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

            {/* ✅ Guest Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-center space-y-2 mt-4"
            >
              <p className="text-gray-500 font-serif italic text-sm">Kepada Yth.</p>
              <p className="text-gray-600 font-medium text-sm">Abu/Ummu</p>
              <p className="text-[hsl(var(--chart-1))] font-semibold text-lg">
                {guestName ? guestName : 'Wisudawan/Wisudawati'}
              </p>
              <p className="text-gray-500 font-serif italic text-sm">di Tempat</p>
            </motion.div>

            {/* ✅ Button */}
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
};

export default LandingPage;
