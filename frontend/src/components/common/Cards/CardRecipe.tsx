import { motion } from "framer-motion";
import { TypeRecipeDetails } from "../../../types/TypeRecipes";
import { MdOutlineBookmarkAdd, MdOutlineWatchLater } from "react-icons/md";
import { useEffect, useState } from "react";
import { CardSkeleton } from "../Skeleton/CardSkeleton";
import { Link } from "react-router-dom";

interface ICardRecipe {
  recipe: TypeRecipeDetails;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imgVariants = {
  hidden: { scale: 0.8 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};

export const CardRecipe = ({ recipe }: ICardRecipe) => {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const imageUrl = recipe.images.regular?.url;
    const img = new Image();
    imageUrl ? img.src = imageUrl: img.src = '';
    img.onload = () => setIsImageLoaded(true);
  }, [recipe.images.regular?.url]);

  return isImageLoaded ? (
    <motion.div
      key={recipe.label}
      className="w-full h-full bg-black/10 rounded-lg shadow-2xl pb-4 md:pb-2"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.img
          src={recipe.images.regular?.url}
          alt={recipe.label}
          className="w-full h-full rounded-t-lg object-cover"
          variants={imgVariants}
          initial="hidden"
          animate="visible"
        />
        <div className="flex w-full px-4 md:px-2 py-2 pb-1 pt-4">
          <Link to={recipe.id}>
            <h3 className="text-2xl font-semibold mb-1 md:text-base text-left text-black hover:text-first">
              {recipe.label.length > 18
                ? recipe.label.slice(0, 18) + "..."
                : recipe.label}
            </h3>
          </Link>
        </div>
        <div className="w-full flex items-center justify-between px-4 md:px-2 py-2 h-10">
          <div className="flex items-center justify-start gap-2">
            <MdOutlineWatchLater className="w-6 h-6" />
            <span className="text-gray-900 text-lg md:text-sm">
              {recipe.totalTime === 0 ? '< 1 Minute' : recipe.totalTime + ' Minutes'}
            </span>
          </div>
          <div className="flex items-center">
            <button className="bg-transparent rounded-full p-2 hover:bg-black/10">
              <MdOutlineBookmarkAdd className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  ) : (
    <CardSkeleton key={recipe.label} />
  )
}
