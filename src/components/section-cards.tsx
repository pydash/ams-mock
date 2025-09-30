import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import JobListing from "@/lib/models";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ApplicationProgress from "./application-progress";
import { Button } from "./ui/button";
import CardDialog from "./card-dialog";

export function SectionCards() {
  const CardData = [
    {
      id: 1,
      title: "Mathematics Teacher",
      description:
        "Responsible for teaching various branches of mathematics including Algebra, Geometry, Trigonometry, and Calculus to senior high school students. The role involves preparing lesson plans aligned with the school curriculum, conducting engaging classroom lectures, and designing activities that promote analytical and problem-solving skills. The teacher will also be responsible for assessing student performance through quizzes, assignments, and exams while offering constructive feedback. Additionally, the role requires mentoring students in academic competitions, coordinating with other faculty members for interdisciplinary projects, and attending faculty development seminars to enhance teaching methodologies.",
      department: "Education",
      location: "Senior High School Department, Building A",
      employmentType: "Full-Time",
      salary: "₱25,000 - ₱35,000 / month",
      qualifications: [
        "Bachelor's degree in Education or Mathematics",
        "Valid teaching license",
        "At least 2 years of teaching experience",
        "Strong communication and classroom management skills",
      ],
      skills: [
        "Lesson planning",
        "Algebra and Calculus expertise",
        "Classroom management",
        "Student mentorship",
        "Curriculum development",
      ],
      tags: ["teaching", "mathematics", "full-time", "education"],
      status: "Open",
      postedDate: "09-20-2025",
      applicationDeadline: "10-10-2025",
    },
    {
      id: 2,
      title: "School Nurse",
      description:
        "Provides healthcare services to students, faculty, and staff by conducting routine health assessments, managing medical records, and responding promptly to medical emergencies within the school premises. The nurse is expected to administer first aid treatments, monitor students with chronic health conditions, and implement health education campaigns focusing on hygiene, nutrition, and mental well-being. They will also coordinate with local health agencies for vaccination programs, maintain the school clinic’s inventory of medical supplies, and assist in creating health policies and protocols to ensure a safe learning environment for everyone on campus.",
      department: "Health Services",
      location: "Clinic, Ground Floor, Building C",
      employmentType: "Full-Time",
      salary: "₱20,000 - ₱30,000 / month",
      qualifications: [
        "Bachelor of Science in Nursing (BSN)",
        "Registered Nurse (RN) license",
        "CPR and First Aid Certification",
        "Strong interpersonal skills and empathy",
      ],
      skills: [
        "Patient care",
        "CPR and first aid",
        "Medical record keeping",
        "Emergency response",
        "Health assessments",
      ],
      tags: ["healthcare", "nurse", "student care", "full-time"],
      status: "Open",
      postedDate: "09-22-2025",
      applicationDeadline: "10-15-2025",
    },
    {
      id: 3,
      title: "IT Support Specialist",
      description:
        "Responsible for providing technical support and ensuring the smooth operation of the school's IT infrastructure, including computers, printers, networks, and audiovisual equipment. This role involves troubleshooting hardware and software issues, setting up new systems for faculty and staff, and maintaining data security measures such as backups and access control. The IT Support Specialist will collaborate with administrators to implement school-wide technology initiatives, assist in training faculty on new digital tools, and monitor system performance to prevent disruptions. Occasional after-hours support for events requiring technical assistance may also be necessary.",
      location: "IT Office, Building B",
      employmentType: "Contractual",
      salary: "₱18,000 - ₱25,000 / month",
      qualifications: [
        "Bachelor's degree in Computer Science, IT, or related field",
        "Experience with troubleshooting hardware and software",
        "Knowledge of networking and system administration",
        "Excellent problem-solving skills",
      ],
      skills: [
        "Hardware and software troubleshooting",
        "Network configuration",
        "System administration",
        "Technical documentation",
        "User support and training",
      ],
      tags: ["IT", "technology", "support", "contract"],
      status: "Open",
      postedDate: "09-18-2025",
      applicationDeadline: "10-05-2025",
    },
    {
      id: 4,
      title: "Guidance Counselor",
      description:
        "Works closely with students to support their academic, emotional, and social development throughout the school year. The counselor will conduct individual and group counseling sessions, help students navigate personal challenges, and provide guidance on academic planning and career options. They will also organize wellness programs, parent-teacher consultations, and peer mentorship initiatives to foster a supportive school environment. In addition, the counselor will develop crisis intervention plans, collaborate with teachers to identify students needing extra assistance, and maintain confidential records to ensure ethical and professional counseling practices.",
      location: "Guidance Office, Building D",
      employmentType: "Full-Time",
      salary: "₱23,000 - ₱32,000 / month",
      qualifications: [
        "Bachelor's or Master's degree in Psychology or Guidance Counseling",
        "Licensed Guidance Counselor",
        "Experience working with students in an academic setting",
        "Strong organizational and interpersonal skills",
      ],
      skills: [
        "Counseling techniques",
        "Career development planning",
        "Conflict resolution",
        "Student wellness program management",
        "Active listening",
      ],
      tags: ["counseling", "student affairs", "psychology", "full-time"],
      status: "Open",
      postedDate: "09-25-2025",
      applicationDeadline: "10-20-2025",
    },
  ];

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {CardData.map((data, index) => (
        <Card key={index} className="@container/card">
          <CardHeader>
            <div className="flex flex-wrap">
              {data.tags.map((tag, idx) => (
                <Badge
                  variant="outline"
                  key={idx}
                  className="mr-1 mb-1 text-xs"
                >
                  {tag.toUpperCase()}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.title}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex flex-col items-start gap-1.5 text-sm h-full">
            {/* Top Content */}
            <div className="line-clamp-1 flex justify-center gap-1 font-medium">
              <MapPin className="h-4 w-4" />
              {data.location}
            </div>

            <div className="text-muted-foreground line-clamp-3">
              {data.description}
            </div>
            <div className="text-secondary-foreground">
              Posted: {data.postedDate}
            </div>

            {/* Button stays at bottom */}
            <CardDialog jobInfo={data} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
