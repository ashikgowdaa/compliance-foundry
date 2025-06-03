"use client";

import Flex from '@/utitly-css/Flex';
import React from 'react'
import { motion } from 'framer-motion';

interface ErrorComponentProps {
  errorText?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorText = 'Error Fetching Data' }) => {
  return (
    <motion.div
      className="flex items-center justify-center h-24 text-red-600 font-bold space-x-2 text-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.span
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        className="text-2xl"
      >
        ⚠️
      </motion.span>
      <span>{errorText}</span>
    </motion.div>
  );
};

export default ErrorComponent