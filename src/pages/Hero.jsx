import { Calendar, Clock, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';

export default function Hero() {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('guest');

    if (guestParam) {
      try {
        const decodedName = safeBase64.decode(guestParam);
        setGuestName(decodedName);
      } catch (error) {
        console.error('Error decoding guest name:', error);
        setGuestName('');
      }
    }
  }, []);

  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {Object.keys(timeLeft).map((interval) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[hsl(var(--chart-1)/0.3)]"
          >
            <span className="text-xl sm:text-2xl font-bold text-[hsl(var(--chart-1))]">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
    >
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

      {/* Konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mx-auto"
        >
          <span className="px-4 py-1 text-sm bg-[hsl(var(--chart-1)/0.1)] text-[hsl(var(--chart-1))] rounded-full border border-[hsl(var(--chart-1)/0.3)]">
            Catat Tanggal Penting Ini
          </span>
        </motion.div>

        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 font-light italic text-base sm:text-lg"
          >
            InsyaAllah Kami Akan Mengadakan
          </motion.p>
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-3xl sm:text-4xl font-serif text-gray-800"
          >
            {config.data.title}
          </motion.h2>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--chart-1)/0.05)] to-white/50 backdrop-blur-md rounded-2xl" />

          <div className="relative px-4 sm:px-8 py-8 sm:py-10 rounded-2xl border border-[hsl(var(--chart-1)/0.2)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
              <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--chart-1)/0.3)] to-transparent" />
            </div>

            <div className="space-y-6 text-center">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5 text-[hsl(var(--chart-1))]" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {formatEventDate(config.data.date, 'full')}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center justify-center space-x-2"
                >
                  <Clock className="w-5 h-5 text-[hsl(var(--chart-1))]" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">
                    {config.data.time}
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
              <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--chart-1)/0.3)] to-transparent" />
            </div>
          </div>
        </motion.div>

        <CountdownTimer targetDate={config.data.date} />

        <div className="pt-6 relative">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-[hsl(var(--chart-1))] mx-auto" fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
