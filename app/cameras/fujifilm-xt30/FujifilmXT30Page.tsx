import { getMDXSources } from './getData'
import FujifilmXT30Client from './FujifilmXT30Client'

export default async function FujifilmXT30Page() {
  const mdxSources = await getMDXSources()
  return <FujifilmXT30Client mdxSources={mdxSources} />
}