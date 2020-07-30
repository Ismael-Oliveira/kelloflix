import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    height: 80%;
  }

`;


export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 60%;

  @media (max-width: 800px) {
    height: 80%;
  }
`;