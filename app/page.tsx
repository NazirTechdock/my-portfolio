"use client";

import SteperVertical from "./SteperVertical";
import SkillSection from "./SkillSection";
import CardSection from "./CardSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-black text-white">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
      {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}

      <div
        className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex "
        style={{ borderBottom: "1px solid grey", paddingBottom: "2rem" }}
      >
        <div>
          <h1 className="text-3xl font-bold">Hello There,</h1>
          <h1 className="text-3xl font-bold">I'm Nazir Ali Siddiqui</h1>
          <h1 className="text-3xl font-bold" style={{ color: "#64d2de" }}>
            ReactJs Developer
          </h1>

          <div className="flex justify-center space-x-12 p-5">
            <a href="https://reactjs.org" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                alt="React"
                className="h-14 w-15"
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6fUSMz02fx9fBPa167aHenKgxs3qUXy_Kw&s"
                alt="LinkedIn"
                className="h-14 w-14"
                style={{ borderRadius: "0.5rem" }}
              />
            </a>
            <a
              href="https://github.com/nazirali007?tab=repositories"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="h-14 w-14"
              />
            </a>
          </div>
        </div>
        <div>
          <div>
            <img
              src="/images/nazirlatest.jpg"
              alt="GitHub"
              // className="h-24 w-30"
              style={{
                height: "20rem",
                width: "20rem",
                borderRadius: "50%",
              }}
            />
          </div>
          <h1 className="text-xl font-bold pt-5">
            Email :itsnazirali1010@gmail.com
          </h1>
          <h1 className="text-xl font-bold">Phone :+917007297120</h1>
        </div>
      </div>
      <div
        className="z-10 w-full max-w-5xl font-mono text-sm lg:flex pt- "
        style={{ borderBottom: "1px solid grey", paddingBottom: "2rem" }}
      >
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <h1 className="text-3xl font-bold">Experience</h1>
          <SteperVertical />
        </div>
      </div>
      <div
        className="z-10 w-full max-w-5xl font-mono text-sm lg:flex "
        style={{
          borderBottom: "1px solid grey",
          paddingBottom: "2rem",
          paddingTop: "1rem",
        }}
      >
        <div>
          <h1 className="text-3xl font-bold">Skills</h1>

          <div style={{ paddingTop: "2rem" }}>
            <SkillSection />
          </div>
        </div>
      </div>
      <div
        className="z-10 w-full max-w-5xl font-mono text-sm lg:flex pb-5 "
        style={{
          borderBottom: "1px solid grey",
          paddingBottom: "2rem",
          paddingTop: "1rem",
        }}
      >
        <div style={{ width: "100%" }}>
          <h1 className="text-3xl font-bold pb-3">Projects</h1>
          <CardSection />
        </div>
      </div>
    </main>
  );
}
