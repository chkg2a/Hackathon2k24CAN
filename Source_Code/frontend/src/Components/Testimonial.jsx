import React from "react";
import hired from "../assets/images/hired.jpg"

const Testimonial = () => {
  return (
    <section className="flex flex-col justify-evenly">
      <div className="flex justify-evenly items-center">
        <div>
          <img
            className="w-[600px]"
            src={hired}
          />
        </div>
        <div className="w-30 sm:w-[30rem] ">
          <div className="rating">
            <img />
          </div>
          <p className="text-2xl">
            Working through this platform has been a game-changer for me. I was
            able to find a part-time job that perfectly fits my schedule and
            allows me to work from the comfort of my own home.
          </p>
          <div>
            <img />
            <div>
              <p>John Doe</p>
              <p>Marketing Company</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <i />
          <i />
        </div>
        <div>
          <button className="rounded-full">P</button>
          <button className="rounded-full">N</button>
        </div>
      </footer>
    </section>
  );
};

export default Testimonial;
