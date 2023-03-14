import {
  Button,
  Stack,
  ListItem,
  ListItemText,
  List,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { FormContext } from "../Add";

export default function ReviewInformations() {
  const { setActiveStepIndex, formDataResidence, formDataOwner } =
    useContext(FormContext);
  const [estimate, setEstimate] = useState("");
  // const fs = require("fs");
  // var fs = require('browserify-fs');

  const formData = {
    name: formDataResidence.name,
    adress:
      formDataResidence.adress +
      ", " +
      formDataResidence.city +
      "," +
      formDataResidence.postalcode,
    description: formDataResidence.description,
    image: "fileUrl",
    attributes: [
      {
        trait_type: "Purchase Price",
        value: "value",
      },
      {
        trait_type: "Type of Residence",
        value: formDataResidence.typeofresidence,
      },
      {
        trait_type: "Bed Rooms",
        value: formDataResidence.bedrooms,
      },
      {
        trait_type: "Bathrooms",
        value: formDataResidence.bathrooms,
      },
      {
        trait_type: "Square Feet",
        value: formDataResidence.squarefeet,
      },
      {
        trait_type: "Year Built",
        value: formDataResidence.constructionyear,
      },
    ],
  };

  console.log(formData);

  const handleBack = () => {
    setActiveStepIndex((prevStep) => prevStep - 1);
  };

  const value =
    ((parseInt(formDataResidence.bathrooms) +
      parseInt(formDataResidence.bedrooms)) /
      2) *
      10 +
    (parseInt(formDataResidence.squarefeet) * 100) / 40000;

  const handleFormSubmit = (formDataResidence) => {
    setEstimate(value);
    console.log(formDataResidence);

    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // fs.writeFile("data.json", jsonData, null);
    // fs.writeFile('../../../metadata/data.json', jsonData, function(err) {
    //   if (err) throw err;
    //   console.log('File written successfully!');
    // });
  };

  return (
    <>
      <Stack>
        <Typography
          sx={{ mt: 5, fontSize: "1rem", fontWeight: "bold" }}
          variant="overline"
        >
          Residence Details
        </Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText
              primary="Name of residence"
              secondary={formDataResidence.name}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Type of residence"
              secondary={formDataResidence.typeofresidence}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Adress"
              secondary={
                formDataResidence.adress +
                ", " +
                formDataResidence.city +
                ", " +
                formDataResidence.postalcode
              }
            />
          </ListItem>
        </List>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText
              primary="Living area"
              secondary={formDataResidence.squarefeet}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Number of bath rooms"
              secondary={formDataResidence.bathrooms}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Number of bed rooms"
              secondary={formDataResidence.bedrooms}
            />
          </ListItem>
        </List>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText
              primary="Year of construction"
              secondary={formDataResidence.constructionyear}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Description of residence"
              secondary={formDataResidence.description}
            />
          </ListItem>
        </List>
      </Stack>

      <Stack>
        <Typography
          sx={{ mt: 5, fontSize: "1rem", fontWeight: "bold" }}
          variant="overline"
        >
          Personal Informations
        </Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText
              primary="First name"
              secondary={formDataOwner.firstname}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Last name"
              secondary={formDataOwner.lastname}
            />
          </ListItem>
        </List>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <ListItemText primary="E-mail" secondary={formDataOwner.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary={formDataOwner.phone} />
          </ListItem>
        </List>
      </Stack>

      <Stack
        sx={{
          flexGrow: { xs: 1 },
          mt: 8,
          mb: 3,
          justifyContent: "space-between",
        }}
        direction={{ xs: "column", md: "row" }}
        spacing={3}
      >
        <Button
          variant="contained"
          sx={{
            width: 200,
            p: 1.5,
            color: "grey",
            backgroundColor: "#D8D8D8",
            "&:hover": {
              color: "white",
              backgroundColor: "#868686",
            },
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          onClick={handleBack}
        >
          Back
        </Button>

        <Button
          variant="contained"
          sx={{
            width: 380,
            color: "white",
            backgroundColor: "#6C63FF",
            "&:hover": {
              backgroundColor: "#4c46b6",
            },
            p: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          onClick={handleFormSubmit}
        >
          Receive my estimation
        </Button>
      </Stack>
      <Stack>
        <Box>
          {estimate && (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                my: 5,
              }}
            >
              <Typography
                sx={{ mt: 5, fontSize: "1rem", fontWeight: "bold" }}
                variant="overline"
              >
                The estimated value of the property is {estimate} ETH.
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
    </>
  );
}
