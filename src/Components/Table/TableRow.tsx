import React, { useEffect, useRef, useState } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import { Flex } from "@chakra-ui/react";
import { TableCell } from "./TableCell";
import moment from "moment";
import { usePopper } from "react-popper";
import "./TableRow.css";
import { CellMoreInfo } from "./CellMoreInfo";
import { getMilisecondsFromTablePosition } from "../../utils/timeUtils";
import { dataService } from "../../data/dataService";

const GridLayoutResponsive = WidthProvider(GridLayout);

interface TableRowProps {
  issue: any;
}

const YEAR_BASE = moment({ year: 2019 });

export const TableRow: React.FC<TableRowProps> = ({ children, issue }) => {
  const [showDetailsCard, setShowDetailsCard] = useState<boolean>(false);
  const [detailsCardContent, setDetailsCardContent] = useState({});
  const [layout, setLayout] = useState(() => {
    const dueDate = moment(issue.fields.duedate).subtract({
      seconds: issue.fields.timetracking.originalEstimateSeconds,
    });

    const estimate = moment(
      issue.fields.timetracking.originalEstimateSeconds * 1000
    );

    const x = (dueDate.get("weeks") - 1) * 2 + dueDate.get("day");

    const w = (estimate.get("weeks") - 1) * 2 + estimate.get("day");

    return { i: issue.id, x, y: 0, w, h: 1 };
  });

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const bodyRef = useRef<any>();

  const handleDateChange = (item: { x: number; w: number }) => {
    const startInMs = getMilisecondsFromTablePosition(item.x);
    const endInMs = startInMs + getMilisecondsFromTablePosition(item.w);

    let formattedStartDate;
    if (startInMs > 0) {
      formattedStartDate = YEAR_BASE.add(startInMs).format("YYYY MM DD");
    } else {
      formattedStartDate = YEAR_BASE.format("YYYY MM DD");
    }
    const formattedEndDate = YEAR_BASE.add(endInMs).format("YYYY MM DD");

    dataService.post("/", {
      dueDate: formattedStartDate,
      estimation: formattedEndDate,
    });
  };

  const handleMouseEnter = (
    issue: any,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setReferenceElement(e.currentTarget as any);
    setShowDetailsCard(true);
    setDetailsCardContent({
      labels: issue.fields.labels,
      estimation: moment(
        issue.fields.timetracking.originalEstimateSeconds * 1000
      ).get("week"),
      dueDate: issue.fields.duedate,
      summary: issue.fields.summary,
      description: issue.fields.description,
      issueKey: issue.key,
    });
  };

  const { styles, attributes, forceUpdate } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
        {
          name: "hide",
          enabled: false,
        },
        {
          name: "flip",
          enabled: true,
        },
      ],
      placement: "right-start",
      strategy: "absolute",
    }
  );
  useEffect(() => {
    if (showDetailsCard) {
      if (forceUpdate) {
        forceUpdate();
      }
    }
    bodyRef.current = document.body;
  }, [showDetailsCard]);

  return (
    <div className="table-row child-row">
      <Flex
        p={5}
        fontWeight="bold"
        fontSize="12px"
        alignItems="center"
        w="384px"
        borderRight="1px solid #aaa"
      >
        {issue.fields.summary}
      </Flex>
      <GridLayoutResponsive
        className="layout"
        autoSize={true}
        rowHeight={25}
        cols={12 * 12}
        resizeHandles={["e"]}
        onLayoutChange={(v: any) => {
          setLayout(v);
        }}
        onResizeStop={(_, __, item) => handleDateChange(item)}
        onDragStop={(_, __, item) => handleDateChange(item)}
      >
        <div
          key={issue.id}
          data-grid={layout}
          style={{ overflow: "hidden" }}
          onMouseEnter={handleMouseEnter.bind(this, issue)}
          onMouseLeave={() => setShowDetailsCard(false)}
        >
          <TableCell />
        </div>
      </GridLayoutResponsive>
      {showDetailsCard ? (
        <div
          ref={setPopperElement as any}
          style={{ zIndex: 9, ...styles.popper }}
          {...attributes.popper}
        >
          <CellMoreInfo {...detailsCardContent} />
        </div>
      ) : null}
    </div>
  );
};
