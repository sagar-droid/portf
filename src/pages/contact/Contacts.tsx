import {
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
  RightArrowIcon,
} from "../../components/icons/ArrowIcon";

const Contacts = () => {
  return (
    <section
      id="contact"
      className=" flex flex-wrap justify-center bg-[#2C243B] rounded-lg p-16 gap-16 m-10"
    >
      <article className=" flex flex-col gap-4">
        <h1 className=" text-green-500 font-kalam">Contact</h1>
        <p>Enjoyed my work? Let's work together</p>
        <p>
          I'm always up for a chat. Pop me an email at hi@linalevi.com or give
          me a shout on social media.{" "}
        </p>
        <div className=" flex gap-3">
          <div className=" bg-[#413A4F] items-center align-middle flex p-2 px-5 rounded-lg text-2xl cursor-pointer">
            <a href="https://www.instagram.com/" target="blank">
              <InstagramIcon />
            </a>
          </div>
          <div className=" bg-[#413A4F] p-2 rounded-lg text-2xl cursor-pointer">
            <a href="https://github.com/" target="blank">
              <GithubIcon />
            </a>
          </div>
          <div className=" bg-[#413A4F] p-2 rounded-lg text-2xl cursor-pointer">
            <a href="https://www.linkedin.com/" target="blank">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </article>
      <article className="">
        <form action="" className=" flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className=" p-2 bg-[#171023] rounded-md max-w-96 w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className=" p-2 bg-[#171023] rounded-md max-w-96 w-full"
          />
          <input
            type="text"
            placeholder="Your message"
            className=" p-2 bg-[#171023] rounded-md max-w-96 w-full"
          />
          <button className=" btn_primary max-w-64 w-full flex justify-left items-center gap-4">
            Send me a message{" "}
            <span>
              <RightArrowIcon />
            </span>
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contacts;
