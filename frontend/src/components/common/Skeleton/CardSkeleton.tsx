export const CardSkeleton = () => {
  return (
    <div className="w-80 md:w-full h-full bg-black/10 rounded-lg shadow-2xl pb-4 md:pb-2">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full md:w-52 rounded-lg h-64 md:h-48 mb-4 flex justify-center items-center bg-gray-400 animate-pulse">
          <svg
            className="w-full md:w-10 h-20 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex flex-col w-full px-4 md:px-2 py-2 pb-1 pt-4">
          <h3 className="w-full h-5 bg-gray-400 rounded-lg animate-pulse"></h3>
        </div>
        <div className="w-full flex items-center px-4 md:px-2 py-2 h-10">
          <h3 className="w-full h-5 bg-gray-400 rounded-lg animate-pulse"></h3>
        </div>
      </div>
    </div>
  );
}
