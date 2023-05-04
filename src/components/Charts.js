
import ReactEcharts from "echarts-for-react";

export default function Charts() {
  
  return (
      <ReactEcharts
        key={Date.now()}
        theme="light"
        width="50%"
        option={{
          series: [
            {
              type: 'gauge',
              center: ['50%', '45%'],
              startAngle: 400,
              radius: [70],
              splitNumber: 10,
              itemStyle: {
                color: '#aa77ff'
              },
              progress: {
                show: true,
                width: 20
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width:20
                }
              },
              axisTick: {
                distance: -35,
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999'
                }
              },
              splitLine: {
                distance: -35,
                length: 12,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: -10,
                color: '#999',
                fontSize: 10
              },
              title: {
                show: false
              },
              detail: {
                lineHeight: 40,
                offsetCenter: [0, '-15%'],
                fontSize: 20,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'inherit'
              },
              data: [
                {
                  value: 20
                }
              ]
            },
            {
              type: 'gauge',
              center: ['50%', '45%'],
              startAngle: 400,
              radius: [70],
              itemStyle: {
                color: '#aa77ff'
              },
              progress: {
                show: true,
                width: 8
              },
              pointer: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              detail: {
                show: false
              },
              data: [
                {
                  value: 20
                }
              ]
            }
          ]
        }}
        style={{ width: "100%", height: 400 }}
      />
  );
}
