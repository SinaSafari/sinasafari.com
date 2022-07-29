import React from 'react'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

export async function getStaticProps() {
  const resumeDetails = await getFileBySlug('resumes', ['sina'])
  return { props: { resumeDetails } }
}

const ResumePage = ({ resumeDetails }) => {
  const { mdxSource, frontMatter } = resumeDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || 'AuthorLayout'}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
export default ResumePage
