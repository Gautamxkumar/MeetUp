import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Hi, I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Gautam Kumar</span>,
          a passionate <strong>Full-Stack Developer</strong> and AI enthusiast currently pursuing my
          B.Tech in <strong>Electronics & Communication Engineering</strong> from <strong>NIT Patna</strong>,
          with a CGPA of <strong>9.09</strong>.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I love building web apps using <strong>React.js</strong>, <strong>Node.js</strong>,
          <strong> Express.js</strong>, and working with databases like <strong>MongoDB</strong> and
          <strong> MySQL</strong>. I’ve developed projects like <em>GoBeyond-AI</em> and an
          <em> AI-based Text Summarizer</em> using modern tools and APIs.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I'm also a part of the <strong>Robotics Club (CAD Team)</strong> and <strong>Incubation Centre (PR & Event Team)</strong>.
          My problem-solving skills are reflected through my competitive programming journey with ratings like:
          <br />
          <strong>LeetCode:</strong> 1619 | <strong>GFG:</strong> 1800 | <strong>Codeforces:</strong> 991
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Currently, I’m focused on mastering <strong>Data Structures & Algorithms</strong> and preparing for
          software development roles. I aim to work on impactful technologies and contribute to real-world solutions.
        </p>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a
            href="https://github.com/Gautamxkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gautam-kumar-7b83332a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/GautamKumar_209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LeetCode
          </a>
          <a
            href="mailto:siddharthgtm236@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
