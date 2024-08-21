import { useLocation } from "react-router-dom";
import CircleButton from "./CircleButton";
import CircleButtonText from "./CircleButtonText";

const sidebarItems = [
  { title: "YOUR INFO", stepPathname: "/" },
  { title: "SELECT PLAN", stepPathname: "/step2" },
  { title: "ADD-ONS", stepPathname: "/step3" },
  { title: "SUMMARY", stepPathname: "/step4" },
] as const;

export const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <ul>
        {sidebarItems.map((sidebarItem, index) => {
          const step = index + 1;

          const activeStep = pathname === sidebarItem.stepPathname;

          return (
            <li className={activeStep ? "active" : ""}>
              <CircleButton number={step} isActive={activeStep} />
              <CircleButtonText
                text={sidebarItem.title}
                subtext={`STEP ${step}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
