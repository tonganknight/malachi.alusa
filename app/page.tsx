import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection/FeaturedProjectsSection";
import { HomeHeading } from "./components/HomeHeading";
import { HomeSynopsis } from "./components/HomeSynopsis/HomeSynopsis";
import { LetsConnectButton } from "./components/LetsConnectButton/LetsConnectButton";
import { NavBar } from "./components/NavBar";
import { SkillsOverview } from "./components/SkillsOverview/SkillsOverview";
import { TechStack } from "./components/TechStack/TechStack";

export default function HomePage() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col">
      <NavBar />
      <HomeHeading />
      <HomeSynopsis />
      <LetsConnectButton />
      <SkillsOverview />
      <TechStack />
      <FeaturedProjectsSection />
    </div>
  );
}
