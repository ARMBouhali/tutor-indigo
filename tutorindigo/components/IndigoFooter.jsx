const IndigoFooter = () => {
  const intl = useIntl();
  const config = getConfig();
  const currentYear = new Date().getFullYear();

  const messages = {
    footerLogoAltText: {
      id: "footer.logo.altText",
      defaultMessage: "Powered by Open edX",
      description: "Alt text for the footer logo.",
    },
    home: {
      id: "category.header.home",
      defaultMessage: "Home",
      description: "Footer home link label.",
    },
    courses: {
      id: "category.header.course",
      defaultMessage: "Courses",
      description: "Footer courses link label.",
    },
    about: {
      id: "footer.edxLinks.about",
      defaultMessage: "About",
      description: "Footer about link label.",
    },
    copyright: {
      id: "footer.copyright.jiltarjih",
      defaultMessage: "\u00a9 2009\u2013{year} \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u062c\u064a\u0644 \u0627\u0644\u062a\u0631\u062c\u064a\u062d. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.",
      description: "Copyright text for the Indigo footer.",
    },
  };

  return (
    <div className="wrapper wrapper-footer">
      <footer id="footer" className="tutor-container">
        <div className="footer-top">
          <div className="powered-area">
            <ul className="logo-list">
              <li>
                <a href="https://open.edx.org" rel="noreferrer noopener" target="_blank">
                  <img
                    src={`${config.LMS_BASE_URL}/theming/asset/images/openedx-logo.png`}
                    alt={intl.formatMessage(messages.footerLogoAltText)}
                    width="79"
                  />
                </a>
              </li>
            </ul>
          </div>
          <nav
            className="nav-colophon"
            aria-label={intl.formatMessage(messages.about)}
          >
            <ol>
              <li>
                <a href={config.LMS_BASE_URL || "/"}>{intl.formatMessage(messages.home)}</a>
              </li>
              <li>
                <a href={`${config.LMS_BASE_URL || ""}/courses`}>{intl.formatMessage(messages.courses)}</a>
              </li>
              <li>
                <a href={`${config.LMS_BASE_URL || ""}/about`}>{intl.formatMessage(messages.about)}</a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="colophon">
          <p className="copyright">
            {intl.formatMessage(messages.copyright, { year: currentYear })}
          </p>
        </div>
      </footer>
    </div>
  );
};
