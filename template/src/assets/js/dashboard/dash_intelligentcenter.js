window.addEventListener("load", function(){
    try {

        getcorkThemeObject = localStorage.getItem("theme");
        getParseObject = JSON.parse(getcorkThemeObject)
        ParsedObject = getParseObject;

        if (ParsedObject.settings.layout.darkMode) {

            var Theme = 'dark';

            Apex.tooltip = {
                theme: Theme
            }

            /**
             ==============================
             |    @Options Charts Script   |
             ==============================
             */

            /*
              ======================================
                  Visitor Statistics | Options
              ======================================
            */
           // 环境监测
        var en_options = {
            series: [76],
            chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
          };




            /*
              ===================================
                  Unique Visitors | Options
              ===================================
            */

            var d_1options1 = {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['#622bd7', '#ffbb44'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded',
                        borderRadius: 10,

                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 8
                    }
                },
                grid: {
                    borderColor: '#191e3a',
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                series: [{
                    name: 'Direct',
                    data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
                }, {
                    name: 'Organic',
                    data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
                }],
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: Theme,
                        type: 'vertical',
                        shadeIntensity: 0.3,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0.8,
                        stops: [0, 100]
                    }
                },
                tooltip: {
                    marker : {
                        show: false,
                    },
                    theme: Theme,
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                responsive: [
                    {
                        breakpoint: 767,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 0,
                                    columnWidth: "50%"
                                }
                            }
                        }
                    },
                ]
            }


        } else {

            var Theme = 'dark';

            Apex.tooltip = {
                theme: Theme
            }

            /**
             ==============================
             |    @Options Charts Script   |
             ==============================
             */

            /*
              ======================================
                  Visitor Statistics | Options
              ======================================
            */
           // 环境监测
           var en_options = {
            series: [76],
            chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
          };





            /*
              ===================================
                  Unique Visitors | Options
              ===================================
            */

            var d_1options1 = {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['#622bd7', '#ffbb44'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded',
                        borderRadius: 10,

                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 8
                    }
                },
                grid: {
                    borderColor: '#e0e6ed',
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                series: [{
                    name: 'Direct',
                    data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
                }, {
                    name: 'Organic',
                    data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
                }],
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: Theme,
                        type: 'vertical',
                        shadeIntensity: 0.3,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0.8,
                        stops: [0, 100]
                    }
                },
                tooltip: {
                    marker : {
                        show: false,
                    },
                    theme: Theme,
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                responsive: [
                    {
                        breakpoint: 767,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 0,
                                    columnWidth: "50%"
                                }
                            }
                        }
                    },
                ]
            }

        }

        /**
         ==============================
         |    @Render Charts Script    |
         ==============================
         */


        /*
            ======================================
                Visitor Statistics | Script
            ======================================
        */

        enviroment = new ApexCharts(document.querySelector("#enviroment"), en_options);
        enviroment.render();

        /*
            ===================================
                Unique Visitors | Script
            ===================================
        */

        var d_1C_3 = new ApexCharts(
            document.querySelector("#uniqueVisits"),
            d_1options1
        );
        d_1C_3.render();







        /*
            =============================================
                Perfect Scrollbar | Notifications
            =============================================
        */
        const ps = new PerfectScrollbar(document.querySelector('.mt-container'));



        /**
         * =================================================================================================
         * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
         * =================================================================================================
         */

        document.querySelector('.theme-toggle').addEventListener('click', function() {

            getcorkThemeObject = localStorage.getItem("theme");
            getParseObject = JSON.parse(getcorkThemeObject)
            ParsedObject = getParseObject;

            // console.log(ParsedObject.settings.layout.darkMode)

            if (ParsedObject.settings.layout.darkMode) {

                /*
                   ==============================
                   |    @Re-Render Charts Script    |
                   ==============================
               */

                /*
                    ===================================
                        Unique Visitors | Script
                    ===================================
                */

                d_1C_3.updateOptions({
                    grid: {
                        borderColor: '#191e3a',
                    },
                })

                /*
                    ==============================
                        Statistics | Script
                    ==============================
                */

            } else {

                /*
                    ==============================
                    |    @Re-Render Charts Script    |
                    ==============================
                */

                /*
                    ===================================
                        Unique Visitors | Script
                    ===================================
                */

                d_1C_3.updateOptions({
                    grid: {
                        borderColor: '#e0e6ed',
                    },
                })

                /*
                    ==============================
                        Statistics | Script
                    ==============================
                */

            }

        })


    } catch(e) {
        // statements
        console.log(e);
    }

})