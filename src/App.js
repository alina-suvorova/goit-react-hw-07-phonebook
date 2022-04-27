import { useGetContactsQuery } from "./app/API/fetchMockApi"
import { Title } from "./style/Title"
import { Section } from "./style/Section"
import Form from "./Componets/Form/Form"
import Search from "./Componets/Search/Search"
import Display from "./Componets/Display/Display"

function App() {
  const { data, isLoading } = useGetContactsQuery("")
  return (
    <Section>
      <Title>Phonebook</Title>
      <Form contacts={data} />
      <Title as="h2">Contacts</Title>
      <Search />
      {isLoading ? <div> loading </div> : <Display contacts={data} />}
    </Section>
  )
}

export default App;
