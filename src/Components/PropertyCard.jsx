import {
  Card,
  Image,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PropertyCard({ data }) {
  const { user } = useSelector((store) => store.auth);
const navigate= useNavigate();
  const { image, location, type, price } = data;

const handleDetails=(id)=>{
navigate(`/property/${id}`)

}

const handleSave=(data)=>{
    let data_user= JSON.parse(localStorage.getItem("user"));

// console.log(data_user,"check");
// console.log(data)
    axios.patch(`https://json-server-backend.onrender.com/user/${data_user.id}`,{
        saved:data
    }).then(res=>console.log(res), alert("Cors policy disabled"));
}
  return (
    <Card maxW="sm" boxShadow={'md'} border='1px solid whiteAplha.100 '>
      <CardBody>
        <Image src={image} alt={type} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{type}</Heading>
          <Text>{location}</Text>
          <Text color="blue.600" fontSize="2xl">
            ₹ {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={()=>handleDetails(data.id)}>
            View Details
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={()=>handleSave(data)}>
            Save Property
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default PropertyCard;
