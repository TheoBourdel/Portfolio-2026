import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
    type: 'content',
    schema: z.object({
        bio: z.array(z.string()),  // chaque string = un paragraphe de la bio
        stats: z.array(
            z.object({
                label: z.string(),
                value: z.string(),
                accent: z.boolean().default(false),  // si true, valeur en violet
            })
        ),
        experiences: z.array(
            z.object({
                role: z.string(),
                company: z.string(),
                period: z.string(),
                current: z.boolean().default(false),
            })
        ),
        studies: z.array(
            z.object({
                degree: z.string(),
                school: z.string(),
                period: z.string(),
            })
        ),
        hobbies: z.array(
            z.object({
                icon: z.string(),
                label: z.string(),
            })
        ),
    }),
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: image().optional(),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        featured: z.boolean().default(false),
        status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
        techStack: z.array(z.string()).default([]),
    }),
});

const stackCollection = defineCollection({
    type: 'content', // ⬅️ "content" pour accepter du Markdown
    schema: z.object({
        categories: z.array(
            z.object({
                name: z.string(),
                techs: z.array(
                    z.object({
                        name: z.string(),
                        icon: z.string(),
                        level: z.number().min(1).max(5),
                        years: z.number(),
                        description: z.string(),
                    })
                ),
            })
        ),
    }),
});

export const collections = {
    projects: projectsCollection,
    stack: stackCollection,
    about: aboutCollection,
};