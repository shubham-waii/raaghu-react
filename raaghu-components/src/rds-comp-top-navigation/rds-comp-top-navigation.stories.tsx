import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTopNavigation from "./rds-comp-top-navigation";

export default {
  title: "Components/Top Navigation",
  component: RdsCompTopNavigation,
} as ComponentMeta<typeof RdsCompTopNavigation>;

const Template: ComponentStory<typeof RdsCompTopNavigation> = (args) => (
  <RdsCompTopNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  navbarTitle: "Dashboard",
  darkMode: false,
  brandName: "Raaghu",
  navbarSubTitle: "Statistics and reports",
  profileTitle:"Host Admin",
  profileName:"Keanu Foster",
  notifications: [
    {
      status: "success",
      title: "Tenant added",
      urlTitle: "hello",
      // url:" " ,
      time: "a month ago",
      state: 1,
      userNotificationId: 0,
      selected: false,
    },

    {
      status: "error",
      title: "Tenant deleted",
      urlTitle: "hello",
      time: "a month ago",
      state: 1,
      userNotificationId: 1,
      selected: false,
    },

    {
      status: "warn",
      title: "Tenant added  warn",
      urlTitle: "hello",
      time: "a month ago",
      state: 1,
      userNotificationId: 2,
      selected: false,
    },

    {
      status: "info",
      title: "Tenant deleted info",
      urlTitle: "hello",
      time: "a month ago",
      state: 1,
      userNotificationId: 3,
      selected: false,
    },
  ],

  languageItems: [
    {
      label: "EN(US)",
      val: "en",
      icon: "us",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "English(IND)",
      val: "en",
      icon: "in",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "French",
      val: "fr",
      icon: "us",
      iconWidth: "20px",
      iconHeight: "20px",
    },
  ],
};