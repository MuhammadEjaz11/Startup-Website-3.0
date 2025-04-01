import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import StyledHeading from './StyledHeading';

const MobileAppDevelopmentCost = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        margin: '0 auto',
        paddingTop: { xs: '50px', md: '130px' },
        paddingX: { xs: '10px', md: '0px' },
      }}
    >
      {/* Title */}
      <Typography

        sx={{
          textAlign: { xs: 'center', md: 'left' },
          marginBottom: '60px',
          fontWeight: '400',
          fontFamily: 'satoshi-light',
          // fontSize: { xs: '28px', md: '50px' },
          lineHeight: { xs: '34px', md: '60px' },
          display: "none"
        }}
      >
        Cost Of{' '}
        <Typography
          style={{
            // fontSize: { xs: '28px', md: '50px' },
            color: '#1E1E1E',
            fontFamily: 'satoshi',
            fontWeight: 'bold',
            // fontSize: '50px',
            display: "none"

          }}
        >
          Mobile App Development
        </Typography>
      </Typography>

      <StyledHeading
        title1='Cost of'
        title2='Mobile App Development'
      />

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 'none',
          border: '2.5px solid #F1F1F1',
          borderRadius: '0px',
          marginTop: '30px',
          overflowX: 'auto',
          borderTop: 'none',
          borderBottom: 'none',


        }}
      >
        <Table aria-label="mobile app development cost table">

          <TableHead sx={{ backgroundColor: '#F8F8F8', border: "2px solid #F8F8F8" }}>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: 'satoshi',
                  fontWeight: '700',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },
                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  borderbottom: 'none !important',

                  width: '25%',
                }}
              >
                Type Of Mobile App
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: 'satoshi',
                  fontWeight: '700',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  width: '25%',
                }}
              >
                Simple App
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: 'satoshi',
                  fontWeight: '700',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  width: '25%',
                }}
              >
                Mid-level App
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: 'satoshi',
                  fontWeight: '700',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  padding: { xs: '10px', md: '20px' },
                  width: '25%',
                }}
              >
                Complex/Custom App
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Row 1: Description */}
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: 'Satoshi',
                  fontWeight: '700',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  verticalAlign: 'top',
                }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  fontFamily: 'Inter',
                  fontSize: { xs: '12px', xl: '16px', md: "14px" },
                  color: '#939393',
                  lineHeight: { xs: '28px', md: '36px' },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's



              </TableCell>
              <TableCell
                sx={{
                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  fontFamily: 'Inter',
                  fontSize: { xs: '12px', xl: '16px', md: "14px" },

                  color: '#939393',
                  lineHeight: { xs: '28px', md: '36px' },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </TableCell>
              <TableCell
                sx={{
                  padding: { xs: '10px', md: '20px' },
                  fontFamily: 'Inter',
                  fontSize: { xs: '12px', xl: '16px', md: "14px" },

                  color: '#939393',
                  lineHeight: { xs: '28px', md: '36px' },
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </TableCell>
            </TableRow>

            {/* Row 2: Cost */}
            <TableRow sx={{ backgroundColor: '#F6F6F6' }}>
              <TableCell
                sx={{
                  fontFamily: 'Satoshi',
                  fontWeight: '700',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  verticalAlign: 'center',
                  // border:"2px solid red"
                }}
              >
                Cost Of App Development
              </TableCell>
              <TableCell
                sx={{
                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  color: '#161616',
                  fontFamily: 'satoshi',
                  lineHeight: { xs: '32px', md: '41px' },
                }}
              >
                $35,000 - $50,000
              </TableCell>
              <TableCell
                sx={{
                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  color: '#161616',
                  fontFamily: 'satoshi',
                  lineHeight: { xs: '32px', md: '41px' },
                }}
              >
                $35,000 - $50,000
              </TableCell>
              <TableCell
                sx={{
                  padding: { xs: '10px', md: '20px' },
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  fontWeight: "700",
                  color: '#161616',
                  fontFamily: 'satoshi',
                  lineHeight: { xs: '32px', md: '41px' },
                }}
              >
                $35,000 - $50,000
              </TableCell>
            </TableRow>

            {/* Row 3: Top 5 Aspects */}
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: 'satoshi',
                  textTransform: 'capitalize',
                  fontSize: { xs: '12px', xl: '21px', md: "16px" },

                  fontWeight: "700",
                  padding: { xs: '10px', md: '20px' },
                  borderRight: '2.5px solid #F1F1F1',
                  verticalAlign: 'top',
                  borderBottom: "none !important"
                }}
              >
                Top 5 Aspects that Impact the Cost of App Development
              </TableCell>
              <TableCell
                colSpan={3} // Spans the last row across 3 columns horizontally
                sx={{
                  padding: { xs: '10px', md: '10px 20px 20px 40px' },
                  fontSize: { xs: '12px', xl: '16px', md: "14px" },

                  fontFamily: 'Inter',
                  color: '#939393',
                  lineHeight: { xs: '28px', md: '36px' },
                  borderBottom: "none !important"


                }}
              >
                <ol style={{
                  fontSize: "16px"
                }} >
                  <li style={{
                    fontSize: "16px"
                  }}  >App Complexity</li>
                  <li style={{
                    fontSize: "16px"
                  }}  >UI/UX Design Requirements</li>
                  <li style={{
                    fontSize: "16px"
                  }}  >Third-Party Integrations</li>
                  <li style={{
                    fontSize: "16px"
                  }}  >Platform Choice (Android/iOS/Hybrid)</li>
                  <li style={{
                    fontSize: "16px"
                  }}  >Maintenance & Updates</li>
                </ol>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        sx={{
          mt: "120px",
          borderTop: '2.5px solid #F1F1F1',


        }}
      >

      </Typography>
    </Box>
  );
};

export default MobileAppDevelopmentCost;
