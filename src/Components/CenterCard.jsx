

const CenterCard = ({ inProgress }) => {

    const { category, description, time, title } = inProgress;

    function timeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInDays / 365);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} seconds ago`;
        } else if (diffInMinutes < 60) {
            return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
        } else if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
        } else if (diffInDays < 30) {
            return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
        } else if (diffInMonths < 12) {
            return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
        } else {
            return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
        }
    }

    // const oldDate = new Date("Mon Jan 01 1990 00:00:00 GMT+0600 (Bangladesh Standard Time)");
    const newDate = new Date(time);

    return (
        <div className="p-3 rounded-xl bg-gray-400 shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <p className="text-black">Time: {timeAgo(newDate)}</p>
                <h2 className="text-black text-sm bg-blue-400 px-2 rounded-md">{category}</h2>
            </div>
            <p className="text-black font-semibold">Title: {title}</p>
            <p className="text-black">Description: {description}</p>
        </div>
    );
};

export default CenterCard;