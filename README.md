# Connections (React, Tailwind, Shadcn/ui)

This is a clone of [this repo](https://www.github.com/and-computers/react-connections-game), which is a clone of the [NYT Connections Game](https://www.nytimes.com/games/connections), which seems to be a clone of the British game [`Only Connect`](https://kotaku.com/new-york-times-connections-only-connect-puzzle-wordle-1850553072).


### [Click Here To Try It Out]()


## To Run Locally:

```
cd react-connections-game
npm install
npm run dev
```

### Stack

- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Spring](https://www.react-spring.dev/) for a few animations
- [Shadcn/ui](https://ui.shadcn.com/) for primitive components
- Copied a number of utility functions from a [React Wordle Clone - cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle)
- Built with [Parcel](https://parceljs.org/)

### Code Organization

- Global state (game status, guesses, etc.) is handled using React's Context API. The provider components are in `src/providers`
- Components are in `src/components`
  - Primitive components imported from `shadcn/ui` library and lightly edited are in `src/components/ui`
  - The `Sparkles` component is taken from [Josh Comeau's article on creating animated sparkles in React.](https://www.joshwcomeau.com/react/animated-sparkles-in-react/).
- Helper functions for local storage, game statistics, and constants are in `src/lib`
  - The actual puzzle data for changing the content of each puzzle is in `src/lib/data.js`
- Custom hooks are in `src/hooks`
  - Both of these are code snippets taken from [Josh Comeau's Blog](https://www.joshwcomeau.com/snippets/)

### Contributing

- Please fork and submit a PR if you'd like!