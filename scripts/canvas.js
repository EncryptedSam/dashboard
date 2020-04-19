window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisY: {
            title: "Amount",
            suffix: "k",
            gridThickness: 0
        },
        axisX: {
            title: "Monthly",
            gridThickness: 0
        },
        dataPointWidth: 20,
        data: [{
            color: "#4FA953",
            type: "column",
            // yValueFormatString: "#,##0.0#\"%\"",
            dataPoints: [
                { label: "Jan", y: 150},	
                { label: "Feb", y: 100 },	
                { label: "Mar", y: 250 },
                { label: "Apr", y: 120 },	
                { label: "May", y: 310 },
                { label: "Jun", y: 190 },
                { label: "Jul", y: 350 },
                { label: "Aug", y: 210 },
                { label: "Seb", y: 160 },
                { label: "Oct", y: 250 },
                { label: "Nov", y: 10 },
                { label: "Dec", y: 300 }
                
            ]
        }]
    });
    chart.render();

    let canvasjsChartContainer = document.querySelector(".canvasjs-chart-container");
    if(canvasjsChartContainer){ 
        let canv = canvasjsChartContainer.querySelectorAll("canvas");
        canv[1].style.position = "relative";
    }

}