import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import ResumeContent from "@/components/ResumeContent";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <ResumeContent />
    </main>
  );
}