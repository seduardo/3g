// Teste grafico barras
var g = new G3.GraphBar({
	into:"container",
	kind:"webgl",
	title:"Teste de Gráfico",
	legend:{
		"X":{
			title:"Legenda X",
			values:[
				"jan", "fev", "mar", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"
			]
		},
		"Y":{
			title:"Legenda Y",
			min:0,
			max:11
		},
		"Z":{
			title:"Legenda Z",
			values:[
				2010,
				2011,
				2012
			]
		}
	},
	data:[
		[0,1,2,3,4,5,6,7,8,9,10,11],
		[11,10,9,8,7,6,5,4,3,2,1,0],
		[6,7,8,9,10,11,5,4,3,2,1,0]
	]
});
