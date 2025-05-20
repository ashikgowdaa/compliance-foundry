import Flex from '@/utitly-css/Flex';
import React from 'react'

interface ErrorComponentProps {
  errorText?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorText = "Error Fetching Data" }) => {
  return (
    <Flex className='text-red-600 font-bold'>{errorText}</Flex>
  )
}

export default ErrorComponent