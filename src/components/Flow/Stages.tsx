"use client";

import React, { useState, useEffect } from "react";
import { users } from "@/data/data";
import { User } from "@/data/data";
import { Dropdown } from "flowbite-react";
import { Assignee, assignee } from "@/data/data";

const colorClasses = [
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
  "bg-yellow-100",
  "bg-purple-100",
];

interface Stage {
  id: number;
  name: string;
  category: string;
}

interface StagesProps {
  stage: Stage;
  index: number;
  workflowId: number;
}

const Stages = ({ stage, index, workflowId }: StagesProps) => {
  const [assignee, setAssignee] = useState<Assignee[]>([]);
  const [newAssignee, setNewAssignee] = useState<Assignee>({
    userId: 0,
    stageId: 0,
    userName: "",
    workflowId: 0,
  });

  useEffect(() => {
    const data = localStorage.getItem("assignee");
    if (data) {
      setAssignee(JSON.parse(data));
    }
    console.log(assignee);
  }, []);

  const handleClick = (
    userId: number,
    userName: string,
    stageId: number,
    workflowId: number
  ) => {
    const data = {
      userId: userId,
      stageId: stageId,
      userName: userName,
      workflowId: workflowId,
    };

    assignee.push(data);

    console.log(assignee);

    // add assignee to local storage
    const currentAssignee = JSON.parse(
      localStorage.getItem("assignee") || "[]"
    );
    currentAssignee.push(newAssignee);
    localStorage.setItem("assignee", JSON.stringify(assignee));

    const temp = localStorage.getItem("assignee");
    if (temp) {
      setAssignee(JSON.parse(temp));
    }
  };

  return (
    <div
      className={`${
        colorClasses[index % colorClasses.length]
      } p-4 rounded flex justify-between`}
    >
      <div>
        <p className="font-bold">
          {String(index + 1).padStart(2, "0")}. {stage.name}
        </p>
        <p>{stage.category}</p>
      </div>
      <div>
        <div className="flex justify-end">
          <Dropdown label="Assign" inline>
            {/* map users in drop down item */}
            {users.map((user: User) => (
              <Dropdown.Item
                onClick={() =>
                  handleClick(user.id, user.name, stage.id, workflowId)
                }
                key={user.id}
              >
                {user.name}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
        <div className="flex gap-1">
          {assignee &&
            assignee
              .filter(
                (a) => a.workflowId === workflowId && a.stageId === stage.id
              )
              .map((filteredAssignee) => filteredAssignee.userName)
              .join(", ")}
        </div>
      </div>
    </div>
  );
};

export default Stages;
