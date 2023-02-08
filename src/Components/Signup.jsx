import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../Redux/auth/auth.action";
import { useDispatch, useSelector } from "react-redux";
  export default function Signup() {
    const {loading,error,isAuth}= useSelector((store)=> store.auth);
    const dispatch= useDispatch();
    const toast = useToast();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      property:[]
    });
    const navigate = useNavigate();
  
    function handleSubmit(e) {
      e.preventDefault();
    //   console.log(formData);
      dispatch(RegisterUser(formData))
      
    }
    useEffect(()=>{
        
        if(isAuth){
              navigate("/login")
        }
  },[isAuth])
     
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  if(loading){
    return <Box>.....Loading</Box>
  }else if(error){
    return <Box>.....Error</Box>
  }
    return (
      <>
        <Flex
          minH={"80vh"}
          align={"center"}
          justify={"center"}
          m={"auto"}
          bg="gray.50"
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            mt={0}
            bg={"white"}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              Rgister User
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="password" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  value={formData.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="sample@email.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="password"
                  _placeholder={{ color: "gray.500" }}
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <Input
                bg={"blue.400"}
                color={"white"}
                w="full"
                mt={2}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
                value={"Register"}
              />
            </form>
          </Stack>
        </Flex>
      </>
    );
  }