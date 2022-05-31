import React from "react"
import { Column } from "./components/Column"
import { AppContainer } from "./styles"
import { AddNewItem } from "./components/AddNewItem"
import { useAppState } from "./state/AppStateContext"

export const App: React.FC = () => {
  const { lists } = useAppState()

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  )
}