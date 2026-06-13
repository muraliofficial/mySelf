export default function Footer() {
  return (
    <footer className="text-center py-8 text-white/25 text-xs border-t border-white/5">
      <p>
        Designed & Built by{" "}
        <a
          href="https://github.com/muraliofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-white transition-colors"
        >
          Murali
        </a>{" "}
        · React + Tailwind CSS v4
      </p>
    </footer>
  );
}
