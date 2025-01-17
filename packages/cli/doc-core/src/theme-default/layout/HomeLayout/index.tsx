import { HomeHero } from '../../components/HomeHero';
import { HomeFeature } from '../../components/HomeFeatures';
import { Footer } from '../../components/HomeFooter';

export interface HomeLayoutProps {
  beforeHero?: React.ReactNode;
  afterHero?: React.ReactNode;
  beforeFeatures?: React.ReactNode;
  afterFeatures?: React.ReactNode;
}

export function HomeLayout(props: HomeLayoutProps) {
  const { beforeHero, afterHero, beforeFeatures, afterFeatures } = props;
  return (
    <>
      <div className="mt-14 pb-12">
        {beforeHero}
        <HomeHero />
        {afterHero}
        {beforeFeatures}
        <HomeFeature />
        {afterFeatures}
      </div>
      <Footer />
    </>
  );
}
