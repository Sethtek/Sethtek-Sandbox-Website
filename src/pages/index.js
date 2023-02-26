import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('hero_text_container', styles.hero_text_container)}>
        <h1 className={clsx('hero_title', styles.hero_title)}>{siteConfig.title}</h1>
        <p className={clsx('hero_subtitle', styles.hero_subtitle)}>{siteConfig.tagline}</p>
        <p className={clsx('hero_subtitle', styles.hero_subtitle)}><i><b>Coming Soon!</b></i></p>
      </div>
    </header >
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">

      <HomepageHeader />

      <div className={styles.first_content_block}>
        <image className={styles.fcb_img} />
        <img src="/static/img/sbx_objects.png" alt="A collection of Sethtek Sandbox Objects!" />
        <svg className={styles.svgimg} />
        Sethtek sandbox has all sorts of stuff for you to do!
      </div>

      <h1 className={clsx('haichUno', styles.haichUno)}>Such amazing content is on the way!</h1>
      <p className={clsx('paragraph1', styles.pgyo)}>
        Are you ready OwO?

        According to the caption on the bronze marker placed by the Multnomah Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.”

        Devon couldn't figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes he'd ever seen.
        What were they eating? It didn't taste like anything she had ever eaten before and although she was famished, she didn't dare ask. She knew the answer would be one she didn't want to hear.

        He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds of thousands? "Not enough," the said under his breath. I need more.

        Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let’s not forget paper towels. Would 1 type of towel work for each of these things? Let’s take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel.

        I’ve used a beach towel with no adverse effects while camping. If you buy a thin beach towel it can dry quickly too. I’d probably cut up a beach towel to wipe down counters or for cleaning other items, but a full beach towel could be used too. Is having so many types of towels an extravagant luxury that Americans enjoy or is it necessary? I’d say it's overkill and we could cut down on the many types of towels that manufacturers deem necessary.
      </p>

    </Layout>
  );
}