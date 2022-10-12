import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();

  return (
    <div className="d-flex justify-content-center mt-5">
      <AreaChart
        width={800}
        height={400}
        data={data.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
