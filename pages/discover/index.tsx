import React, { useState } from 'react';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Discover.module.css';
import 'swiper/swiper-bundle.min.css';

export default function Discover() {
    const data = [
        {
            id: 1,
            name: 'Jazz',
            playlists: [
                {
                    thumbnail: '/vercel.svg',
                    name: 'playlist',
                    user: {
                        id: 1,
                        name: 'jeongmyeong'
                    }
                },
                {
                    thumbnail: '/vercel.svg',
                    name: 'playlist',
                    user: {
                        id: 1,
                        name: 'jeongmyeong'
                    }
                },
                {
                    thumbnail: '/vercel.svg',
                    name: 'playlist',
                    user: {
                        id: 1,
                        name: 'jeongmyeong'
                    }
                },
                {
                    thumbnail: '/vercel.svg',
                    name: 'playlist',
                    user: {
                        id: 1,
                        name: 'jeongmyeong'
                    }
                },
                {
                    thumbnail: '/vercel.svg',
                    name: 'playlist',
                    user: {
                        id: 1,
                        name: 'jeongmyeong'
                    }
                },
                {
                    thumbnail: '/vercel.svg',
                    name: 'playlist',
                    user: {
                        id: 1,
                        name: 'jeongmyeong'
                    }
                },
            ]
        }
    ]


    return (
        <div>
            {data.map((tag, i) => {
                return (
                    <section>
                        <h3>{ tag.name }</h3>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                        >
                            {tag.playlists.map((playlist, j) => {
                                return (<SwiperSlide>
                                    <div>
                                        <Image
                                            width={200}
                                            src={ playlist.thumbnail }
                                        />
                                    </div>
                                    { playlist.name }
                                </SwiperSlide>);
                            })}
                        </Swiper>
                    </section>
                );
            })}
        </div>
    );
}
