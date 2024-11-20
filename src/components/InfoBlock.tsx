import styled, {css} from "styled-components";

export  const InfoBlock =  styled.div<{height?:number | string }>`
    width: 100%;
    height: 100vh;
    //border: black 1px solid;
    padding: 2% 8% 0 8%;
        
    ${props =>
    css`
        height: ${typeof props.height === 'string' ? props.height : props.height + 'px'};
        `}

`