import SocialIcon from '@/components/SocialIcon';

const siteMetadata = {
  title: 'TEMCRYPTO',
  email: 'info@temcrypto.com',
  twitter: 'https://twitter.com/TemCryptoApp',
  // linkedin: 'https://linkedin.com/temcrypto',
  telegram: 'https://t.me/temcrypto_support',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center">
        <h1>{siteMetadata.title}</h1>
      </div>

      <footer className="w-full">
        <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row-reverse sm:space-y-0">
          <div className="flex flex-row space-x-7">
            <SocialIcon
              title="Email us"
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size={5}
            />
            <SocialIcon
              title="Follow us on X"
              kind="twitter"
              href={siteMetadata.twitter}
              size={5}
            />
            <SocialIcon
              title="Contact us on Telegram"
              kind="telegram"
              href={siteMetadata.telegram}
              size={5}
            />
          </div>
          <div className="flex flex-row space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>temcrypto.com</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
