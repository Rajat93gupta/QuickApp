import {
  AccountBalance,
  BuildRounded,
  Dashboard,
  Home,
  TempleBuddhist,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import Link from "next/link";
import React from "react";
import { FaProjectDiagram, FaUser } from "react-icons/fa";


const sidebarItem = [
  // { id: "home", name: "Home", href: "/dashboard", icon: <Home /> },
  { id: "builder", name: "Builder", href: "/builder", icon: <BuildRounded /> },
  { id: "template", name: "Template", href: "/template", icon: <TempleBuddhist /> },
  { id: "project", name: "Project", href: "/project", icon: <FaProjectDiagram /> },
];

const bottomSidebarItem = [
  { id: "account", name: "Account", href: "/account", icon: <AccountBalance /> },
  { id: "alia", name: "Alia", href: "/faq", icon: <ChatIcon /> },
];

const SidebarApp = () => {
  return (
    <div>
      <aside className="sidebar">
        <div>
          <div className="sidebar_top">
            {/* Uncomment the following code to display the logo */}
            {/* <Image
              src="/logo.png"
              height={150}
              width={150}
              className="sidebar_logo"
              alt="logo"
            /> */}
            <Typography>QuickAPP</Typography>
          </div>
          <ul className="sidebar_list">
            {sidebarItem.map((item) => (
              <li key={item.id} className="sidebar_item"> {/* Use item.id as key */}
                <Link href={item.href} className="sidebar_link">
                  <div className="sidebar_icon">{item.icon}</div>
                  <span className="sidebar_name">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar_bottom">
          <ul className="sidebar_list">
            {bottomSidebarItem.map((item) => (
              <li key={item.id} className="sidebar_item"> {/* Use item.id as key */}
                <Link href={item.href} className="sidebar_link">
                  <div className="sidebar_icon">{item.icon}</div>
                  <span className="sidebar_name">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarApp;
