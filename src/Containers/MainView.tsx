import React, { useState } from "react";
import { TableHeader } from "../Components/Table/TableHeader";
import { TableRow } from "../Components/Table/TableRow";
import data from "../data/sample.json";
import { MainLayout } from "../Layouts/MainLayout";
import "./MainView.css";

console.log(data);

export const MainView: React.FC = () => {
  // get unique labels from the data
  const [labels] = useState(
    Array.from(
      new Set(
        data.issues.reduce<string[]>(
          (pVal, cVal) => [...pVal, ...cVal.fields.labels],
          []
        )
      )
    )
  );

  return (
    <MainLayout>
      <div className="view-wrapper">
        <TableHeader
          label="Epics"
          issues={data.issues.filter(
            (issue) =>
              issue.fields.issuetype.name.toLocaleLowerCase() === "epic" &&
              (issue.fields.labels as string[]).includes("Roadmap")
          )}
        />
        {/* {labels.map((label) => (
          <TableRow
            label={label}
            issues={data.issues.filter((issue) =>
              (issue.fields.labels as string[]).includes(label)
            )}
          />
        ))} */}
      </div>
    </MainLayout>
  );
};
