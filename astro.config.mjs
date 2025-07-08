// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Get That Job',
        sidebar: [
            {
                label: 'How Hiring Works',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'The Hiring Process', slug: 'hiring-process' },
                    { label: 'Small Businesses', slug: 'hiring-process/small-business-employer'}
                ],
            },
            {
                label: 'Resumes',
                items: [
                    { label: 'What is a Resume?', slug: 'resume' },
                    { label: 'Master Resumes', slug: 'resume/master-resume'},
                    { label: 'Resume Ingredients', slug: 'resume/what-goes-in'},
                    { label: 'Section Ordering', slug: 'resume/section-ordering'},
                    { label: 'Be Skimmable', slug: 'resume/easy-to-read'},
                    { label: 'Descriptions', slug: 'resume/describe-your-experiences'},
                    { label: 'Find Job Requirements', slug: 'resume/job-requirements'},
                    { label: 'Meet Job Requirements', slug: 'resume/meet-job-requirements'},
                    { label: 'Job Hunting Takes Time', slug: 'resume/it-takes-time'},
                ],
            },
            {
                label: 'About Us',
                autogenerate: { directory: 'about'},
            },
            // {
            //     label: 'Common Ideas',
            //     autogenerate: { directory: 'common-ideas' },
            // },
        ],
		}), 
      react()],
});