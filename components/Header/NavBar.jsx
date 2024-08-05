"user client"
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";
import NavListMenu from "./NavLIstMenu";
import { IoBookOutline } from "react-icons/io5";
import { PiGithubLogoFill, PiPresentationFill, PiStudentLight } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoMdPaper } from "react-icons/io";
import { FaBookReader, FaBusAlt, FaQuestionCircle } from "react-icons/fa";
import { RiParentLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { VscBook } from "react-icons/vsc";

const Modules = [
  {
    title: "Student Management",
    description: "Find the perfect solution for your needs.",
    icon: PiStudentLight,
    link: `/modules/student-management`
  },
  {
    title: "Administration & HR Management",
    description: "Find the perfect solution for your needs.",
    icon: MdManageAccounts,
    link: `/modules/hr-management`
  },
  {
    title: "Fees Management",
    description: "Learn how we can help you achieve your goals.",
    icon: TbMoneybag,
    link: `/modules/fee-management`
  },
  {
    title: "Exam Management",
    description: "Reach out to us for assistance or inquiries",
    icon: IoMdPaper,
    link: `/modules/exam-management`
  },
  {
    title: "Transportation Management",
    description: "Find the perfect solution for your needs.",
    icon: FaBusAlt,
    link: `/modules/transport-management`
  }
];

const Support = [
  {
    title: "For Parents & Students",
    description: "Find the perfect solution for your needs.",
    icon: RiParentLine,
    link: `/help-and-support/help-student-support`
  },
  {
    title: "For School Staff & Administrators",
    description: "Meet and learn about our dedication",
    icon: GrUserWorker,
    link: `/help-and-support/help-school`
  }
];

const Blogdata = [
 
  {
    title: "PRESENTATION",
    description: "Meet and learn about our dedication",
    icon: PiPresentationFill ,
    link:`/blog`

  },
  {
    title: "CASE STUDY",
    description: "Find the perfect solution for your needs.",
    icon: FaBookReader,
    link:`/blog`

  },
  {
    title: "BROCHURES",
    description: "Meet and learn about our dedication",
    icon: VscBook,
    link:`/blog`

  },
  {
    title: "FAQ",
    description: "Meet and learn about our dedication",
    icon: FaQuestionCircle ,
    link:`/blog`

  },
];

const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 md:text-sm">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]">
          HOME
        </ListItem>
      </Typography>

      <NavListMenu data={Modules} moduleName="MODULES" />

      <Typography
        as="a"
        href="/success-storties"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]">
          SUCCESS STORIES
        </ListItem>
      </Typography>
      <NavListMenu data={Support} moduleName="HELP & SUPPORT" />
      <Typography
        as="a"
        href="/blog"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]">
          BLOG
        </ListItem>
      </Typography>
      <NavListMenu data={Blogdata} moduleName="RESOURCES" />
      
      <Typography
        as="a"
        href="/contactus"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]">
          CONTACT US
        </ListItem>
      </Typography>
    </List>
  );
};

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <div>
      {" "}
      <Navbar className="mx-auto max-w-screen-2xl px-6 py-6">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 sm:font-extrabold text-3xl "
          >
            <div className="flex text-[#2e6faf]">
              <div> EduSparsh </div>
              <div>
                <IoBookOutline className="mt-1 ml-2" />
              </div>
            </div>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
