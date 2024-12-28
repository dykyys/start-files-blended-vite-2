import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Todos from './tabs/Todos';
import Photos from './tabs/Photos';
import Tasks from './tabs/Tasks';

export const App = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Todos</Tab>
            <Tab>Photos</Tab>
            <Tab>Tasks</Tab>
          </TabList>

          <TabPanel>
            <Todos />
          </TabPanel>
          <TabPanel>
            <Photos />
          </TabPanel>
          <TabPanel>
            <Tasks />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};
