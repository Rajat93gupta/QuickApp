import {
  BuildRounded,
  Dashboard,
  Home,
  TempleBuddhist,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
const sidebarItem = [
  { name: "Home", href: "/dashboard", icon: <Home /> },
  { name: "Buider", href: "/builder", icon: <BuildRounded /> },
  { name: "Template", href: "/template", icon: <TempleBuddhist /> },
  { name: "Project", href: "/project", icon: <FaProjectDiagram /> },
];
const SidebarApp = () => {
  return (
    <div>
      <aside className="sidebar">
        <div className="sidebar_top">
          {/* <Image
            src="/logo.png"
            height={150}
            width={150}
            className="sidebar_logo"
            alt="logo"
          /> */}
          <Typography>QuickAPP</Typography>
        </div>
        <div>
          <ul className="sidebar_list">
            {sidebarItem.map((item, index) => (
              <li key={index} className="sidebar_item">
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
