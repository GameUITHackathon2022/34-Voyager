import { useRouter } from "next/router";
import NavigationButton from "../NavigationButton";
import { footerData } from "./footerData";

export default function Footer() {
  const { pathname } = useRouter();
  return (
    <footer className="grid grid-cols-4 fixed bottom-0 inset-x-0 border-t-2 border-t-slate-200 shadow-dropshadow py-2 z-50">
      {footerData.map((item, idx) => (
        <NavigationButton
          key={idx}
          icon={item.icon}
          activeIcon={item.activeIcon}
          title={item.title}
          href={item.href}
          active={pathname === item.href ? true : false}
        />
      ))}
    </footer>
  );
}
