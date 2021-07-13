import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimationContainer = styled(motion.div)`
    width: 22%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: 20px;
    padding: 8px;
    margin-bottom: 8px;
    @media (max-width: 992px) {
        width: 80%;
    }
`;
