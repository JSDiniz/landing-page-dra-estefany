import { AboutWhitening } from "../../../components/Home-teeth-whitening/AboutWhitening";
import { CallToAction } from "../../../components/Home-teeth-whitening/CallToAction";
import { CareTips } from "../../../components/Home-teeth-whitening/CareTips";
import { FAQ } from "../../../components/Home-teeth-whitening/FAQ";
import { HeroSection } from "../../../components/Home-teeth-whitening/HeroSection";
import { StepByStep } from "../../../components/Home-teeth-whitening/StepByStep";

function HomeTeethWhitening() {

    return (
        <>
            <HeroSection />
            <AboutWhitening />
            <StepByStep />
            <CareTips />
            <FAQ />
            <CallToAction />
        </>
    );
}

export default HomeTeethWhitening;