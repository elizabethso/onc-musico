var Cic = function() {
	var Cic2 = {
			canvas: undefined,
			graph: undefined
	};

	var init = function (canvasId, graphData, displayData)
	{	
		Cic2.canvas = document.getElementById(canvasId);
		Cic.info = document.getElementById("cic_info");
		
		$jit.RGraph.Plot.NodeTypes.implement({
			'image': {
				'render': function(node, canvas) {
					var ctx = canvas.getCtx();
					var img = new Image();
					var pos = node.pos.getc(true);
					img.src = 'images/' + node.data.img_file;
					ctx.drawImage(img,pos.x-32,pos.y-70);
				}
			}
		});

		Cic2.graph = new $jit.RGraph(		
			{
				injectInto: Cic2.canvas,
				width: 600,
				height: 560,
				
				Edge:
				{
					overridable: true,
					type: 'line',
					color: $jit.util.rgbToHex([0, 100, 200])
				},
				
				Events:
				{
					enable: true,
					enableForEdges: true,
					onClick: function(nodeOrEdge, eventInfo, e)
					{
						var adjacence = eventInfo.getEdge();
						if (adjacence && !adjacence.data.hidden && adjacence.data.html &&
								(adjacence.nodeFrom._depth == 0 || adjacence.nodeTo._depth == 0))
						{

							Cic.info.innerHTML = "<h1>" + adjacence.nodeFrom.name + " &harr; " + 
							adjacence.nodeTo.name + "</h1><br/>";
						
							displayData(adjacence.data.html);
						}
						else
						{
							getHtml('instructions-template', "", false);
						}
					},
					onRightClick: function (obj, info, event)
					{
						var originNode = Cic2.graph.graph.getClosestNodeToOrigin();
						
						if (obj.id != originNode.id)
						{
							var adjacence = Cic2.graph.graph.getAdjacence(obj.id, originNode.id);
							
							if (adjacence && !adjacence.data.hidden && adjacence.data.html)
							{
								Cic.info.innerHTML = "<h1>" + adjacence.nodeFrom.name + " &harr; " + 
								adjacence.nodeTo.name + "</h1><br/>";
							
								displayData(adjacence.data.html);
							}
							else
							{
								getHtml('instructions-template', "", false);
							}
						}
					},
					
					onMouseEnter: function (obj, info, event)
					{
						Cic2.canvas.style.cursor = "pointer";
					},
					
					onMouseLeave: function (obj, info, event)
					{
						Cic2.canvas.style.cursor = "";
					}
				},
				
				Navigation:
				{
					enable: true,
					panning: false,
					zooming: false,
				},
				
				Node:
				{
					type: "image",
					overridable: true
				},
				
				Tips:
				{
				    enable: true,  
				    type: 'auto',  
				    offsetX: 20,  
				    offsetY: 20,  
				    onShow: function(tip, node) {  
				      tip.innerHTML = "<b>Instructions:</b> Click on an actor to bring <br/>" +
				      				"it to the center of the visualization tool, then <br/>" +
				      				"click on the opaque line or <br/>" +
				      				"right-click on a second actor to view the <br/>" +
				      				"S&I initiatives shared between the two actors";  
				    } 
				},
				
				onBeforePlotLine: function (adj)
				{
					adj.Edge.color = (adj.data.weight == 1.0) ? 
							$jit.util.rgbToHex([0, 150, 0]) : 
							$jit.util.rgbToHex([200, 0, 0]);
					adj.Edge.lineWidth=2;
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
					element.innerHTML = "<div id=\"" + node.name + "_inner\" class=\"inner_node\">" + node.name + "</div>";
					
					element.onclick = function ()
					{
						Cic2.graph.onClick(node.id);
					};
					
				},
				
				onPlaceLabel: function(element, node)
				{
					element.style.height = '80px';
					top_string = element.style.top;
					top_number = top_string.substring(0,top_string.indexOf('px'));
					element.style.top = (top_number - 70) + 'px';
				}
			}
		);
		$jit.RGraph.Label.HTML.implement({
                       placeLabel: function(tag, node, controller){
                               var pos = node.pos.getc(true),
                               canvas = this.viz.canvas,
                               ox = canvas.translateOffsetX,
                               oy = canvas.translateOffsetY,
                               sx = canvas.scaleOffsetX,
                               sy = canvas.scaleOffsetY,
                               radius = canvas.getSize();
                               var labelPos = {
                                       x: Math.round(pos.x * sx + ox + radius.width / 2.4), /* modified from "width / 2" to center label text-alignment */
                                       y: Math.round(pos.y * sy + oy + radius.height / 2)
                               };
                                       
                               var style = tag.style;
                               style.left = labelPos.x + 'px';
                               style.top = labelPos.y + 'px';
                               style.display = this.fitsInCanvas(labelPos, canvas)? '' : 'none';
                               
                               controller.onPlaceLabel(tag, node);
                       }
               });
		Cic2.graph.loadJSON(graphData);
		Cic2.graph.refresh();
		Cic2.graph.config.levelDistance=200;
		Cic2.graph.fx.sequence({
         onComplete: function() {
        	 /*alert('Instructions: Click on an actor to bring it to the center of the visualization tool then right-click on a second actor or click on the opaque line to view the S&I initiatives that share the relationship between the two actors');*/
         }
       });
	};
	
    return {
        init : init
    };
};