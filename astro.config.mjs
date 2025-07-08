// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Get That Job',
        customCss: [
            './src/styles/custom.css'
        ],
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
                label: 'Preparation',
                autogenerate: { directory: 'prepare-in-advance'},
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
                label: 'Case Studies (Resumes)',
                items: [
                    { label: 'Case Study A', slug: 'resume/case-study-a'},
                    { label: 'Case Study A, part 2', slug: 'resume/case-study-a-pt2'},
                    { label: 'Case Study A, part 3', slug: 'resume/case-study-a-pt3'},
                    { label: 'Case Study A, recommendations', slug: 'resume/case-study-a-recommendation'},
                    { label: 'Case Study B', slug: 'resume/case-study-b-pt1'},
                    { label: 'Case Study B, part 2', slug: 'resume/case-study-b-pt2'},
                    { label: 'Case Study B, part 3', slug: 'resume/case-study-b-pt3'},
                    { label: 'Case Study B, recommendations', slug: 'resume/case-study-b-recommendation'},
                    { label: 'Case Study C', slug: 'resume/case-study-c-pt1'},
                    { label: 'Case Study C, part 2', slug: 'resume/case-study-c-pt2'},
                    { label: 'Case Study C, recommendations', slug: 'resume/case-study-c-recommendation'},
                    { label: 'Case Study D', slug: 'resume/case-study-d-pt1'},
                    { label: 'Case Study D, part 2', slug: 'resume/case-study-d-pt2'},
                    { label: 'Case Study D, recommendations', slug: 'resume/case-study-d-recommendation'},
                    { label: 'Case Study E', slug: 'resume/case-study-e-pt1'},
                    { label: 'Case Study E, part 2', slug: 'resume/case-study-e-pt2'},
                    { label: 'Case Study E, recommendations', slug: 'resume/case-study-e-recommendation'},
                ]
            },
            {
                label: 'Cover Letters',
                autogenerate: { directory: 'cover-letter' },
            },
            {
                label: 'Interviews',
                autogenerate: { directory: 'interviews' },
            },
            {
                label: 'First Day',
                autogenerate: { directory: 'first-day' },
            },
            {
                label: 'About This Website',
                autogenerate: { directory: 'about'},
            },
        ],
		}), 
        
      react()],
      site: `https://get-that-job.yamasakidesign.com`
});