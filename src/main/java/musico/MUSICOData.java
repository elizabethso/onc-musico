package musico;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import com.google.gdata.client.spreadsheet.FeedURLFactory;
import com.google.gdata.client.spreadsheet.SpreadsheetService;
import com.google.gdata.data.spreadsheet.CellFeed;
import com.google.gdata.data.spreadsheet.WorksheetEntry;
import com.google.gdata.data.spreadsheet.WorksheetFeed;
import com.google.gdata.util.ServiceException;
import com.opensymphony.xwork2.Action;

public class MUSICOData {
    private Map<String, Initiative> initiativeMap = new LinkedHashMap<String, Initiative>();
    private Map<String, GraphNode> graphMap = new LinkedHashMap<String, GraphNode>();
    private Map<String, GraphNode> initiativeNodeMap = new LinkedHashMap<String, GraphNode>();
    private final String key = "0AuFSm2k7RiYFdFF6bTNxR2h4Q20wZGMxTE83WnhFTHc";

    public String execute() throws IOException, ServiceException {
        SpreadsheetService service = new SpreadsheetService("MUSICO");
        URL url = FeedURLFactory.getDefault().getWorksheetFeedUrl(key, "public", "basic");
        List<CellFeed> cellFeeds = getCellFeeds(url, service);

        InitiativeLoader.loadInitiatives(cellFeeds.get(0), initiativeMap);
        InitiativeLoader.loadMeaningfulUse(cellFeeds.get(1), initiativeMap);
        InitiativeLoader.loadStandards(cellFeeds.get(2), initiativeMap);
        GraphLoader.loadGraphNodes(cellFeeds.get(3), graphMap);
        GraphLoader.loadGraphLinks(cellFeeds.get(4), graphMap);
        GraphLoader.loadGraphNodes(cellFeeds.get(5), initiativeNodeMap);
        GraphLoader.loadGraphLinks(cellFeeds.get(6), initiativeNodeMap);

        return Action.SUCCESS;
    }

    private List<CellFeed> getCellFeeds(URL url, SpreadsheetService service) throws IOException, ServiceException {
        List<CellFeed> cellFeeds = new ArrayList<CellFeed>();
        WorksheetFeed feed = service.getFeed(url, WorksheetFeed.class);
        List<WorksheetEntry> worksheetList = feed.getEntries();

        for (WorksheetEntry worksheet : worksheetList) {
            URL cellFeedUrl = worksheet.getCellFeedUrl();
            CellFeed cellFeed = service.getFeed(cellFeedUrl, CellFeed.class);
            cellFeeds.add(cellFeed);
        }
        return cellFeeds;
    }

    public Map<String, Initiative> getInitiativeMap() {
        return initiativeMap;
    }

    public void setInitiativeMap(Map<String, Initiative> initiativeMap) {
        this.initiativeMap = initiativeMap;
    }

    public Map<String, GraphNode> getGraphMap() {
        return graphMap;
    }

    public void setGraphMap(Map<String, GraphNode> graphMap) {
        this.graphMap = graphMap;
    }

    public Map<String, GraphNode> getInitiativeNodeMap() {
        return initiativeNodeMap;
    }

    public void setInitiativeNodeMap(Map<String, GraphNode> initiativeNodeMap) {
        this.initiativeNodeMap = initiativeNodeMap;
    }
}