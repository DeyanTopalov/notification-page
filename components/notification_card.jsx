"use client";

import Header from "./notification_header";
import NotificationItem from "./notification_item";
import data from "./data";
import { useState } from "react";

const NotificationCard = () => {
  const [notifications, setNotifications] = useState(data);
  const handleNotificationClick = (notificationId) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, unRead: false }
          : notification,
      ),
    );
  };

  const markAllRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        unRead: false,
      })),
    );
  };

  const unreadCount = notifications.filter(
    (notification) => notification.unRead,
  ).length;

  return (
    <article className="grid w-svw max-w-[41.875rem] gap-3 rounded-2xl bg-white px-4 py-6 shadow-lg md:px-6 md:py-2">
      <Header markAllRead={markAllRead} unreadCount={unreadCount} />
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          {...notification}
          onClick={() => handleNotificationClick(notification.id)}
        />
      ))}
    </article>
  );
};

export default NotificationCard;
