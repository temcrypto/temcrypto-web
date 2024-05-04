export default function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-between">
      <div
        className={`flex h-6 items-center text-3xl font-extrabold ${className}`}
      >
        <span className="text-pink-500">TEM</span>
        <span className="text-slate-800 dark:text-white">CRYPTO</span>
      </div>
    </div>
  );
}
