import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface IPageError {
  errorCode: number;
  errorMessage?: string;
}

export const PageError = ({ errorCode }: IPageError) => {

  return (
    <main className="h-auto bg-[#0E0D0C]">
      <section className="relative h-screen flex items-center justify-center w-full overflow-hidden">
        <AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center flex flex-col items-center justify-center max-w-md px-4 sm:max-w-lg md:max-w-4xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <motion.h1
                  className="text-first text-9xl font-bold tracking-wide mb-4 banner-title"
                >
                  {errorCode}
                </motion.h1>
                <motion.p
                  className="text-xl sm:text-base md:text-2xl font-medium p-5 mt-2 rounded-xl text-white"
                >
                  Whoops!
                </motion.p>
                <motion.p
                  className="text-xl sm:text-base md:text-2xl mb-8 font-medium rounded-xl text-white"
                >
                  We couldn't find the site you were looking for.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-8"
                >
                  <Link to={'/'}>
                    <motion.button
                      className="bg-first text-white py-2 px-5 hover:bg-first/85 transition-colors text-2xl md:text-2xl rounded-lg"
                    >
                      Back to Home
                    </motion.button>
                  </Link>
                </motion.div>
                
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>
    </main>
  );
}
