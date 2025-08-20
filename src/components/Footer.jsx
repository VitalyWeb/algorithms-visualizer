export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p>© {new Date().getFullYear()} Algorama. Автор <strong>VitalyWeb</strong>.</p>
        </div>
        <div className="footer__right">
          <a href="https://github.com/VitalyWeb/algorithms-visualizer" target="_blank" rel="noopener noreferrer" className="footer__icon github">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:vilkoa2600@gmail.com" className="footer__icon email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
