import Carousel from '@/components/Carousel';
import PortfolioSection from '@/components/templates/PortfolioSection';

export const Projects = () => {
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(to bottom, #122126 5%, white 99%)',
          overflowX: 'hidden'
        }}>
        <PortfolioSection
          title={'Projects'}
          headline={"Some things I've worked on"}>
          <Carousel />
        </PortfolioSection>
      </div>
    </>
  );
};
