import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail
} from '@tabler/icons-react';
import classes from './Contact.module.css';
import Image from 'next/image';
import Link from 'next/link';
import PortfolioSection from '@/components/templates/PortfolioSection';

export const Contact = () => {
  return (
    <>
      <PortfolioSection title={'Contact Me'} headline={'Come say hi'}>
        <div className={classes.wrapper}>
          <div className={classes.emailLinksWrapper}>
            <div className={classes.emailWrapper}>
              <p>
                Have a project you need help with or just wanna chat? Shoot me
                an email!
              </p>
              <span className={classes.span}>
                <Link
                  className={classes.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:judyy.ye@gmail.com">
                  <IconMail width={'3.5rem'} height={'2.5rem'} />
                  judyy.ye@gmail.com{' '}
                </Link>
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.5rem'
              }}>
              <p>Other links:</p>
              <div>
                <Link
                  className={classes.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/judy0ye">
                  <IconBrandGithub width={'3.5rem'} height={'2.5rem'} />
                  Github
                </Link>
                <Link
                  className={classes.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/judy0ye/">
                  <IconBrandLinkedin width={'3.5rem'} height={'2.5rem'} />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.imgWrapper}>
            <Image
              className={classes.img}
              width={384}
              height={480}
              alt={'Cat with glasses looking at a laptop.'}
              src={'/projects/cat2.gif'}
            />
          </div>
        </div>
      </PortfolioSection>
    </>
  );
};
