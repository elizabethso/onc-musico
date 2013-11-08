package musico;

import java.util.ArrayList;
import java.util.List;

public class GraphNode {

    private String id;
    private String name;
    private NodeData data;
    private List<Adjacency> adjacencies = new ArrayList<Adjacency>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public NodeData getData() {
        return data;
    }

    public void setData(NodeData data) {
        this.data = data;
    }

    public List<Adjacency> getAdjacencies() {
        return adjacencies;
    }

    public void setAdjacencies(List<Adjacency> adjacencies) {
        this.adjacencies = adjacencies;
    }
}