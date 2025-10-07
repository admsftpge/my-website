import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

interface PostMetadata {
  title: string
  date: string
  slug: string
}

function getPosts(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)

      return {
        title: data.title,
        date: data.date,
        slug: data.slug,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center justify-between p-8 max-w-4xl mx-auto">
        <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          ← Home
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-8">
        <h1 className="text-3xl font-medium mb-8">Writing</h1>

        <div className="space-y-6">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {post.title}
              </h2>
              <time className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
