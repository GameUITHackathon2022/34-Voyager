import NavigationButton from "../NavigationButton";
import { footerData } from "./footerData";

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 fixed bottom-0 inset-x-0 border-t-2 border-t-slate-200 shadow-dropshadow py-2">
      {footerData.map((item, idx) => (
        <NavigationButton
          key={idx}
          icon={item.icon}
          activeIcon={item.activeIcon}
          title={item.title}
          href={item.href}
        />
      ))}
    </footer>
  );
}
