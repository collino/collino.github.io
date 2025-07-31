import imgImgWrapper from "figma:asset/65ec351f177bd969bd836fc15c42d3490d3fc07f.png";
import imgImage from "figma:asset/221d8bb23e459dfcaccd22ff56df5d79833cea6a.png";
import imgImage1 from "figma:asset/b0e97b944a32d221d8d86ba44b0c1041c572dd25.png";
import imgImgWrapper1 from "figma:asset/873a13ddbaf01b0d2c70f96e7d90e0fab86eeae2.png";
import imgImage2 from "figma:asset/11a75275d0fbebb84cccfd332df52a93ef1edb75.png";
import imgLogo from "figma:asset/474e2222bf71f4e1e3a9f524786dd7aad1a9106b.png";
import imgImgWrapper2 from "figma:asset/eaef342a22f9d903e563ba9054a5cb85ead6f921.png";
import imgImage3 from "figma:asset/8d0f61fb3194664e864bb352c817d070123b34df.png";
import imgLogo1 from "figma:asset/16ad9bc969bddd8742c929cd816687074c24d263.png";
import imgImgWrapper3 from "figma:asset/9f4555ed17cf6097cfd66c1cbe0af7a9c6d5d145.png";
import imgImage4 from "figma:asset/6a1b8e0b9ffcaa1630201c2704ffd0b2e69e317d.png";
import imgLogo2 from "figma:asset/baba1f8660174a921ee660fd9c9a825e0165a428.png";
import imgImgWrapper4 from "figma:asset/be6f8155b30f4be8f9aa097a92f94f4479485504.png";
import imgImage9 from "figma:asset/c5a7dbce14442df96ded3c5bd4c602caa328188f.png";
import imgLogo3 from "figma:asset/6bbe2785d56ad25c08286f54127c208783d9dbe0.png";
import imgImgWrapper5 from "figma:asset/ca8d1d75b57c3a3ab2aafe87a1ee4c267a13a7ee.png";
import imgImage5 from "figma:asset/4ccec1f2c217b593de7772154480d6dd358ac52d.png";
import imgLogo4 from "figma:asset/e04f0efdd8e1778ddbdca6c843bf2494353f9d40.png";

function Frame648() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Cormorant:Bold',_sans-serif] font-bold grow min-h-px min-w-px relative shrink-0 text-[#000000] text-[40px] tracking-[-0.4px]">
        <p className="block leading-[44px]">Collin Olan</p>
      </div>
      <div
        className="font-['Nunito_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#3e3e3e] text-[16px] text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">hi@collino.me</p>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full"
      data-name="intro"
    >
      <Frame648 />
      <div
        className="font-['Nunito_Sans:Light',_sans-serif] font-light max-w-[760px] relative shrink-0 text-[#000000] text-[32px] w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Hello, I’m a people focused designer based in the San Francisco Bay
          Area.
        </p>
      </div>
    </div>
  );
}

function ImgWrapper() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[20px] shrink-0 w-full"
      data-name="img-wrapper"
      style={{ backgroundImage: `url('${imgImgWrapper}')` }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-2 md:p-[44px] relative w-full">
          <div
            className="aspect-[892/596] bg-center bg-cover bg-no-repeat shrink-0 w-full"
            data-name="image"
            style={{ backgroundImage: `url('${imgImage}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="title"
    >
      <div className="basis-0 font-['Cormorant:Bold',_sans-serif] font-bold grow min-h-px min-w-px relative shrink-0 text-[#000000] text-[40px] tracking-[-0.4px]">
        <p className="block leading-[44px]">rift</p>
      </div>
      <div
        className="font-['Nunito_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#3e3e3e] text-[16px] text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Present</p>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="section-heading"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-8"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <Title />
    </div>
  );
}

function SectionContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionHeading />
      <div
        className="font-['Nunito_Sans:Light',_sans-serif] font-light leading-[normal] max-w-[760px] relative shrink-0 text-[#000000] text-[32px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">{`rift is a pre-product startup building an AI powered sales intelligence platform. `}</p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          As the founding designer I set the vision for and built rift’s first
          end-to-end product experience, shaping everything from our guiding
          principles to the workflows that guided sales reps through their day.
        </p>
      </div>
    </div>
  );
}

function SectionContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionContent />
    </div>
  );
}

function Section() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section"
    >
      <ImgWrapper />
      <SectionContent1 />
    </div>
  );
}

function ImgWrapper1() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[20px] shrink-0 w-full"
      data-name="img-wrapper"
      style={{ backgroundImage: `url('${imgImgWrapper1}')` }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-2 md:p-[44px] relative w-full">
          <div
            className="aspect-[892/596] bg-no-repeat bg-size-[100%_100%] bg-top-left shrink-0 w-full"
            data-name="image"
            style={{ backgroundImage: `url('${imgImage2}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="title"
    >
      <div className="basis-0 font-['Cormorant:Bold',_sans-serif] font-bold grow min-h-px min-w-px relative shrink-0 text-[#000000] text-[40px] tracking-[-0.4px]">
        <p className="block leading-[44px]">Medium</p>
      </div>
      <div
        className="font-['Nunito_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#3e3e3e] text-[16px] text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">2021–2022</p>
      </div>
    </div>
  );
}

function SectionHeading1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="section-heading"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-8"
        data-name="logo"
        style={{ backgroundImage: `url('${imgLogo}')` }}
      />
      <Title1 />
    </div>
  );
}

