import { Box, FormLabel, Heading, HStack, Input, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertyCard from "../Components/PropertyCard";
import { getProperty, getPropertySearch } from "../Redux/data/data.action";



function Property(){
    const {loading,error,data}= useSelector((store)=> store.data);
    const [search,setSearch]= useState("");
    const dispatch= useDispatch();
    const [property,setProperty]= useState([]);

const handleSearch=(e)=>{
  e.preventDefault();
  console.log(search);
  dispatch(getPropertySearch(search))
}

    useEffect(()=>{
        dispatch(getProperty())
        setProperty(data)
        console.log(property)
        
    },[property])

    if(loading){
        return <Box>.....Loading</Box>
      }else if(error){
        return <Box>.....Error</Box>
      }
    return (
        <Box>
            <Heading>Properties</Heading>
            <form onSubmit={handleSearch}>
                <HStack p={8} gap="2rem">
                <FormLabel>
                    Search
                </FormLabel>
                    <Input type="text" w='sm' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search by location, price, type, etc." />
                    <Input type="submit" w='sm' value="Search Property" />
                    </HStack>
            </form>
                <SimpleGrid columns={[2,3,4]} spacing={'2.5rem'}>
                    {data && data?.map((item)=>{
                     return <PropertyCard key={item.id} data={item}  /> 
                    })}
                </SimpleGrid>
        </Box>
    )
} 
export default Property;