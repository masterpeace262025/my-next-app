import Link from "next/link";

const NotFound = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="text-6xl font-bold text-gray-800 mb-4">404</div>
          <div className="text-2xl text-gray-600 mb-6">Oops! The page youre looking for cant be found.</div>
          <div className="text-gray-500 mb-6">
            It seems like you ve followed a brokenmtny link or entered a URL that doesnt exist on our site.
          </div>
          <div>tkyote</div>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  