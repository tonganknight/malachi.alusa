import { NavItem } from "@/app/types/NavEnums";
import { NavMenu } from "../NavMenu/NavMenu";

export const NavBar = () => {
  return (
    <nav className="bg-background ">
      <div className="p-6 text-primary font-headline text-[18px] font-extrabold uppercase border-b-[1px] border-foreground flex flex-row justify-between items-center">
        {NavItem.DevName}
        <NavMenu />
      </div>
    </nav>
  );
};
