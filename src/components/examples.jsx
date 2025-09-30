import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  function handeleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
    return (
        <Section title="Examples" id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handeleSelect("components")}
            >
              Componets
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handeleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handeleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handeleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p id="tab-content">Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </Section>
    )
}