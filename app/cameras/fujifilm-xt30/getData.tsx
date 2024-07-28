import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'

export async function getMDXSources() {
  const docsDirectory = path.join(process.cwd(), 'docs')
  console.log('Docs directory:', docsDirectory) // Add this line for debugging

  const filenames = fs.readdirSync(docsDirectory)

  const mdxSources: { [key: string]: any } = {}

  for (const filename of filenames) {
    if (path.extname(filename) === '.mdx') {
      const filePath = path.join(docsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const mdxSource = await serialize(fileContents)
      mdxSources[path.basename(filename, '.mdx')] = mdxSource
    }
  }

  return mdxSources
}