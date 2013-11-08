package musico;

import java.util.ArrayList;
import java.util.List;

public class Initiative {

    private String initiativeAbbr;
    private String initiativeName;
    private String initiativeDescription;
    private List<String> addInitiativeInfo = new ArrayList<String>();
    private List<MeaningfulUse> meaningfulUse = new ArrayList<MeaningfulUse>();
    private List<Standards> standards = new ArrayList<Standards>();

    public String getInitiativeAbbr() {
        return initiativeAbbr;
    }

    public void setInitiativeAbbr(String initiativeAbbr) {
        this.initiativeAbbr = initiativeAbbr;
    }

    public String getInitiativeName() {
        return initiativeName;
    }

    public void setInitiativeName(String initiativeName) {
        this.initiativeName = initiativeName;
    }

    public String getInitiativeDescription() {
        return initiativeDescription;
    }

    public void setInitiativeDescription(String initiativeDescription) {
        this.initiativeDescription = initiativeDescription;
    }

    public List<String> getAddInitiativeInfo() {
        return addInitiativeInfo;
    }

    public void setAddInitiativeInfo(List<String> addInitiativeInfo) {
        this.addInitiativeInfo = addInitiativeInfo;
    }

    public List<MeaningfulUse> getMeaningfulUse() {
        return meaningfulUse;
    }

    public void setMeaningfulUse(List<MeaningfulUse> meaningfulUse) {
        this.meaningfulUse = meaningfulUse;
    }

    public List<Standards> getStandards() {
        return standards;
    }

    public void setStandards(List<Standards> standards) {
        this.standards = standards;
    }
}