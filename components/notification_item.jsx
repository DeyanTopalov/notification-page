import NotificationDot from "./notification_dot";
import Image from "next/image";

const NotificationItem = () => {
  return (
    <section className=" grid cursor-pointer rounded-md bg-clr-gray-100 px-4 py-2 text-sm md:px-6 md:py-4">
      <div className="inline_section flex items-center justify-between gap-2  md:gap-4 ">
        <div className="">
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
        <div className="grid w-[60%]  md:w-[75%]">
          <p className="font-medium text-clr-gray-600">
            <span className="font-bold text-clr-gray-800">Mark Webber</span>{" "}
            reacted to your recent post{" "}
            <span className="font-bold text-clr-gray-600 hover:font-extrabold hover:text-clr-blue focus:text-clr-blue ">
              My First Tournament today!
            </span>{" "}
            <span className="relative after:absolute  after:bottom-1/4 after:ml-2 after:h-2 after:w-2 after:rounded-full after:bg-clr-red"></span>
          </p>
          <p>5m ago</p>
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
      <div className="mt-2 w-full pl-[20%]">
        <p className="text-pretty rounded-md border-2 border-solid border-clr-gray-200 p-3 font-medium text-clr-gray-600 hover:bg-clr-gray-250 focus:bg-clr-gray-250 md:p-4">
          Hello, thanks for setting up the Chess Club. I&apos;ve been a member
          for a few weeks now and I&apos;m already having lots of fun and
          improving my game.
        </p>
      </div>
    </section>
  );
};

export default NotificationItem;
