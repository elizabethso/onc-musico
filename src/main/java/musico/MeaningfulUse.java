package musico;

import java.util.ArrayList;
import java.util.List;

public class MeaningfulUse {

    private String header;
    private List<String> data = new ArrayList<String>();

    public MeaningfulUse(String header, List<String> data) {
        this.header = header;
        this.data = data;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public List<String> getData() {
        return data;
    }

    public void setData(List<String> data) {
        this.data = data;
    }
}
