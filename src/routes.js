/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import GamesContainer from "views/Games/GamesContainer.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import LoginContainer from "components/login/LoginContainer";
import RolesContainer from "views/Roles/RolesContainer";
import UsersContainer from 'views/Users/UserContainer';
import RegisterContainer from "components/register/registerContainer";
import TeamsContainer from "views/Teams/teamsContainer";
import LeaguesContainer from "views/Leagues/leaguesContainer";
import AddLeagueContainer from "views/Leagues/addLeagueContainer";
import DashboardContainer from "views/Dashboard/DashboardContainer";
const dashboardRoutes = [
  {
    path : "/dashboard",
    name : "Dashboard",
    component : DashboardContainer,
    icon: "nc-icon nc-circle-09",

    layout : "/admin"
  },
  {
    path : "/register",
    name : "Register",
    icon: "nc-icon nc-circle-09",
    component : RegisterContainer,
    layout : "/admin"
  },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "/games",
    name: "Games",
    icon: "fa fa-gamepad",
    component: GamesContainer,
    layout: "/admin"
  },
  {
    path: "/roles",
    name: "Roles",
    icon: "nc-icon nc-chart-pie-35",
    component: RolesContainer,
    layout: "/admin"
  },
  
  
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: UsersContainer,
    layout: "/admin"
  },
  {
    path : '/teams',
    name : 'Teams',
    icon : 'nc-icon nc-circle-09',
    component : TeamsContainer,
    layout :"/admin"
  },
  {
    path: "/league",
    name: "Leagues",
    icon: "nc-icon nc-paper-2",
    component: LeaguesContainer,
    layout: "/admin"
  },
  {
    path: "/addLeague",
    name: "Add New League",
    icon: "nc-icon nc-notes",
    component: AddLeagueContainer,
    layout: "/admin"
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
