import '@talend/bootstrap-theme/dist/bootstrap.css'
import { ButtonPrimary } from '@talend/design-system';
import { Layout, HeaderBar, SidePanel } from '@talend/react-components';

function App() {
  return (
    <Layout mode="TwoColumns" one={<SidePanel />} header={<HeaderBar />}>
      <article>
        <h1>Use Talend/ui in create-react-app</h1>
        <p>The Layout, HeaderBar and SidePanel comes from <strong>@talend/react-components</strong>.
        The following button comes from <strong>@talend/design-system</strong>
        </p>
        <ButtonPrimary onClick={(e) => console.log(e)}>Coucou</ButtonPrimary>
      </article>
    </Layout>
  );
}

export default App;
