import SocialIcon from '@/components/SocialIcon';

const siteMetadata = {
  title: 'TEMCRYPTO',
  description: 'Pay and get paid to Pix using crypto.',
  email: 'info@temcrypto.com',
  twitter: 'https://twitter.com/TemCryptoApp',
  // linkedin: 'https://linkedin.com/temcrypto',
  telegram: 'https://t.me/temcrypto_support',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="grow flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl">{siteMetadata.title}</h1>
        <h2 className="text-xl mt-8 text-slate-500 dark:text-slate-400">
          {siteMetadata.description}
        </h2>
      </div>

      <footer className="w-full pb-6">
        <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row-reverse sm:space-y-0">
          <div className="flex flex-row space-x-7">
            <SocialIcon
              title="Email us"
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size={30}
            />
            <SocialIcon
              title="Follow us on X"
              kind="twitter"
              href={siteMetadata.twitter}
              size={30}
            />
            <SocialIcon
              title="Contact us on Telegram"
              kind="telegram"
              href={siteMetadata.telegram}
              size={30}
            />
          </div>
          <div className="flex flex-row space-x-1 text-lg text-slate-500 dark:text-slate-400">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>temcrypto.com</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
