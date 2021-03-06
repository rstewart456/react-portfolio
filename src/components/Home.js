import React from "react";
import Icon from "@mdi/react";
import { mdiEmail, mdiLinkedin, mdiGithub, mdiTwitter } from "@mdi/js";
import codeimage from "../assets/image/coding-bg.png";

export const Home = () => {
  return (
    <div
      id="home"
      className="text-white h-full lg:min-h-screen bg-fixed"
      style={{ backgroundImage: `url(${codeimage}) ` }}
    >
      <div className="hometext w-screen h-full lg:h-screen opacity-80 rotate-180 bg-scroll lg:w-1/2 bg-black lg:float-right flex-row justify-center items-center">
        <div className="p-12 pt-24 text-3xl lg:text-5xl">
          My name is <b>Ronald</b> and I'm a web Developer
        </div>
        <p className="lg:text-lg px-12 font-semibold">
          I am passionate about technology and the web. I remember when Amazon
          first started out just selling books online and now Amazon is within
          the top 5 companies in the world. I also remember the battle of
          Microsoft Explorer and Netscape browser. I am excited to see what
          another twenty years will bring. <br />
          <br />I am also a nerd at heart. I love sci-fi, and anime. Some of my
          favorite shows are The Flash, The Expanse, Star Wars, Star Trek,
          Tenchi Muyo! War on Geminar, and The Rise of the Shield Hero.
        </p>
        <div className="text-2xl lg:text-3xl text-center py-6 px-8">
          Contact Me
        </div>
        <div className="flex px-6 pb-12 lg:px-24 justify-between">
          <a href="mailto:rstewart456@gmail.com">
            <Icon
              className="hover:bg-indigo-800 rounded-lg"
              path={mdiEmail}
              title="Email"
              size={3}
            />
          </a>
          <a target='_blank' rel="noopener noreferrer" href="https://linkedin.com/in/ronald-stewart-6544808b">
            <Icon
              className="hover:bg-indigo-800 rounded-lg"
              path={mdiLinkedin}
              title="Linkedin"
              size={3}
            />
          </a>
          <a target='_blank' rel="noopener noreferrer" href="https://github.com/rstewart456">
            <Icon
              className="hover:bg-indigo-800 rounded-lg"
              path={mdiGithub}
              title="Github"
              size={3}
            />
          </a>
          <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/RonaldS22601354">
            <Icon
              className="hover:bg-indigo-800 rounded-lg"
              path={mdiTwitter}
              title="Github"
              size={3}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
