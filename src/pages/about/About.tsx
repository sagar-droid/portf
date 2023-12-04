import {
  JSIcon,
  ReactIcon,
  NodeIcon,
  TailwindIcon,
  PythonIcon,
} from "../../components/icons/ArrowIcon";
const About = () => {
  return (
    <section
      id="about"
      className=" bg-[#2C243B] flex flex-wrap p-16 rounded-md justify-center gap-36 m-10"
    >
      <article className="">
        <img src="https://picsum.photos/500" alt="about" />
      </article>
      <article className=" flex flex-col gap-8 w-[600px]">
        <div className=" flex gap-4 text-[#9955E8] text-xl">
          <JSIcon />
          <ReactIcon />
          <NodeIcon />
          <TailwindIcon />
          <PythonIcon />
        </div>
        <h1 className=" text-green-500 font-kalam">About me</h1>
        <p className=" text-3xl">
          I'm a passionate software developer looking for my first international
          oppotunity
        </p>
        <p>
          Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught
          artist who enjoys spending my free time doodling. I am currently
          seeking opportunities to bring my skills and enthusiasm to a tech
          company in the United States or Europe and am excited about the
          prospect of relocating to pursue new challenges.
        </p>
        <button className=" btn_primary w-40">My resume</button>
      </article>
    </section>
  );
};

export default About;
