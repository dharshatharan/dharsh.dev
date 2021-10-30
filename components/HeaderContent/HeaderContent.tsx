import { ReactElement } from "react";
import FadeInWhenVisible from "@components/Animations/FadeInWhenVisible";

export default function HeaderContent(): ReactElement {
  return (
    <FadeInWhenVisible>
      <section
        className="w-full flex flex-grow justify-center transition duration-300"
        style={{ height: "92vh" }}
      >
        <div className="mt-10 md:mt-20 max-w-6xl p-10">
          <h1 className="text-5xl md:text-8xl text-smooth-black dark:text-off-white font-light">
            Hi, I&apos;m{" "}
            <strong className="font-bold">
              Dharshatharan
              <br /> Jayatharan Aronan
            </strong>
          </h1>
          <p className="text-gray-500 text-2xl md:text-4xl font-light py-5">
            Devloper, Writer, Student
          </p>
          <p className="text-gray-500 text-2xl md:text-4xl font-light py-5">
            You can call me{" "}
            <strong className="font-bold text-6xl text-smooth-black dark:text-off-white">
              dharsh
            </strong>
          </p>
          <p className="text-gray-500 text-2xl md:text-4xl font-light py-5">
            Welcome to my corner of the internet!
          </p>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
