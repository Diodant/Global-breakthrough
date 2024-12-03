import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 


const ArticlesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <div style={{ backgroundColor: "#1d1c21", color: "#ffffff", padding: "50px 20px" }}>

<div
      id="rec824073546"
      className="r t-rec t-rec_pt_0"

      data-animationappear="off"
    >


      <div className="t396">
        <div className="t396__artboard rendered" data-artboard-recid="824073546" data-artboard-screens="320,480,640,960,1200" data-artboard-height="958" data-artboard-valign="center" data-artboard-upscale="grid" data-artboard-height-res-320="856" data-artboard-height-res-480="779" data-artboard-height-res-640="676" data-artboard-height-res-960="733">
          
          {/* Изображение */}
          <div className="t396__elem tn-elem tn-elem__8240735461711719803503" data-elem-id="1711719803503" data-elem-type="image" style={{ left: '633.5px', top: '-100px', width: '1179px' }}>
            <div className="tn-atom">
              <img 
                className="tn-atom__img t-img loaded"
                alt=""
                src="https://optim.tildacdn.com/tild3138-3363-4837-b030-343163623866/-/format/webp/Minimalist_Marble_An.png"
              />
            </div>
          </div>

          {/* Текст */}
          <div className="t396__elem tn-elem tn-elem__8240735461611667592911" data-elem-id="1611667592911" data-elem-type="text">
            <div className="tn-atom" style={{ lineHeight: '26px' }}>
            Это мероприятие также получает поддержку от международного бизнес-сообщества и государственных структур, что подчеркивает его значимость для экономического развития. Благодаря присутствию ведущих мировых СМИ история успеха лауреатов становится доступной широкой аудитории, открывая новые возможности для взаимодействия и интеграции России в мировую экономику.
            </div>
          </div>

          {/* Другой текст */}
          <div className="t396__elem tn-elem tn-elem__8240735461611667592914" data-elem-id="1611667592914" data-elem-type="text" >
            <div className="tn-atom" style={{ lineHeight: '18px' }}>
            МЕЖДУНАРОДНАЯ ПРЕМИЯ «ГЛОБАЛЬНЫЙ ПРОРЫВ»
            </div>
          </div>

          {/* Заголовок */}
          <div className="t396__elem tn-elem tn-elem__8240735461611667603812" data-elem-id="1611667603812" data-elem-type="text">
            <div className="tn-atom" style={{ lineHeight: '101px' }}>
              НОВОСТИ
            </div>
          </div>

          {/* Линия */}
          <div className="t396__elem tn-elem tn-elem__8240735461711963341314 t-animate t-animate_started" data-elem-id="1711963341314" data-elem-type="shape" style={{ width: '1200px', left: '290.5px', top: '880px', height: '1px' }}>
            <div className="tn-atom"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="t-container">

    <ul className="news catalog">
      {articlesData.map((article, index) => (
        <li key={index} className="news__item catalog-item">
          <div className="news__image-wrap">
            <img src={article.image} alt={article.title} className="news__image" />
          </div>
          <div className="news__content">
            <span className="news__item-date catalog-date">
              <span className="news__item-day">{article.date}</span>
            </span>
            <h3 className="news__item-title">{article.title}</h3>
            <p className='news__item-text'>{article.text}</p>
            <p className="news__item-description">{article.description}</p>
            <a href={`/articles/${article.id}`} className="news__read-more">
              ЧИТАТЬ →
            </a>
          </div>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
};

export default ArticlesList;
