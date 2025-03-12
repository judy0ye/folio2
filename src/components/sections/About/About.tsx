'use client';
import {
  IconRadiusBottomLeft,
  IconRadiusBottomRight,
  IconRadiusTopLeft,
  IconRadiusTopRight
} from '@tabler/icons-react';
import classes from './About.module.css';
import Image from 'next/image';
import PortfolioSection from '@/components/templates/PortfolioSection';

export const About = () => {
  return (
    <>
      <PortfolioSection title={'About Me'} headline={"Hello World, it's Judy"}>
        <div className={classes.contentWrapper}>
          <div className={classes.imgWrapper}>
            <IconRadiusTopLeft className={classes.radiusTL} />
            <IconRadiusTopRight className={classes.radiusTR} />
            <Image
              width={368}
              height={640}
              className={classes.img}
              src="/projects/me.jpg"
              alt="Judy Ye standing with a cup of coffee near a brick wall."
            />
            <IconRadiusBottomRight className={classes.radiusLR} />
            <IconRadiusBottomLeft className={classes.radiusLL} />
          </div>
          <div className={classes.textWrapper}>
            <p>
              If I had a time machine- who knows, maybe they&apos;ll invent one
              in 50 years- I would use it to travel back in time to persue a
              software development career sooner. As a former dental assistant,
              I bring years of customer service experience, communication and
              collaboration skills through my time working at a dental office.
            </p>
            <br />
            <p>
              On the technical side, I enjoy making intuitive and accessible
              user interaces for everyone. I enjoy bringing ideas to life and
              seeing pieces come together. If I sound like someone who might be
              a good fit for your team or you just want to chat, feel free to
              reach out!
            </p>
          </div>
        </div>
      </PortfolioSection>
    </>
  );
};
