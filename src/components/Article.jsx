import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import articlesData from './articlesData';

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    function isGoogleTranslated() {
      const html = document.documentElement;
      const body = document.body;

      return (
        html.classList.contains('translated-ltr') ||
        html.classList.contains('translated-rtl') ||
        body.classList.contains('translated-ltr') ||
        body.classList.contains('translated-rtl') ||
        document.cookie.indexOf('googtrans=') !== -1 ||
        html.getAttribute('lang') !== 'ru'
      );
    }

    function fixValue(text) {
      if (!text) return text;

      return text
        .replace(/\bNataliia Chernousova's\b/g, "Nataliia Chernousova's")
        .replace(/\bNATALIIA CHERNOUSOVA'S\b/g, "NATALIIA CHERNOUSOVA'S")

        .replace(/\bNatalia Chernousova\b/g, 'Nataliia Chernousova')
        .replace(/\bNATALIA CHERNOUSOVA\b/g, 'NATALIIA CHERNOUSOVA')

        .replace(/\bNatalya Chernousova\b/g, 'Nataliia Chernousova')
        .replace(/\bNATALYA CHERNOUSOVA\b/g, 'NATALIIA CHERNOUSOVA')

        .replace(/\bNataliya Chernousova\b/g, 'Nataliia Chernousova')
        .replace(/\bNATALIYA CHERNOUSOVA\b/g, 'NATALIIA CHERNOUSOVA')

        .replace(/\bNatalia\b/g, 'Nataliia')
        .replace(/\bNATALIA\b/g, 'NATALIIA')

        .replace(/\bNatalya\b/g, 'Nataliia')
        .replace(/\bNATALYA\b/g, 'NATALIIA');
    }

    function shouldSkipNode(parent) {
      if (!parent || !parent.tagName) return true;

      const tag = parent.tagName.toUpperCase();
      return (
        tag === 'SCRIPT' ||
        tag === 'STYLE' ||
        tag === 'NOSCRIPT' ||
        tag === 'TEXTAREA' ||
        tag === 'CODE' ||
        tag === 'PRE'
      );
    }

    function fixTextNodes(root) {
      if (!root) return;

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            if (!node || !node.nodeValue || !node.nodeValue.trim()) {
              return NodeFilter.FILTER_REJECT;
            }

            if (shouldSkipNode(node.parentNode)) {
              return NodeFilter.FILTER_REJECT;
            }

            if (
              node.nodeValue.indexOf('Natal') === -1 &&
              node.nodeValue.indexOf('NATAL') === -1
            ) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      const nodes = [];
      let current;

      while ((current = walker.nextNode())) {
        nodes.push(current);
      }

      nodes.forEach((node) => {
        const fixed = fixValue(node.nodeValue);
        if (fixed !== node.nodeValue) {
          node.nodeValue = fixed;
        }
      });
    }

    function fixAttributes() {
      const selectors = [
        'title',
        'meta[name="description"]',
        'meta[name="keywords"]',
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]'
      ];

      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (el.tagName.toLowerCase() === 'title') {
            const fixedText = fixValue(el.textContent);
            if (fixedText !== el.textContent) {
              el.textContent = fixedText;
            }
          } else {
            const content = el.getAttribute('content');
            const fixedContent = fixValue(content);
            if (fixedContent !== content) {
              el.setAttribute('content', fixedContent);
            }
          }
        });
      });

      if (document.title) {
        const fixedTitle = fixValue(document.title);
        if (fixedTitle !== document.title) {
          document.title = fixedTitle;
        }
      }
    }

    function runFixes() {
      if (!isGoogleTranslated()) return;
      fixTextNodes(document.body);
      fixAttributes();
    }

    let started = false;
    let observer = null;
    let translateWatcher = null;
    let intervalId = null;
    let waitIntervalId = null;

    function startAfterTranslate() {
      if (started) return;
      started = true;

      runFixes();

      observer = new MutationObserver(() => {
        runFixes();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });

      let count = 0;
      intervalId = setInterval(() => {
        runFixes();
        count += 1;

        if (count > 180 && intervalId) {
          clearInterval(intervalId);
        }
      }, 1000);
    }

    function waitForTranslate() {
      if (isGoogleTranslated()) {
        startAfterTranslate();
        return;
      }

      translateWatcher = new MutationObserver(() => {
        if (isGoogleTranslated()) {
          startAfterTranslate();
        }
      });

      translateWatcher.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['class', 'lang']
      });

      waitIntervalId = setInterval(() => {
        if (isGoogleTranslated()) {
          startAfterTranslate();
        }
      }, 1000);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', waitForTranslate);
    } else {
      waitForTranslate();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', waitForTranslate);

      if (observer) observer.disconnect();
      if (translateWatcher) translateWatcher.disconnect();
      if (intervalId) clearInterval(intervalId);
      if (waitIntervalId) clearInterval(waitIntervalId);
    };
  }, []);

  const { id } = useParams();
  const article = articlesData.find((article) => article.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found</div>;
  }

  const canonicalUrl = article.canonical || `https://yourdomain.com/articles/${article.id}`;

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={index} className="news__detail-text mb-20">
              {block.text}
            </p>
          );

        case 'header':
          return (
            <h5 key={index} className="section__subtitle marg-40">
              {block.text}
            </h5>
          );

        case 'sub-header':
          return (
            <div key={index} className="yellow-text">
              {block.text}
            </div>
          );

        case 'image':
          return (
            <img
              key={index}
              src={block.src}
              alt={block.alt}
              className="article-page-image"
            />
          );

        case 'list':
          return (
            <ul key={index} className="page-about__text mb-20">
              <li className="page-about__list-item">{block.text}</li>
            </ul>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div style={{ backgroundColor: '#1d1c21', color: '#ffffff', padding: '50px 20px' }}>
      <Helmet>
        <title>{article.seoTitle || article.title}</title>
        <meta
          name="description"
          content={article.seoDescription || article.text}
        />
        <meta
          name="keywords"
          content={article.seoKeywords || ''}
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={article.ogTitle || article.seoTitle || article.title}
        />
        <meta
          property="og:description"
          content={article.ogDescription || article.seoDescription || article.text}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={article.ogImage || article.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={article.twitterTitle || article.seoTitle || article.title}
        />
        <meta
          name="twitter:description"
          content={article.twitterDescription || article.seoDescription || article.text}
        />
        <meta name="twitter:image" content={article.twitterImage || article.image} />

        {article.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(article.structuredData)}
          </script>
        )}
      </Helmet>

      <div className="t-container">
        <div className="article-page">
          <h1 className="section__title d-flex">
            <span className="news__detail-title-text">{article.title}</span>
            <span className="news__item-date news__detail-date">
              {article.date}
            </span>
          </h1>

          <hr className="news__detail-title-hr" />

          <img
            src={article.image}
            alt={article.title}
            className="article-page-image"
          />

          <div className="article-page-content">
            {renderContent(article.content)}
          </div>

          <div className="news__detail-text">
            Автор: <span className="link _white">{article.autor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;