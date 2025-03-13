'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectData from '../../content/project-data.json';
import classes from './Carousel.module.css';
import { useState } from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={classes.swiperWrap}>
        <Swiper
          className={classes.swiper}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween="1%"
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          a11y={{ enabled: true }}
          keyboard
          onSwiper={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          breakpoints={{
            481: {
              slidesPerView: 1.15
            },
            769: {
              slidesPerView: 2
            },
            1281: {
              slidesPerView: 2.5,
              spaceBetween: '4%'
            }
          }}>
          {projectData.projects.map((project, index) => (
            <SwiperSlide
              key={project.title}
              className={
                index === activeIndex
                  ? classes.swiperSlideActive
                  : classes.swiperSlide
              }>
              <div className={classes.imgWrapper}>
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className={classes.img}
                />
              </div>
              <div className={classes.swiperTextWrapper}>
                <div>
                  <h4 className={classes.headline}>{project.title}</h4>
                  <p className={classes.p}>{project.description}</p>
                </div>
                <ul className={classes.ul}>
                  {project.tech.map((tech, index) => (
                    <li key={index} className={classes.li}>
                      {tech} <strong className={classes.separator}>|</strong>
                    </li>
                  ))}
                </ul>
                <div className={classes.linksWrapper}>
                  {project.repo !== '' && (
                    <Link
                      className={classes.links}
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer">
                      <IconExternalLink width={'1rem'} />
                      Repo
                    </Link>
                  )}
                  {project.beRepo && (
                    <Link
                      className={classes.links}
                      href={project.beRepo}
                      target="_blank"
                      rel="noopener noreferrer">
                      <IconExternalLink width={'1rem'} />
                      BE Repo*
                    </Link>
                  )}
                  <Link
                    className={classes.links}
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer">
                    <IconExternalLink width={'1rem'} />
                    View Live
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
