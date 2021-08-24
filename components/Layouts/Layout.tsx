import { ReactElement, ReactNode } from "react";
import NavBar from "@components/Navigation/NavBar";
import Body from "@components/Layouts/Body";
import Footer from "@components/Layouts/Footer";
interface Props {
  headerContent?: ReactElement;
  children: ReactNode;
}

export default function Layout({ headerContent, children }: Props) {
  return (
    <div className="m-0 flex flex-col min-h-screen">
      <NavBar />
      {headerContent}
      <Body>{children}</Body>
      <Footer />
    </div>
  );
}
