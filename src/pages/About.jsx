import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          p: 2,
          textAlign: "center",
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            my: 0,
            "& h4": { fontSize: "1.5rem" },
          },
        }}
      >
        <Typography variant="h4">Welcome to My Restaraunt</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sed
          voluptates quos vero sit. Eaque sit, neque et aperiam placeat harum!
          Qui libero dignissimos quod nemo doloremque illo rerum. Quis laborum
          at aperiam ab nulla saepe quos illum in neque! Accusantium nam
          deserunt recusandae quia, blanditiis rem doloribus vero molestiae
          sequi quae ipsam quisquam iure in est similique autem consequuntur
          architecto eius, delectus id ut quaerat voluptate? At, commodi vitae
          neque sapiente veniam molestiae voluptate nulla animi placeat quasi
          reiciendis officiis officia culpa minus ducimus doloremque modi
          dolorum perspiciatis laborum exercitationem recusandae! Expedita a
          maxime unde reprehenderit facere deserunt quis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio,
          beatae accusantium animi quidem ab natus ratione! Cumque dolorem
          repellat et dolor, suscipit molestias dignissimos dolore inventore
          consequuntur ex soluta eius consectetur, quam facere nobis commodi non
          perspiciatis in. Provident numquam, voluptates debitis officia atque,
          omnis quod earum perferendis excepturi consequuntur animi
          exercitationem? Rem tenetur autem doloribus fugiat sed corrupti qui
          pariatur, libero consectetur nesciunt modi quisquam, ad non odio
          doloremque dolorem a voluptas. Esse officiis voluptate quibusdam
          eveniet eum, velit in libero obcaecati. Tempora accusantium laborum
          assumenda voluptatibus eaque. Sit, iusto voluptatibus! Ut, rem
          voluptate? Veritatis aspernatur minus qui?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
