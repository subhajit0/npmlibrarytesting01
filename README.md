# React Component Library

A simple React component library with reusable UI components.

## Installation

```bash
npm install @your-username/react-component-library
```

## Usage

```jsx
import { Button, Card } from '@your-username/react-component-library';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
      
      <Card title="My Card" description="This is a simple card component" />
    </div>
  );
}
```

## Components

### Button
A customizable button component with different variants.

Props:
- `variant`: 'primary' | 'secondary' | 'danger'
- `onClick`: function to handle click events
- `children`: button content

### Card
A card component for displaying content.

Props:
- `title`: card title
- `description`: card description

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev
```

## License

MIT
