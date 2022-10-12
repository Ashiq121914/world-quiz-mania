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
    <ResponsiveContainer className="mt-5" width="100%" height={600}>
      <AreaChart
        width={600}
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
    </ResponsiveContainer>
  );
};

export default Statistics;
