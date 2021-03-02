import './App.css';
import Button from './button/Button';

function App() {
  return (
    <>
      <div class='container'>
        <h3>React buttons</h3>
        <div class="d-grid grid-cols-6 gap">
          <Button themeColor="primary" size="sm">primary</Button>
          <Button themeColor="primary" size="sm" fill="outline">primary</Button>
          <Button themeColor="primary">primary</Button>
          <Button themeColor="primary" fill="outline">primary</Button>
          <Button themeColor="primary" size="lg">primary</Button>
          <Button themeColor="primary" size="lg" fill="outline">primary</Button>

          <Button rounded={false} themeColor="secondary" size="sm">secondary</Button>
          <Button rounded={false} themeColor="secondary" size="sm" fill="outline">secondary</Button>
          <Button rounded={false} themeColor="secondary">secondary</Button>
          <Button rounded={false} themeColor="secondary" fill="outline">secondary</Button>
          <Button rounded={false} themeColor="secondary" size="lg">secondary</Button>
          <Button rounded={false} themeColor="secondary" size="lg" fill="outline">secondary</Button>

          <Button rounded="pill" themeColor="success" size="sm">success</Button>
          <Button rounded="pill" themeColor="success" size="sm" fill="outline">success</Button>
          <Button rounded="pill" themeColor="success">success</Button>
          <Button rounded="pill" themeColor="success" fill="outline">success</Button>
          <Button rounded="pill" themeColor="success" size="lg">success</Button>
          <Button rounded="pill" themeColor="success" size="lg" fill="outline">success</Button>

          <Button rounded={1} themeColor="info" size="sm">info</Button>
          <Button rounded={1} themeColor="info" size="sm" fill="outline">info</Button>
          <Button rounded={1} themeColor="info">info</Button>
          <Button rounded={1} themeColor="info" fill="outline">info</Button>
          <Button rounded={1} themeColor="info" size="lg">info</Button>
          <Button rounded={1} themeColor="info" size="lg" fill="outline">info</Button>

          <Button themeColor="warning" size="sm">warning</Button>
          <Button themeColor="warning" size="sm" fill="outline">warning</Button>
          <Button themeColor="warning">warning</Button>
          <Button themeColor="warning" fill="outline">warning</Button>
          <Button themeColor="warning" size="lg">warning</Button>
          <Button themeColor="warning" size="lg" fill="outline">warning</Button>

          <Button themeColor="error" size="sm">error</Button>
          <Button themeColor="error" size="sm" fill="outline">error</Button>
          <Button themeColor="error">error</Button>
          <Button themeColor="error" fill="outline">error</Button>
          <Button themeColor="error" size="lg">error</Button>
          <Button themeColor="error" size="lg" fill="outline">error</Button>
        </div>
      </div>
    </>
  );
}

export default App;
