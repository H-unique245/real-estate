import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  Toast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/auth/auth.action";

const Login = () => {
    const {loading,error,errorMessage,isLogin}= useSelector((store)=> store.auth);
    const dispatch= useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const toast = useToast();
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(LoginUser(formData))
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  useEffect(()=>{
    if(error){
        toast({
        title:errorMessage,
        status: 'error',
        duration: 1500,
        isClosable: true,
     })}
    if(isLogin){
          navigate("/property")
    }
},[isLogin,error])
 
if(loading){
    return <Box>.....Loading</Box>
  }else if(error){
    return <>
     <Box>.....Error</Box>
    <Button onClick={()=>window.location.reload()}>Try Again !</Button>
    </>
  }
  return (
    <>
      <Flex
        minH={"80vh"}
        align={"center"}
        bg={"red.50"}
        mt={0}
        justify={"center"}
      >
        <Stack spacing={8} mx={"auto"} mt={0} maxW={"lg"} py={2} px={1}>
          <Heading fontSize={"4xl"}>Log In User</Heading>
          <Stack align={"center"}></Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"xl"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  bg={"pink.200"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
