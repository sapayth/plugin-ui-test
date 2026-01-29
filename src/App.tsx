import { useState } from "@wordpress/element";
import OldPage from "./OldPage";
import ButtonPage from "./ButtonPage";

function App() {
  const [page, setPage] = useState('oldPage');
  const [pages, setPages] = useState([
    {
      key: 'oldPage',
      component: OldPage
    },
    {
      key: 'buttonPage',
      component: ButtonPage
    },
  ]);
  const Component = () => {
    const pageFound = pages.find(({ key }) => key === page);
    return pageFound?.component ? <pageFound.component /> : null;
  }
  return (
    <div>
      <select value={page} onChange={(e) => setPage(e.target.value)}>
        {
          pages.map(({ key }) => <option key={key} value={key}>{key}</option>)
        }
      </select>
      <br/>
      <Component />
    </div>
  );
}

export default App;