import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactButtonContainer = styled(motion.div)`
    position: fixed;
    bottom: 20px;
    right: 100px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    border-radius: 999px;
    background-color: #24cee5;
    cursor: pointer;
    @media(max-width: 768px){
        right: 30px;
    }
`