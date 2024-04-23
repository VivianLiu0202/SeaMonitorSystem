window.addEventListener("load", function () {

    getcorkThemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getcorkThemeObject)
    ParsedObject = getParseObject;

    if (ParsedObject.settings.layout.darkMode) {

        Apex.grid = {
            borderColor: '#191e3a'
        }
        Apex.track = {
            background: '#0e1726',
        }
        Apex.tooltip = {
            theme: 'dark'
        }

        // Simple Line

        var sline = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            series: [{
                name: "总销售额",
                data: [100, 410, 350, 510, 490, 620, 690, 910, 1480, 1960, 1280, 880]
            }],
            title: {
                text: '水产品销售总额逐月展示(单位:万元)',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#3b3f5c', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            }
        }


        // Simple Line Area

        var sLineArea = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                name: '南岸基',
                data: [31, 40, 28, 51, 42, 109, 100, 89, 98, 102, 120, 88]
            }, {
                name: '北岸基',
                data: [11, 32, 45, 32, 34, 52, 41, 49, 60, 70, 80, 90]
            }],
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        // Simple Column

        var sCol = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'XX养殖法',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'YY养殖法',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }],
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            xaxis: {
                categories: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
            },
            yaxis: {
                title: {
                    text: '产苗量（千个）'
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }


        // Simple Column Stacked

        var sColStacked = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false,
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            series: [{
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43]
            }, {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27]
            }, {
                name: 'PRODUCT C',
                data: [11, 17, 15, 15, 21, 14]
            }, {
                name: 'PRODUCT D',
                data: [21, 7, 25, 13, 22, 8]
            }],
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
            },
            legend: {
                position: 'right',
                offsetY: 40,
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            fill: {
                opacity: 1
            },
        }

        // Simple Bar

        var sBar = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
            }
        }


        // Mixed Chart

        var options = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'line',
                toolbar: {
                    show: false,
                }
            },
            series: [{
                name: 'Website Blog',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
                name: 'Social Media',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Traffic Sources'
            },
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
                type: 'datetime'
            },
            yaxis: [{
                title: {
                    text: 'Website Blog',
                },

            }, {
                opposite: true,
                title: {
                    text: 'Social Media'
                }
            }]

        }


        // Donut Chart


        var donutChart = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'donut',
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                colors: '#0e1726'
            },
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            series: [44, 55, 41, 17],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }


        // Radial Chart

        var radialChart = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'radialBar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249
                            }
                        }
                    }
                }
            },
            series: [44, 55, 67, 83],
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        }

    } else {

        Apex.grid = {
            borderColor: '#ebedf2'
        }
        Apex.track = {
            background: '#e0e6ed',
        }
        Apex.tooltip = {
            theme: 'dark'
        }

        // Simple Line

        var sline = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            series: [{
                name: "总销售额",
                data: [100, 410, 350, 510, 490, 620, 690, 910, 1480, 1960, 1280, 880]
            }],
            title: {
                text: '水产品销售总额逐月展示(单位:万元)',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#e0e6ed', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            }
        }


        // Simple Line Area

        var sLineArea = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                name: '南岸基',
                data: [31, 40, 28, 51, 42, 109, 100, 89, 98, 102, 120, 88]
            }, {
                name: '北岸基',
                data: [11, 32, 45, 32, 34, 52, 41, 49, 60, 70, 80, 90]
            }],
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        // Simple Column

        var sCol = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'XX养殖法',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'YY养殖法',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }],
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            xaxis: {
                categories: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
            },
            yaxis: {
                title: {
                    text: '产苗量（千个）'
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }


        // Simple Column Stacked

        var sColStacked = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false,
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            series: [{
                name: '智能计算与预测、决策模块',
                data: [44, 55, 41, 67, 22, 43]
            }, {
                name: '传感器管理模块',
                data: [13, 23, 20, 8, 13, 27]
            }, {
                name: '数据采集与存储模块',
                data: [11, 17, 15, 15, 21, 14]
            }, {
                name: '数据基本统计与分析模块',
                data: [21, 7, 25, 13, 22, 8]
            }],
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
            },
            legend: {
                position: 'right',
                offsetY: 40,
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            fill: {
                opacity: 1
            },
        }

        // Simple Bar

        var sBar = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
            }
        }


        // Mixed Chart

        var options = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'line',
                toolbar: {
                    show: false,
                }
            },
            series: [{
                name: 'Website Blog',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
                name: 'Social Media',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Traffic Sources'
            },
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
                type: 'datetime'
            },
            yaxis: [{
                title: {
                    text: 'Website Blog',
                },

            }, {
                opposite: true,
                title: {
                    text: 'Social Media'
                }
            }]

        }


        // Donut Chart


        var donutChart = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'donut',
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                colors: '#e0e6ed'
            },
            legend: {
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -5,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                }
            },
            series: [44, 55, 41, 17],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }


        // Radial Chart

        var radialChart = {
            chart: {
                fontFamily: 'Nunito, Arial, sans-serif',
                height: 350,
                type: 'radialBar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249
                            }
                        }
                    }
                }
            },
            series: [44, 55, 67, 83],
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        }

    }

    // Simple Line

    var simpleLine = new ApexCharts(
        document.querySelector("#s-line"),
        sline
    );

    simpleLine.render();


    // Simple Line Area

    var simpleLineArea = new ApexCharts(
        document.querySelector("#s-line-area"),
        sLineArea
    );

    simpleLineArea.render();

    // Simple Column

    var simpleColumn = new ApexCharts(
        document.querySelector("#s-col"),
        sCol
    );

    simpleColumn.render();


    // Simple Column Stacked

    var simpleColumnStacked = new ApexCharts(
        document.querySelector("#s-col-stacked"),
        sColStacked
    );

    simpleColumnStacked.render();

    // Simple Bar

    var simpleBar = new ApexCharts(
        document.querySelector("#s-bar"),
        sBar
    );

    simpleBar.render();


    // Mixed Chart

    var mixed = new ApexCharts(
        document.querySelector("#mixed-chart"),
        options
    );

    mixed.render();


    // Donut Chart

    var donut = new ApexCharts(
        document.querySelector("#donut-chart"),
        donutChart
    );

    donut.render();


    // Radial Chart
    var radialChart = new ApexCharts(
        document.querySelector("#radial-chart"),
        radialChart
    );

    radialChart.render();


    /**
     * =================================================================================================
     * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
     * =================================================================================================
     */

    document.querySelector('.theme-toggle').addEventListener('click', function () {

        getcorkThemeObject = localStorage.getItem("theme");
        getParseObject = JSON.parse(getcorkThemeObject)
        ParsedObject = getParseObject;

        // console.log(ParsedObject.settings.layout.darkMode)

        if (ParsedObject.settings.layout.darkMode) {


            simpleLine.updateOptions({
                grid: {
                    borderColor: '#191e3a',
                    row: {
                        colors: ['#3b3f5c', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
            })


            simpleLineArea.updateOptions({
                grid: {
                    borderColor: '#191e3a'
                },
            })

            simpleColumn.updateOptions({
                grid: {
                    borderColor: '#191e3a'
                },
            })

            simpleColumnStacked.updateOptions({
                grid: {
                    borderColor: '#191e3a'
                },
            })

            simpleBar.updateOptions({
                grid: {
                    borderColor: '#191e3a'
                },
            })

            mixed.updateOptions({
                grid: {
                    borderColor: '#191e3a'
                },
            })

            donut.updateOptions({
                stroke: {
                    colors: '#0e1726'
                }
            })


        } else {
            // Apex.grid = {
            //     borderColor: '#ebedf2'
            // }
            // Apex.track = {
            //     background: '#e0e6ed',
            // }
            // Apex.tooltip = {
            //     theme: 'dark'
            // }


            simpleLine.updateOptions({
                grid: {
                    borderColor: '#ebedf2',
                    row: {
                        colors: ['#e0e6ed', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
            })


            simpleLineArea.updateOptions({
                grid: {
                    borderColor: '#ebedf2'
                },
            })

            simpleColumn.updateOptions({
                grid: {
                    borderColor: '#ebedf2'
                },
            })

            simpleColumnStacked.updateOptions({
                grid: {
                    borderColor: '#ebedf2'
                },
            })

            simpleBar.updateOptions({
                grid: {
                    borderColor: '#ebedf2'
                },
            })

            mixed.updateOptions({
                grid: {
                    borderColor: '#ebedf2'
                },
            })

            donut.updateOptions({
                stroke: {
                    colors: '#e0e6ed'
                }
            })

        }

    })

})