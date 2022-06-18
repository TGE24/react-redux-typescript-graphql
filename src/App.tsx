import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import {
  useGetExampleQueryQuery,
  useLazyGetExampleQueryQuery,
} from "./graphql/queries/exampleQuery";
import { useAppDispatch, useAppSelector } from "./hooks";
import { storeExampleData } from "./store/slices/exampleSlice";

export const App = () => {
  const { data, isLoading } = useGetExampleQueryQuery();
  const [getExample, { data: LazyData }] = useLazyGetExampleQueryQuery();
  const dispatch = useAppDispatch();
  const { data: storedExampleData } = useAppSelector((state) => state.example);

  React.useEffect(() => {
    getExample();
  }, [getExample]);

  if (!isLoading) {
    dispatch(storeExampleData(data));
  }

  console.log({
    queryData: data,
    storedData: storedExampleData,
    lazyData: LazyData,
  });

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
