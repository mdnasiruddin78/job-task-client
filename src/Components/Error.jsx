

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-green-900">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
            <a
                href="/"
                className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
            >
                Go Home
            </a>
        </div>
    );
};

export default Error;