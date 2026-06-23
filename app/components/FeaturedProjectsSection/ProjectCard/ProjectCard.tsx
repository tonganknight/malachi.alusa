import Image from "next/image";
export const ProjectCard = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-3">
      <Image
        src="/TestRide.png"
        alt="Image of Test Ride testing App"
        width={260}
        height={200}
        className="rounded-2xl border-l-[1px] border-r-[1px] border-t-[1px] border-edge-primary"
      />
      <div className=" flex flex-col bg-foreground border-edge-primary border-b-[1px] border-l-[1px] border-r-[1px] rounded-b-2xl justify-center w-[84%] mt-[-10] p-[12px]">
        <p className=" text-secondary text-[15px] break-words">
          Test Ride is automated playwright test writing application. The builds
          UI tests for HTML elements, and executes them. This automats basic
          testing for Websites.
        </p>

        <a
          href="#"
          className="text-highlight-primary text-[15px] self-end mt-3"
        >
          View
        </a>
      </div>
    </div>
  );
};
