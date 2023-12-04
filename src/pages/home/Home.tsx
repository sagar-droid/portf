import { RightArrowIcon } from "../../components/icons/ArrowIcon";

const Home = () => {
  return (
    <section
      id="home"
      className=" flex flex-wrap !justify-center py-24 gap-36 text-white"
    >
      <article className=" py-14 flex flex-wrap flex-col gap-8">
        <h1 className=" flex text-4xl font-kalam text-green-500">
          Hi, I'm Sagar
        </h1>
        <h3 className=" text-2xl flex">
          Front-end developer and innovation enthusiast
        </h3>
        <p className=" max-w-[500px] w-full flex">
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </p>
        <div className=" flex gap-6">
          <button className=" btn_secondary">My resume</button>
          <button className=" btn_primary flex items-center gap-3">
            Get in touch
            <span className=" flex">
              <RightArrowIcon />
            </span>
          </button>
        </div>
      </article>
      <article>
        <img
          src="https://picsum.photos/500"
          alt="laptop"
          className=" rounded-lg"
        />
      </article>
    </section>
  );
};

export default Home;
