import { Box, Typography } from '@mui/material';
import React from 'react';
import FooterHeading from './FooterHeading';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomizedMenus2 from './OnHover2';
import CustomizedMenus from './ONHover';

const FooterMenu = ({
    style = {},
    heading = "",
    data = [],
    links = [],
    showSeeMore = true,
    hideSeeMore = "true"
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (link) => {
        if (link.startsWith("#")) {
            
                const id = link.substring(1); 
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
          
             else {

                navigate("/");
                setTimeout(() => {
                    const id = link.substring(1);
                    console.log(id)
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth',});
                    }
                }, 1000); // Delay to allow navigation to complete
            }
        } else {
            // Navigate to the specified route if not a hash link
            navigate(link);
        }
    };

    return (
        <Box sx={{
            flex: 1,
            flexGrow: '0',
            ...style,
        }}>
            <FooterHeading title={heading} />
            {
                data?.map((item, index) => (
                    <Typography
                        onClick={() => handleNavigate(links[index])}
                        key={index}
                        sx={{
                            fontSize: '16px',
                            cursor: "pointer",
                            paddingTop: '17px',
                            lineHeight: '36px',
                            color: "white",
                            fontWeight: "400",
                            fontFamily: "inter",
                            '&:hover': {
                                color: 'yellow', // Hover effect on text
                                transition: 'color 0.3s ease',
                            }
                        }}>
                        {item}
                    </Typography>
                ))
            }

            {
                window.innerWidth < 600 ? (
                    <CustomizedMenus
                        dropDownText={true}
                        buttonStyle={{
                            fontSize: '16px',
                            cursor: "pointer",
                            lineHeight: '36px',
                            color: "white",
                            fontWeight: 400,
                            fontFamily: "inter",
                            '&:hover': {
                                color: 'yellow',
                                transition: 'color 0.3s ease',
                                backgroundColor:""
                            },
                            p: "0px",
                            m: "0px",
                            paddingTop: '27px',
                            display: hideSeeMore ? "none" : "flex",
                        }}
                        serviceStyling={{ gridTemplateColumns: '1fr', p: "0px !important", }}
                    />
                ) : (
                    <CustomizedMenus2
                        dropDownText={true}
                        buttonStyle={{
                            fontSize: '16px',
                            cursor: "pointer",
                            lineHeight: '36px',
                            color: "white",
                            fontWeight: 400,
                            fontFamily: "inter",
                            '&:hover': {
                                color: 'yellow',
                                transition: 'color 0.3s ease',
                            },
                            p: "0px",
                            m: "0px",
                            paddingTop: '27px',
                            display: hideSeeMore ? "none" : "flex"
                        }}
                    />
                )
            }
        </Box>
    );
};

export default FooterMenu;
