import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './component/dragDrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
<DragDrop/>
    </DndProvider>
  );
}

export default App;
