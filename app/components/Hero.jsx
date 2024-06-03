import Tech from "./Tech";

export default function Hero() {
  return (
   
      <div className="max-w-[85rem] mx-auto px-4 xl:px-0 pt-16 lg:pt-28 pb-12 grid md:grid-cols-3 justify-center items-center">
        <div className="md:col-span-2">
          <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0] ">All in:</span> Transforming your
            designs into reality
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
              With over a year of hands-on experience in web development, I have
              successfully contributed to a diverse array of projects. My
              expertise spans both front-end and back-end technologies, enabling
              me to create dynamic, responsive, and user-friendly web
              applications. I am proficient in a variety of programming
              languages and frameworks, ensuring high-quality and efficient
              solutions for any web development challenge.
            </p>
          </div>
        </div>
        <div className="flex">
          <Tech />
        </div>
      </div>
   
  );
}
