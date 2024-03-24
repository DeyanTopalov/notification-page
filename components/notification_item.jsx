import Image from "next/image";

const NotificationItem = ({
  name,
  profilePic,
  notification,
  notificationTo,
  notificationTime,
  unRead,
  notificationImg,
  notificationMessage,
  onClick,
}) => {
  const renderIf = (condition, children) => condition && children;

  return (
    <section
      className={` grid cursor-pointer rounded-md px-4 py-2 text-sm md:px-6 md:py-4 ${renderIf(unRead, "bg-clr-gray-100")}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-2  md:gap-4 ">
        <div className="">
          <Image
            src={profilePic}
            width={39}
            height={39}
            alt="avatar profile picture"
            className="mb-6 block md:hidden"
          />
          <Image
            src={profilePic}
            width={45}
            height={45}
            alt="avatar profile picture"
            className="hidden md:block"
          />
        </div>
        <div className="grid w-[65%]  md:w-[90%]">
          <p className="font-medium text-clr-gray-600">
            <span className="font-bold text-clr-gray-800">{name}</span>{" "}
            {notification}{" "}
            {renderIf(
              notificationTo,
              <span className="font-bold text-clr-gray-600 hover:font-extrabold hover:text-clr-blue focus:text-clr-blue ">
                {notificationTo}
              </span>,
            )}{" "}
            {renderIf(
              unRead,
              <span className="relative after:absolute  after:bottom-1/4 after:ml-2 after:h-2 after:w-2 after:rounded-full after:bg-clr-red"></span>,
            )}
          </p>
          <p>{notificationTime}</p>
        </div>
        <div>
          {renderIf(
            notificationImg,
            <>
              <Image
                src={notificationImg}
                width={39}
                height={39}
                alt="avatar profile picture"
                className="mb-6 block md:hidden"
              />
              <Image
                src={notificationImg}
                width={45}
                height={45}
                alt="avatar profile picture"
                className="hidden md:block"
              />
            </>,
          )}
        </div>
      </div>
      {renderIf(
        notificationMessage,
        <div className="mt-2 w-full pl-[20%]">
          <p className="text-pretty rounded-md border-2 border-solid border-clr-gray-200 p-3 font-medium text-clr-gray-600 hover:bg-clr-gray-250 focus:bg-clr-gray-250 md:p-4">
            {notificationMessage}
          </p>
        </div>,
      )}
    </section>
  );
};

export default NotificationItem;
