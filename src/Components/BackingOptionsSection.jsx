import { Box } from "@mui/material";
import StyledHeading from "./StyledHeading";
import BackingOptionsCard from "./BackingOptionsCard";
import { serviceApp } from "../../utils";
import ServicesCard from "./ServicesCard";

const BackingOptionsSection = () => {
  const backingOptions = [
    {
      title: "Iron-on/Adhesive",
      description:
        "Designed for easy application with a household iron, this backing fuses the patch to fabric with heat. It's a popular choice for casual wear and DIY projects, offering a clean, no-sew finish.",
    },
    {
      title: "Sew-on",
      description:
        "The most durable option, sew-on backing is ideal for items that will be washed frequently or exposed to heavy use. It ensures the patch stays securely in place for the long haul.",
    },
    {
      title: "Hook & Loop",
      description:
        "Also known as Velcro®, this backing allows patches to be removed and reattached quickly. It's perfect for uniforms, tactical gear, and items where interchangeability is needed.",
    },
    {
      title: "Peel & Stick",
      description:
        "A temporary solution that's ideal for events, displays, or quick fixes. Simply peel off the protective layer and stick the patch onto a surface—no heat or sewing required.",
    },
  ];

  return (
    <Box sx={{ marginTop: {md:"150px", xs:"100px"} , marginBottom:{md:"200px", sm:"100px"} , height:{md:"auto", sm:"auto"}}}>
      <StyledHeading
        title2="Backing"
        title1="Options"
        sx1={{ order: "2" }}
        styledSx={{
          display: "flex",
          justifyContent: { md: "left", sm: "center", xs: "center" },
          alignItems: "center",
        }}
      />

 <Box
          sx={{
            mt: "60px",
            display: "flex",
            justifyContent: {
              md: "center",
              xs: "center",
            },
            gap: { md: "30px", xs: "15px" },
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: "start",
          }}
        >
          {serviceApp.map((service, index) => (
            <ServicesCard
              key={index}
              image={true}
              style={{
                border: "1px solid #E9E9E9",
                maxWidth: { md: "300px !important", sm: "100%" },
                borderRadius: "10px",
                flexBasis: "25%",
                flexShrink: "1",
                height:"410px",
                img: {
                  width: "100%",
                },
              }}
              iconURL={service.image}
              title={service.title}
              desc={service.desc}
              descsx={{
                fontSize: { xs: "13px", xl: "15px" },
              }}
            />
          ))}
        </Box>
      {/* <Box
        sx={{
          mt: "40px",
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(4, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "1fr",
          },
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        {backingOptions.map((option, index) => (
          <BackingOptionsCard
            key={index}
            title={option.title}
            description={option.description}
            cardStyle={{
              position: "relative",
              top:
                index == 1
                  ?{md: "50px"}
                  : index == 2
                  ? {md:"20px"}
                  : index == 3
                  ? {md:"15px"}
                  : "",
            }}
          />
        ))}
      </Box> */}
    </Box>
  );
};

export default BackingOptionsSection;
