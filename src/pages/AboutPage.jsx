export default function AboutPage() {
  return (
    <main className="about">
      <h1 className="about__title">О приложении</h1>
      <p className="about__description">
        <strong>Algorama</strong> — это образовательное приложение для визуализации алгоритмов.
        Оно предназначено для студентов, разработчиков и всех, кто хочет глубже понять работу алгоритмов
        через интерактивные примеры, анимации и пошаговые демонстрации.
      </p>

      <h2 className="about__subtitle">Возможности приложения</h2>
      <ul className="about__list">
        <li className="about__list-item">Просмотр алгоритмов по категориям: сортировки, поиски, графы и деревья.</li>
        <li className="about__list-item">Пошаговая визуализация алгоритмов с анимацией на canvas.</li>
        <li className="about__list-item">Отображение кода реализации алгоритма на трех языках (JavaScript, Python, C++), сложности алгоритма и краткого описания его работы.</li>
        <li className="about__list-item">Интерактивное взаимодействие: можно запускать, останавливать и перематывать анимацию.</li>
        <li className="about__list-item">Поддержка генерации случайных данных для тестирования алгоритмов.</li>
        <li className="about__list-item">Сравнение нескольких алгоритмов по скорости и количеству операций.</li>
      </ul>

      <h2 className="about__subtitle">Как использовать</h2>
      <p className="about__description">
        Вы можете просматривать алгоритмы по категориям, изучать их идею, код на разных языках, псевдокод и
        оценивать сложность. Алгоритмы сопровождаются визуализацией — изображение или анимация помогают понять их работу шаг за шагом.
      </p>
      <p className="about__description">
        Для более глубокого изучения вы можете менять входные данные, наблюдать, как меняется состояние структуры данных,
        и анализировать эффективность алгоритмов на практике.
      </p>

      <h2 className="about__subtitle">Технологии</h2>
      <p className="about__description">Algorama построена на современных веб-технологиях:</p>
      <div className="tech">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--react">
          <i className="fab fa-react tech__icon"></i> React
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--js">
          <i className="fab fa-js-square tech__icon"></i> JavaScript
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--css">
          <i className="fab fa-css3-alt tech__icon"></i> CSS3
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--html">
          <i className="fab fa-html5 tech__icon"></i> HTML5
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--canvas">
          <i className="fas fa-cube tech__icon"></i> Canvas API
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--git">
          <i className="fab fa-git-alt tech__icon"></i> Git/GitHub
        </a>
        <a href="https://reactjs.org/docs/context.html" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--context">
          <i className="fas fa-project-diagram tech__icon"></i> React Context
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer" className="tech__button tech__button--responsive">
          <i className="fas fa-mobile-alt tech__icon"></i> Responsive Design
        </a>
      </div>

      <h2 className="about__subtitle">Контакты</h2>
      <p className="about__description">Связаться со мной можно любым удобным способом:</p>
      <div className="contact">
        <a href="mailto:vilkoa2600@gmail.com" className="contact__button contact__button--email">
          <i className="fas fa-envelope contact__icon"></i> Почта
        </a>
        <a href="https://github.com/VitalyWeb/algorithms-visualizer" target="_blank" rel="noopener noreferrer" className="contact__button contact__button--github">
          <i className="fab fa-github contact__icon"></i> GitHub
        </a>
      </div>

      <h2 className="about__subtitle">Лицензия</h2>
      <p className="about__description">
        Algorama распространяется под открытой лицензией <strong>MIT</strong>. Это одна из самых свободных лицензий для программного обеспечения,
        позволяющая использовать, копировать, модифицировать и распространять код как в образовательных, так и в коммерческих целях.
      </p>
      <ul className="about__list">
        <li className="about__list-item">Использовать код приложения в личных и коммерческих проектах.</li>
        <li className="about__list-item">Модифицировать код и адаптировать его под свои нужды.</li>
        <li className="about__list-item">Распределять оригинальную или модифицированную версию приложения.</li>
        <li className="about__list-item">Интегрировать части кода в другие проекты без ограничений.</li>
      </ul>
      <ul className="about__list">
        <li className="about__list-item">Необходимо сохранять уведомление об авторских правах и текст лицензии во всех копиях или значимых частях программы.</li>
        <li className="about__list-item">Авторы оригинального кода не несут ответственности за последствия использования или модификаций.</li>
      </ul>
      <p className="about__description">
        Подробнее ознакомиться с текстом лицензии можно на <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><strong>официальном сайте MIT License</strong></a>.
      </p>
    </main>
  );
}
