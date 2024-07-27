'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FujifilmXT30Page() {
  const [activeTab, setActiveTab] = useState('documentation')

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fujifilm XT-30</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
        </TabsList>
        <TabsContent value="documentation">
          <p>Documentation content for Fujifilm XT-30 goes here.</p>
        </TabsContent>
        <TabsContent value="chat">
          <p>Chat interface for Fujifilm XT-30 goes here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}