"use client";

import React, { useState, useEffect } from "react";
import { users } from "@/data/data";
import { User } from "@/data/data";
import { Dropdown } from "flowbite-react";
// import { Assignee, assignee } from "@/data/data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addAssignee } from "@/redux/services/assignee/assigneeAction";
import { useGetUsersQuery } from "@/redux/services/Recruiter/recruiterAction";
import { Stage } from "@/types/stage";
import { Assignee } from "@/types/assign";
import Recruiter from "@/types/recruiter";
import { parseJwt } from "@/lib/Constants";
import { getSession } from "next-auth/react";

const colorClasses = [
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
  "bg-yellow-100",
  "bg-purple-100",
];

interface StagesProps {
  stage: Stage;
  index: number;
  workflowId: number;
}

const Stages = ({ stage, index, workflowId }: StagesProps) => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.assigneeReducer);
  const { data, error, isLoading } = useGetUsersQuery();
  const [assignee, setAssignee] = useState<Assignee[]>([]);
  const [employees, setEmployees] = useState<Recruiter[]>([]);
  const [decodedData, setDecodedData] = useState(null);
  const [newAssignee, setNewAssignee] = useState<Assignee>({
    recruiterId: 0,
    name: "Hassan",
  });

  // useEffect(() => {
  //   const data = localStorage.getItem("assignee");
  //   if (data) {
  //     setAssignee(JSON.parse(data));
  //   }
  //   console.log(assignee);
  // }, []);

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = await getSession();
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      // setCompanyId(decodedData?.companyId);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      setEmployees(data?.data);
    }
  }, [data]);

  const handleClick = (
    userId: number,
    userName: string,
    stageId: string,
    workflowId: string
  ) => {
    const data = {
      assignees: [
        {
          recruiterId: userId,
          name: userName,
        },
      ],
    };

    dispatch(addAssignee({ stageId, workflowId, assignees: data }));

    // assignee.push(data);

    // console.log(assignee);

    // // add assignee to local storage
    // const currentAssignee = JSON.parse(
    //   localStorage.getItem("assignee") || "[]"
    // );
    // currentAssignee.push(newAssignee);
    // localStorage.setItem("assignee", JSON.stringify(assignee));

    // const temp = localStorage.getItem("assignee");
    // if (temp) {
    //   setAssignee(JSON.parse(temp));
    // }
  };

  return (
    <div
      className={`${
        colorClasses[index % colorClasses.length]
      } p-4 rounded flex justify-between`}
    >
      <div>
        <p className="font-bold">
          {String(index + 1).padStart(2, "0")}. {stage.stageName}
        </p>
        <p>{stage.category}</p>
      </div>
      <div>
        <div className="flex justify-end">
          <Dropdown label="Assign" inline>
            {/* map users in drop down item */}
            {employees.map((user: Recruiter) => (
              <Dropdown.Item
                onClick={() =>
                  handleClick(
                    user?.recruiterId,
                    user?.name,
                    stage?.stageId.toString(),
                    workflowId.toString()
                  )
                }
                key={user?.name}
              >
                {user.name}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
        {/* <div className="flex gap-1">
          {assignee &&
            assignee
              .filter(
                (a) =>
                  a.workflowId === workflowId && a.stageId === stage.stageId
              )
              .map((filteredAssignee) => filteredAssignee.userName)
              .join(", ")}
        </div> */}
      </div>
    </div>
  );
};

export default Stages;
