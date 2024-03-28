import { motion } from 'framer-motion'
import { BiLogoGmail } from 'react-icons/bi'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'


export const CardShareBlog = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-auto h-auto min-h-8 bg-white rounded-lg shadow-md shadow-first/40 p-4 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="mx-2" title="Gmail">
          <BiLogoGmail size={24} className="text-red-600" />
        </button>
        <button className="mx-2" title="Whatsapp">
          <FaWhatsapp size={24} className="text-green-600" />
        </button>
        <button className="mx-2" title="Discord">
          <FaDiscord size={24} className="text-blue-800" />
        </button>
        <button className="mx-2" title="Copy link">
          <IoIosLink size={24} className="text-gray-800" />
        </button>
      </motion.div>
    </motion.div>
  );
}
