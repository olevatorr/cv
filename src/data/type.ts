export type ResumeData = {
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    about: string;
    slogan: string;
    summary: string;
    avatarUrl: string;
    contact: {
        email: string;
        tel: string;
        social: Array<{
            name: string;
            url: string;
            icon: React.ComponentType;
        }>;
    };
    bio: string;
    Hobbies: string[];
    education: Array<{
        school: string;
        degree: string;
        start: string;
        end: string;
    }>;
    work: Array<{
        company: string;
        link: string;
        badges: Array<string | null>;
        title: string;
        logo: React.ComponentType;
        start: string;
        end: string | null;
        description: string;
    }>;
    advanced: Array<{
        company: string;
        link: string;
        badges: Array<string | null>;
        title: string;
        logo: React.ComponentType;
        start: string;
        end: string;
        description: string;
    }>;
    skills: string[];
    projects: Array<{
        imageUrl: string;
        title: string;
        techStack: string[];
        description: string;
        logo: React.ComponentType;
        link: {
            label: string;
            href: string;
        };
    }>;
};