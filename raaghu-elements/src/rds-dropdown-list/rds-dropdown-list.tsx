import React, { MouseEventHandler, useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import RdsIcon from "../rds-icon";
import "./rds-dropdown-list.scss";
export interface RdsDropdownListProps {
  width?: string;
  withIcons?: boolean;
  listItems: {
    label: string;
    val: string;
    icon?: string;
    iconWidth?: string;
    iconHeight?: string;
  }[];
  withBorder?: boolean;
  darkVariant?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RdsDropdownList = (props: RdsDropdownListProps) => {
  // to fetch the index of the selected language

  const lang = localStorage.getItem("i18nextLng");
  let index = props.listItems.findIndex((item) => item.val === lang);

  //  If language not found then we are updating index to 0

  if (index == -1) {
    index = 0;
  }

  //  updating the selected language accordingly

  const [selectedOption, setSelectedOption] = useState(index);

  // using onClickHandler to change the language

  const onClickHandler = (index: number, val: string) => {
    setSelectedOption(index);
  };

  const iconWidth = props.listItems;
  return (
    <div>
      <div style={{ position: "relative" }}>
        <a
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ textDecoration: "none", cursor: "pointer ", paddingLeft:"0px" }}
        >
          <div
            className="bDropdown d-flex align-items-center ps-2"
            style={{
              border: `${props.withBorder ? "" : "none"}`,
              background: `${props.darkVariant ? "#212529" : "white"}`,
              color: `${props.darkVariant ? "white" : "#212529"}`,
            }}
          >
            {props.listItems && props.listItems[0] && (
              <>
                {props.listItems[selectedOption].icon && (
     
                    <RdsIcon
                      name={props.listItems[selectedOption].icon}
                      width="15px"
                      height="15px"
                      stroke={true}
                      fill={false}
                    ></RdsIcon>
     
                )}
                <span className="ms-2 me-2 flex-grow-1">
                  {props.listItems[selectedOption].label}
                </span>
              </>
            )}
            <RdsIcon
              name="chevron_down"
              fill={false}
              stroke={true}
              height="15px"
              width="15px"
              colorVariant={`${props.darkVariant ? "light" : ""}`}
            ></RdsIcon>
          </div>
        </a>

        <div
          className="dropdown-menu fab-dropdown border-0 shadow mb-1"
          style={{
            position: "absolute",
            width: "100%",
            background: `${props.darkVariant ? "#212529" : "white"}`,
          }}
        >
          {props.listItems?.map((language: any, i: any) => (
            <div key={i}>
              <a
                id={i}
                data-name={language.val}
                className="dropdown-item fab-dropdown-item d-flex ps-0"
                onClick={props.onClick}
                onMouseDown={() => {
                  onClickHandler(i, language.val);
                }}
                style={{ cursor: "pointer" }}
              >
                {language.icon && (
                  <div className="ms-4">

                    <RdsIcon
                      name={language.icon}
                      height={language.iconWidth ? language.iconWidth : "20px"}
                      width={language.iconWidth ? language.iconWidth : "20px"}
                      fill={false}
                      stroke={true}
                    ></RdsIcon>
                  </div>
                )}
                <span
                  style={{
                    marginLeft: "16px",
                    color: `${props.darkVariant ? "white" : "#212529"}`,
                  }}
                  data-name={language.val}
                >
                  {language.label}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RdsDropdownList;
