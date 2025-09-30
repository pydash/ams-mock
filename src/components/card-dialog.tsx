"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";

interface CardDialogProps {
  jobInfo: any;
}

export default function CardDialog({ jobInfo }: CardDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-auto pt-5 w-full">
          <Button size="lg" variant="default" className="w-full">
            View Details
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] overflow-y-scroll">
        <DialogHeader>
          <div className="flex gap-1">
            {jobInfo.tags.map((tag: string, index: number) => (
              <Badge variant="secondary" key={index} className="sm:text-xs">
                {tag.toUpperCase()}
              </Badge>
            ))}
          </div>
          <DialogTitle className="font-bold text-2xl my-3">
            {jobInfo.title}
          </DialogTitle>
          <div className="flex flex-col">
            <div className="font-medium text-lg">Overview</div>
            <DialogDescription className="text-md text-gray-700">
              {jobInfo.description}
            </DialogDescription>
          </div>
          <div className="flex flex-col">
            <div className="font-medium text-lg">Qualifications</div>
            <ul>
              {jobInfo.qualifications.map((item: string, index: number) => (
                <li className="text-md text-gray-700" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </DialogHeader>
        <Separator className="my-4" />
        <div className="flex flex-col gap-3">
          <div className="text-base">
            <span className="text-gray-500">Salary: </span>
            {jobInfo.salary}
          </div>
          <div className="text-base">
            <span className="text-gray-500">Location: </span>
            {jobInfo.location}
          </div>
          <div className="text-base">
            <span className="text-gray-500">Employment Type: </span>
            {jobInfo.employmentType}
          </div>
          <div className="text-base">
            <span className="text-gray-500">Posted Date: </span>
            {jobInfo.postedDate}
          </div>
          <div className="text-base">
            <span className="text-gray-500">Application Deadline: </span>
            {jobInfo.applicationDeadline}
          </div>
        </div>
        <Separator className="my-4" />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button type="submit">Apply now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
