import Header from "./notification_header";
import NotificationItem from "./notification_item";

const NotificationCard = () => {
  return (
    <div className="grid w-svw max-w-[45.25rem] gap-3 rounded-2xl bg-white px-4 py-6 shadow-lg md:px-6 md:py-2">
      <Header />
      <NotificationItem />
      <NotificationItem />
    </div>
  );
};

export default NotificationCard;
