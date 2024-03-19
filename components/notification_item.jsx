import NotificationDot from "./notification_dot";
import Image from "next/image";

const NotificationItem = () => {
  return (
    <section className="text-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 md:gap-6">
          <div>
            <Image
              src="/avatar-mark-webber.webp"
              width={39}
              height={39}
              alt="avatar profile picture"
              className="block md:hidden"
            />
            <Image
              src="/avatar-mark-webber.webp"
              width={45}
              height={45}
              alt="avatar profile picture"
              className="hidden md:block"
            />
          </div>
          <div className="grid bg-yellow-200">
            <div className=" ">
              <div className="flex gap-2 bg-blue-200">
                <p className="">
                  Mark Webber <span>followed you</span>
                  <span className="relative after:absolute  after:bottom-1/4 after:ml-2 after:h-2 after:w-2 after:rounded-full after:bg-clr-red">
                    Chess Club
                  </span>
                </p>
              </div>
            </div>
            <span className="flex">1m ago</span>
          </div>
        </div>
        <div>
          <Image
            src="/image-chess.webp"
            width={39}
            height={39}
            alt="avatar profile picture"
            className="block md:hidden"
          />
          <Image
            src="/image-chess.webp"
            width={45}
            height={45}
            alt="avatar profile picture"
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default NotificationItem;
