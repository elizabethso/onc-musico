package musico;

import java.util.List;
import java.util.Map;
import com.google.gdata.data.spreadsheet.CellEntry;
import com.google.gdata.data.spreadsheet.CellFeed;

public class GraphLoader {
    public static void loadGraphNodes(CellFeed cellFeed, Map<String, GraphNode> graphMap) {
        GraphNode graphNode = null;

        for (CellEntry cell : cellFeed.getEntries()) {
            String cellId = cell.getId().substring(cell.getId().lastIndexOf('/') + 1);
            int colIdx = cellId.indexOf("C");
            int row = Integer.parseInt(cellId.substring(1, colIdx));
            int col = Integer.parseInt(cellId.substring(colIdx + 1));

            if (row > 1) {
                String cellValue = cell.getPlainTextContent();
                graphNode = getGraphNodeInfo(graphNode, col, cellValue, graphMap);
            }
        }
        graphMap.put(graphNode.getId(), graphNode);
    }

    private static GraphNode getGraphNodeInfo(GraphNode graphNode, int col, String cellValue, Map<String, GraphNode> graphMap) {
        switch (col) {
            case 1:
                graphNode = new GraphNode();
                graphNode.setId(cellValue);
                break;
            case 2:
                graphNode.setName(cellValue);
                break;
            case 3:
                graphNode.setData(new NodeData(cellValue));
                graphMap.put(graphNode.getId(), graphNode);
                break;
            default:
                break;
        }
        return graphNode;
    }

    public static void loadGraphLinks(CellFeed cellFeed, Map<String, GraphNode> graphMap) {
        String name = "";
        String nodeTo = "";
        String[] html = null;

        AdjacencyData adjData = new AdjacencyData();

        for (CellEntry cell : cellFeed.getEntries()) {
            String cellId = cell.getId().substring(cell.getId().lastIndexOf('/') + 1);
            int colIdx = cellId.indexOf("C");
            int row = Integer.parseInt(cellId.substring(1, colIdx));
            int col = Integer.parseInt(cellId.substring(colIdx + 1));

            if (row > 1) {
                String cellValue = cell.getPlainTextContent();
                switch (col) {
                    case 1:
                        if (row > 2) {
                            updateGraphNode(name, nodeTo, adjData, html, graphMap);
                            adjData = new AdjacencyData();
                            html = null;
                        }
                        name = cellValue;
                        break;
                    case 2:
                        nodeTo = cellValue;
                        break;
                    case 3:
                        html = cellValue.trim().split("\\s*[,]\\s*");
                        adjData.setHtml(html);
                        break;
                    default:
                        break;
                }
            }
        }
        updateGraphNode(name, nodeTo, adjData, html, graphMap);
    }

    private static void updateGraphNode(String name, String nodeTo, AdjacencyData data, String[] html, Map<String, GraphNode> graphMap) {
        if (html == null) {
            data.setHidden(true);
        } else {
            if (!html[0].equals("No Current Relationship")) {
                data.setWeight(1.0);
            }
        }

        GraphNode graphNode = graphMap.get(name);
        List<Adjacency> adjacencies = graphNode.getAdjacencies();
        adjacencies.add(new Adjacency(name, nodeTo, data));
        graphNode.setAdjacencies(adjacencies);
        graphMap.put(name, graphNode);
    }
}