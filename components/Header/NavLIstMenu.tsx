import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Collapse, ListItem, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import Link from 'next/link';

interface NavListMenuProps {
  data: {
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
      } & React.RefAttributes<SVGSVGElement>
    >;
    link: string; // Add the link property
  }[];
  moduleName: string;
}
  

const NavListMenu: React.FC<NavListMenuProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = props.data.map(
    ({ icon: Icon, title, link }, key) => (
     
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(Icon, {
              strokeWidth: 2,
              className: "h-6 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
            <Link href={link} className='text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]'>{title}</Link>  
            </Typography>
         
          </div>
        </MenuItem>
     
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
             {props.moduleName}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
};

export default NavListMenu;
