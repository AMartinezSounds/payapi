import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Statement from './Statement';

const AboutComponentStatementsBottomStyle = styled.div``;

function AboutComponentStatementBottom({
  title3,
  description3,
  title4,
  description4,
}) {
  return (
    <Fade bottom fraction="0.3">
      <AboutComponentStatementsBottomStyle>
        <Statement title={title3} description={description3} />
        <Statement title={title4} description={description4} />
      </AboutComponentStatementsBottomStyle>
    </Fade>
  );
}

export default AboutComponentStatementBottom;
