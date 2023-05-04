
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts';
export default function Graph() {
  
  return (
      <ReactEcharts
        key={Date.now()}
        theme="light"
        width="50%"
        option={{
            legend: {
                data: ['Electricity Consumed']
              },
              grid: {
                left: '6%',
                right: '8%',
                bottom: '25%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  splitLine: {
                    show: false
                  }
                }
              ],
              series: [
                {
                  name: 'Electricity Consumed',
                  type: 'line',
                  smooth: true,
                  lineStyle: {
                    width: 2,
                    color: '#D14D72'
                  },
                  showSymbol: true,
                  color:'#D14D72',
                  areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgb(255, 171, 171)'
                      },
                      {
                        offset: 1,
                        color: 'rgb(254, 242, 244)'
                      }
                    ])
                  },
                  data: [140, 232, 101, 264, 90, 340, 250]
                },
              ]
        }}
        style={{ width: "100%", height: 400 }}
      />
  );
}
