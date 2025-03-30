
# CNG Operator Portal - Component Documentation

This document provides an overview of the components used in building the CNG Operator Portal website, along with some basic React information that will help you understand the structure.

## Project Structure

The project is built with:
- React (using functional components and hooks)
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons

## Main Components

### 1. App.tsx
The root component that sets up the routing and global providers:
- QueryClientProvider (React Query for data fetching)
- TooltipProvider
- Toast providers for notifications
- BrowserRouter for routing

### 2. Pages

#### Index.tsx
The main landing page that imports and composes all the section components in order:
- Uses useEffect for scroll animations
- Contains the overall page structure

### 3. Layout Components

#### Header.tsx
- Responsive navigation bar that changes style on scroll
- Contains desktop and mobile navigation
- Uses useState for mobile menu toggle and scroll state
- Implements smooth hover animations with Tailwind

#### Footer.tsx
- Contains site information, links, and contact details
- Uses custom components for social links and footer links
- Organized in a responsive grid layout

### 4. Section Components

#### HeroSection.tsx
- Main banner with call-to-action buttons
- Uses animated elements with fade-ins
- Contains an overview of the platform's key features

#### FeaturesSection.tsx
- Highlights the key features of the CNG Operator Portal
- Uses FeatureCard components to display individual features
- Contains a live station performance preview

#### AppSection.tsx
- Focuses on the platform's benefits for station operators
- Uses FeatureItem components for quick overview points
- Contains a styled commitment message

#### TeamSection.tsx
- Displays team members in a grid layout
- Uses TeamMember components for each person
- Contains social media links for each member

#### ContactSection.tsx
- Contact form and support information
- Uses ContactCard components for different support channels
- Contains an interactive form with styled inputs

## Component Patterns

### Reusable Sub-Components
Many sections use smaller, reusable components like:
- FeatureCard
- TeamMember
- ContactCard
- SocialLink
- FooterLink

### Animation Techniques
- CSS transitions with Tailwind's `transition-*` classes
- Intersection Observer API for scroll animations
- Hover effects using Tailwind's `hover:*` classes
- Delayed animations using custom CSS

## React Concepts Used

### Hooks
- **useState**: For managing component state (e.g., mobile menu toggle)
- **useEffect**: For side effects like scroll animations and Intersection Observer
- **useRef**: For creating references to DOM elements

### Props
Components accept props for customization:
- Standard props like children, className, etc.
- Custom props specific to each component's functionality
- TypeScript interfaces define the prop types

### Functional Components
All components are functional components using the modern React pattern:
```jsx
const ComponentName = ({ prop1, prop2 }: PropTypes) => {
  // Component logic
  return (
    // JSX markup
  );
};
```

## Styling Approach

### Tailwind CSS Classes
The project uses Tailwind CSS extensively:
- Responsive design with breakpoints (sm:, md:, lg:)
- Flex and grid layouts
- Custom colors (text-cng-green, bg-cng-darkgreen)
- Transitions and animations

### Animation Classes
Custom animation classes for:
- Fade-in effects
- Reveals on scroll
- Hover transitions
- Pulse animations

## Things to Know for React Beginners

1. **Component Composition**: React applications are built by composing smaller components together.

2. **Props Flow Down**: Data flows down from parent to child components through props.

3. **State Management**: 
   - Use `useState` for component-specific state
   - For more complex applications, consider context or state management libraries

4. **Effect Cleanup**: 
   - The `useEffect` hook's return function is used for cleanup
   - Important for preventing memory leaks (e.g., removing event listeners)

5. **Conditional Rendering**:
   ```jsx
   {condition && <ComponentToRender />}
   ```

6. **List Rendering**:
   ```jsx
   {items.map((item) => (
     <Item key={item.id} {...item} />
   ))}
   ```

7. **Event Handling**:
   ```jsx
   const handleClick = () => {
     // Handle the event
   };
   
   return <button onClick={handleClick}>Click me</button>;
   ```

8. **Responsive Design**:
   - Use Tailwind's responsive prefixes (sm:, md:, lg:)
   - Test on different screen sizes

## Getting Started

To work with this codebase:

1. Understand the component hierarchy
2. Make small changes and observe the results
3. Use the browser's developer tools to inspect elements
4. Modify Tailwind classes to adjust styling
5. Add new components by following the existing patterns

## Common Gotchas

1. **React Rendering Cycle**: Components re-render when props or state change
2. **Hook Rules**: Hooks must be called at the top level of components, not inside conditionals
3. **Key Prop**: Always provide a unique key when rendering lists
4. **State Updates**: State updates may be asynchronous - don't rely on immediate state changes
5. **Tailwind Classes**: Order matters for some Tailwind classes due to CSS specificity

## Final Tips

- Start by making small changes to existing components
- Use the browser's console for debugging
- Take advantage of TypeScript for better code completion and error checking
- Look at existing components as examples when creating new ones
- Pay attention to responsive design using Tailwind's breakpoint prefixes
