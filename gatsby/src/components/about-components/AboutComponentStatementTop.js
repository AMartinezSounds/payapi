import React from 'react';
import styled from 'styled-components';

import Statement from './Statement';

const AboutComponentStatementsTopStyle = styled.div``;

function AboutComponentStatementTop({
  title1,
  description1,
  title2,
  description2,
}) {
  return (
    <AboutComponentStatementsTopStyle>
      <Statement title={title1} description={description1} />
      <Statement title={title2} description={description2} />
    </AboutComponentStatementsTopStyle>
  );
}

export default AboutComponentStatementTop;
