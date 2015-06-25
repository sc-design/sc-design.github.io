google.load("visualization", "1", {packages:["corechart"]});
google.load("visualization", "1.1", {packages:["calendar"]});

google.setOnLoadCallback(nEntregados);
google.setOnLoadCallback(onTime);
google.setOnLoadCallback(docStatus);
google.setOnLoadCallback(entStatus);
google.setOnLoadCallback(rechazos);

/***************************/
/***** ESTADO FLOTA ********/
/***************************/
google.setOnLoadCallback(dTotal);
google.setOnLoadCallback(dRuta);
google.setOnLoadCallback(dProgreso);
google.setOnLoadCallback(dEntregados);
google.setOnLoadCallback(dPendientes);
google.setOnLoadCallback(dParciales);
google.setOnLoadCallback(dRechazados);
google.setOnLoadCallback(dOnTime);


/***************************/
/******* CALENDARIO ********/
/***************************/
google.setOnLoadCallback(mostrarCalendario);


function nEntregados() {
  var data = new google.visualization.arrayToDataTable([
    ['Entregas', 'Percentage'],
    ["Entregados", 60],
    ["Pendientes", 140]
    ]);

  var options = {
    colors : ["#61b371","#d8d9de"],
    chartArea:{top:0,width:'100%',height:'100%'},
    legend: { position: 'none' }
  };

  var chart = new google.visualization.PieChart(document.getElementById('nEntregados'));
  chart.draw(data, options);
};

function onTime() {
  var data = new google.visualization.arrayToDataTable([
    ['Numero', 'Percentage'],
    ["onTime", 30],
    ["offTime", 200]
    ]);

  var options = {
    colors : ["#e4483e","#d8d9de"],
    chartArea:{top:0,width:'100%',height:'100%'},
    legend: { position: 'none' }
  };

  var chart = new google.visualization.PieChart(document.getElementById('onTime'));
  chart.draw(data, options);
};


function docStatus() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['EN RUTA', 3],
    ['EN CLIENTE', 1],
    ['ENTREGADOS', 1],  
    ['PENDIENTES', 1]
    ]);

  var options = {
    pieHole : 0.75,
    'width' : 360,
    'height' :170,
    pieSliceText : 'none',
    chartArea : {left:0,top:5,width:'90%',height:'90%'},
    colors : ["#0b78bb","#ef8c1f","#61b371","#f6d167"],
  };

  var chart = new google.visualization.PieChart(document.getElementById('documentos'));
  chart.draw(data, options);
}


function entStatus() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['EXITOSA', 7],
    ['CON REPAROS', 5],
    ['RECHAZADAS', 2]
    ]);

  var options = {
    pieHole : 0.75,
    'width' : 360,
    'height' :170,
    pieSliceText : 'none',
    chartArea : {left:0,top:5,width:'90%',height:'90%'},
    colors : ["#61b371","#ef8c1f","#e4483e"],
  };

  var chart = new google.visualization.PieChart(document.getElementById('entregas'));
  chart.draw(data, options);
}


function rechazos() {
  var data = new google.visualization.arrayToDataTable([
    ['Opening Move', 'Percentage'],
    ["DAÑO", 20],
    ["NO SOLICITADO", 18],
    ["NO CORRESPONDE", 15],
    ["OTRO", 10]
    ]);

  var options = {
    colors : ["#e4483e"],
    chartArea:{top:15,width:'65%',height:'60%'},
    legend: { position: 'none' },
    bars: 'horizontal',
    axes: {
      x: {
        0: { side: 'top', label: 'Percentage'}
      }
    },
    bar: { groupWidth: "50%" }
  };

  var chart = new google.visualization.BarChart(document.getElementById('rechazos'));
  chart.draw(data, options);
}



/***************************/
/***** ESTADO FLOTA ********/
/***************************/

