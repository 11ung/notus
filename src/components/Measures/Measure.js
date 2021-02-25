import React from "react";

// components
import CardBarChart from "../Cards/CardBarChart.js";
import Circle from "../Misc/Circle.js";

export default function Measure({ location }) {
  const { measure } = location.state;
  const labels = Object.keys(measure.expressions).map((attribute, i) => `E${i}`);
  const expressionData = Object.values(measure.expressions);
  const improvementData = Object.values(measure.improvements);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-3xl text-gray-800">
                {measure.displayName}
              </h3>
            </div>
          </div>
        </div>
        <div> 
          <div className="flex flex-wrap">
            <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4 relative">
              <Circle number={measure.rating} />
            </div>
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardBarChart title="Expressions" labels={labels} data={expressionData} yAxis="No. of Instances" xAxis="Expression" />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <h3 className="font-semibold text-xl text-gray-800">Explanation</h3>
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Label
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Expression
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(measure.expressions).map((attribute, i) => (
                    <tr key={measure.name + `-${i}`}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                        {/* <td className="text-sm text-gray-800"></td> */}
                        E{i}
                        {/* <td className="text-sm text-gray-800"></td> */}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">{attribute}</td>
                    </tr>
                  ))}
                  </tbody>
              </table>
            </div>
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <CardBarChart title="Easy Fixes" labels={labels} data={improvementData} yAxis="Esimated HEDIS Growth" xAxis="Expression" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
