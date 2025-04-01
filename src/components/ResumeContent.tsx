"use client";

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { RESUME_DATA, RESUME_CN_DATA } from "@/data/resume-data";
import { ResumeData } from '@/data/type';



export default function ResumeContent() {
    const [currentData, setCurrentData] = useState<ResumeData>(RESUME_CN_DATA);
    const [language, setLanguage] = useState<'EN' | 'CN'>('CN');

    const toggleLanguage = () => {
        if (language === 'EN') {
            setCurrentData(RESUME_CN_DATA as ResumeData);
            setLanguage('CN');
        } else {
            setCurrentData(RESUME_DATA);
            setLanguage('EN');
        }
    };

    return (
        <section className="mx-auto w-full space-y-8 bg-white print:space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1.5">
                    <h1 className="text-3xl font-bold">{currentData.name}</h1>
                    <p className="max-w-md text-pretty font-mono text-md text-muted-foreground print:text-[14px]">
                        {currentData.about}
                    </p>
                    <p className="max-w-md text-pretty font-mono font-bold italic text-md text-muted-foreground print:text-[14px]">
                        {currentData.slogan}
                    </p>
                    <p className="max-w-md items-center text-pretty font-mono text-md text-muted-foreground">
                        <a
                            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                            href={currentData.locationLink}
                            target="_blank"
                        >
                            <GlobeIcon className="size-3" />
                            {currentData.location}
                        </a>
                    </p>
                    <div className="flex gap-x-2 pt-1 flex-wrap items-center font-mono text-md text-muted-foreground">
                        {currentData.contact.email ? (
                            <Button
                                className="size-8"
                                variant="outline"
                                size="icon"
                                asChild
                            >
                                <a href={`mailto:${currentData.contact.email}`}>
                                    <MailIcon className="size-4" />
                                </a>
                            </Button>
                        ) : null}
                        <p className='text-md me-2'>{currentData.contact.email}</p>
                        {currentData.contact.tel ? (
                            <Button
                                className="size-8"
                                variant="outline"
                                size="icon"
                                asChild
                            >
                                <a href={`tel:${currentData.contact.tel}`}>
                                    <PhoneIcon className="size-4" />
                                </a>
                            </Button>
                        ) : null}
                        <p className='text-md me-2'>{currentData.contact.tel}</p>
                        {currentData.contact.social.map((social) => (
                            <Button
                                key={social.name}
                                className="size-8 ms-2"
                                variant="outline"
                                size="icon"
                                asChild
                            >
                                <a href={social.url}>
                                    {React.createElement(social.icon as React.ComponentType<{ className?: string }>, { className: "size-4" })}
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>

                <Avatar className="size-40">
                    <AvatarImage alt={currentData.name} src={currentData.avatarUrl} />
                    <AvatarFallback>{currentData.initials}</AvatarFallback>
                </Avatar>
            </div>

            <Button onClick={toggleLanguage} className='print:hidden'>
                {language === 'EN' ? '切換至繁體中文' : 'Switch to English'}
            </Button>

            <Section>
                <h2 className="text-xl font-bold">About</h2>
                <p className="text-pretty font-mono text-md text-muted-foreground print:text-[14px]">
                    {currentData.summary}
                </p>
            </Section>

            <Section>
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="flex flex-wrap gap-1">
                    {currentData.skills.map((skill) => (
                        <Badge className="print:text-[10px]" key={skill}>
                            {skill}
                        </Badge>
                    ))}
                </div>
            </Section>

            <Section>
                <h2 className="text-xl font-bold">Work Experience</h2>
                {currentData.work.map((work) => (
                    <Card key={work.company}>
                        <CardHeader>
                            <div className="flex items-center justify-between gap-x-2 text-base">
                                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                    <a className="hover:underline" href={work.link}>
                                        {work.company}
                                    </a>
                                    <span className="inline-flex gap-x-1">
                                        {work.badges.map((badge) => (
                                            <Badge
                                                variant="secondary"
                                                className="align-middle text-md print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                                                key={badge}
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                </h3>
                                <div className="text-md tabular-nums text-gray-500">
                                    {work.start} - {work.end ?? "Present"}
                                </div>
                            </div>
                            <h4 className="font-mono text-md leading-none print:text-[14px]">
                                {work.title}
                            </h4>
                        </CardHeader>
                        <CardContent className="mt-2 pb-5 text-md print:text-[12px] border-b whitespace-pre-line">
                            {work.description}
                        </CardContent>
                    </Card>
                ))}
            </Section>

            <Section>
                <h2 className="text-xl font-bold">Education</h2>
                {currentData.education.map((education) => (
                    <Card key={education.school}>
                        <CardHeader>
                            <div className="flex items-center justify-between gap-x-2 text-base">
                                <h3 className="font-semibold leading-none">{education.school}</h3>
                                <div className="text-md tabular-nums text-gray-500">
                                    {education.start} - {education.end}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-2 print:text-[14px]">
                            {education.degree}
                        </CardContent>
                    </Card>
                ))}
            </Section>

            <Section className='pt-2'>
                <h2 className="text-xl font-bold">Advanced Education</h2>
                {currentData.advanced.map((advanced) => (
                    <Card key={advanced.company}>
                        <CardHeader>
                            <div className="flex items-center justify-between gap-x-2 text-base">
                                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                    <a className="hover:underline" href={advanced.link}>
                                        {advanced.company}
                                    </a>
                                    <span className="inline-flex gap-x-1">
                                        {advanced.badges.map((badge) => (
                                            <Badge
                                                variant="secondary"
                                                className="align-middle text-md print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                                                key={badge}
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                </h3>
                                <div className="text-md tabular-nums text-gray-500">
                                    {advanced.start} - {advanced.end ?? "Present"}
                                </div>
                            </div>
                            <h4 className="font-mono text-md leading-none print:text-[14px]">
                                {advanced.title}
                            </h4>
                        </CardHeader>
                        <CardContent className="mt-2 text-md print:text-[10px]">
                            {advanced.description}
                        </CardContent>
                    </Card>
                ))}
            </Section>

            <Section className="scroll-mb-16">
                <h2 className="text-xl font-bold">Projects</h2>
                <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2 lg:grid-cols-2">
                    {currentData.projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            tags={project.techStack}
                            link={"link" in project ? project.link.href : undefined}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </Section>

            <Section className="">
                <h2 className="text-xl font-bold">Autobiography</h2>
                <div className="whitespace-pre-line">
                    {currentData.bio}
                </div>
            </Section>

            <CommandMenu
                links={[
                    ...currentData.contact.social.map((socialMediaLink) => ({
                        url: socialMediaLink.url,
                        title: socialMediaLink.name,
                    })),
                ]}
            />
        </section>
    );
}

// print-force-new-page