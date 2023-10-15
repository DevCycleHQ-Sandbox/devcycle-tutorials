'use client';

import {
  FormControl,
  FormLabel,
  Container,
  SimpleGrid,
  Switch,
  Heading,
  Stack,
  Box
} from '@chakra-ui/react';

export default function Page() {
  const featureToggle = false;

  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          lineHeight={'110%'}
        >
          DevCycle NextJS Getting Started
        </Heading>
        <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
          <FormLabel htmlFor="feature-toggle">feature-toggle:</FormLabel>
          <Switch id="feature-toggle" isChecked={featureToggle} />
        </FormControl>
      </Stack>
    </Container>
  );
}
