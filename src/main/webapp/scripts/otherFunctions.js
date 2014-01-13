var initiatives = {};
var selectedInitiative="";
var roleNodes = undefined;
var initiativeNodes = undefined;
var rolesToInitiativesMap = {}; 

var graphMap = {};

var noRelationship = "No Current Relationship";

function loadAllData(){
	$.getJSON("./MUSICOData.action" , function(data){
		var CicData = new Array();
		var CicInitiativeNodeData = new Array();
		
		initiatives = data.initiativeMap;		
		graphMap = data.graphMap;
		
	    $.each(graphMap, function(key, val) {
	    	CicData.push(val);
	    	getSharedInitiatives(val.name, val.adjacencies);
	    });
	    
	    $("#loading").hide();

	    populateInitiativesDropdown();
	    
	    roleNodes = Cic();
	    roleNodes.init("rolesGraph", CicData, displayInitiativeData);
	    
	    $.each(data.initiativeNodeMap, function(key, val) {
	    	CicInitiativeNodeData.push(val);
	    });

	    initiativeNodes = Cic();
	    initiativeNodes.init("initiativesGraph", CicInitiativeNodeData, displayStandardsData);
	});
}

function getSharedInitiatives(key, adj){	
	var adjInitiatives = new Array();
	if(typeof(rolesToInitiativesMap[key]) != "undefined"){
		adjInitiatives = rolesToInitiativesMap[key];
	}
	
	for(var i = 0; i < adj.length; i++){		
		if(!adj[i].data.hidden){
			var links = adj[i].data.html;
			var nodeToId = adj[i].nodeTo;
			var nodeToName = graphMap[nodeToId].name;
			
			var nodeToInitiatives = new Array();
			if(typeof(rolesToInitiativesMap[nodeToName]) != "undefined"){	
				nodeToInitiatives = rolesToInitiativesMap[nodeToName];
			}
			
			for(var j=0; j < links.length; j++){
				var initiative = links[j];

				if(initiative != noRelationship){
					if($.inArray(initiative, adjInitiatives) <=-1){
						adjInitiatives.push(initiative);
					}
					if($.inArray(initiative, nodeToInitiatives) <=-1){
						nodeToInitiatives.push(initiative);
					}
				}
			}
			rolesToInitiativesMap[nodeToName] = nodeToInitiatives;
		}
	}
	rolesToInitiativesMap[key] = adjInitiatives;
}

function populateInitiativesDropdown(){
	var dropdown = document.getElementById("select");
    $.each(initiatives, function(key, val) {
    	dropdown[dropdown.length] = new Option(val.initiativeName, val.initiativeAbbr);
    });
}

function getSelectedInitiative(){
	$("select").change(function () {
	    selectedInitiative = $("select option:selected").val();
	    
	    if(roleNodes != undefined){
	    	roleNodes.refresh();
	    }
	  }).change();
}

function getHtml(template, data, isAppend){
	var link = "Initiative Info/templates.html";
	$.Mustache.load(link);

	$.ajax({
	    url: link,
	    type: 'get',
	    dataType: 'html',
	    success: function() {
	    	var result = $.Mustache.render(template, data);

	    	if(isAppend){
	    		Cic.info.innerHTML += result + "<br/>";
	    	}
	    	else{
	    		Cic.info.innerHTML = result;
	    	}
	    } 
	});
}

function displayInitiativeData(htmlLinks){
	Cic.info.innerHTML += "<h2>Initiatives</h2>";
	
	for(var i=0; i<htmlLinks.length; i++){
		var data = "";
		var initiative = htmlLinks[i];
		
		if(initiative != noRelationship){
			data = initiatives[initiative];
			
			data.initDescDiv = data.initiativeAbbr + '_initDescDiv';
			data.meaningfulUseDiv = data.initiativeAbbr + '_meaningfulUseDiv';
			data.standardsDiv = data.initiativeAbbr + '_standardsDiv';

			getHtml('initiative-template', data, true);
		}
		else{
			getHtml('initiativeTBD-template', "", true);
		}
	}
}

function displayStandardsData(htmlLinks){
	Cic.info.innerHTML += "<h2>Standards</h2>";
	
	for(var i=0; i<htmlLinks.length; i++){
		var data = htmlLinks[i];

		if(data != ""){
			Cic.info.innerHTML += "<li>"+ data + "</li>";			
		}
		else{
			getHtml('initiativeTBD-template', "", true);
		}
	}
	
	return Cic.info.innerHTML;
}

function hasInitiative(nodeName){
	if($.inArray(selectedInitiative, rolesToInitiativesMap[nodeName]) >-1){
	    return true;
	}
}