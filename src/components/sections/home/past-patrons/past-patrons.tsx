/* eslint-disable react/button-has-type */
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Spotlight } from '@/components/ui/spotlight/spotlight';
import ciena_logo from '@/public/assets/ciena_logo.svg';
import drdc_canada_logo from '@/public/assets/drdc_canada_logo.svg';
import fdm_logo from '@/public/assets/fdm_logo.svg';
import general_dynamics_logo from '@/public/assets/general_dynamics_logo.svg';
import nokia_logo from '@/public/assets/nokia_logo.svg';
import public_service_commission_of_canada_logo from '@/public/assets/public_service_commission_of_canada_logo.svg';
import ross_video_logo from '@/public/assets/ross_video_logo.svg';
import uber_logo from '@/public/assets/uber_logo.svg';

// Logo and Tier types
type Logo = {
  src: StaticImageData;
  alt: string;
  url: string;
  overrides: string;
};

type Tier = {
  [key: string]: Logo[];
};

const patronsData: Tier = {
  partner: [
    {
      src: nokia_logo,
      alt: 'Nokia logo',
      url: 'https://www.nokia.com',
      overrides: 'w-full bobbing-animation-1',
    },
  ],
  gold: [
    {
      src: fdm_logo,
      alt: 'FDM Group logo',
      url: 'https://www.fdmgroup.com',
      overrides: 'w-1/3 bobbing-animation-2',
    },
    {
      src: ciena_logo,
      alt: 'Ciena logo',
      url: 'https://www.ciena.com',
      overrides: 'w-1/3 bobbing-animation-3',
    },
    {
      src: public_service_commission_of_canada_logo,
      alt: 'Public Service Commission of Canada logo',
      url: 'https://www.canada.ca/en/public-service-commission.html',
      overrides: 'w-1/3 bobbing-animation-4',
    },
  ],
  silver: [
    {
      src: drdc_canada_logo,
      alt: 'DRDC Canada logo',
      url: 'https://www.canada.ca/en/defence-research-development.html',
      overrides: 'w-1/4 bobbing-animation-1',
    },
    {
      src: ross_video_logo,
      alt: 'Ross Video logo',
      url: 'https://www.rossvideo.com',
      overrides: 'w-1/4 bobbing-animation-2',
    },
    {
      src: uber_logo,
      alt: 'Uber logo',
      url: 'https://www.uber.com',
      overrides: 'w-1/4 bobbing-animation-4',
    },
    {
      src: general_dynamics_logo,
      alt: 'General Dynamics logo',
      url: 'https://www.gd.com',
      overrides: 'w-1/4 bobbing-animation-3',
    },
  ],
};

// Render logos for each section
const LogoSection = ({
  title,
  titleColor,
  logos,
  gradientClass,
}: {
  title: string;
  titleColor: string;
  logos?: Logo[];
  gradientClass: string;
}) => (
  <>
    <h3
      className={`text-3xl font-semibold sm:text-4xl md:text-5xl ${titleColor} mb-4`}
    >
      {title}
    </h3>
    <span
      className={`block bg-gradient-to-r ${gradientClass} mb-4 p-[0.5px]`}
    />
    <div className="mb-8 flex items-end">
      {logos &&
        logos.map((logo) => (
          <a
            key={logo.alt}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${logo.overrides} p-2`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="transition-all duration-700 hover:scale-110"
            />
          </a>
        ))}
    </div>
  </>
);

export const PastPatrons = () => {
  return (
    <div id="patronage" className="mx-auto mt-20 max-w-3xl px-3 md:px-8">
      <h2 className="mb-10 text-5xl font-bold text-primary sm:text-6xl">
        Past Patrons
      </h2>
      <Spotlight
        className="-left-20 top-[150rem] md:left-10 md:top-[140rem]"
        fill="LightGoldenRodYellow"
      />
      <LogoSection
        title="Partner"
        titleColor="text-warning"
        logos={patronsData.partner}
        gradientClass="from-warning via-accent to-black"
      />
      <LogoSection
        title="Gold"
        titleColor="text-accent"
        logos={patronsData.gold}
        gradientClass="from-accent via-secondary to-black"
      />
      <LogoSection
        title="Silver"
        titleColor="text-slate-50"
        logos={patronsData.silver}
        gradientClass="from-primary via-secondary to-black"
      />
      {/* Button(s) */}
      <a
        href="https://drive.google.com/file/d/1wfvpv5T8Xg-cmt5kmps9Gzlddq9_Cdc0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-outline btn-accent btn-lg w-full text-lg uppercase hover:shadow-[0_0px_10px_rgba(255,209,0,1)] md:text-xl">
          Become a Patron
        </button>
      </a>
    </div>
  );
};
