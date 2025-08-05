'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>SlerfEarn | Gamify Your Web3 Experience</title>
        <meta name="description" content="Play trivia, earn $SLERF, track rewards and top the leaderboard on SlerfEarn." />
        <meta property="og:title" content="SlerfEarn" />
        <meta property="og:image" content="/assets/slerfearn-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-[#001233] to-[#001a47] text-white">
        {/* Top Notice */}
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-blue-800 bg-gradient-to-b from-blue-950 pb-6 pt-8 backdrop-blur-2xl dark:border-blue-700 dark:bg-blue-900/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-blue-900/30 lg:p-4">
            Welcome to&nbsp;
            <code className="font-mono font-bold text-blue-400">SlerfEarn</code>
          </p>

          {/* Footer */}
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-[#001233] via-[#001a47] lg:static lg:h-auto lg:w-auto lg:bg-none">
            <div className="flex items-center gap-2 p-8 lg:p-0 text-sm text-gray-300">
              <span>Powered by</span>
              <a href="https://boomchainlab.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
                BoomchainLabs
              </a>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-blue-500 before:opacity-10 before:blur-2xl after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-blue-800 after:opacity-40 after:blur-2xl before:lg:h-[360px] z-[-1]">
          <Image
            className="relative drop-shadow-lg"
            src="/assets/slerfearn-logo.png"
            alt="SlerfEarn Logo"
            width={160}
            height={160}
            priority
          />
        </div>

        {/* Links Grid */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://docs.slerfearn.boomchainlab.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-blue-500 hover:bg-blue-900/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-blue-400 group-hover:text-blue-300">
              Docs →
            </h2>
            <p className="m-0 max-w-[30ch] text-sm text-gray-400">
              Everything you need to know about SlerfEarn and the $SLERF economy.
            </p>
          </a>

          <a
            href="https://play.slerfearn.boomchainlab.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-blue-500 hover:bg-blue-900/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-blue-400 group-hover:text-blue-300">
              Play →
            </h2>
            <p className="m-0 max-w-[30ch] text-sm text-gray-400">
              Answer trivia, complete quests, and earn $SLERF daily.
            </p>
          </a>

          <a
            href="https://wallet.slerfearn.boomchainlab.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-blue-500 hover:bg-blue-900/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-blue-400 group-hover:text-blue-300">
              Wallet →
            </h2>
            <p className="m-0 max-w-[30ch] text-sm text-gray-400">
              Connect your Base wallet and track your rewards in real time.
            </p>
          </a>

          <a
            href="https://leaderboard.slerfearn.boomchainlab.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-blue-500 hover:bg-blue-900/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-blue-400 group-hover:text-blue-300">
              Leaderboard →
            </h2>
            <p className="m-0 max-w-[30ch] text-sm text-gray-400">
              See who’s dominating the $SLERF XP charts today.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
