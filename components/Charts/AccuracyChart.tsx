import React from 'react';
import { VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineMarkSeries, FlexibleXYPlot, GradientDefs } from 'react-vis';
import Dropdown from './Dropdown';
import InfoModal from './InfoModal';


export default function AccuracyChart(
    {
        data,
        XAxisLabel,
        YAxisLabel,
        title,
        description,
        dropdownData,
        setGraph,
        selected,
        setSelected
    }:
        {
            data: Array<any>,
            XAxisLabel: string,
            YAxisLabel: string,
            title: string,
            description: string,
            dropdownData: Array<any>,
            setGraph: Function,
            selected: Array<any>,
            setSelected: Function
        }
) {

    return (
        <div className="relative flex flex-col min-h-98 m-4 p-4 pl-0 bg-gray-100 rounded-md shadow-xl">
            <div className="absolute left-0 top-2">
                <Dropdown alignRight={false} options={dropdownData} handleUpdate={setGraph} selected={selected} setSelected={setSelected} />
            </div>
            <div>
                <InfoModal title={title} description={description} />
            </div>
            <div className="flex">
                <h3 className="yAxis ml-4 self-center rotate-180 font-bold whitespace-nowrap">{YAxisLabel}</h3>
                <div className="w-5/6">
                    <FlexibleXYPlot
                        xType="ordinal"
                        yType="linear"
                        colorType="linear"
                        colorDomain={[0, 5, 10]}
                        colorRange={["#2563EB", "#29D3E7", "#34D399"]}
                        height={300}
                        className="max-w-5/6 mt-2 mb-2 ml-4 mr-4 rounded-md">
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis top={(255)} style={{ fill: 'black', fontSize: '14px' }} hideLine />
                        <YAxis left={(10)} style={{ fill: 'black', fontSize: '14px' }} hideLine />
                        <GradientDefs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="lightblue" stopOpacity={0.4} />
                            </linearGradient>
                        </GradientDefs>

                        <LineMarkSeries animation="gentle" data={data} stroke="#2563EB" fill="#2563EB" style={{ strokeWidth: 4 }} curve={'curveMonotoneX'} />

                    </FlexibleXYPlot>
                </div>
            </div>

            <h3 className="text-center font-bold">{XAxisLabel}</h3>
        </div>
    );
}