import React from "react";
import Link from "next/link";

import { menuItems } from "./menuItems";

const Menu = () => {
  return (
    <>
      <ul className="horizontalMenu-list">
        {menuItems.map(
          ({ label, isExternal = false, name, items, ...rest }, index) => {
            const hasSubItems = Array.isArray(items);
            return (
              <React.Fragment key={name + index}>
                {hasSubItems ? (
                  <li  {...rest}>
                    <span className="horizontalMenu-click"><i className="horizontalMenu-arrow fa fa-angle-down"></i></span>
                    <a
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                      <i className="fe fe-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      {items.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.items);
                        return (
                          <React.Fragment key={subItem.name + indexSub}>
                            {hasInnerSubItems ? (
                              <li>
                                <span className="horizontalMenu-click"><i className="horizontalMenu-arrow fa fa-angle-down"></i></span>
                                <a
                                  
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {subItem.label}
                                  <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i>
                                </a>
                                <ul className="sub-menu">
                                  {subItem.items.map(
                                    (itemInner, indexInnerMost) => (
                                      <li
                                        
                                        key={itemInner.name + indexInnerMost}
                                      >
                                        {itemInner.isExternal ? (
                                          <a
                                            href={`${itemInner.link}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {itemInner.label}
                                          </a>
                                        ) : (
                                          <Link href={`/${itemInner.name}`} as={`/${itemInner.name}`}>
                                            <a>{itemInner.label}</a>
                                          </Link>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li>
                                {subItem.isExternal ? (
                                  <a
                                    href={`${subItem.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link href={`/${subItem.name}`} as={`/${subItem.name}`}>
                                    <a>{subItem.label}</a>
                                    
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" {...rest}>
                    {isExternal ? (
                      <a
                        href={`${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        className="nav-link"
                        href={`/${name}`}
                        as={`/${name}`}

                      >
                        <a>{label}</a>
                      </Link>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          }
        )}
      </ul>
    </>
  );
};
export default Menu;
