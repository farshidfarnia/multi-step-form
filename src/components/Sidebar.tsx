import CircleButton from "./CircleButton";
import CircleButtonText from "./CircleButtonText";

interface ISidebarProps {
  activeStep: number;
}

export const SideBar = ({ activeStep }: ISidebarProps) => {
  const sidebarItems = [
    "YOUR INFO",
    "SELECT PLAN",
    "ADD-ONS",
    "SUMMARY",
  ] as const;

  return (
    <div className="sidebar">
      <ul>
        {sidebarItems.map((sibebarItem, index) => {
          const step = index + 1;
          return (
            <li className={activeStep === step ? "active" : ""}>
              <CircleButton number={step} isActive={activeStep === step} />
              <CircleButtonText text={sibebarItem} subtext={`STEP ${step}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};