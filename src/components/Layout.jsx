import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, PauseCircle, PlayCircle } from 'lucide-react';
import config from '@/config/config';
import BottomBar from '@/components/BottomBar';

const Layout = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const audioRef = useRef(null);
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio(config.data.audio.src);
    audioRef.current.loop = config.data.audio.loop;

    const attemptAutoplay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        wasPlayingRef.current = true;
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        const handleFirstInteraction = async () => {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
            wasPlayingRef.current = true;
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            document.removeEventListener('click', handleFirstInteraction);
          } catch (err) {
            console.error('Playback failed after interaction:', err);
          }
        };
        document.addEventListener('click', handleFirstInteraction);
      }
    };

    attemptAutoplay();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        wasPlayingRef.current = isPlaying;
        if (audioRef.current && isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        if (audioRef.current && wasPlayingRef.current) {
          audioRef.current.play().catch(console.error);
          setIsPlaying(true);
        }
      }
    };

    const handleWindowBlur = () => {
      wasPlayingRef.current = isPlaying;
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    const handleWindowFocus = () => {
      if (audioRef.current && wasPlayingRef.current) {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), config.audio.toastDuration);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowToast(false);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('play', handlePlay);
      audioRef.current.addEventListener('pause', handlePause);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);

      if (audioRef.current) {
        audioRef.current.removeEventListener('play', handlePlay);
        audioRef.current.removeEventListener('pause', handlePause);
      }
    };
  }, [isPlaying]);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          wasPlayingRef.current = false;
        } else {
          await audioRef.current.play();
          wasPlayingRef.current = true;
        }
      } catch (error) {
        console.error('Playback error:', error);
      }
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <motion.div
        className="mx-auto w-full max-w-[430px] min-h-screen bg-white relative overflow-hidden border border-gray-200 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Music Control Button with Status Indicator */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMusic}
          className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-[hsl(var(--chart-1)/0.2)]"
        >
          {isPlaying ? (
            <div className="relative">
              <PauseCircle className="w-6 h-6 text-[hsl(var(--chart-1))]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          ) : (
            <PlayCircle className="w-6 h-6 text-[hsl(var(--chart-1))]" />
          )}
        </motion.button>

       

        <main className="relative h-full w-full pb-[130px]">
  {children}

  {/* Footer */}
  <div className="mt-10 mb-6 text-center text-sm text-gray-400">
    <p className="mb-2">Created by:</p>
    <a
      href="https://www.instagram.com/aqila.happy"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:opacity-90 transition"
    >
      <img
        src="/images/aqila.png"
        alt="Creator Logo"
        className="h-8 w-auto mx-auto"
      />
    </a>
  </div>
</main>


        <BottomBar />

        {/* Music Info Toast */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className="bg-black/80 text-white transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm flex items-center space-x-2">
                <Music className="w-4 h-4 animate-pulse" />
                <span className="text-sm whitespace-nowrap">
                  {config.data.audio.title}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
};

export default Layout;
