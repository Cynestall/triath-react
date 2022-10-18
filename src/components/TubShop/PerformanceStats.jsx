import React from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";

export const PerformanceStats = () => {
  return (
    <PerformanceStatsDiv>
      <PerformanceStatRow>
        <PerformanceName>Pump</PerformanceName>
        <PerformanceBar percent={"70%"} />
      </PerformanceStatRow>
      <PerformanceStatRow>
        <PerformanceName>Energy</PerformanceName>
        <PerformanceBar percent={"60%"} />
      </PerformanceStatRow>
      <PerformanceStatRow>
        <PerformanceName>Strength</PerformanceName>
        <PerformanceBar percent={"75%"} />
      </PerformanceStatRow>
    </PerformanceStatsDiv>
  );
};

const PerformanceStatsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacings.spacing8};
`;
const PerformanceStatRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const PerformanceName = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.mainGrayTextColour};
  line-height: ${fonts.lineHeight24};
  font-size: ${fonts.fontSize20};
  margin: 0;
`;
const PerformanceBar = styled.div`
  width: 60%;
  height: 0.25rem;
  background: linear-gradient(
    to right,
    ${colours.primaryColour} ${(props) => props.percent || "0%"},
    ${colours.secondaryGrayColour} 0%
  );
`;
