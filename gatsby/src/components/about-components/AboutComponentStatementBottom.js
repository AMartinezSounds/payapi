import React from 'react';
import styled from 'styled-components';

import Statement from './Statement';

const AboutComponentStatementsBottomStyle = styled.div``;

function AboutComponentStatementBottom({
  title3,
  description3,
  title4,
  description4,
}) {
  return (
    <AboutComponentStatementsBottomStyle>
      <Statement title={title3} description={description3} />
      <Statement title={title4} description={description4} />
    </AboutComponentStatementsBottomStyle>
  );
}

export default AboutComponentStatementBottom;
