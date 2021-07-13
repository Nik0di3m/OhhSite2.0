import { WrapperContainer } from "./WrapperElements"

const Wrapper = ({ children }) => {
    return (
        <WrapperContainer>
            {children}
        </WrapperContainer>
    )
}

export default Wrapper
