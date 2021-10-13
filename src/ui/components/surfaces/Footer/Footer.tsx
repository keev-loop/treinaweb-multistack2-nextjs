import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from '@mui/material';


const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <FooterContainer> 
                <Box sx={{ maxWidth: '400px'}}>
                    <FooterTitle> Quem somos </FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: '16px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus fuga qui dignissimos, quibusdam eum delectus non accusamus inventore est, voluptatum iste nemo dolorem vitae adipisci architecto. Perferendis, temporibus aut.
                    </Typography>
                </Box>
                <div>
                <FooterTitle> Baixe nossos Apps </FooterTitle>
                <AppList>
                    <li>
                        <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                            <img src={'/img/logos/app-store.png'} alt={'App Store'} />
                        </a>
                    </li>
                    <li>
                        <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                            <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
                        </a>
                    </li>
                </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};


export default Footer;
