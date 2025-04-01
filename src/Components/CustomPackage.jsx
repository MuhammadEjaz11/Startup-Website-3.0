import React from "react";
import { Box } from "@mui/material";
import { List, ListItem, ListItemIcon, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CustomPackage = ({
    month = "",
    PriceTag = "",
    title = "",
    desc = "",
    index = 0,
    style = {},
    sx1 = {},
    btnText = "",
    btnURL = "",
    listItem = [],
    i = 0,
}) => {
    return (
        <>
            <Box>
            </Box>

            <Box
                sx={{
                    
                    padding: {
                        xs: '20px 16px 30px 16px', // Small devices (extra-small or phones)
                        sm: '33px 26px 48px 31px', // Medium devices (tablets)
                        md: '33px 26px 48px 31px', // Larger devices (desktops)
                    },
                    backgroundColor: index === 3 ? '#FFC800' : 'inherit',
                    color: index === 3 ? 'white' : 'inherit',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease', // Smooth transition effect on hover
                    '&:hover': {
                        backgroundColor: '#FFC800', // Change background color on hover
                        color: 'white ! important', // Change text color on hover
                        transform: 'translateY(-10px)', // Slightly lift the card on hover
                        boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)', // Add shadow on hover
                    },
                    '&:hover p': {
                        color: 'white ! important', // Change text color on hover
                    },
                    '&:hover icon' : {
                        color:"white ! important",
                    },
                    '&:hover button ': {
                        backgroundColor: 'white ! important',
                    },
                    '&:hover Icon': {
                        color:"white ! important",
                    },
                    "&:hover i": {
                        color:"white ! important",
                    },
                    '&:hover ListItemIcon': {
                        color:'white ! important',
                    }
                }}
            >
                {/* Price Section */}
                <Typography sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Typography
                        sx={{
                            fontFamily: 'satoshi',
                            fontSize: {
                                xs: '36px', // Smaller font on mobile devices
                                sm: '48px', // Adjust font size for tablets
                                md: '54px', // Normal font size for desktops
                            },
                            fontWeight: 700,
                            lineHeight: {
                                xs: '46px',
                                sm: '56px',
                                md: '66px',
                            },
                            color: index === 3 ? 'white' : '#1E1E1E',
                        }}
                    >
                        {PriceTag}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: {
                                xs: '14px', // Smaller font for mobile devices
                                sm: '16px', // Normal size for larger screens
                            },
                            fontWeight: 400,
                            lineHeight: {
                                xs: '24px',
                                sm: '36.99px',
                            },
                            marginLeft: '10px',
                            color: index === 3 ? 'white' : '#1E1E1E',
                        }}
                    >
                        {month}
                    </Typography>
                        <Typography
                            sx={{
                                backgroundColor: '#FFFFFF69',
                                color: 'white',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                marginLeft: '10px',
                                fontFamily: 'Inter',
                                fontSize: '12px',
                                fontWeight: 500,
                            }}
                        >
                            Popular
                        </Typography>
                </Typography>

                {/* Title Section */}
                <Typography
                    sx={{
                        marginTop: '12px',
                        fontFamily: 'Inter',
                        fontSize: {
                            xs: '24px', // Smaller font for mobile devices
                            sm: '30px', // Normal font for tablets
                            md: '35px', // Larger font for desktops
                        },
                        fontWeight: 700,
                        lineHeight: {
                            xs: '28px',
                            sm: '32px',
                            md: '36px',
                        },
                        color: index === 3 ? 'white' : '#1E1E1E',
                    }}
                >
                    {title}
                </Typography>

                {/* Description Section */}
                <Typography
                    sx={{
                        maxWidth: '259px',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '28px',
                        marginTop: '16px',
                        color: '#fff',
                        marginBottom: '23px',
                    }}
                >
                    {desc}
                </Typography>

                {/* List Items Section */}
                {listItem.map((x, i) => (
                    <ListItem
                        key={i}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '28px',
                            color: '#939393' || index === 3 ? 'white' : '#fff',
                            listStyleType: 'none',
                            padding: '0px !important',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 'auto',
                                marginRight: '10px',
                                color: index === 3 ? 'white' : '#1E1E1E',
                            }}
                        >
                            <CheckCircleIcon
                                sx={{
                                    color: index === 3 ? 'white' : '#FFC800',
                                    width: '20px',
                                    height: '20px',
                                    '&:hover': {
                                        color: index === 3 ? '#FFC800' : '#fff', // Change text color on hover
                                    }
                                }}
                            />
                        </ListItemIcon>
                        <Typography
                            sx={{
                                color: index === 3 ? 'white' : '#1E1E1E',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '28px',
                                fontFamily: 'Inter',
                            }}
                        >
                            {x}
                        </Typography>
                    </ListItem>
                ))}

                {/* Button Section */}
                <Box>
                    <Button
                        sx={{
                            backgroundColor: index === 3 ? 'white !important' : '#FFC80033 !important',
                            padding: '14px 26px',
                            borderRadius: '8px',
                            color: index === 3 ? '#FFC800' : '#FFC800',
                            display: 'flex',
                            justifyContent: 'left',
                            fontFamily: 'satoshi',
                            fontSize: {
                                xs: '14px', // Smaller size for mobile
                                sm: '16px', // Regular size for tablet and desktop
                            },
                            lineHeight: '21.6px',
                            textTransform: 'capitalize',
                            marginTop: '30px',
                            transition: 'all 0.3s ease', // Smooth transition effect on hover
                            '&:hover': {
                                backgroundColor: index === 3 ? '#fff !important' : '#fff !important', // Change button color on hover
                                color: index === 3 ? '#FFC800' : '#FFC800', // Change text color on hover
                            }
                        }}
                    >
                        Choose Plan
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default CustomPackage;
