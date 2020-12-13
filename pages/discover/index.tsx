import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { Button } from 'antd';

export default function Discover() {
    const data = [
        {
            id: 1,
            name: 'Jazz',
            playlists: [
                {
                    thumbnail: '',
                    name: 'playlist',
                    user: {
                        id: 1,
                        name: 'jeongmyeong'
                    }
                }
            ]
        }
    ]


    return (
        <div>
            ㄹㅁㅇㄴㄹㅁㅇㄴ
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((tag, i) => {
                    return (
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {tag.playlists.map((playlist, j) => {
                                return (<SwiperSlide>
                                    { playlist.name }
                                </SwiperSlide>);
                            })}
                        </Swiper>);
                })}
            </Swiper>
        </div>
    );
}
