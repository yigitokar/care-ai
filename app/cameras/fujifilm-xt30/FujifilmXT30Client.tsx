'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Callout } from '@/components/Callout'  
import { Steps } from '@/components/Steps'  


type MDXSources = {
  [key: string]: MDXRemoteSerializeResult
}

const components = {
  Callout: Callout,
  Steps: Steps,
  // Add any other custom components here
}

export default function FujifilmXT30Client({ mdxSources }: { mdxSources: MDXSources }) {
  const [activeTab, setActiveTab] = useState('documentation')
  const [activeDoc, setActiveDoc] = useState(Object.keys(mdxSources)[0])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fujifilm XT-30</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>
        <TabsContent value="chat">
          <p>Chat content for Fujifilm XT-30 goes here.</p>
        </TabsContent>
        <TabsContent value="documentation">
          <div className="flex">
            <div className="w-1/4 pr-4">
              <ul>
                {Object.keys(mdxSources).map((docName) => (
                  <li 
                    key={docName}
                    className={`cursor-pointer p-2 ${activeDoc === docName ? 'bg-gray-200' : ''}`}
                    onClick={() => setActiveDoc(docName)}
                  >
                    {docName}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-3/4 prose max-w-none">
              <MDXRemote {...mdxSources[activeDoc]} components={components} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}