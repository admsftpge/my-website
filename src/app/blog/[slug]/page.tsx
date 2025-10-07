import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const htmlContent = marked(content)

  return {
    title: data.title,
    date: data.date,
    content: htmlContent,
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => ({
      slug: filename.replace('.md', ''),
    }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center justify-between p-8 max-w-4xl mx-auto">
        <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          ← Back to Writing
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-8">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-semi-bold mb-2">{post.title}</h1>
          <time className="text-sm text-gray-600 dark:text-gray-400 block mb-8">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </div>
  )
}
