import { motion } from "framer-motion";
import styled from "styled-components";

export const RealizacjeCardContaienr = styled(motion.div)`
    border-radius: 10px;
    width: 350px;
    height: auto;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 20px;
    cursor: pointer;

`

export const Text = styled.div`
    position: absolute;
    bottom: 5px;
    left: 10px;
    z-index: 30;
    color:#24cee5;
`