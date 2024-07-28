'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FujifilmXT30Page() {
  const [activeTab, setActiveTab] = useState('documentation')

  return (
    <div>
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
          <p>Documentation interface for Fujifilm XT-30 goes here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}