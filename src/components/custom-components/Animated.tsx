'use client';

import { ReactNode, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'zoomIn' | 'fadeDown' | 'slideRight';

interface AnimatedSectionProps {
  children: (inView: boolean) => ReactNode;
  animationVariant?: AnimationVariant;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationVariant = 'fadeUp',
  duration = 0.5,
  delay = 0.6,
  threshold = 0.2,
  triggerOnce = false,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) controls.start('visible');
    else if (!triggerOnce) controls.start('hidden');
  }, [inView, triggerOnce, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animationVariant]}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children(inView)}
    </motion.div>
  );
};

export default AnimatedSection;
