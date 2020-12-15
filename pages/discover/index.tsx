import React from 'react';
import { Image } from 'antd';
import Swiper, { Navigation } from 'swiper';
import styles from '../../styles/Discover.module.scss';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation]);

export default function Discover(): JSX.Element {
  const data = [
    {
      id: 1,
      name: 'Jazz',
      description: 'some description',
      playlists: [
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Jazz',
      description: 'some description',
      playlists: [
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
        {
          thumbnail: '/playlist-mock.jpg',
          name: 'playlist',
          user: {
            id: 1,
            name: 'jeongmyeong',
          },
        },
      ],
    },
  ];

  data.forEach((tag) => {
    (() => new Swiper(`#swiper-${tag.id}`, {
      navigation: {

        nextEl: `.swiper-button-prev-${tag.id}`,
        prevEl: `.swiper-button-prev-${tag.id}`,
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
    }))();
  });

  return (
    <div className={styles.wrapper}>
      {data.map((tag) => (
        <section>
          <h2>{tag.name}</h2>
          <p>{tag.description}</p>

          <div className="swiper-container" id={`swiper-${tag.id}`}>
            <div className="swiper-wrapper">
              {tag.playlists.map((playlist) => (
                <div className="swiper-slide" style={{ width: '20%' }}>
                  <div>
                    <Image
                      src={playlist.thumbnail}
                    />
                  </div>
                  <h4>{playlist.name}</h4>
                  <small>{playlist.user.name}</small>
                </div>
              ))}
            </div>
          </div>

          <div className={`swiper-button swiper-button-prev swiper-button-prev-${tag.id}`} />
          <div className={`swiper-button swiper-button-next swiper-button-next-${tag.id}`} />
        </section>
      ))}
    </div>
  );
}
