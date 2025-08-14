import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import TaskReport from "../report/TaskReport";

export default function TaskForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="overflow-x-auto">
      <h1 className="flex justify-center font-bold text-2xl  m-5">
        Task Entry
      </h1>
      <table className="table-fixed border-collapse border border-gray-300 w-full min-w-[800px] ">
        <thead>
          <tr className="bg-gray-100">
            {/* Table headers */}
            <th className="border border-gray-300 p-2 text-left">Ticket</th>
            <th className="border border-gray-300 p-2 text-left">User Name</th>
            <th className="border border-gray-300 p-2 text-left">Project</th>
            <th className="border border-gray-300 p-2 text-left">Task</th>
            <th className="border border-gray-300 p-2 text-left">Update</th>
            <th className="border border-gray-300 p-2 text-left">Solution</th>
            <th className="border border-gray-300 p-2 text-left">Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Inputs row */}
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                {...register("ticket", { required: "Ticket is required" })}
                error={!!errors.ticket}
                helperText={errors.ticket?.message}
              />
            </td>
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                type="number"
                variant="outlined"
                {...register("user_id", {
                  required: "User ID is required",
                  valueAsNumber: true,
                })}
                error={!!errors.user_id}
                helperText={errors.user_id?.message}
              />
            </td>
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                {...register("project", { required: "Project is required" })}
                error={!!errors.project}
                helperText={errors.project?.message}
              />
            </td>
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                {...register("task", { required: "Task is required" })}
                error={!!errors.task}
                helperText={errors.task?.message}
              />
            </td>
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                multiline
                rows={2}
                {...register("update")}
              />
            </td>
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                multiline
                rows={2}
                {...register("solution")}
              />
            </td>
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                multiline
                rows={2}
                {...register("remark")}
              />
            </td>
            {/* <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                {...register("createdBy", {
                  required: "Created By is required",
                })}
                error={!!errors.createdBy}
                helperText={errors.createdBy?.message}
              />
            </td>
            <td className="border border-gray-300 p-1">
              <TextField
                size="small"
                variant="outlined"
                {...register("modifiedBy")}
              />
            </td> */}
          </tr>
        </tbody>
      </table>

      <div className="flex justify-center m-5">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>

      <div>
        <TaskReport />
      </div>
    </form>
  );
}
