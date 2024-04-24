
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


            // Total Visits

            var spark1 = {
                chart: {
                    id: 'unique-visits',
                    group: 'sparks2',
                    type: 'line',
                    height: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        top: 1,
                        left: 1,
                        blur: 2,
                        color: '#e2a03f',
                        opacity: 0.7,
                    }
                },
                series: [{
                    data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
                }],
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                markers: {
                    size: 0
                },
                grid: {
                    padding: {
                        top: 35,
                        bottom: 0,
                        left: 40
                    }
                },
                colors: ['#e2a03f'],
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function formatter(val) {
                                return '';
                            }
                        }
                    }
                },
                responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                    {
                        breakpoint: 1200,
                        options: {
                            chart: {
                                height: 80,
                            },
                            grid: {
                                padding: {
                                    top: 35,
                                    bottom: 0,
                                    left: 40
                                }
                            },
                        },
                    },
                    {
                        breakpoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0
                                }
                            },
                        },
                    }

                ]
            }

            // Paid Visits

            var spark2 = {
                chart: {
                    id: 'total-users',
                    group: 'sparks1',
                    type: 'line',
                    height: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 1,
                        blur: 3,
                        color: '#009688',
                        opacity: 0.7,
                    }
                },
                series: [{
                    data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
                }],
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                markers: {
                    size: 0
                },
                grid: {
                    padding: {
                        top: 35,
                        bottom: 0,
                        left: 40
                    }
                },
                colors: ['#009688'],
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function formatter(val) {
                                return '';
                            }
                        }
                    }
                },
                responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                    {
                        breakpoint: 1200,
                        options: {
                            chart: {
                                height: 80,
                            },
                            grid: {
                                padding: {
                                    top: 35,
                                    bottom: 0,
                                    left: 40
                                }
                            },
                        },
                    },
                    {
                        breakpoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 35,
                                    bottom: 0,
                                    left: 0
                                }
                            },
                        },
                    }
                ]
            }


            /*
              ===================================
                  Unique Visitors | Options
              ===================================
            */

            var d_1options1 = {
                series: [],
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false,
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: [1, 1, 4],
                },
                title: {
                    text: 'XYZ - Stock Analysis (2009 - 2016)',
                    align: 'left',
                    offsetX: 110,
                },
                xaxis: {
                    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                },
                yaxis: [
                    {
                        min: 0,
                        seriesName: 'Income',
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB',
                        },
                        labels: {
                            style: {
                                colors: '#008FFB',
                            },
                        },
                        title: {
                            text: 'Income (thousand crores)',
                            style: {
                                color: '#008FFB',
                            },
                        },
                        tooltip: {
                            enabled: true,
                        },
                    },
                    {
                        min: 0,
                        seriesName: 'Cashflow',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396',
                        },
                        labels: {
                            style: {
                                colors: '#00E396',
                            },
                        },
                        title: {
                            text: 'Operating Cashflow (thousand crores)',
                            style: {
                                color: '#00E396',
                            },
                        },
                    },
                    {
                        seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019',
                        },
                        labels: {
                            style: {
                                colors: '#FEB019',
                            },
                        },
                        title: {
                            text: 'Revenue (thousand crores)',
                            style: {
                                color: '#FEB019',
                            },
                        },
                    },
                ],
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                        offsetY: 30,
                        offsetX: 60,
                    },
                },
                legend: {
                    horizontalAlign: 'left',
                    offsetX: 40,
                },
            }

            /*
              ==============================
                  Statistics | Options
              ==============================
            */

            // Followers

            var d_1options3 = {
                chart: {
                    id: 'sparkline1',
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                series: [{
                    name: 'Sales',
                    data: [38, 60, 38, 52, 36, 40, 28 ]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#4361ee'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: 5,
                        right: 0,
                        left: 0
                    },
                },
                fill: {
                    type:"gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .30,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                }
            }

            // Referral

            var d_1options4 = {
                chart: {
                    id: 'sparkline1',
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                series: [{
                    name: 'Sales',
                    data: [ 60, 28, 52, 38, 40, 36, 38]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#e7515a'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: 5,
                        right: 0,
                        left: 0
                    },
                },
                fill: {
                    type:"gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .30,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                }
            }

            // Engagement Rate

            var d_1options5 = {
                chart: {
                    id: 'sparkline1',
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                fill: {
                    opacity: 1,
                },
                series: [{
                    name: 'Sales',
                    data: [28, 50, 36, 60, 38, 52, 38 ]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#00ab55'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: 5,
                        right: 0,
                        left: 0
                    },
                },
                fill: {
                    type:"gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .30,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                }
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


            // Total Visits

            var spark1 = {
                chart: {
                    id: 'unique-visits',
                    group: 'sparks2',
                    type: 'line',
                    height: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        top: 1,
                        left: 1,
                        blur: 2,
                        color: '#e2a03f',
                        opacity: 0.7,
                    }
                },
                series: [{
                    data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
                }],
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                markers: {
                    size: 0
                },
                grid: {
                    padding: {
                        top: 35,
                        bottom: 0,
                        left: 40
                    }
                },
                colors: ['#e2a03f'],
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function formatter(val) {
                                return '';
                            }
                        }
                    }
                },
                responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                    {
                        breakpoint: 1200,
                        options: {
                            chart: {
                                height: 80,
                            },
                            grid: {
                                padding: {
                                    top: 35,
                                    bottom: 0,
                                    left: 40
                                }
                            },
                        },
                    },
                    {
                        breakpoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 45,
                                    bottom: 0,
                                    left: 0
                                }
                            },
                        },
                    }

                ]
            }

            // Paid Visits

            var spark2 = {
                chart: {
                    id: 'total-users',
                    group: 'sparks1',
                    type: 'line',
                    height: 80,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 1,
                        blur: 3,
                        color: '#009688',
                        opacity: 0.7,
                    }
                },
                series: [{
                    data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
                }],
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                markers: {
                    size: 0
                },
                grid: {
                    padding: {
                        top: 35,
                        bottom: 0,
                        left: 40
                    }
                },
                colors: ['#009688'],
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function formatter(val) {
                                return '';
                            }
                        }
                    }
                },
                responsive: [{
                    breakpoint: 1351,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 35,
                                bottom: 0,
                                left: 0
                            }
                        },
                    },
                },
                    {
                        breakpoint: 1200,
                        options: {
                            chart: {
                                height: 80,
                            },
                            grid: {
                                padding: {
                                    top: 35,
                                    bottom: 0,
                                    left: 40
                                }
                            },
                        },
                    },
                    {
                        breakpoint: 576,
                        options: {
                            chart: {
                                height: 95,
                            },
                            grid: {
                                padding: {
                                    top: 35,
                                    bottom: 0,
                                    left: 0
                                }
                            },
                        },
                    }
                ]
            }


            /*
              ===================================
                  Unique Visitors | Options
              ===================================
            */

            var d_1options1 = {
                series: [],
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false,
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: [1, 1, 4],
                },
                title: {
                    text: 'XYZ - Stock Analysis (2009 - 2016)',
                    align: 'left',
                    offsetX: 110,
                },
                xaxis: {
                    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                },
                yaxis: [
                    {
                        min: 0,
                        seriesName: 'Income',
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB',
                        },
                        labels: {
                            style: {
                                colors: '#008FFB',
                            },
                        },
                        title: {
                            text: 'Income (thousand crores)',
                            style: {
                                color: '#008FFB',
                            },
                        },
                        tooltip: {
                            enabled: true,
                        },
                    },
                    {
                        min: 0,
                        seriesName: 'Cashflow',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396',
                        },
                        labels: {
                            style: {
                                colors: '#00E396',
                            },
                        },
                        title: {
                            text: 'Operating Cashflow (thousand crores)',
                            style: {
                                color: '#00E396',
                            },
                        },
                    },
                    {
                        seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019',
                        },
                        labels: {
                            style: {
                                colors: '#FEB019',
                            },
                        },
                        title: {
                            text: 'Revenue (thousand crores)',
                            style: {
                                color: '#FEB019',
                            },
                        },
                    },
                ],
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                        offsetY: 30,
                        offsetX: 60,
                    },
                },
                legend: {
                    horizontalAlign: 'left',
                    offsetX: 40,
                },
            }

            /*
              ==============================
                  Statistics | Options
              ==============================
            */

            // Followers

            var d_1options3 = {
                chart: {
                    id: 'sparkline1',
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                series: [{
                    name: 'Sales',
                    data: [38, 60, 38, 52, 36, 40, 28 ]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#4361ee'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: 5,
                        right: 0,
                        left: 0
                    },
                },
                fill: {
                    type:"gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .40,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                }
            }

            // Referral

            var d_1options4 = {
                chart: {
                    id: 'sparkline1',
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                series: [{
                    name: 'Sales',
                    data: [ 60, 28, 52, 38, 40, 36, 38]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#e7515a'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: 5,
                        right: 0,
                        left: 0
                    },
                },
                fill: {
                    type:"gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .40,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                }
            }

            // Engagement Rate

            var d_1options5 = {
                chart: {
                    id: 'sparkline1',
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                fill: {
                    opacity: 1,
                },
                series: [{
                    name: 'Sales',
                    data: [28, 50, 36, 60, 38, 52, 38 ]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                yaxis: {
                    min: 0
                },
                colors: ['#00ab55'],
                tooltip: {
                    x: {
                        show: false,
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: 5,
                        right: 0,
                        left: 0
                    },
                },
                fill: {
                    type:"gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .40,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                }
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

        // Total Visits
        d_1C_1 = new ApexCharts(document.querySelector("#total-users"), spark1);
        d_1C_1.render();

        // Paid Visits
        d_1C_2 = new ApexCharts(document.querySelector("#paid-visits"), spark2);
        d_1C_2.render();

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
            ==============================
                Statistics | Script
            ==============================
        */


        // Followers

        var d_1C_5 = new ApexCharts(document.querySelector("#hybrid_followers"), d_1options3);
        d_1C_5.render()

        // Referral

        var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_followers1"), d_1options4);
        d_1C_6.render()

        // Engagement Rate

        var d_1C_7 = new ApexCharts(document.querySelector("#hybrid_followers3"), d_1options5);
        d_1C_7.render()



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


                // Followers

                d_1C_5.updateOptions({
                    fill: {
                        type:"gradient",
                        gradient: {
                            opacityFrom: .30,
                        }
                    }
                })

                // Referral

                d_1C_6.updateOptions({
                    fill: {
                        type:"gradient",
                        gradient: {
                            opacityFrom: .30,
                        }
                    }
                })

                // Engagement Rate

                d_1C_7.updateOptions({
                    fill: {
                        type:"gradient",
                        gradient: {
                            opacityFrom: .30,
                        }
                    }
                })

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


                // Followers

                d_1C_5.updateOptions({
                    fill: {
                        type:"gradient",
                        gradient: {
                            opacityFrom: .40,
                        }
                    }
                })

                // Referral

                d_1C_6.updateOptions({
                    fill: {
                        type:"gradient",
                        gradient: {
                            opacityFrom: .40,
                        }
                    }
                })

                // Engagement Rate

                d_1C_7.updateOptions({
                    fill: {
                        type:"gradient",
                        gradient: {
                            opacityFrom: .40,
                        }
                    }
                })

            }

        })


    } catch(e) {
        // statements
        console.log(e);
    }

})