import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'All welcome',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Anyone can learn to code. It doesn't matter your age, background, experience, you can too! Generally the developer community is open and welcoming, and you will find most developers are helpful on your journey. 
      </>
    ),
  },
  {
    title: 'Empower yourself',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Its totally realistic to teach yourself >80% of what want to know. Learning to code is a great challenge if you like solving puzzels, or math, or building, or creating and designing things...  
      </>
    ),
  },
  {
    title: 'A rewarding pursuit',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        You can work on hobby projects, launch your own web/mobile apps, or be professionally employed as a software developer. There's a huge demand for people who like and make things. Anything is possible!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}
      `}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link               
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )} 
              onClick={() => prompt('hello :) enter a username!')}>
              promptUser
          </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};
