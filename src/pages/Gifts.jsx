import config from '@/config/config';
import { motion } from 'framer-motion'
import {
  Copy,
  Gift,
  CheckCircle,
  Wallet,
  Building2,
} from 'lucide-react'
import { useState, useEffect } from 'react';

export default function Gifts() {
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const copyToClipboard = (text, bank) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(bank);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section id="gifts" className="min-h-screen relative overflow-hidden">
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
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-[hsl(var(--chart-1))] font-medium"
          >
            Apresiasi Wisuda
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif text-gray-800"
          >
            Salurkan Infaq Anda
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scale: 0 }}
            animate={hasAnimated ? { scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <div className="h-[1px] w-12 bg-[hsl(var(--chart-1)/0.3)]" />
            <Gift className="w-5 h-5 text-[hsl(var(--chart-1))]" />
            <div className="h-[1px] w-12 bg-[hsl(var(--chart-1)/0.3)]" />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-4 max-w-md mx-auto"
          >
            <p className="font-arabic text-xl text-gray-800">
             ___________
            </p>

            <p className="text-gray-600 leading-relaxed">
              Kehadiran dan doa Abu/Ummu Wali Santri adalah anugerah berharga bagi kami.
Bagi yang ingin turut berkontribusi, in syaa Allah dapat menyalurkan donasi ke rekening berikut atas nama Pondok Media Islam.
Semoga setiap bentuk dukungan menjadi amal jariyah yang diberkahi dan dibalas dengan pahala berlipat oleh Allah Ta'ala.
            </p>

            <div className="space-y-2">
              <p className="font-arabic text-lg text-gray-800">
                جزاكم الله خيرا وبارك الله فيكم
              </p>
              <p className="text-gray-600 italic text-sm">
                Jazakumullahu khairan, Barakallahu fiikum
              </p>
            </div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={hasAnimated ? { scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-3 pt-4"
          >
            <div className="h-px w-8 bg-[hsl(var(--chart-1)/0.15)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--chart-1)/0.4)]" />
            <div className="h-px w-8 bg-[hsl(var(--chart-1)/0.15)]" />
          </motion.div>
        </motion.div>

        {/* Bank Accounts Grid */}
        <div className="max-w-2xl mx-auto grid gap-6">
          {config.data.banks.map((account, index) => (
            <motion.div
              key={account.accountNumber}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index + 0.7 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--chart-1)/0.1)] to-[hsl(var(--chart-1)/0.05)] rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />

            <div className="relative backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-[hsl(var(--chart-1)/0.2)] shadow-lg">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
             <div className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm overflow-hidden">
              {/* ✅ Ganti Icon dengan Gambar Gedung */}
             <img
             src="/images/BSI.png"  // 👉 ganti dengan nama file kamu
             alt="Building"
             className="w-full h-full object-contain"
             />
             </div>

                    <div>
                      <h3 className="font-medium text-gray-800">{account.bank}</h3>
                      <p className="text-sm text-gray-500">{account.accountName}</p>
                    </div>
                  </div>
                  <Wallet className="w-5 h-5 text-[hsl(var(--chart-1))]" />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                    <p className="font-mono text-gray-700">{account.accountNumber}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(account.accountNumber, account.bank)}
                      className="flex items-center space-x-1 text-[hsl(var(--chart-1))] hover:text-[hsl(var(--chart-1)/0.8)]"
                    >
                      {copiedAccount === account.bank ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {copiedAccount === account.bank ? 'Disalin!' : 'Salin'}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
