import React, { useContext } from "react";
import { LineChart } from "react-easy-chart";
import { userContext } from "../contexts/UserContext";

const MyLineChart = () => {
  const { user } = useContext(userContext);
  // console.log(user);

  return (
    user && (
      <LineChart
        style={{
          ".line": {
            strokeWidth: "4px",
          },
          "circle.data-point": {
            fill: "black !important",
            stroke: "black !important",
          },
          ".axis": {
            fontSize: "13px",
          },
          ".y.axis .domain": {
            strokeWidth: "0",
          },
          ".x.axis .domain": {
            strokeWidth: "0",
          },
        }}
        axes
        dataPoints
        grid
        yDomainRange={[0, 5]}
        yTicks={5}
        xType={"text"}
        interpolate={"cardinal"}
        width={450}
        height={270}
        lineColors={["goldenrod"]}
        data={[
          [
            { x: user.stats[0].day, y: user.stats[0].hrs },
            { x: user.stats[1].day, y: user.stats[1].hrs },
            { x: user.stats[2].day, y: user.stats[2].hrs },
            { x: user.stats[3].day, y: user.stats[3].hrs },
            { x: user.stats[4].day, y: user.stats[4].hrs },
            { x: user.stats[5].day, y: user.stats[5].hrs },
            { x: user.stats[6].day, y: user.stats[6].hrs },
          ],
        ]}
      />
    )
  );
};

export default MyLineChart;
