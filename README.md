# mui-m3-theme
[Material Design 3](https://m3.material.io/) components, theme for [MUI](https://github.com/mui-org/material-ui) react components.

## Demo

- [Dynamic Color System](https://limitkr.github.io/palette)
- [Components](https://limitkr.github.io/button)

## Quick Start

### Install
```
npm i mui-m3-theme
```

### Usage
```tsx
import React from "react";
import { ThemeProvider, CssBaseLine } from "@mui/material";

import { MaterialDesign3Theme, Button } from "mui-m3-theme";

export default function App() {
  <ThemeProvider theme={MaterialDesign3Theme}>
    <CssBaseline />
    <Button color="primary" variant="elevated">Elevated button</ElevatedButton>
  </ThemeProvider>
}
```
⚠️ IMPORTANT! You must import `MaterialDesign3Theme` or custom theme generated by function `createMaterialDesign3Theme()` from packages, and need to use the `ThemeProvider` component in order to inject a theme.

If you want to use custom color theme, refer to the ['Create Your Theme'](#create-your-theme) section below.

## Create Your Theme

```tsx
import React from "react";
import { ThemeProvider } from "@mui/material";

import {
  createM3Palette,
  unstable_createMaterialDesign3Theme as createMaterialDesign3Theme,
  Button,
  RGBColor,
} from "mui-m3-theme";

export default function App() {
  const [rgbColor, setRgbColor] = React.useState<RGBColor>({
    r: 103,
    g: 80,
    b: 164,
    a: 1,
  });
  const m3Palette = createM3Palette(hexColor);
  const m3Theme = createMaterialDesign3Theme(m3Palette);

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Button variant="elevated" color="primary">
        Elevated button
      </Button>
    </ThemeProvider>
  )
}
```

## Status
### v0.1
Button components status has been changed to 'preview'.

- ### [Material Design 3 Components](https://m3.material.io/components/all-buttons)

| Components        | Status       | Version |
|-------------------|--------------|---------|
| Buttons           | ⚡️Preview      |v0.1     |
| Cards             | 🚧On progress |    -    |
| Chips             | 🗒Planned     |    -    |
| Dialogs           | ❌            |    -    |
| Navigation bar    | ❌            |    -    |
| Navigation drawer | ❌            |    -    |
| Navigation rail   | ❌            |    -    |
| Top app bar       | 🗒Planned     |    -    |
| Widgets           | ❌            |    -    |

- ### [MUI Components](https://mui.com/getting-started/supported-components/)

There are no specific plans yet.