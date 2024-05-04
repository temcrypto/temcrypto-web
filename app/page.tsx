import Logo from '@/components/Logo';
import SocialIcon from '@/components/SocialIcon';

const siteMetadata = {
  title: '',
  description: '',
  email: 'info@temcrypto.com',
  twitter: 'https://twitter.com/TemCryptoApp',
  telegram: '',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="grow flex flex-col justify-center items-center text-center px-6">
        <Logo className="text-4xl" />

        <h2 className="text-xl text-slate-400 dark:text-slate-300 mt-14">
          Explore where digital freedom meets real-world ease.
        </h2>

        <h3 className="text-sm text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-pink-400 to-blue-500 uppercase mt-16">
          <div className="mt-6">Smart • Gasless • Non-Custodial</div>
        </h3>
      </div>

      <footer className="w-full mx-auto max-w-screen-xl p-8">
        <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row-reverse sm:space-y-0">
          <div className="flex flex-row space-x-7">
            <SocialIcon
              title="Email us"
              kind="mail"
              href="mailto:info@temcrypto.com"
              size={35}
            />
            <SocialIcon
              title="Follow us on X"
              kind="twitter"
              href="https://twitter.com/TemCryptoApp"
              size={35}
            />
            <SocialIcon
              title="Contact us on Telegram"
              kind="telegram"
              href="https://t.me/temcrypto_support"
              size={35}
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
