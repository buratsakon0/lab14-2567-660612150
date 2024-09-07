"use client";
import { Container, Text, Title, Rating, Textarea, Button,Space, Divider, Pagination, Group } from "@mantine/core";

import Footer from "@components/Footer"

export default function Home() {

  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Space h="md"/>

      <Title order={4}>Your rating</Title>
      <Rating defaultValue={0} size="lg"/>

      <Space h="sm"/>

      <Textarea
      label="Your review"
      placeholder="Do you enjoy eating?"
      minRows={3}
      autosize
      />

      <Space h="sm"/>

      <Button variant="filled" color="orange">Submit Review</Button>

      <Space h="sm"/>

      <Divider/>

      <Space h="sm"/>

      <Group gap="lg" justify="center">
      <Title order={4} > Elon Musk</Title>
      <Rating value={5} readOnly />
      </Group>

     

      <Text fz={14} ta="center" c="rgb(134, 142, 150)">Best pizza in this world. I give you X score.</Text>

      <Space h="sm"/>

      <Divider/>

      <Space h="sm"/>

      <Group gap="lg" justify="center" >
      <Title order={4}> Mark Zuck</Title>
      <Rating value={4} readOnly />
      </Group>

      <Text fz={14} ta="center" c="rgb(134, 142, 150)">My favourite part is pepperoni</Text>

      <Space h="sm"/>

      <Group gap="lg" justify="center" >
      <Pagination total={20} color="orange"/>
      </Group>
      

      <Text ta="center" my="sm" fz={15}  c="rgb(134, 142, 150)">
        <Footer 
        year="2024"
        fullName="Buratsakon Srikhaw"
        studentId="660612150"
        />
      </Text>

    </Container>
  );
}
