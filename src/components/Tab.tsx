import * as React from "react";
import { Tab, Tabs, TabPanel, type TabId } from "@blueprintjs/core";

function TabsControlledExample() {
    const TABS_PARENT_ID = React.useId();
    const [selectedTabId, setSelectedTabId] = React.useState<TabId>("Home");

    const handleCahnge = (id)=>{
        setSelectedTabId(id)
        console.log(id)

    }

    return (
        <>
            <Tabs id={TABS_PARENT_ID} onChange={(id)=>handleCahnge(id)} selectedTabId={selectedTabId}>
                <Tab id="Home" title="Home" />
                <Tab id="Files" title="Files" panel={<div>File</div>} />
                <Tab id="td" title="td" panel={<div>TD</div>}/>
                <Tab id="jk" title="jk" />
                <Tab id="hj" title="hj" />
            </Tabs>
            <TabPanel
                id={selectedTabId}
                selectedTabId={selectedTabId}
                parentId={TABS_PARENT_ID}
                panel={<p>The current panel id is: "{selectedTabId}"</p>}
            />
        </>
    );
}

export default TabsControlledExample;