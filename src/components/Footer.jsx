export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p>
            © {new Date().getFullYear()} Algorama. Автор <strong>VitalyWeb</strong>.
          </p>
        </div>
        <div className="footer__right">
          <a
            href="https://github.com/VitalyWeb/algorithms-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon github"
            aria-label="GitHub репозиторий Algorama"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="mailto:vilkoa2600@gmail.com"
            className="footer__icon email"
            aria-label="Написать на email: vilkoa2600@gmail.com"
          >
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}