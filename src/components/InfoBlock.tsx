import styled, {css} from "styled-components";

export  const InfoBlock =  styled.div<{maxHeight?:number | string }>`
    width: 100%;
    height: fit-content;
    //border: black 1px solid;
    padding: 2% 8% 0 8%;
        
    ${props =>
    css`
        max-height: ${typeof props.height === 'string' ? props.height : props.height + 'px'};
        `}

`