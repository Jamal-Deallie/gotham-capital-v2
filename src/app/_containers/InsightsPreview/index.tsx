import React from 'react';
import Image from 'next/image';
import styles from './Insights.module.scss';
import cn from 'classnames';
type Props = {};

export default function InsightsPreview({}: Props) {
  return (
    <div
      className={cn(
        styles['insights'],
        'secondary-bg primary-clr pb-lg-128 pb-sm-64'
      )}>
      <div className={cn(styles['inner'])}>
        <div className='heading mb-lg-96 mb-sm-32'>
          <p>Our Insights</p>
          <h1 className='title-md light'>
            Gotham Capital offers astute financial insights,{' '}
            <span className='tertiary-clr title-md bold'>guiding clients</span>{' '}
            with expert analysis and market foresight for informed investment
            decisions.
          </h1>
        </div>
        <div className='grid-inner mt-lg-96 mt-sm-32'>
          <div className={styles['image-wrap']}>
            <div className={styles['image']}>
              <Image
                alt='article'
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1691373690/gotham_capital/insights_placeholder_vkqbkl.webp'
                fill
                sizes='(max-width: 1200px) 50vw, 70vw'
              />
            </div>
            <div className={cn(styles['img-desc'], 'p-lg-24 p-sm-16')}>
              <p>Test Cat</p>
              <p className='py-lg-8 py-sm-8'>Title</p>
              <p>Jul 14 2023</p>
            </div>
          </div>
          <div
            className={cn(
              styles['desc'],
              'primary-bg secondary-clr p-lg-24 py-sm-32 px-sm-24'
            )}>
            <h2 className='title-md'>Rising Above the Concrete</h2>
            <p className='mt-lg-8 mt-sm-24'>Jul 14 2023</p>
            <p className='mt-lg-16 mt-sm-16 mb-lg-16 mb-sm-48'>
              As urbanization continues to shape the modern world, cities across
              the globe are embarking on a journey of transformation, seeking to
              find a harmonious balance between urbanization and sustainability.
            </p>
            <div
              className={cn(
                styles['cat-cont'],
                'px-lg-16 py-lg-4 p-sm-4 tertiary-bg'
              )}>
              <span className='primary-clr'>Category</span>
            </div>
          </div>

          <div className={styles['sm-cont']}>
            <div className={styles['img-sm']}>
              <Image
                alt='article'
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1691373690/gotham_capital/insights_placeholder_vkqbkl.webp'
                fill
                sizes='(max-width: 1200px) 50vw, 70vw'
              />
            </div>
            <div className='mt-lg-16 mt-sm-16'>
              <h2>Article Title</h2>
              <p>Jul 14 2023</p>
              <p>Test</p>
            </div>
          </div>
          <div className={styles['sm-cont']}>
            <div className={styles['img-sm']}>
              <Image
                alt='article'
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1691373690/gotham_capital/insights_placeholder_vkqbkl.webp'
                fill
                sizes='(max-width: 1200px) 50vw, 70vw'
              />
            </div>
            <div className='mt-lg-16 mt-sm-16'>
              <h2>Article Title</h2>
              <p>Jul 14 2023</p>
              <p>Test</p>
            </div>
          </div>
          <div className={styles['sm-cont']}>
            <div className={styles['img-sm']}>
              <Image
                alt='article'
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1691373690/gotham_capital/insights_placeholder_vkqbkl.webp'
                fill
                sizes='(max-width: 1200px) 50vw, 70vw'
              />
            </div>
            <div className='mt-lg-16 mt-sm-16'>
              <h2>Article Title</h2>
              <p>Jul 14 2023</p>
              <p>Test</p>
            </div>
          </div>
          <div className={styles['border']}>
            <span className='primary-bg'></span>
            <div className='primary-bg'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
