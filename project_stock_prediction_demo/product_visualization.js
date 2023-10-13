// fetch('sample_data.csv')
//   .then(response => response.text())
//   .then(data => {
//     console.log(data);
//   });




// var dates = [];
// var dataSeries = [
//     {
//         name: "series1",
//         data: []
//     }
// ];







var dateParser = d3.timeParse("%m/%d/%Y");
// var pathToCsv = 'sample_data.csv';
var pathToCsv = 'apple_bert_lstm.csv';


d3.csv(pathToCsv)
  .then(function(data) {
    data.forEach(function(d) {
      d.date = dateParser(d.Date);
      d.sentiment_score = +d['BERT Score'];
      d.adj_close_price = +d['Adj Close Price'];
      d.predicted_price = +d['Predicted Price'];
    });



    var options = {
            chart: {
              id: 'stock',
              group: 'apple',
              type: "area",
              stacked: false,
              height: 300,
              zoom: {
                type: "x",
                enabled: true
              },
              toolbar: {
                autoSelected: "zoom"
              }
            },
            dataLabels: {
              enabled: false
            },
            series: [
              // {
                // name: "Apple Inc.",
                // data: dates
              // }
              {
                name: 'Adj Close Price',
                data: data.map(function(d) {return [d.date, d.adj_close_price]}),
                // yAxisIndex: 0
              },
              {
                name: 'Predicted Price',
                data: data.map(function(d) {return [d.date, d.predicted_price]}),
                // yAxisIndex: 0
              },
              // {
              //   name: 'Sentiment Score',
              //   data: data.map(function (d) {return [d.date, d.sentiment_score * 100 + 100]}),
              //   type: 'scatter',
              //   yAxisIndex: 1
              // }
            ],
            markers: {
              size: 0
              // size: [0,0, 3],
              // colors: ['#ffffff', '#ffffff', '#FFC107'],
              // strokeWidth: 1,
              // strokeOpacity: 0.5,
              // strokeColors: ['#333', '#333', '#FFC107'],
              // fillOpacity: 1,
              // discrete: [
              //   {
              //     seriesIndex: 2,
              //     dataPointIndex: 0,
              //     fillColor: '#FFC107'
              //   }
              // colors: data.map(function (d) {return d.sentiment_score})
            },
            title: {
              text: "Stock Price Prediction",
              align: "left",
              offsetX: 10,
              offsetY: 0,
              // style: {
              //   fontSize:  '15px',
              //   fontWeight:  'bold',
              //   fontFamily:  undefined,
              //   // color:  '#263238'
              // }

            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0,
                stops: [0, 60, 100]
              }
            },

            yaxis: [
              {
                min: 125,
                max: 175,
                tickAmount: 20, 
                labels: {
                    minWidth: 40,
                    formatter: function(val) {
                        return (val).toFixed(0);
                  }
                },
                title: {
                  text: "Stock Price",
                }
              },
              // {
              //   opposite: true,
              //   min: 0,
              //   max: 1,
              //   tickAmount: 10, 
              //   labels: {
              //       formatter: function(val) {
              //           return (val).toFixed(2);
              //     }
              //   },
              //   axisTicks: {
              //     show: true
              //   },
              //   axisBorder: {
              //     show: true,
              //   },
              //   title: {
              //     text: "Sentiment Score",
              //   }
              // }
            ],
            xaxis: {
              tooltip: {
                enabled: false
              },
              type: "datetime",
              categories: data.map(function(d) {
                return d.date
              })
            },
            tooltip: {
                y: {
                  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return (value).toFixed(2)
                  }
                }
            },

            legend: {
              show: true,
              position: 'bottom',
              horizontalAlign: 'right', 
              floating: false,
              fontSize: '12px',
              fontFamily: 'Helvetica',
              formatter: undefined,
              width: undefined,
              height: undefined,
              tooltipHoverFormatter: undefined,
              offsetX: 10,
              offsetY: 20,

              labels: {
                  colors: '#8da096',
                  useSeriesColors: false
              },
              markers: {
                  width: 10,
                  height: 10,
                  strokeWidth: 0,
                  strokeColor: '#fff',
                  fillColors: undefined,
                  radius: 10,
                  customHTML: undefined,
                  onClick: undefined,
                  offsetX: 0,
                  offsetY: 0
              },
              itemMargin: {
                  horizontal: 5,
                  vertical: 5
              }
          }
          };


    // Create chart (rendering)
    var chart = new ApexCharts(document.querySelector("#stock"), options);
    chart.render();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





 // Create synced area chart
    var optionsColumn = {
          chart: {
            id: 'sentiment',
            group: 'apple',
            type: "bar",
            stacked: false,
            height: 200,
            zoom: {
              type: "x",
              enabled: true
            },
            toolbar: {
              autoSelected: "zoom"
            }
          },
          colors: '#ff014d',
          dataLabels: {
            enabled: false
          },
          plotOptions: {
            bar: {
              horizontal: false,
            }
          },
          series: [
            {
              name: 'Sentiment Score',
              data: data.map(function (d) {return [d.date, d.sentiment_score * 100]}),
            }
          ],
          markers: {
            size: [0]
          },
          title: {
            text: "Sentiment Score",
            align: "left",
            offsetX: 10,
            offsetY: 0,
          },

          yaxis: [
            {
              min: 0,
              max: 100,
              tickAmount: 10, 
              labels: {
                  minWidth: 40,
                  formatter: function(val) {
                      return (val ).toFixed(0);
                }
              },
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
              },
              title: {
                text: "Sentiment Score",
              }
            }
          ],
          xaxis: {
            tooltip: {
              enabled: false
            },
            type: "datetime",
            categories: data.map(function(d) {
              return d.date
            })
          },
          tooltip: {
              y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                  return (value).toFixed(2) + '%'
                }
              }
          },
        };

    var chartColumn = new ApexCharts(document.querySelector("#sentiment"), optionsColumn);
    chartColumn.render();







});
  


















