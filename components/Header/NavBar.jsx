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
import { FaBookReader, FaBusAlt } from "react-icons/fa";
import { RiParentLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { VscBook } from "react-icons/vsc";

const Modules = [
  {
    title: "Student Management",
    description: "Find the perfect solution for your needs.",
    icon: PiStudentLight,
    link: `/modules/student_management`
  },
  {
    title: "Administration & HR Management",
    description: "Find the perfect solution for your needs.",
    icon: MdManageAccounts,
    link: `/modules/hr_management`
  },
  {
    title: "Fees Management",
    description: "Learn how we can help you achieve your goals.",
    icon: TbMoneybag,
    link: `/modules/fee_management`
  },
  {
    title: "Exam Management",
    description: "Reach out to us for assistance or inquiries",
    icon: IoMdPaper,
    link: `/modules/exam_management`
  },
  {
    title: "Transportation Management",
    description: "Find the perfect solution for your needs.",
    icon: FaBusAlt,
    link: `/modules/transport_management`
  }
];

const Support = [
  {
    title: "For Parents & Students",
    description: "Find the perfect solution for your needs.",
    icon: RiParentLine,
    link: `/help_and_support/help_student_support`
  },
  {
    title: "For School Staff & Administrators",
    description: "Meet and learn about our dedication",
    icon: GrUserWorker,
    link: `/help_and_support/help_school`
  }
];

const Blogdata = [
  {
    title: "BLOG",
    description: "Find the perfect solution for your needs.",
    icon: PiGithubLogoFill,
    link:`/blog`
  },
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
        href="/success_storties"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]">
          SUCCESS STORIES
        </ListItem>
      </Typography>
      <NavListMenu data={Support} moduleName="HELP & SUPPORT" />

      <NavListMenu data={Blogdata} moduleName="RESOURCES" />
      {/* <Typography
        as="a"
        href="/blog"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-[#2c5aa0] text-[15px]  font-bold hover:text-[#ffb000]">
          BLOGS
        </ListItem>
      </Typography> */}
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
            <div className="flex">
              <div> EduSparsh </div>
              <div>
                <IoBookOutline className="mt-1 ml-2" />
              </div>
            </div>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-1 lg:flex">
            <Button
              variant="outlined"
              size="sm"
              className="rounded-full w-[6rem]"
            >
              Log In
            </Button>
            <Button
              variant="outlined"
              size="sm"
              className="rounded-full w-[6rem]  "
            >
              Sign In
            </Button>
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
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
//   Card,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import TopHeader from "./TopHeader";
// import { FaSchool } from "react-icons/fa6";

// const NavBar = () => {
//   const [openNav, setOpenNav] = React.useState(false);

//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="/home" className="flex items-center">
//           HOME
//         </a>
//       </Typography>
//       <Menu placement="bottom-start">
//         <MenuHandler>
//           <span className="text-[#999999] cursor-pointer"> MODULES</span>
//         </MenuHandler>
//         <MenuList>
//           <MenuItem>Student Management</MenuItem>
//           <MenuItem>Employee Management</MenuItem>
//           <MenuItem>Administration & HR Management</MenuItem>
//           <MenuItem>Fees Management</MenuItem>
//           <MenuItem>Exam Management </MenuItem>
//           <MenuItem>Fees Management</MenuItem>
//           <MenuItem>Transportation Management</MenuItem>
//           <MenuItem>Attendance Management</MenuItem>

//         </MenuList>
//       </Menu>

//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="/success_storties" className="flex items-center">
//           SUCCESS STORIES
//         </a>
//       </Typography>
//       <Menu  placement="bottom-start">
//         <MenuHandler>
//           <span className="text-black">HELP & SUPPORT</span>
//         </MenuHandler>
//         <MenuList>
//           <MenuItem>For Parents & Students</MenuItem>
//           <MenuItem>For School Staff & Administrator</MenuItem>
//         </MenuList>
//       </Menu>
//     </ul>
//   );

//   return (
//     <div className="mb-1">
//       {" "}
//       <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           <Typography
//             as="a"
//             href="#"
//             className="mr-4 cursor-pointer py-1.5 font-medium"
//           >
//             <div className="flex">
//             <img src='/imges/oie_Jt3R7uUw50k2.jpg' className='w-[130px] h-[20px]'/>
//               {/* SCHOOL SCOOP */}
//             </div>
//           </Typography>
//           <div className="flex items-center gap-4">
//             <div className="mr-4 hidden lg:block">{navList}</div>
//             <div className="flex items-center gap-x-1">
//               <Button
//                 variant="gradient"
//                 size="sm"
//                 className="hidden lg:inline-block rounded-full"
//                 color="green"
//               >
//                 <span>Request Free Demo</span>
//               </Button>

//             </div>
//             <IconButton
//               variant="text"
//               className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//               ripple={false}
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </IconButton>
//           </div>
//         </div>
//         <MobileNav open={openNav}>
//           {navList}
//           <div className="flex items-center gap-x-1">
//             <Button fullWidth variant="text" size="sm" className="">
//               <span>Log In</span>
//             </Button>
//             <Button fullWidth variant="gradient" size="sm" className="">
//               <span>Sign in</span>
//             </Button>
//           </div>
//         </MobileNav>
//       </Navbar>
//     </div>
//   );
// };

// export default NavBar;
