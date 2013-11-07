package musico;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import com.google.gdata.data.spreadsheet.CellEntry;
import com.google.gdata.data.spreadsheet.CellFeed;

public class InitiativeLoader {

    public static void loadInitiatives(CellFeed cellFeed, Map<String, Initiative> initiativeMap) {
        Initiative initiative = null;

        for (CellEntry cell : cellFeed.getEntries()) {
            String cellId = cell.getId().substring(cell.getId().lastIndexOf('/') + 1);
            int colIdx = cellId.indexOf("C");
            int row = Integer.parseInt(cellId.substring(1, colIdx));
            int col = Integer.parseInt(cellId.substring(colIdx + 1));

            if (row > 1) {
                String cellValue = cell.getPlainTextContent();
                initiative = getInitiativeInfo(initiative, row, col, cellValue, initiativeMap);
            }
        }
        initiativeMap.put(initiative.getInitiativeAbbr(), initiative);
    }

    private static Initiative getInitiativeInfo(Initiative initiative, int row, int col, String cellValue, Map<String, Initiative> initiativeMap) {
        switch (col) {
            case 1:
                if (row > 2) {
                    initiativeMap.put(initiative.getInitiativeAbbr(), initiative);
                }
                initiative = new Initiative();
                initiative.setInitiativeAbbr(cellValue);
                break;
            case 2:
                initiative.setInitiativeName(cellValue);
                break;
            case 3:
                initiative.setInitiativeDescription(cellValue);
                break;
            default:
                initiative.getAddInitiativeInfo().add(cellValue);
                break;
        }
        return initiative;
    }

    public static void loadStandards(CellFeed cellFeed, Map<String, Initiative> initiativeMap) {
        List<String> list = new ArrayList<String>();
        String description = "";
        String name = "";

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
                            updateStandards(list, description, name, initiativeMap);
                            list = new ArrayList<String>();
                        }
                        name = cellValue;
                        break;
                    case 2:
                        description = cellValue;
                        break;
                    default:
                        list.add(cellValue);
                        break;
                }
            }
        }
        updateStandards(list, description, name, initiativeMap);
    }

    private static void updateStandards(List<String> list, String desc, String name, Map<String, Initiative> initiativeMap) {
        Initiative initiative = initiativeMap.get(name);

        List<Standards> standards = initiative.getStandards();
        standards.add(new Standards(desc, list));
        initiative.setStandards(standards);

        initiativeMap.put(name, initiative);
    }

    public static void loadMeaningfulUse(CellFeed cellFeed, Map<String, Initiative> initiativeMap) {
        List<String> list = new ArrayList<String>();
        String description = "";
        String name = "";

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
                            updateMeaningfulUse(list, description, name, initiativeMap);
                            list = new ArrayList<String>();
                        }
                        name = cellValue;
                        break;
                    case 2:
                        description = cellValue;
                        break;
                    default:
                        list.add(cellValue);
                        break;
                }
            }
        }
        updateMeaningfulUse(list, description, name, initiativeMap);
    }

    private static void updateMeaningfulUse(List<String> list, String desc, String name, Map<String, Initiative> initiativeMap) {
        Initiative initiative = initiativeMap.get(name);

        List<MeaningfulUse> meaningfulUse = initiative.getMeaningfulUse();
        meaningfulUse.add(new MeaningfulUse(desc, list));
        initiative.setMeaningfulUse(meaningfulUse);

        initiativeMap.put(name, initiative);
    }
}