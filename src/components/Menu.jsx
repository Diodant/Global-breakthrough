import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo.svg'

const Menu = () => {
  const navigate = useNavigate();

  const handleNominationClick = () => {

    navigate("/"); 

    setTimeout(() => {
      scroller.scrollTo("rec816830968", {
        smooth: true,
        duration: 500,
        offset: -70, 
      });
    }, 100);
  };

  return (
    <div
      id="nav328758744"
      className="t461 t461__positionstatic tmenu-mobile__menucontent_hidden"
      style={{ backgroundColor: 'rgba(29,28,33,1)' }}
      data-bgcolor-hex="#1d1c21"
      data-bgcolor-rgba="rgba(29,28,33,1)"
      data-navmarker="nav328758744marker"
      data-appearoffset=""
      data-bgopacity-two=""
      data-menushadow=""
      data-menushadow-css=""
      data-bgopacity="1"
      data-menu-items-align="center"
      data-menu="yes"
    >
      <div className="t461__maincontainer t461__c12collumns">
        <div className="t461__topwrapper" style={{ height: '170px' }}>
          {/* Логотип */}
          <div className="t461__logowrapper">
            <div className="t461__logowrapper2">
              <div style={{ display: 'block' }}>
                <Link to="/">
                  <img
                    className="t461__imglogo t461__imglogomobile"
                    src={Logo}
                    imgfield="img"
                    style={{ maxWidth: '170px', width: '170px' }}
                    alt="Company"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Дополнительные элементы */}
          <div className="t461__alladditional">
            <div
              className="t461__leftwrapper"
              style={{ paddingLeft: '20px', paddingRight: '135px' }}
            >
              <div className="t461__additionalwrapper">
                <div className="t-sociallinks">
                  <ul className="t-sociallinks__wrapper" aria-label="Соц. сети">
                    {/* Социальные ссылки */}
                    <li className="t-sociallinks__item t-sociallinks__item_youtube">
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="youtube"
                        style={{ width: '30px', height: '30px' }}
                      >
                        {/* SVG иконка YouTube */}
                        <svg
                          className="t-sociallinks__svg"
                          role="presentation"
                          width="30px"
                          height="30px"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm17.9-67.374c3.838.346 6 2.695 6.474 6.438.332 2.612.626 6.352.626 10.375 0 7.064-.626 11.148-.626 11.148-.588 3.728-2.39 5.752-6.18 6.18-4.235.48-13.76.7-17.992.7-4.38 0-13.237-.184-17.66-.552-3.8-.317-6.394-2.44-6.916-6.218-.38-2.752-.626-6.022-.626-11.222 0-5.788.209-8.238.7-10.853.699-3.732 2.48-5.54 6.548-5.96C36.516 32.221 40.55 32 49.577 32c4.413 0 13.927.228 18.322.626Zm-23.216 9.761v14.374L58.37 49.5l-13.686-7.114Z"
                            fill="#e7c8af"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="t-sociallinks__item t-sociallinks__item_telegram">
                      <a
                        href="https://t.me"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="telegram"
                        style={{ width: '30px', height: '30px' }}
                      >
                        {/* SVG иконка Telegram */}
                        <svg
                          className="t-sociallinks__svg"
                          role="presentation"
                          width="30px"
                          height="30px"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                            fill="#e7c8af"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="t461__rightwrapper"
              style={{ paddingRight: '20px', paddingLeft: '135px' }}
            >
              <div className="t461__additionalwrapper">
                <div className="t461__additional_buttons t461__additionalitem">
                  <div className="t461__additional_buttons_wrap">
                    <div className="t461__additional_buttons_but">
                      <Link
                        to="/submit"
                        className="t-btn t-btn_md"
                        style={{
                          color: '#222a2d',
                          backgroundColor: '#e7c8af',
                          borderRadius: '5px',
                          fontWeight: '500',
                        }}
                        data-buttonfieldset="button"
                      >
                        <table
                          role="presentation"
                          style={{ width: '100%', height: '100%' }}
                        >
                          <tbody>
                            <tr>
                              <td>ПОДАТЬ ЗАЯВКУ</td>
                            </tr>
                          </tbody>
                        </table>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Горизонтальная линия */}
          <div className="t461__middlelinewrapper">
            <div className="t461__linewrapper">
              <hr
                className="t461__horizontalline t-divider"
                data-divider-fieldset="color,bordersize,opacity"
                style={{
                  margin: '0 20px 0 20px',
                  backgroundColor: '#fbf8f5',
                  opacity: '0.4',
                }}
              />
            </div>
          </div>
          {/* Десктопное меню */}
          <div
            className="t461__bottomwrapper t461__menualign_center"
            style={{ padding: '0 20px', height: '65px' }}
          >
            <nav className="t461__listwrapper t461__desktoplist">
              <ul className="t461__list t-menu__list">
                <li className="t461__list_item" style={{ padding: '0 15px 0 0' }}>
                  <Link className="t-menu__link-item" to="/" data-menu-item-number="1">
                    Премия
                  </Link>
                </li>
                <li className="t461__list_item" style={{ padding: '0 15px' }}>
                  <Link className="t-menu__link-item" to="/winners" data-menu-item-number="3">
                  Победители
                  </Link>
                </li>
                <li className="t461__list_item" style={{ padding: '0 15px' }}>
                  <Link
                    className="t-menu__link-item"
                    to="/polozhenie"
                    data-menu-item-number="4"
                  >
                    Положение
                  </Link>
                </li>
                <li className="t461__list_item" style={{ padding: '0 15px' }}>
                  <button
                    className="menu-btn"
                    onClick={handleNominationClick}
                  >
                    Номинации
                  </button>
                </li>

                <li className="t461__list_item" style={{ padding: '0 15px' }}>
                  <Link className="t-menu__link-item" to="/creteria" data-menu-item-number="8">
                  Критерии оценки
                  </Link>
                </li>

                <li className="menu-item" style={{ position: 'relative' }}>
      <a
        className="menu-link"
        href="/awards2024"
        aria-expanded="false"
        role="button"
        onClick={(e) => e.preventDefault()}
      >
        Экспертный Совет
        <div className="t-menusub__arrow"></div>
      </a>
      <div className="submenu">
        <div className="submenu-menu">
          <div className="submenu-content">
            <ul role="list" className="submenu-list">
              <li className="submenu-list-item">
                <a
                  className="submenu-link"
                  href="/awards2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Эксперт года — 2024
                </a>
              </li>
              <li className="submenu-list-item">
                <a
                  className="submenu-link"
                  href="/awards2023"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Эксперт года — 2023
                </a>
              </li>
              <li className="submenu-list-item">
                <a
                  className="submenu-link"
                  href="/awards2022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Эксперт года — 2022
                </a>
              </li>
              <li className="submenu-list-item">
                <a
                  className="submenu-link"
                  href="/awards2021"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Эксперт года — 2021
                </a>
              </li>
              <li className="submenu-list-item">
                <a
                  className="submenu-link"
                  href="/awards2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Эксперт года — 2020
                </a>
              </li>
              <li className="submenu-list-item">
                <a
                  className="submenu-link"
                  href="/awards2019"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Эксперт года — 2019
                </a>
              </li>
              <li className="submenu-list-item">
                <a
                  className="submenu-link"
                  href="/awards2018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Эксперт года — 2018
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
                <li className="t461__list_item" style={{ padding: '0 15px' }}>
                  <Link className="t-menu__link-item" to="/contacts" data-menu-item-number="8">
                    Контакты
                  </Link>
                </li>
                {/* Подменю "Галерея" */}
                          <li className="t461__list_item" style={{ padding: '0 15px' }}>
                  <Link className="t-menu__link-item" to="/gallery" data-menu-item-number="8">
                  Галерея
                  </Link>
                </li>
                <li className="t461__list_item" style={{ padding: '0 0 0 15px' }}>
                  <Link
                    className="t-menu__link-item"
                    to="/articles"
                    data-menu-item-number="10"
                  >
                    НОВОСТИ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Горизонтальная линия */}
          <div className="t461__middlelinewrapper">
            <div className="t461__linewrapper">
              <hr
                className="t461__horizontalline t-divider"
                data-divider-fieldset="color,bordersize,opacity"
                style={{
                  margin: '0 20px 0 20px',
                  backgroundColor: '#fbf8f5',
                  opacity: '0.4',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

