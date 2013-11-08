package musico;

public class Adjacency {

    private String nodeFrom;
    private String nodeTo;
    private AdjacencyData data;

    public Adjacency(String nodeFrom, String nodeTo, AdjacencyData data) {
        this.nodeFrom = nodeFrom;
        this.nodeTo = nodeTo;
        this.data = data;
    }

    public String getNodeFrom() {
        return nodeFrom;
    }

    public void setNodeFrom(String nodeFrom) {
        this.nodeFrom = nodeFrom;
    }

    public String getNodeTo() {
        return nodeTo;
    }

    public void setNodeTo(String nodeTo) {
        this.nodeTo = nodeTo;
    }

    public AdjacencyData getData() {
        return data;
    }

    public void setData(AdjacencyData data) {
        this.data = data;
    }
}