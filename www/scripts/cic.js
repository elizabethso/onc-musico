var Cic = 
{
	canvas: undefined,
	
	info: undefined,
	
	graph: undefined,
	
	init: function ()
	{
		Cic.canvas = document.getElementById("cic");
		Cic.info = document.getElementById("cic_info");
		
		Cic.graph = new $jit.RGraph(
			{
				injectInto: Cic.canvas,
				width: 600,
				height: 600,
				
				Edge:
				{
					color: $jit.util.rgbToHex([0, 100, 200])
				},
				
				Events:
				{
					enable: true,
					enableForEdges: true,
					
					onRightClick: function (obj, info, event)
					{
						var originNode = Cic.graph.graph.getClosestNodeToOrigin();
						
						if (obj.id != originNode.id)
						{
							var adjacence = Cic.graph.graph.getAdjacence(obj.id, originNode.id);
							
							if (adjacence && !adjacence.data.hidden && adjacence.data.info)
							{
								Cic.info.innerHTML = "<h1>" + adjacence.nodeFrom.name + " &harr; " + 
									adjacence.nodeTo.name + "</h1>\n<h2>Initiatives</h2>\n<ul>";
								
								for (var a = 0; a < adjacence.data.info.length; a++)
								{
									var adjacenceInfo = adjacence.data.info[a];
									
									Cic.info.innerHTML += "\n\t<li><a href=\"" + adjacenceInfo.link + 
										"\" target=\"_blank\">" + adjacenceInfo.text + "</a></li>";
								}
								
								Cic.info.innerHTML += "</ul>";
							}
							else
							{
								Cic.info.innerHTML = "";
							}
						}
					},
					
					onMouseEnter: function (obj, info, event)
					{
						Cic.canvas.style.cursor = "pointer";
					},
					
					onMouseLeave: function (obj, info, event)
					{
						Cic.canvas.style.cursor = "";
					}
				},
				
				Navigation:
				{
					enable: true,
					panning: true,
					zooming: 10
				},
				
				Node:
				{
					color: $jit.util.rgbToHex([0, 100, 200]),
					dim: 5
				},
				
				onBeforePlotLine: function (adj)
				{
					adj.Edge.color = (adj.data.weight == 1.0) ? 
							$jit.util.rgbToHex([0, 150, 0]) : 
							$jit.util.rgbToHex([200, 0, 0]);
					
					if (adj.data.hidden)
					{
						adj.Edge.alpha = 0;
					}
					else if ((adj.nodeFrom._depth > 0) && (adj.nodeTo._depth > 0))
					{
						adj.Edge.alpha = .2;
					}
					else
					{
						adj.Edge.alpha = 1;
					}
				},
				
				onBeforePlotNode: function (node)
				{
					// TODO: figure out node alpha dynamic setting
				},
				
				onCreateLabel: function(element, node)
				{
					element.innerHTML = node.name;
					
					element.onclick = function ()
					{
						Cic.graph.onClick(node.id);
					}
				},
				
				onPlaceLabel: function(element, node)
				{
				}
			}
		);
		
		Cic.graph.loadJSON(CicData);
		Cic.graph.refresh();
	}
};
