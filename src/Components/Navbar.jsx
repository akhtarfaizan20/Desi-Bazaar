import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Center,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { CiUser, CiHeart } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { Link as NaviLink, useNavigate } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const { isAuth, currentUser } = useContext(AuthContext);
  // useEffect(() => {
  //   login({ email: "akhtarfaizan20@gmail.com", password: "123456789" });
  //   setInterval(() => {
  //     logout();
  //   }, 5000);
  // }, []);
  return (
    <Box w={"100%"} zIndex={10}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2, md: 4 }}
        px={{ base: 10 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "left", md: "start" }}>
          <NaviLink to="/">
            <Text
              textAlign={useBreakpointValue({ base: "left", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Image
                textAlign={"left"}
                src="/Images/Myntra-icon-logo.png"
                alt="Danish"
                minW={"70px"}
                maxW={"70px"}
              />
            </Text>
          </NaviLink>

          <Flex display={{ base: "none", md: "flex" }} ml={0}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <InputGroup
            w={"420px"}
            mt={2}
            display={useBreakpointValue({ base: "none", md: "solid" })}
          >
            <InputLeftElement
              py={"20px"}
              pointerEvents="none"
              children={<AiOutlineSearch color="gray.300" fontSize={"20px"} />}
            />
            <Input
              py={"20px"}
              type="tel"
              placeholder="Search for products, brands and more"
              focusBorderColor="pink.400"
              variant={"filled"}
            />
          </InputGroup>

          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            onClick={() => navigate(isAuth ? "/profile" : "/login")}
          >
            <VStack>
              <CiUser fontSize={30} spacing={0} />
              <Text fontSize={"13px"}>
                {isAuth ? "Hi, " + currentUser.first_name : "Profile"}
              </Text>
            </VStack>
          </Button>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            display={useBreakpointValue({ base: "none", md: "block" })}
          >
            <VStack>
              <CiHeart fontSize={30} spacing={0} />
              <Text fontSize={"13px"}>Wishlist</Text>
            </VStack>
          </Button>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            onClick={() => navigate("/cart")}
          >
            <VStack>
              <SlHandbag fontSize={30} spacing={0} />
              <Text fontSize={"13px"}>Bag</Text>
            </VStack>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Center w={"600px"}>
      <Stack direction={"row"} spacing={5}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                {/* <NaviLink to={navItem.path}> */}
                <NaviLink to={navItem.path || "/"}>
                  <Box
                    p={2}
                    fontSize={"sm"}
                    fontWeight={700}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Box>
                </NaviLink>
                {/* </NaviLink> */}
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Center>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MEN",
    path: "/men",
    children: [
      {
        label: "Explore Men's Fasion",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "Explore Men's Accessories",
        subLabel: "Top Accessories",
        href: "#",
      },
    ],
  },
  {
    label: "WOMEN",
    path: "/women",
    children: [
      {
        label: "Explore Women's Fasion",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "Explore Women's Accessories",
        subLabel: "Top Accessories",
        href: "#",
      },
    ],
  },
  {
    label: "KIDS",
    href: "#",
  },
  {
    label: "HOME & LIVING",
    href: "#",
  },
  {
    label: "BEAUTY",
    href: "#",
  },
  {
    label: "STUDIO",
    href: "#",
  },
];