function SectionContent2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionHeading1 />
      <div
        className="font-['Nunito_Sans:Light',_sans-serif] font-light leading-[normal] max-w-[760px] relative shrink-0 text-[#000000] text-[32px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">
          Medium is a publishing platform for written content. Anyone can read
          and write on Medium, and support is given through community and direct
          subscription, not advertising.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          My work included adding the ability for authors to create rich
          multimedia profile pages for describing themselves; clarity around
          what content is written for subscribers and whether—as a reader—you
          are a subscriber or not; accessibility improvements to interactions;
          2022 design team vision for the platform; core contributions to the
          design system, and more.
        </p>
      </div>
    </div>
  );
}

function SectionContent3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionContent2 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section"
    >
      <ImgWrapper1 />
      <SectionContent3 />
    </div>
  );
}

function ImgWrapper2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[20px] shrink-0 w-full"
      data-name="img-wrapper"
      style={{ backgroundImage: `url('${imgImgWrapper2}')` }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-2 md:p-[44px] relative w-full">
          <div
            className="aspect-[955/596] bg-center bg-cover bg-no-repeat shrink-0 w-full"
            data-name="image"
            style={{ backgroundImage: `url('${imgImage3}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="title"
    >
      <div className="basis-0 font-['Cormorant:Bold',_sans-serif] font-bold grow min-h-px min-w-px relative shrink-0 text-[#000000] text-[40px] tracking-[-0.4px]">
        <p className="block leading-[44px]">Projector</p>
      </div>
      <div
        className="font-['Nunito_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#3e3e3e] text-[16px] text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">2019–2021</p>
      </div>
    </div>
  );
}

function SectionHeading2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="section-heading"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-8"
        data-name="logo"
        style={{ backgroundImage: `url('${imgLogo1}')` }}
      />
      <Title2 />
    </div>
  );
}

function SectionContent4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionHeading2 />
      <div
        className="font-['Nunito_Sans:Light',_sans-serif] font-light leading-[normal] max-w-[760px] relative shrink-0 text-[#000000] text-[32px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">
          Projector was a widely accessible, collaborative, visual communication
          platform and design tool that helped people turn their ideas into
          flexible, multimedia stories that could be published anywhere.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block mb-0">
          I led the design of much of the platform leading up to—and after—our
          public launch. Experiences I designed for included the primary editor
          surface, the dashboard, template browsing and usage, story export, the
          writing editor, sign-up and log-in, the mobile web viewer, overall
          platform architecture, the design system used by the team at
          Projector, a new way to present creations made in Projector to a live
          audience and more.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          At the end of 2021, Projector was acquired by Medium.
        </p>
      </div>
    </div>
  );
}

function SectionContent5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionContent4 />
    </div>
  );
}

function Section2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section"
    >
      <ImgWrapper2 />
      <SectionContent5 />
    </div>
  );
}

function ImgWrapper3() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[20px] shrink-0 w-full"
      data-name="img-wrapper"
      style={{ backgroundImage: `url('${imgImgWrapper3}')` }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-2 md:p-[44px] relative w-full">
          <div
            className="aspect-[951/596] bg-center bg-cover bg-no-repeat rounded-lg shrink-0 w-full"
            data-name="image"
            style={{ backgroundImage: `url('${imgImage4}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="title"
    >
      <div className="basis-0 font-['Cormorant:Bold',_sans-serif] font-bold grow min-h-px min-w-px relative shrink-0 text-[#000000] text-[40px] tracking-[-0.4px]">
        <p className="block leading-[44px]">Pinterest</p>
      </div>
      <div
        className="font-['Nunito_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#3e3e3e] text-[16px] text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">2015–2019</p>
      </div>
    </div>
  );
}

function SectionHeading3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="section-heading"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-8"
        data-name="logo"
        style={{ backgroundImage: `url('${imgLogo2}')` }}
      />
      <Title3 />
    </div>
  );
}

