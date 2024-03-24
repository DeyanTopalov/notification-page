const Header = ({ markAllRead, unreadCount }) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-clr-gray-800 md:text-2xl">
          Notifications
        </h1>
        <span className="flex h-6 w-8 justify-center rounded-md bg-clr-blue font-bold text-white">
          {unreadCount}
        </span>
      </div>

      <button
        className="hover:text-bold focus:text-bold text-sm font-medium text-clr-gray-600
        hover:text-clr-blue
        focus:text-clr-blue
      "
        aria-label="Mark all notifications as read"
        type="button"
        onClick={markAllRead}
      >
        Mark all as read
      </button>
    </div>
  );
};

export default Header;
