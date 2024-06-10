import Logo from '@/components/Logo';
import SocialIcon from '@/components/SocialIcon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex grow flex-col items-center justify-center px-6 text-center">
        <Logo className="text-4xl" />

        <h2 className="mt-14 text-xl text-slate-400 dark:text-slate-300">
          Explore where digital freedom meets real-world ease.
        </h2>

        <h3 className="mt-16 animate-background bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-[length:_400%_400%] bg-clip-text text-sm uppercase text-transparent [animation-duration:_4s]">
          <div className="mt-6">Smart • Gasless • Non-Custodial</div>
        </h3>
      </div>

      <footer className="mx-auto w-full max-w-screen-xl p-8">
        <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row-reverse sm:space-y-0">
          <div className="flex flex-row space-x-7">
            <SocialIcon
              title="Email us"
              kind="mail"
              href="mailto:info@temcrypto.com"
              size={35}
              className="text-rose-500"
            />
            <SocialIcon
              title="Follow us on X"
              kind="twitter"
              href="https://twitter.com/TemCryptoApp"
              size={35}
              className="text-cyan-500"
            />
            <SocialIcon
              title="Contact us on Telegram"
              kind="telegram"
              href="https://t.me/temcrypto_support"
              size={35}
              className="text-amber-500"
            />
          </div>
          <div className="flex flex-row space-x-1 text-sm text-slate-500 dark:text-slate-400">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>temcrypto.com</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
