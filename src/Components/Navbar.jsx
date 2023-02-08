import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AUTH_LOGOUT } from "../Redux/auth/auth.actionTypes";

const Links = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Property",
    path: "/property",
  },
];

const NavLink = ({ children }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("green.200", "green.700"),
    }}
  >
    <Link to={children.path}>{children.title}</Link>
  </Box>
);
function Navbar() {
    let data= JSON.parse(localStorage.getItem("user"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((store) => store.auth);
  const dispatch= useDispatch();
  const [userdata,setUserData]= useState({});
 
  const handleLogout=()=>{
    dispatch({type:AUTH_LOGOUT})
    window.location.reload();
  }
  useEffect(()=>{
    console.log("user",user);
setUserData(data)
},[user])

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={"21vh"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
             {/* Logo */}
              <Image boxSize="50px" src="real-estate-logo.png" alt="app_logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.title}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          {user ? (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Name : {userdata && userdata.name}</MenuItem>
                  <MenuItem>Email :{userdata && userdata.email}</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout} >Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Button
                fontSize={"sm"}
                fontWeight={400}
              >
                <Link to="/login">
                Log In
                </Link>
              </Button>
              <Button
                fontSize={"sm"}
                fontWeight={400}
                color={"white"}
                bg={"pink.400"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                <Link to="/signup">
                Register
                </Link>
              </Button>
            </Stack>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.title}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