// var circle_options = {
//   chart: {
//     height: 200,
//     type: "radialBar"
//   },
//   series: {
//     data: data.map(function (d) {return [ d.sentiment_score]})
//   },
//   colors: ["#20E647"],
//   plotOptions: {
//     radialBar: {
//       hollow: {
//         margin: 0,
//         size: "70%",
//         background: "#8b96a9"
//       },
//       track: {
//         dropShadow: {
//           enabled: true,
//           top: 2,
//           left: 0,
//           blur: 4,
//           opacity: 0.15
//         }
//       },
//       dataLabels: {
//         name: {
//           offsetY: -10,
//           color: "#fff",
//           fontSize: "13px"
//         },
//         value: {
//           show: true,
//           fontSize: '14px',
//           fontFamily: undefined,
//           fontWeight: 400,
//           color: undefined,
//           offsetY: 16,
//           formatter: function (val) {
//             return val*100 + '%'
//           }
//         }
//       }
//     }
//   },
//   fill: {
//     type: "gradient",
//     gradient: {
//       shade: "grey",
//       type: "vertical",
//       gradientToColors: ["#87D4F9"],
//       stops: [0, 100]
//     }
//   },
//   stroke: {
//     lineCap: "round"
//   },
//   labels: ["Sentiment"]
// };

// var sentiment_chart = new ApexCharts(document.querySelector("#sentiment-score"), circle_options);

// sentiment_chart.updateOptions({
//   chart: {
//     events: {
//       dataPointSelection: function(event, chartContext, config) {
//         var selectedDate = config.w.globals.labels[config.dataPointIndex];

//         // find the corresponding data object from the data array
//         var selectedData = data.find(function(d) {
//           return d.date.getTime() === new Date(selectedDate).getTime();
//         });

//         // update the value next to the chart with the sentiment score of the selected data
//         var sentimentValueElement = document.querySelector("#sentiment-value");
//         sentimentValueElement.innerText = selectedData.sentiment_score.toFixed(2);
//       }
//     }
//   }
// });

// sentiment_chart.render();
























            // tooltip: {
            //   y: {
            //     formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            //       if (seriesIndex === 3)  { // Sentiment Score series 인 경우
            //         return (value - 100).toFixed(2);
            //       } else {
            //         return (value).toFixed(2);
            //       }
            //     }
            //   }

            // },





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Create synced area chart
    // var optionsArea = {
    //       chart: {
    //         type: "area",
    //         stacked: false,
    //         height: 200,
    //         zoom: {
    //           type: "x",
    //           enabled: true
    //         },
    //         toolbar: {
    //           autoSelected: "zoom"
    //         }
    //       },
    //       dataLabels: {
    //         enabled: false
    //       },
    //       series: [
    //         {
    //           name: 'Sentiment Score',
    //           data: data.map(function (d) {return [d.date, d.sentiment_score]}),
    //           show: false
    //           // yAxisIndex: 1,
    //         }
    //       ],
    //       markers: {
    //         size: [0]
    //       },
    //       title: {
    //         text: "Sentiment Score",
    //         align: "left"
    //       },

    //       yaxis: [
    //         {
    //           min: 0,
    //           max: 1,
    //           tickAmount: 20, 
    //           labels: {
    //               formatter: function(val) {
    //                   return (val).toFixed(2);
    //             }
    //           },
    //           axisTicks: {
    //             show: true
    //           },
    //           axisBorder: {
    //             show: true,
    //           },
    //           title: {
    //             text: "Sentiment Score",
    //           }
    //         }
    //       ],
    //       xaxis: {
    //         tooltip: {
    //           enabled: false
    //         },
    //         type: "datetime",
    //         categories: data.map(function(d) {
    //           return d.date
    //         })
    //       },
    //       tooltip: {
    //           y: {
    //             formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
    //               return (value).toFixed(2)
    //             }
    //           }
    //       },
    //       legend: {
    //         show: true,
    //         position: 'bottom',
    //         horizontalAlign: 'right', 
    //         floating: false,
    //         fontSize: '12px',
    //         fontFamily: 'Helvetica',
    //         formatter: undefined,
    //         width: undefined,
    //         height: undefined,
    //         tooltipHoverFormatter: undefined,
    //         offsetX: 10,
    //         offsetY: 20,

    //         labels: {
    //             colors: '#8da096',
    //             useSeriesColors: false
    //         },
    //         markers: {
    //             width: 10,
    //             height: 10,
    //             strokeWidth: 0,
    //             strokeColor: '#fff',
    //             fillColors: undefined,
    //             radius: 10,
    //             customHTML: undefined,
    //             onClick: undefined,
    //             offsetX: 0,
    //             offsetY: 0
    //         },
    //         itemMargin: {
    //             horizontal: 5,
    //             vertical: 5
    //         }
    //     }
    //     };

    // var chartArea = new ApexCharts(document.querySelector("#chart-area"), optionsArea);
    // chartArea.render();

