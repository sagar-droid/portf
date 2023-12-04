import { JSIcon, RightArrowIcon } from "../../components/icons/ArrowIcon";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" flex flex-wrap flex-col justify-center items-center"
    >
      <h1 className=" text-green-500 font-kalam">Projects</h1>
      <p className=" text-2xl">Take a look at my highlighted projects</p>
      <article className=" grid grid-cols-3 gap-8 my-10">
        <div className=" bg-[#2C243B] p-6 rounded-md">
          <img src="" alt="image" />
          <p>jul-Dec 2022</p>
          <span>
            <JSIcon />
          </span>
          <p>DevLinks</p>
          <p>A link aggregator for social media</p>
        </div>
        <div className=" bg-[#2C243B] p-6 rounded-md">
          <img src="" alt="image" />
          <p>jul-Dec 2022</p>
          <span>
            <JSIcon />
          </span>
          <p>DevLinks</p>
          <p>A link aggregator for social media</p>
        </div>
        <div className=" bg-[#2C243B] p-6 rounded-md">
          <img src="" alt="image" />
          <p>jul-Dec 2022</p>
          <span>
            <JSIcon />
          </span>
          <p>DevLinks</p>
          <p>A link aggregator for social media</p>
        </div>
      </article>
      <button className=" btn_secondary flex gap-3">
        See all{" "}
        <span>
          {" "}
          <RightArrowIcon />
        </span>
      </button>
    </section>
  );
};

export default Projects;