function SectionContent6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionHeading3 />
      <div
        className="font-['Nunito_Sans:Light',_sans-serif] font-light leading-[normal] max-w-[760px] relative shrink-0 text-[#000000] text-[32px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">{`Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. `}</p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          I was a design lead with the partners team, which designed experiences
          for businesses using Pinterest. A major project for me was redesigning
          our ads manager. In doing so, I found opportunities to make
          improvements in the global navigation and also our internal design
          system which are projects I also led. Later, I would go on to lead the
          internal design system team.
        </p>
      </div>
    </div>
  );
}

function SectionContent7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionContent6 />
    </div>
  );
}

function Section3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section"
    >
      <ImgWrapper3 />
      <SectionContent7 />
    </div>
  );
}

function ImgWrapper4() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[20px] shrink-0 w-full"
      data-name="img-wrapper"
      style={{ backgroundImage: `url('${imgImgWrapper4}')` }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-2 md:p-[44px] relative w-full">
          <div
            className="aspect-[1440/782] bg-center bg-cover bg-no-repeat rounded shrink-0 w-full"
            data-name="image 9"
            style={{ backgroundImage: `url('${imgImage9}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="title"
    >
      <div className="basis-0 font-['Cormorant:Bold',_sans-serif] font-bold grow min-h-px min-w-px relative shrink-0 text-[#000000] text-[40px] tracking-[-0.4px]">
        <p className="block leading-[44px]">Chartbeat</p>
      </div>
      <div
        className="font-['Nunito_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#3e3e3e] text-[16px] text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">2014–2015</p>
      </div>
    </div>
  );
}

function SectionHeading4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="section-heading"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-8"
        data-name="logo"
        style={{ backgroundImage: `url('${imgLogo3}')` }}
      />
      <Title4 />
    </div>
  );
}

function SectionContent8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionHeading4 />
      <div
        className="font-['Nunito_Sans:Light',_sans-serif] font-light leading-[normal] max-w-[760px] relative shrink-0 text-[#000000] text-[32px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">
          Chartbeat is a content intelligence platform for publishers, that
          empowers media companies to build loyal audiences with real-time and
          historical editorial analytics across desktop, social, and mobile
          platforms.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          I led the redesign of a product called the heads up display, which
          enabled homepage editors to view and respond to visitor behavior in
          real time. I also led the design of a new headline testing and
          optimization tool; created a system of internal design standards with
          a fresh language; and set the foundations for creating a formal design
          team.
        </p>
      </div>
    </div>
  );
}

function SectionContent9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionContent8 />
    </div>
  );
}

function Section4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section"
    >
      <ImgWrapper4 />
      <SectionContent9 />
    </div>
  );
}

function ImgWrapper5() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-[20px] shrink-0 w-full"
      data-name="img-wrapper"
      style={{ backgroundImage: `url('${imgImgWrapper5}')` }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-2 md:p-[44px] relative w-full">
          <div
            className="aspect-[892/596] bg-[50.16%_50.59%] bg-no-repeat bg-size-[124.94%_131.18%] rounded-lg shadow-[0px_4px_44px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
            data-name="image"
            style={{ backgroundImage: `url('${imgImage5}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left"
      data-name="title"
    >
      <div className="basis-0 font-['Cormorant:Bold',_sans-serif] font-bold grow min-h-px min-w-px relative shrink-0 text-[#000000] text-[40px] tracking-[-0.4px]">
        <p className="block leading-[44px]">Google</p>
      </div>
      <div
        className="font-['Nunito_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#3e3e3e] text-[16px] text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">2013–2014</p>
      </div>
    </div>
  );
}

function SectionHeading5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="section-heading"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-8"
        data-name="logo"
        style={{ backgroundImage: `url('${imgLogo4}')` }}
      />
      <Title5 />
    </div>
  );
}

function SectionContent10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionHeading5 />
      <div
        className="font-['Nunito_Sans:Light',_sans-serif] font-light leading-[normal] max-w-[760px] relative shrink-0 text-[#000000] text-[32px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">
          UXA was a small team at Google with a mission to create a beautiful,
          unified design language for all of Google. The seed planted by UXA
          grew to become Material Design and the Google Design team.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          My work took initial material concepts of digital paper and ink and
          stretched them into existing platforms such as ChromeOS and Web. I
          also designed the internal design specifications for this early
          version of Material.
        </p>
      </div>
    </div>
  );
}

function SectionContent11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section-content"
    >
      <SectionContent10 />
    </div>
  );
}

function Section5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="section"
    >
      <ImgWrapper5 />
      <SectionContent11 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-32 items-start justify-start max-w-[980px] p-0 relative shrink-0 w-full"
      data-name="content"
    >
      <Intro />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="body">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-4 md:p-[80px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}