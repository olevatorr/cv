"use client";

import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GlobeIcon, MailIcon, PhoneIcon, ExternalLink } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { RESUME_DATA, RESUME_CN_DATA } from "@/data/resume-data";
import { ResumeData } from '@/data/type';



export default function ResumeContent() {
    const [currentData, setCurrentData] = useState<ResumeData>(RESUME_CN_DATA);
    const [language, setLanguage] = useState<'EN' | 'CN'>('CN');
    const [printMode, setPrintMode] = useState<'CV' | 'Resume'>('CV');
    const [visibleProjectsCount, setVisibleProjectsCount] = useState<number>(0);

    const toggleLanguage = () => {
        if (language === 'EN') {
            setCurrentData(RESUME_CN_DATA as ResumeData);
            setLanguage('CN');
        } else {
            setCurrentData(RESUME_DATA);
            setLanguage('EN');
        }
    };

    const togglePrintMode = () => {
        setPrintMode(printMode === 'CV' ? 'Resume' : 'CV');
    };

    useEffect(() => {
        const calculateVisibleProjects = () => {
            if (printMode === 'Resume') {
                const remainingHeight = window.innerHeight;
                const projectHeight = 100;
                const maxProjects = Math.floor(remainingHeight / projectHeight);
                setVisibleProjectsCount(Math.min(maxProjects, 4));
            } else {
                setVisibleProjectsCount(currentData.projects.length);
            }
        };

        calculateVisibleProjects();
        window.addEventListener('resize', calculateVisibleProjects);
        return () => window.removeEventListener('resize', calculateVisibleProjects);
    }, [printMode, currentData.projects.length]);

    const visibleProjects = printMode === 'Resume' 
        ? currentData.projects.slice(0, visibleProjectsCount)
        : currentData.projects;
    
    const hiddenProjectsCount = currentData.projects.length - visibleProjects.length;

    return (
        <section className="mx-auto w-full space-y-8 bg-white print:space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1.5">
                    <h1 className="text-3xl font-bold print:text-xl">{currentData.name}</h1>
                    <div className="flex gap-x-5">
                        <p className="max-w-md text-pretty font-mono text-base text-muted-foreground print:text-[12px]">
                            {currentData.about}
                        </p>
                        <span className="text-muted-foreground">|</span>
                        <p className="max-w-md items-center text-pretty font-mono text-base text-muted-foreground print:text-[12px]">
                            <a
                                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                                href={currentData.locationLink}
                                target="_blank"
                            >
                                <GlobeIcon className="size-3" />
                                {currentData.location}
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-x-2 pt-1 flex-wrap items-center font-mono text-md text-muted-foreground">
                        {currentData.contact.email ? (
                            <Button
                                className="h-6 w-max px-1"
                                variant="outline"
                                size="icon"
                                asChild
                            >
                                <a href={`mailto:${currentData.contact.email}`}>
                                    <MailIcon className="size-3" />
                                </a>
                            </Button>
                        ) : null}
                        <p className='text-base me-2 print:text-[12px]'>{currentData.contact.email}</p>
                        {currentData.contact.tel ? (
                            <Button
                                className="h-6 w-max px-1"
                                variant="outline"
                                size="icon"
                                asChild
                            >
                                <a href={`tel:${currentData.contact.tel}`}>
                                    <PhoneIcon className="size-3" />
                                </a>
                            </Button>
                        ) : null}
                        <p className='text-base me-2 print:text-[12px]'>{currentData.contact.tel}</p>
                        {currentData.contact.social.map((social) => (
                            <Button
                                key={social.name}
                                className="h-6 ms-1 w-max px-1"
                                variant="outline"
                                size="icon"
                                asChild
                            >
                                <a href={social.url} className="flex items-center">
                                    {React.createElement(social.icon as React.ComponentType<{ className?: string }>, { className: "h-3 w-max text-[10px] leading-[12px] font-bold" })}
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>

                <Avatar className="size-40 print:size-[100px]">
                    <AvatarImage alt={currentData.name} src={currentData.avatarUrl} />
                    <AvatarFallback>{currentData.initials}</AvatarFallback>
                </Avatar>
            </div>

            <div className='print:hidden flex gap-2'>
                <Button onClick={toggleLanguage}>
                    {language === 'EN' ? '切換至繁體中文' : 'Switch to English'}
                </Button>
                <Button onClick={togglePrintMode} variant="outline">
                    {printMode === 'CV' ? 'Resume模式' : 'CV模式'}
                </Button>
            </div>

            <Section>
                <h2 className="text-xl font-bold print:text-base">About</h2>
                <p className="text-pretty font-mono text-md text-muted-foreground print:text-[11px] print:leading-tight">
                    {currentData.summary}
                </p>
            </Section>

            <Section>
                <h2 className="text-xl font-bold print:text-base">Skills</h2>
                <div className="flex flex-wrap gap-1 print:gap-0.5">
                    {currentData.skills.map((skill) => (
                        <Badge className="print:text-[9px] print:px-1 print:py-0" key={skill}>
                            {skill}
                        </Badge>
                    ))}
                </div>
            </Section>

            <Section>
                <h2 className="text-xl font-bold print:text-base">Work Experience</h2>
                {currentData.work.map((work) => (
                    <Card key={work.company}>
                        <CardHeader>
                            <div className="flex items-center justify-between gap-x-2 text-base print:text-[12px]">
                                <h3 className="inline-flex items-start justify-center flex-col gap-y-2 mb-2 font-semibold leading-none">
                                    <a className="hover:underline flex gap-x-3" href={work.link}>
                                        {work.company}
                                        <span className="text-muted-foreground">|</span>
                                        <span className="font-mono text-md leading-none print:text-[12px]">
                                            {work.title}
                                        </span>
                                    </a>
                                    {work.badges && work.badges.length > 0 && <span className="inline-flex gap-x-1">
                                        {work.badges.map((badge) => (
                                            <Badge
                                                variant="secondary"
                                                className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                                                key={badge}
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>}
                                </h3>
                                <div className="text-md tabular-nums text-gray-500">
                                    {work.start} - {work.end ?? "Present"}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-2 pb-5 text-md print:text-[10px] print:leading-tight print:pb-2 border-b whitespace-pre-line">
                            {work.description}
                        </CardContent>
                    </Card>
                ))}
            </Section>

            <Section>
                <h2 className="text-xl font-bold print:text-base">Education</h2>
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
                        <CardContent className="mt-2 print:text-[12px]">
                            {education.degree}
                        </CardContent>
                    </Card>
                ))}
            </Section>

            <Section className='pt-2'>
                <h2 className="text-xl font-bold print:text-base">Advanced Education</h2>
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
                            <h4 className="font-mono text-md leading-none print:text-[12px]">
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
                <h2 className="text-xl font-bold print:text-base">Projects</h2>
                <div className="flex flex-col gap-y-2 print:gap-y-1">
                    {visibleProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            tags={project.techStack}
                            link={"link" in project ? project.link.href : undefined}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                    {printMode === 'Resume' && hiddenProjectsCount > 0 && (
                        <div className="hidden print:block mt-4 p-4 border border-muted rounded-lg bg-muted/30">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <ExternalLink className="size-4" />
                                <span>
                                    {language === 'CN' 
                                        ? `尚有 ${hiddenProjectsCount} 個專案，請至個人網站查看更多詳細資訊：` 
                                        : `${hiddenProjectsCount} more projects available. Please visit my website for details:`
                                    }
                                </span>
                            </div>
                            <a className="mt-2 font-mono text-sm font-semibold">
                                https://otischen.site/
                            </a>
                        </div>
                    )}
                </div>
            </Section>

            {printMode === 'CV' && (
                <Section className="">
                    <h2 className="text-xl font-bold print:text-base">Autobiography</h2>
                    <div className="whitespace-pre-line print:text-[11px] print:leading-tight">
                        {currentData.bio}
                    </div>
                </Section>
            )}

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