function dTotal(){
  var data = new google.visualization.arrayToDataTable([
    ['Dato','Numero'],
    ["Total",200]
    ]);

  var options = {
    enableInteractivity : 'false',
    pieSliceText: 'label',
    colors : ["#0b78bb"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('dTotal'));
  chart.draw(data, options);
}

function dRuta(){
  var data = new google.visualization.arrayToDataTable([
    ['Dato', 'Numero'],
    ["En ruta" , 16],
    ["Total" ,200]
    ]);

  var options = {
    enableInteractivity : 'false',
    colors : ["#0b78bb","#c9c9c9"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend : 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('dRuta'));
  chart.draw(data, options);
}


function dProgreso(){
  var data = new google.visualization.arrayToDataTable([
    ['Dato','Numero'],
    ["En ruta" ,16],
    ["Total" ,200]
    ]);

  var options = {
    enableInteractivity : 'false',
    colors : ["#0b78bb","#c9c9c9"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('dProgreso'));
  chart.draw(data, options);
}

function dEntregados(){
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Tipo');
  data.addColumn('number', 'Cantidad');
  data.addRows([
    ['En ruta',16],
    ['Total',200]
    ]);

  var options = {
    enableInteractivity : 'false',
    colors : ["#0b78bb","#c9c9c9"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend: 'none',
  };

  var chart = new google.visualization.PieChart(document.getElementById('dEntregados'));
  chart.draw(data, options);
}


function dPendientes(){
  var data = new google.visualization.arrayToDataTable([
    ['',''],
    ["En ruta" , 16],
    ["Total" ,200]
    ]);

  var options = {
    enableInteractivity : 'false',
    colors : ["#0b78bb","#c9c9c9"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('dPendientes'));
  chart.draw(data, options);
}



function dParciales(){
  var data = new google.visualization.arrayToDataTable([
    ['Dato','Numero'],
    ["En ruta" , 16],
    ["Total" ,200]
    ]);

  var options = {
    enableInteractivity : 'false',
    colors : ["#0b78bb","#c9c9c9"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('dParciales'));
  chart.draw(data, options);
}



function dRechazados(){
  var data = new google.visualization.arrayToDataTable([
    ['Dato','Numero'],
    ["En ruta" , 16],
    ["Total" ,200]
    ]);

  var options = {
    enableInteractivity : 'false',
    colors : ["#e4483e","#c9c9c9"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('dRechazados'));
  chart.draw(data, options);
}



function dOnTime(){
  var data = new google.visualization.arrayToDataTable([
    ['Dato','Numero'],
    ["En ruta" , 16],
    ["Total" ,200]
    ]);

  var options = {
    enableInteractivity : 'false',
    colors : ["#0b78bb","#c9c9c9"],
    chartArea :{top:0, left:0, width:'95%', height:'95%'},
    pieHole : 0.8,
    pieSliceTextStyle: {
      color: '#8a8a8a', fontSize : '18',
    },
    pieSliceText : 'value',
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('dOnTime'));
  chart.draw(data, options);
}



/***************************/
/******* CALENDARIO ********/
/***************************/
function mostrarCalendario() {
 var dataTable = new google.visualization.DataTable();
 dataTable.addColumn({ type: 'date', id: 'Date' });
 dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
 dataTable.addRows([
  [ new Date(2012, 3, 13), 37032 ],
  [ new Date(2012, 3, 14), 38024 ],
  [ new Date(2012, 3, 15), 38024 ],
  [ new Date(2012, 3, 16), 38108 ],
  [ new Date(2012, 3, 17), 38229 ],
  [ new Date(2013, 9,  4), 38177 ],
  [ new Date(2013, 9,  5), 38705 ],
  [ new Date(2013, 9, 12), 38210 ],
  [ new Date(2013, 9, 13), 38029 ],
  [ new Date(2013, 9, 19), 38823 ],
  [ new Date(2013, 9, 23), 38345 ],
  [ new Date(2013, 9, 24), 38436 ],
  [ new Date(2013, 9, 30), 38447 ]
  ]);

 var options = {
   title: "",
   height: 350,
 };

 var chart = new google.visualization.Calendar(document.getElementById('calEventos'));

 chart.draw(dataTable, options);
}