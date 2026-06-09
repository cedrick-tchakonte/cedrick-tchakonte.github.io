import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PreloaderProps = {
  minLoadingTime?: number;
};

const Preloader = ({ minLoadingTime = 400 }: PreloaderProps) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    // Progression naturelle du chargement (très rapide)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Progression très rapide
        const increment = (100 - prev) * 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Vérifier si le chargement est terminé
    const loadingCheck = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= minLoadingTime && progress >= 99) {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          clearInterval(progressInterval);
          clearInterval(loadingCheck);
        }, 100);
      }
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(loadingCheck);
    };
  }, [minLoadingTime, progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primaryText-900 via-primaryText-800 to-primaryText-900 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Logo animé ou icône centrale */}
          <motion.div
            className="relative mb-12"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Cercle extérieur rotatif */}
            <motion.div
              className="absolute inset-0 w-24 h-24 rounded-full border-4 border-accent-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Cercle intérieur */}
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 shadow-2xl">
              <motion.div
                className="text-4xl font-bold text-white"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                CT
              </motion.div>
            </div>
          </motion.div>

          {/* Texte de chargement */}
          <motion.h2
            className="text-2xl font-bold text-primaryText-100 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading Portfolio
          </motion.h2>

          <motion.p
            className="text-primaryText-400 text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Preparing your experience...
          </motion.p>

          {/* Barre de progression moderne */}
          <motion.div
            className="relative w-80 max-w-[90vw] h-2 bg-primaryText-700/50 rounded-full overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Barre de progression avec gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 rounded-full"
              initial={{ x: '-100%' }}
              animate={{ x: `${progress - 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Effet de brillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['0%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Pourcentage */}
          <motion.p
            className="mt-4 text-accent-400 text-lg font-semibold tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {Math.round(progress)}%
          </motion.p>

          {/* Points de chargement animés */}
          <motion.div
            className="flex space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-accent-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
